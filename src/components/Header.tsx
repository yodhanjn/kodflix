import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo-text">KODFLIX</span>
        <nav className="header__nav">
          <a href="#" className="header__nav-item header__nav-item--active">
            Home
          </a>
          <a href="#" className="header__nav-item">
            TV Shows
          </a>
          <a href="#" className="header__nav-item">
            Movies
          </a>
          <a href="#" className="header__nav-item">
            Originals
          </a>
          <a href="#" className="header__nav-item">
            Recently Added
          </a>
          <a href="#" className="header__nav-item">
            My List
          </a>
        </nav>
      </div>

      <div className="header__right">
        <button className="header__icon-button" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
        </button>
        <button className="header__icon-button" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22a2.2 2.2 0 0 0 2.2-2.2h-4.4A2.2 2.2 0 0 0 12 22zm6.3-5.5-1-1.1V11a5.3 5.3 0 0 0-4.4-5.2V5a1.9 1.9 0 0 0-3.8 0v.8A5.3 5.3 0 0 0 4.7 11v4.4l-1 1.1A1 1 0 0 0 4.4 18h15.2a1 1 0 0 0 .7-1.5z" />
          </svg>
        </button>
        <div className="header__profile" aria-label="Profile">
          <span className="header__profile-initial">K</span>
        </div>
      </div>
    </header>
  )
}

