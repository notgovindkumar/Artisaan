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


      <section className="app-specs">
  <h2 className="specs-title">Why Choose Artisaan?</h2>
  <div className="specs-grid">
    <div className="spec-card">
      <h3>AI-Powered Assistance</h3>
      <p>Advanced AI tools help artisans create professional product listings, optimize descriptions, and reach global buyers easily.</p>
    </div>
    <div className="spec-card">
      <h3>Multilingual Support</h3>
      <p>Supports 22+ Indian languages with real-time translation and voice interactions for digital inclusion.</p>
    </div>
    <div className="spec-card">
      <h3>Market Intelligence</h3>
      <p>Dynamic pricing, demand forecasting, and actionable reports help artisans maximize their earnings effectively.</p>
    </div>
    <div className="spec-card">
      <h3>Cultural Preservation</h3>
      <p>Preserves heritage by showcasing stories and authentic narratives of crafts directly from artisan communities.</p>
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
