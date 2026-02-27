const API_BASE = 'https://api.themoviedb.org/3'
const IMAGE_BASE = 'https://image.tmdb.org/t/p'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export interface Movie {
  id: number
  title: string
  name?: string
  original_title?: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  vote_average: number
  release_date?: string
  first_air_date?: string
  media_type?: string
}

export interface TmdbResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

function getUrl(path: string, params: Record<string, string> = {}): string {
  const search = new URLSearchParams({ api_key: apiKey, ...params })
  return `${API_BASE}${path}?${search.toString()}`
}

export function posterUrl(path: string | null, size = 'w500'): string {
  if (!path) return ''
  return `${IMAGE_BASE}/${size}${path}`
}

export function backdropUrl(path: string | null, size = 'w1280'): string {
  if (!path) return ''
  return `${IMAGE_BASE}/${size}${path}`
}

export async function fetchTrending(timeWindow: 'day' | 'week' = 'week'): Promise<Movie[]> {
  const res = await fetch(getUrl(`/trending/all/${timeWindow}`, { language: 'en-US' }))
  const data: TmdbResponse<Movie> = await res.json()
  return (data.results || []).filter((m) => m.poster_path || m.backdrop_path)
}

export async function fetchNowPlaying(): Promise<Movie[]> {
  const res = await fetch(getUrl('/movie/now_playing', { language: 'en-US' }))
  const data: TmdbResponse<Movie> = await res.json()
  return data.results || []
}

export async function fetchPopular(): Promise<Movie[]> {
  const res = await fetch(getUrl('/movie/popular', { language: 'en-US' }))
  const data: TmdbResponse<Movie> = await res.json()
  return data.results || []
}

export async function fetchTopRated(): Promise<Movie[]> {
  const res = await fetch(getUrl('/movie/top_rated', { language: 'en-US' }))
  const data: TmdbResponse<Movie> = await res.json()
  return data.results || []
}

export async function fetchUpcoming(): Promise<Movie[]> {
  const res = await fetch(getUrl('/movie/upcoming', { language: 'en-US' }))
  const data: TmdbResponse<Movie> = await res.json()
  return data.results || []
}

export function getTitle(m: Movie): string {
  return m.title || m.name || m.original_title || ''
}

export function getReleaseDate(m: Movie): string {
  return m.release_date || m.first_air_date || ''
}
