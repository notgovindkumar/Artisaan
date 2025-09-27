import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Feed</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-logo">ARTISAAN</div>
      </nav>

      <main className="hero">
        <div className="hero-bg"></div>
        <div className="hero-circle">
          <div className="hero-content">
            <h1>
              Elevate Craft.<br />
              <span className="highlight"> Empower Artisans.</span>
            </h1>
            <div className="hero-desc"> An AI marketplace for India’s art & craft.</div>
            <button className="hero-btn" onClick={() => navigate('/loginSignup')}>
              Login / SignUp
            </button>

          </div>
        </div>
      </main>


<section className="app-intro-split">
  <div className="intro-content"><br />
    <h2>Paint the world with color of Art...</h2><br />
    <p>
      <b>Artisaan empowers millions of Indian artisans with AI-crafted listings, regional language support, and a welcoming digital marketplace</b>.
    </p>
      Smart, story-driven product displays <br />
      Voice and local language ready <br />
      Community-powered discovery <br />
      Actionable, artisan-first market insights <br /><br /><br />
  </div>
  <div className="intro-media">
    <img src="/assets/shape.png" alt="Artisan Blob" />
  </div>
</section>



      <section className="art-gallery">
  <h2 className="gallery-title">Our Bestsellings ...</h2><br /><br />
  <div className="gallery-grid">
    <div className="gallery-card">
      <div className="img-wrap">
        <img src="/assets/11.jpg" alt="Vintage Pottery Jug" />
      </div>
      <div className="gallery-meta">
        <span className="meta-by">By Tribeworks</span>
        <h3>Handthrown Clay Jug</h3>
        <p className="meta-desc">Sustainable, local Rajasthani pottery, unglazed finish</p>
        <div className="meta-bottom">
          <span className="meta-price">₹1,250</span>
          <button className="meta-action">Quick View</button>
        </div>
      </div>
    </div>
    <div className="gallery-card">
      <div className="img-wrap">
        <img src="/assets/12.jpg" alt="Madhubani Folk Art Block" />
      </div>
      <div className="gallery-meta">
        <span className="meta-by">By Folk Collective</span>
        <h3>Madhubani Art Block</h3>
        <p className="meta-desc">Intricate hand-painted panel, eco-friendly dyes</p>
        <div className="meta-bottom">
          <span className="meta-price">₹1,600</span>
          <button className="meta-action">Quick View</button>
        </div>
      </div>
    </div>
    <div className="gallery-card">
      <div className="img-wrap">
        <img src="/assets/13.jpg" alt="Blockprint Stole" />
      </div>
      <div className="gallery-meta">
        <span className="meta-by">By ShilpSutra</span>
        <h3>Handblock Print Stole</h3>
        <p className="meta-desc">Mul cotton, Ajrakh inspired, earthy orange</p>
        <div className="meta-bottom">
          <span className="meta-price">₹9,800</span>
          <button className="meta-action">Quick View</button>
        </div>
      </div>
    </div>
    <div className="gallery-card">
      <div className="img-wrap">
        <img src="/assets/14.jpg" alt="Wooden Elephant Toy" />
      </div>
      <div className="gallery-meta">
        <span className="meta-by">By Karigar Krafts</span>
        <h3>Vintage Elephant Toy</h3>
        <p className="meta-desc">Polished Sheesham wood, hand-painted detail</p>
        <div className="meta-bottom">
          <span className="meta-price">₹5,350</span>
          <button className="meta-action">Quick View</button>
        </div>
      </div>
    </div>
  </div>
</section>



    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">ARTISAAN</div>
        <nav className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
        </nav>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Artisaan. All rights reserved.
      </div>
    </footer>


    </div>
  );
}
