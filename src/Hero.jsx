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



      <section className="app-intro-merged">
        <h2>Paint the world with color of Art...</h2><br />
        <p>
          Artisaan is a one-stop platform empowering over 20 million Indian artisans through:
        </p>
          AI-powered tools that generate professional listings and authentic storytelling <br />
          Support for 22+ Indian languages and voice-driven interactions, breaking digital barriers <br />
          Dynamic market intelligence for pricing, demand forecasting and inventory insights <br />
          A commitment to preserving centuries-old craft heritage globally through storytelling <br />
        <p>
          By bridging traditional arts with modern technology, Artisaan revolutionizes artisan reach and livelihood in an eco-friendly and culturally conscious manner.
        </p>
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
