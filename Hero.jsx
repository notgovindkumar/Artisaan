import './Hero.css';

export default function Hero() {
  return (
    <div className="page-shell">
      <nav className="navbar">
        <ul className="nav-links">
          <li>HOME</li>
          <li>INFO</li>
          <li>CLASSES</li>
          <li>CONTACT</li>
        </ul>
        <div className="nav-logo">YOUR LOGO</div>
      </nav>
      <main className="hero">
        <div className="hero-bg"></div>
        <div className="hero-circle">
          <div className="hero-content">
            <h1>
              Elevate Craft.<span className="highlight"> Empower Artisans.</span>
            </h1>
            <div className="hero-desc">
              An AI marketplace for India’s art & craft.
            </div>
            <button className="hero-btn">Login / SignUp</button>
          </div>
        </div>
      </main>
    </div>
  );
}
