import type { Movie } from '../api/tmdb'
import { backdropUrl, getTitle, getReleaseDate } from '../api/tmdb'
import './Hero.css'

interface HeroProps {
  featured: Movie | null
}

export default function Hero({ featured }: HeroProps) {
  if (!featured) {
    return (
      <section className="hero hero--skeleton">
        <div className="hero__content">
          <div className="hero__title-skeleton" />
          <div className="hero__meta-skeleton" />
          <div className="hero__desc-skeleton" />
          <div className="hero__actions">
            <button className="hero__play" disabled>Play</button>
            <button className="hero__trailer" disabled>Watch Trailer</button>
          </div>
        </div>
      </section>
    )
  }

  const title = getTitle(featured)
  const date = getReleaseDate(featured)
  const year = date ? date.slice(0, 4) : ''
  const backdrop = backdropUrl(featured.backdrop_path, 'original')
  const match = Math.round(featured.vote_average * 10)
  const mediaTypeLabel = featured.media_type === 'tv' ? 'TV Series' : 'Movie'

  return (
    <section
      className="hero"
      style={{ backgroundImage: backdrop ? `url(${backdrop})` : undefined }}
    >
      <div className="hero__gradient" />
      <div className="hero__content">
        <span className="hero__label">KODFLIX ORIGINAL</span>
        <h1 className="hero__title">{title}</h1>
        <div className="hero__meta">
          <span className="hero__match">{match}% Match</span>
          {year && <span className="hero__year">{year}</span>}
          <span className="hero__cert">{mediaTypeLabel}</span>
        </div>
        <p className="hero__overview">{featured.overview}</p>
        <div className="hero__actions">
          <button className="hero__play">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Resume
          </button>
          <button className="hero__trailer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 5v14M5 12h14"/></svg>
            My List
          </button>
        </div>
      </div>
    </section>
  )
}
