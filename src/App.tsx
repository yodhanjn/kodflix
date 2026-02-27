import { useEffect, useState } from 'react'
import type { Movie } from './api/tmdb'
import {
  fetchTrending,
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
} from './api/tmdb'
import Header from './components/Header'
import Hero from './components/Hero'
import Row from './components/Row'
import './App.css'

interface RowData {
  title: string
  items: Movie[]
}

export default function App() {
  const [featured, setFeatured] = useState<Movie | null>(null)
  const [rows, setRows] = useState<RowData[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const [trending, nowPlaying, popular, topRated] = await Promise.all([
          fetchTrending('week'),
          fetchNowPlaying(),
          fetchPopular(),
          fetchTopRated(),
        ])

        if (cancelled) return

        const withBackdrop = trending.filter((m) => m.backdrop_path)
        const heroItem = withBackdrop[0] || trending[0] || nowPlaying[0]
        setFeatured(heroItem || null)

        setRows([
          { title: 'New this week', items: nowPlaying.slice(0, 20) },
          { title: 'Trending Now', items: trending.slice(0, 20) },
          { title: 'Popular on KODFLIX', items: popular.slice(0, 20) },
          { title: 'Top Rated', items: topRated.slice(0, 20) },
        ])
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load data from TMDB')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="app">
      <main className="main">
        <Header />
        <Hero featured={featured} />
        {error && (
          <div className="banner banner--error" role="alert">
            {error}
          </div>
        )}
        {!error && (
          <div className="rows">
            {loading && rows.length === 0 ? (
              <div className="rows-loading">Loading from TMDB…</div>
            ) : (
              rows.map((row) => (
                <Row key={row.title} title={row.title} items={row.items} />
              ))
            )}
          </div>
        )}
      </main>
    </div>
  )
}
