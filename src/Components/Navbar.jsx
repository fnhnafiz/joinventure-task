

function Navbar() {
  return (
    <div id="navbar" className="nav-bar scrolled">
      <div className="nav-logo">
        <div className="nav-logo-symbol">
          <svg className="brain-container" viewBox="0 0 100 100">
            <path
              d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
              C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
              C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
              C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          </svg>
          <svg className="circuit-lines" viewBox="0 0 100 100">
            <path
              d="M35 40 H65 M50 40 V80
              M35 60 H65 M25 50 H75"
              stroke="#93c5fd"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="35" cy="80" r="2" fill="#93c5fd" />
            <circle cx="65" cy="80" r="2" fill="#93c5fd" />
          </svg>
        </div>
        <span className="nav-logo-text">Clin</span>
      </div>

      <div className="nav-links">
        <button className="nav-link active">About</button>
        <button className="nav-link">Our Solutions</button>
        <button className="nav-link">In Action</button>
        <button className="nav-link">Technology</button>
        <button className="nav-link">Benefits</button>
        <button className="nav-link">Case Use</button>
      </div>

      <button className="mobile-menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="mobile-menu">
        <button className="mobile-nav-link active">About</button>
        <button className="mobile-nav-link">Our Solutions</button>
        <button className="mobile-nav-link">In Action</button>
        <button className="mobile-nav-link">Technology</button>
        <button className="mobile-nav-link">Benefits</button>
        <button className="mobile-nav-link">Case Use</button>
      </div>
    </div>
  )
}

export default Navbar