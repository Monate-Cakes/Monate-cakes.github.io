// pages/index.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import LocationSelector from '../components/LocationSelector';
import Footer from '../components/Footer';
import Head from 'next/head';
import { partnersData } from '../data/partnersData';

export default function Home({ theme, setTheme }) {
  const [selected, setSelected] = useState({ province: 'KwaZulu-Natal', city: 'Durban' });

  // Initialize with Durban bakers for static generation
  const initialBakers = partnersData.filter(
    p => p.province === 'KwaZulu-Natal' && p.city === 'Durban'
  );
  const [partners, setPartners] = useState(initialBakers);

  const fetchPartners = ({ province, city }) => {
    const filtered = partnersData.filter(
      p => p.province === province && p.city === city
    );
    setPartners(filtered);
  };

  useEffect(() => {
    fetchPartners(selected);
  }, [selected]);

  useEffect(() => {
    // Immediately add 'animated' class to all elements to ensure visibility
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('animated');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [partners]);

  return (
    <>
      <Head>
        <title>Monate Cakes | Find Local Bakers in South Africa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content={theme === 'dark' ? '#0F0F0F' : '#FDF8F3'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={`page-wrapper ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <div className="container">
            <div className="hero-grid">
              <div className="hero-text animate-on-scroll animate-fade-up">
                <div className="hero-badge">
                  <span className="badge-icon">🍰</span>
                  <span>South Africa&apos;s Home Baker Network</span>
                </div>
                <h1 className="hero-title">
                  Discover <span className="text-gradient">Homemade</span> Goodness from Local Bakers
                </h1>
                <p className="hero-subtitle">
                  From traditional koesisters to modern wedding cakes — connect with passionate home bakers in your neighbourhood who pour love into every creation.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Local Bakers</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">4.8</span>
                    <span className="stat-label">Average Rating</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Happy Customers</span>
                  </div>
                </div>
                <div className="hero-buttons">
                  <a href="#partners" className="btn-primary">
                    <span>🔍</span>
                    <span>Find Your Baker</span>
                  </a>
                  <Link href="/partners" className="btn-outline">
                    <span>Browse All Bakers</span>
                  </Link>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-image-stack">
                  <div className="hero-img hero-img-1">
                    <img src="/images/Cake Whisper Sisters.jpeg" alt="Wedding cake" />
                  </div>
                  <div className="hero-img hero-img-2">
                    <img src="/images/Durban Delights Bakery.jpeg" alt="Cupcakes" />
                  </div>
                  <div className="hero-img hero-img-3">
                    <img src="/images/Wisdom & Whisk Bakery.jpeg" alt="Traditional baking" />
                  </div>
                  <div className="floating-badge">
                    <span>✓</span>
                    <span>Verified Bakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="trust-banner">
          <div className="container">
            <div className="trust-content">
              <div className="trust-item">
                <span className="trust-icon">🛡️</span>
                <span>Quality Guaranteed</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">📍</span>
                <span>Local Delivery</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">💬</span>
                <span>Direct WhatsApp Contact</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⭐</span>
                <span>Verified Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Bakers Section */}
        <section id="partners" className="section section-bakers">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag">Meet Our Bakers</span>
              <h2 className="section-title">Local Bakers in Your Area</h2>
              <p className="section-subtitle">Talented home bakers ready to make your celebrations special</p>
            </div>

            <div className="location-selector-wrapper">
              <LocationSelector onChange={(val) => { setSelected(val); fetchPartners(val); }} />
            </div>

            <div className="bakers-header">
              <h3 className="bakers-location">
                <span>📍</span>
                Bakers in {selected.city}, {selected.province}
              </h3>
              <Link href="/partners" className="view-all-link">
                View all bakers →
              </Link>
            </div>

            {partners.length === 0 ? (
              <div className="no-results animate-on-scroll animate-fade-up">
                <div className="no-results-icon">🔍</div>
                <h4>No bakers found in this area yet</h4>
                <p>We&apos;re expanding! Check back soon or try a nearby city.</p>
              </div>
            ) : (
              <div className="bakers-grid animate-on-scroll animate-fade-up">
                {partners.map((p, idx) => (
                  <Link href={`/partners?baker=${p.slug}`} key={p.id} className="baker-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="baker-image">
                      <img src={p.image} alt={p.name} />
                      <div className="baker-rating">
                        <span>⭐</span>
                        <span>{p.rating}</span>
                      </div>
                    </div>
                    <div className="baker-content">
                      <h4 className="baker-name">{p.name}</h4>
                      <p className="baker-location-text">
                        <span>📍</span>
                        {p.suburb}, {p.city}
                      </p>
                      <p className="baker-desc">{p.shortDesc}</p>
                      <div className="baker-specialties">
                        {p.specialties.slice(0, 3).map((spec, idx) => (
                          <span key={idx} className="specialty-tag">{spec}</span>
                        ))}
                      </div>
                      <div className="baker-footer">
                        <span className="baker-price">{p.priceRange}</span>
                        <span className="baker-reviews">{p.reviewCount} reviews</span>
                      </div>
                    </div>
                    <div className="baker-hover-action">
                      <span>View Profile</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section section-services">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag">What We Offer</span>
              <h2 className="section-title">Baking Services</h2>
              <p className="section-subtitle">From intimate celebrations to grand events</p>
            </div>
            <div className="services-grid">
              <div className="service-card animate-on-scroll animate-fade-up">
                <div className="service-icon">🎂</div>
                <h3 className="service-title">Custom Cakes</h3>
                <p className="service-desc">Personalised cakes for birthdays, weddings, and every special moment in between.</p>
                <ul className="service-list">
                  <li>Wedding &amp; Engagement Cakes</li>
                  <li>Birthday &amp; Celebration Cakes</li>
                  <li>Custom Designs &amp; Themes</li>
                </ul>
                <span className="service-price-tag">From R250</span>
              </div>
              <div className="service-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="service-icon">☕</div>
                <h3 className="service-title">Traditional Treats</h3>
                <p className="service-desc">Authentic South African bakes made with recipes passed down through generations.</p>
                <ul className="service-list">
                  <li>Koesisters &amp; Vetkoek</li>
                  <li>Scones &amp; Rusks</li>
                  <li>Magwinya &amp; Snowballs</li>
                </ul>
                <span className="service-price-tag">From R60</span>
              </div>
              <div className="service-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="service-icon">🎁</div>
                <h3 className="service-title">Gift Boxes</h3>
                <p className="service-desc">Beautifully packaged assortments perfect for gifting and corporate events.</p>
                <ul className="service-list">
                  <li>Curated Treat Boxes</li>
                  <li>Corporate Gifting</li>
                  <li>High Tea Packages</li>
                </ul>
                <span className="service-price-tag">From R150</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="section section-how">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag light">Simple Process</span>
              <h2 className="section-title light">How It Works</h2>
              <p className="section-subtitle light">Get your perfect bake in three easy steps</p>
            </div>
            <div className="steps-container">
              <div className="step-card animate-on-scroll animate-fade-up">
                <div className="step-number">01</div>
                <h4 className="step-title">Discover</h4>
                <p className="step-desc">Browse verified home bakers in your area. View their specialties, prices, and customer reviews.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="step-number">02</div>
                <h4 className="step-title">Connect</h4>
                <p className="step-desc">Chat directly with your chosen baker via WhatsApp. Discuss your requirements and get a quote.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="step-number">03</div>
                <h4 className="step-title">Enjoy</h4>
                <p className="step-desc">Receive your freshly baked treats! Collect or have them delivered right to your door.</p>
              </div>
            </div>
            <div className="how-cta animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
              <Link href="/how-it-works" className="btn-secondary-outline">
                <span>Learn More About Our Process</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section section-pricing">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag">Transparent Pricing</span>
              <h2 className="section-title">Price Guide</h2>
              <p className="section-subtitle">Typical price ranges from our verified bakers</p>
            </div>
            <div className="pricing-table-wrapper animate-on-scroll animate-scale">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Size / Quantity</th>
                    <th>Price Range</th>
                    <th>Lead Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="table-icon">🎂</span> Custom Cake</td>
                    <td>6&quot; (Small)</td>
                    <td className="price-highlight">R250 - R400</td>
                    <td>2-3 days</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">🎂</span> Custom Cake</td>
                    <td>8&quot; (Medium)</td>
                    <td className="price-highlight">R400 - R650</td>
                    <td>2-3 days</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">🎂</span> Custom Cake</td>
                    <td>10&quot; (Large)</td>
                    <td className="price-highlight">R650 - R1,000</td>
                    <td>3-5 days</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">💒</span> Wedding Cake</td>
                    <td>3-Tier</td>
                    <td className="price-highlight">R1,800 - R3,500</td>
                    <td>7-14 days</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">🧁</span> Cupcakes</td>
                    <td>Dozen</td>
                    <td className="price-highlight">R120 - R200</td>
                    <td>1-2 days</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">🥐</span> Scones / Rusks</td>
                    <td>6-12 pieces</td>
                    <td className="price-highlight">R80 - R120</td>
                    <td>Same day</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">🍩</span> Traditional Treats</td>
                    <td>6 pieces</td>
                    <td className="price-highlight">R60 - R100</td>
                    <td>1-2 days</td>
                  </tr>
                  <tr>
                    <td><span className="table-icon">🎁</span> Gift Box</td>
                    <td>Assorted</td>
                    <td className="price-highlight">R150 - R400</td>
                    <td>1-3 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pricing-note">
              <span>ℹ️</span>
              Prices vary by baker and complexity. Contact bakers directly for accurate quotes.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-cta">
          <div className="container">
            <div className="cta-card animate-on-scroll animate-scale">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Find Your Perfect Baker?</h2>
                <p className="cta-desc">Join thousands of happy customers who&apos;ve discovered amazing local talent</p>
                <div className="cta-buttons">
                  <a href="#partners" className="btn-primary">
                    <span>🔍</span>
                    <span>Start Searching</span>
                  </a>
                  <Link href="/partners" className="btn-outline">
                    <span>Browse All Bakers</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        /* ========================================
           CSS VARIABLES FOR THEMING
           ======================================== */
        .page-wrapper {
          --bg-primary: #FDF8F3;
          --bg-secondary: #FFFBF7;
          --bg-card: #FFFFFF;
          --text-primary: #1C1C1C;
          --text-secondary: #4A4A4A;
          --text-muted: #7A7A7A;
          --border-color: rgba(0, 0, 0, 0.08);
          --color-caramel: #C4956A;
          --color-caramel-light: #D4A574;
          --color-caramel-dark: #A67C52;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .page-wrapper.dark {
          --bg-primary: #0F0F0F;
          --bg-secondary: #1A1A2E;
          --bg-card: #1E1E2E;
          --text-primary: #FFFFFF;
          --text-secondary: #E0E0E0;
          --text-muted: #A0A0A0;
          --border-color: rgba(255, 255, 255, 0.1);
        }

        .page-wrapper {
          min-height: 100vh;
          background: var(--bg-primary);
          transition: background 0.3s ease;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 40px;
          }
        }

        /* ========================================
           HERO SECTION
           ======================================== */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 20%, rgba(212, 165, 116, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 10px 20px;
          border-radius: 50px;
          margin-bottom: 24px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--font-body);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--color-caramel-light) 0%, #C19A6B 50%, #E8D5C4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 600;
          color: var(--color-caramel-light);
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: var(--font-body);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, var(--color-caramel-light) 0%, var(--color-caramel-dark) 100%);
          color: white;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212, 165, 116, 0.3);
          font-family: var(--font-body);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212, 165, 116, 0.4);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: transparent;
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: var(--font-body);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Hero Visual */
        .hero-visual {
          display: none;
        }

        @media (min-width: 992px) {
          .hero-visual {
            display: block;
          }
        }

        .hero-image-stack {
          position: relative;
          height: 500px;
        }

        .hero-img {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease;
        }

        .hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-img-1 {
          width: 280px;
          height: 340px;
          top: 0;
          right: 0;
          z-index: 3;
        }

        .hero-img-2 {
          width: 200px;
          height: 250px;
          top: 60px;
          right: 260px;
          z-index: 2;
        }

        .hero-img-3 {
          width: 180px;
          height: 220px;
          bottom: 20px;
          right: 80px;
          z-index: 1;
        }

        .floating-badge {
          position: absolute;
          bottom: 80px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(212, 165, 116, 0.95);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(212, 165, 116, 0.4);
          animation: float 3s ease-in-out infinite;
          font-family: var(--font-body);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* ========================================
           TRUST BANNER
           ======================================== */
        .trust-banner {
          background: var(--bg-secondary);
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .page-wrapper.dark .trust-banner {
          background: #111111;
        }

        .trust-content {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-family: var(--font-body);
        }

        .trust-icon {
          font-size: 1.1rem;
        }

        /* ========================================
           SECTIONS
           ======================================== */
        .section {
          padding: 80px 0;
        }

        @media (min-width: 768px) {
          .section {
            padding: 100px 0;
          }
        }

        .section-bakers {
          background: var(--bg-primary);
        }

        .section-services {
          background: var(--bg-secondary);
        }

        .page-wrapper.dark .section-services {
          background: #111111;
        }

        .section-how {
          background: linear-gradient(180deg, #0F0F0F 0%, #1A1A2E 100%);
        }

        .section-pricing {
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-tag {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-caramel);
          margin-bottom: 16px;
          font-family: var(--font-body);
        }

        .section-tag.light {
          color: var(--color-caramel-light);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .section-title.light {
          color: #FFFFFF;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .section-subtitle.light {
          color: rgba(255, 255, 255, 0.6);
        }

        /* ========================================
           BAKERS SECTION
           ======================================== */
        .location-selector-wrapper {
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .bakers-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bakers-location {
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .view-all-link {
          color: var(--color-caramel);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
          font-family: var(--font-body);
        }

        .view-all-link:hover {
          color: var(--color-caramel-dark);
        }

        .bakers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .baker-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
        }

        .baker-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 165, 116, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .page-wrapper.dark .baker-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .baker-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .baker-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .baker-card:hover .baker-image img {
          transform: scale(1.05);
        }

        .baker-rating {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .baker-content {
          padding: 24px;
        }

        .baker-name {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .baker-location-text {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-family: var(--font-body);
        }

        .baker-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.5;
          font-family: var(--font-body);
        }

        .baker-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .specialty-tag {
          padding: 6px 14px;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--color-caramel);
          font-family: var(--font-body);
        }

        .baker-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }

        .baker-price {
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-body);
        }

        .baker-reviews {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-family: var(--font-body);
        }

        .baker-hover-action {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px 24px;
          background: linear-gradient(135deg, var(--color-caramel-light) 0%, var(--color-caramel-dark) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          font-weight: 600;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          font-family: var(--font-body);
        }

        .baker-card:hover .baker-hover-action {
          transform: translateY(0);
        }

        .no-results {
          text-align: center;
          padding: 80px 40px;
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px dashed var(--border-color);
        }

        .no-results-icon {
          font-size: 3rem;
          margin-bottom: 24px;
          opacity: 0.5;
        }

        .no-results h4 {
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-display);
        }

        .no-results p {
          color: var(--text-muted);
          font-family: var(--font-body);
        }

        /* ========================================
           SERVICES
           ======================================== */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .service-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(212, 165, 116, 0.3);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 24px;
        }

        .service-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .service-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
          font-family: var(--font-body);
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
        }

        .service-list li {
          padding: 8px 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
          border-bottom: 1px solid var(--border-color);
          font-family: var(--font-body);
        }

        .service-list li:last-child {
          border-bottom: none;
        }

        .service-price-tag {
          display: inline-block;
          padding: 10px 20px;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 50px;
          color: var(--color-caramel);
          font-weight: 600;
          font-size: 0.9rem;
          font-family: var(--font-body);
        }

        /* ========================================
           HOW IT WORKS
           ======================================== */
        .steps-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
        }

        .step-card {
          flex: 1;
          min-width: 280px;
          max-width: 340px;
          text-align: center;
          padding: 40px 30px;
        }

        .step-number {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--color-caramel-light) 0%, var(--color-caramel-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          line-height: 1;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .step-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .step-connector {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1));
          margin-top: 80px;
        }

        @media (max-width: 992px) {
          .step-connector {
            display: none;
          }
        }

        .how-cta {
          text-align: center;
          margin-top: 48px;
        }

        .btn-secondary-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: transparent;
          color: var(--color-caramel-light);
          border: 1.5px solid var(--color-caramel);
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: var(--font-body);
        }

        .btn-secondary-outline:hover {
          background: var(--color-caramel);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(196, 149, 106, 0.3);
        }

        /* ========================================
           PRICING TABLE
           ======================================== */
        .pricing-table-wrapper {
          overflow-x: auto;
          border-radius: 20px;
          border: 1px solid var(--border-color);
        }

        .pricing-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg-card);
        }

        .pricing-table th {
          padding: 20px 24px;
          text-align: left;
          font-weight: 600;
          color: var(--text-primary);
          background: var(--bg-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: var(--font-body);
        }

        .page-wrapper.dark .pricing-table th {
          background: rgba(255, 255, 255, 0.05);
        }

        .pricing-table td {
          padding: 20px 24px;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-color);
          font-size: 0.95rem;
          font-family: var(--font-body);
        }

        .table-icon {
          margin-right: 10px;
        }

        .price-highlight {
          color: var(--color-caramel) !important;
          font-weight: 600;
        }

        .pricing-note {
          text-align: center;
          margin-top: 24px;
          color: var(--text-muted);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-body);
        }

        /* ========================================
           CTA SECTION
           ======================================== */
        .section-cta {
          background: var(--bg-secondary);
          padding: 60px 0 100px;
        }

        .page-wrapper.dark .section-cta {
          background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(212, 165, 116, 0.05) 100%);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 24px;
          padding: 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .cta-desc {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 32px;
          font-family: var(--font-body);
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* ========================================
           ANIMATIONS
           ======================================== */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-fade-up.animated {
          transform: translateY(0);
        }

        .animate-scale {
          transform: scale(0.95);
        }

        .animate-scale.animated {
          transform: scale(1);
        }

        /* ========================================
           MOBILE OPTIMIZATIONS
           ======================================== */
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px;
            min-height: auto;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            gap: 16px;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-outline {
            width: 100%;
            justify-content: center;
          }

          .trust-content {
            gap: 20px;
          }

          .section {
            padding: 60px 0;
          }

          .bakers-grid {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .cta-card {
            padding: 40px 24px;
          }
        }

        /* Touch-friendly */
        @media (hover: none) {
          .btn-primary:hover,
          .btn-outline:hover,
          .baker-card:hover,
          .service-card:hover {
            transform: none;
          }

          .btn-primary:active {
            transform: scale(0.98);
          }
        }

        /* Safe area */
        @supports (padding: max(0px)) {
          .hero {
            padding-top: max(120px, env(safe-area-inset-top) + 100px);
          }
        }
      `}</style>
    </>
  );
}