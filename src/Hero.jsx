import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <nav className="navbar">
        <ul className="nav-links">
          <li>HOME</li>
          <li>INFO</li>
          <li>CLASSES</li>
          <li>CONTACT</li>
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


      <section className="app-intro">
  <h2>Why Artisaan Stands Out</h2>
  <div className="intro-content">
    <div className="intro-text">
      <p>
        At Artisaan, we empower local artisans and preserve Indian cultural heritage by providing an AI-powered,
        multilingual platform tailored for authentic craftsmanship and sustainable growth.
      </p>
      <p>
        Unique features like dynamic market intelligence, seamless digital storytelling, and regional language support
        make our platform the trusted digital home for millions of artisans.
      </p>
      <p>
        Join us as we transform traditional arts into thriving enterprises, bridging craftsmanship with modern ecommerce.
      </p>
    </div>
    <div className="intro-images">
      <img src="./assets/handcraft-icon.svg" alt="Handcraft Icon" />
      <img src="./assets/culture-icon.svg" alt="Culture Icon" />
      <img src="./assets/ai-icon.svg" alt="AI Icon" />
    </div>
  </div>
</section>



      <section className="art-gallery">
  <h2 className="gallery-title">Our Bestsellings ...</h2><br />
  <div className="gallery-grid">
    <div className="gallery-card">
      <div className="img-wrap">
        <img src="./assets/pottery1.jpg" alt="Vintage Pottery Jug" />
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
        <img src="./assets/artblock1.jpg" alt="Madhubani Folk Art Block" />
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
        <img src="./assets/textile1.jpg" alt="Blockprint Stole" />
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
        <img src="./assets/woodtoys1.jpg" alt="Wooden Elephant Toy" />
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


    </div>
  );
}
