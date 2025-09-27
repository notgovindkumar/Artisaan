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

                  {/* New Section Below Hero */}
      <section className="product-gallery">
        <h2 className="section-title">Featured Artisan Creations</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="./assets/11.jpg" alt="Traditional Pottery" />
            <h3>Handcrafted Clay Pot</h3>
            <p>Authentic handmade brown clay pot, 8 inch</p>
            <p className="price">₹750</p>
          </div>
          <div className="product-card">
            <img src="./assets/12.jpg" alt="Folk Art Painting" />
            <h3>Folk Art Painting</h3>
            <p>Colorful traditional art on canvas, 12 x 12 inch</p>
            <p className="price">₹1200</p>
          </div>
          <div className="product-card">
            <img src="./assets/13.jpg" alt="Handwoven Textile" />
            <h3>Handwoven Silk Scarf</h3>
            <p>Elegant silk weave with regional patterns</p>
            <p className="price">₹1800</p>
          </div>
          <div className="product-card">
            <img src="./assets/14.jpg" alt="Wooden Matryoshka Doll" />
            <h3>Wooden Matryoshka Doll</h3>
            <p>Hand-painted russian doll set with 5 pieces</p>
            <p className="price">₹950</p>
          </div>
        </div>
      </section>

    </div>
  );
}
