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

  return (
    <section
      className="hero"
      style={{ backgroundImage: backdrop ? `url(${backdrop})` : undefined }}
    >
      <div className="hero__gradient" />
      <div className="hero__content">
        <span className="hero__label">SERIES</span>
        <h1 className="hero__title">{title}</h1>
        {year && <p className="hero__part">{year}</p>}
        <div className="hero__meta">
          <span className="hero__rating">{featured.vote_average.toFixed(1)}/10</span>
          <span className="hero__cert">A</span>
          <span className="hero__year">{year}</span>
        </div>
        <p className="hero__overview">{featured.overview}</p>
        <div className="hero__actions">
          <button className="hero__play">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Play
          </button>
          <button className="hero__trailer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  )
}
