import { useState } from 'react'
import type { Movie } from '../api/tmdb'
import { posterUrl, getTitle } from '../api/tmdb'
import './Row.css'

interface RowProps {
  title: string
  items: Movie[]
}

function Poster({ movie }: { movie: Movie }) {
  const [error, setError] = useState(false)
  const src = posterUrl(movie.poster_path)
  if (!src || error) {
    return (
      <div className="row__poster row__poster--placeholder">
        <span>{getTitle(movie).slice(0, 2)}</span>
      </div>
    )
  }
  return (
    <img
      className="row__poster"
      src={src}
      alt={getTitle(movie)}
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

export default function Row({ title, items }: RowProps) {
  if (!items.length) return null

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {items.map((movie) => (
          <div key={movie.id} className="row__poster-wrap">
            <Poster movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}
