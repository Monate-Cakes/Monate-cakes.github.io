import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Navbar from '../components/Navbar';
import LocationSelector from '../components/LocationSelector';
import Head from 'next/head';

export default function Home() {
  const [selected, setSelected] = useState({ province: 'KwaZulu-Natal', city: 'Durban' });
  const [partners, setPartners] = useState([]);

  const fetchPartners = async ({ province, city }) => {
    try {
      const res = await axios.get('http://localhost:5000/api/partners', { params: { province, city } });
      setPartners(res.data.partners || []);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPartners(selected);
  }, []);

  useEffect(() => {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="hero-new">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 animate-on-scroll animate-fade-left">
              <div className="hero-badge-top">
                <span className="badge-icon">🍰</span>
                <span>South Africa's Home Baker Network</span>
              </div>
              <h1 className="hero-title-new">
                Discover <span className="text-gradient">Homemade</span> Goodness from Local Bakers
              </h1>
              <p className="hero-subtitle-new">
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
              <div className="hero-buttons-new">
                <a href="#partners" className="btn-primary-glow">
                  <i className="bi bi-search"></i>
                  Find Your Baker
                </a>
                <a href="#how-it-works" className="btn-outline-light">
                  <i className="bi bi-grid-3x3"></i>
                  Browse All Bakers
                </a>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="hero-image-placeholder">
                <div className="floating-badge-new">
                  <i className="bi bi-patch-check-fill"></i>
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
              <i className="bi bi-shield-check"></i>
              <span>Quality Guaranteed</span>
            </div>
            <div className="trust-item">
              <i className="bi bi-geo-alt"></i>
              <span>Local Delivery</span>
            </div>
            <div className="trust-item">
              <i className="bi bi-chat-heart"></i>
              <span>Direct WhatsApp Contact</span>
            </div>
            <div className="trust-item">
              <i className="bi bi-star-fill"></i>
              <span>Verified Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bakers Section */}
      <section id="partners" className="section section-bakers">
        <div className="container">
          <div className="section-header text-center mb-5 animate-on-scroll animate-fade-up">
            <span className="section-eyebrow">Meet Our Bakers</span>
            <h2 className="section-title-elegant">Local Bakers in Your Area</h2>
            <p className="section-subtitle">Talented home bakers ready to make your celebrations special</p>
          </div>

          <div className="location-selector-wrapper mb-5">
            <LocationSelector onChange={(val) => { setSelected(val); fetchPartners(val); }} />
          </div>

          <div className="bakers-header">
            <h3 className="bakers-location">
              <i className="bi bi-geo-alt-fill"></i>
              Bakers in {selected.city}, {selected.province}
            </h3>
          </div>

          {partners.length === 0 ? (
            <div className="no-results animate-on-scroll animate-fade-up">
              <div className="no-results-icon">
                <i className="bi bi-search"></i>
              </div>
              <h4>No bakers found in this area yet</h4>
              <p>We're expanding! Check back soon or try a nearby city.</p>
            </div>
          ) : (
            <div className="bakers-grid animate-on-scroll animate-fade-up">
              {partners.map((p, idx) => (
                <div key={p.id} className="baker-card-new" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="baker-content-new">
                    <h4 className="baker-name-new">{p.name}</h4>
                    <p className="baker-location-new">
                      <i className="bi bi-geo-alt"></i>
                      {p.city}, {p.province}
                    </p>
                    <div className="baker-rating-new">
                      <i className="bi bi-star-fill"></i>
                      <span>4.8</span>
                    </div>
                    <div className="baker-specialties-new">
                      {(p.specialties || []).slice(0, 3).map((spec, idx) => (
                        <span key={idx} className="specialty-tag-new">{spec}</span>
                      ))}
                    </div>
                    <a href={`https://wa.me/27${p.phone || '0000000000'}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-new">
                      <i className="bi bi-whatsapp"></i>
                      Contact on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-services">
        <div className="container">
          <div className="section-header text-center mb-5 animate-on-scroll animate-fade-up">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title-elegant">Baking Services</h2>
            <p className="section-subtitle">From intimate celebrations to grand events</p>
          </div>
          <div className="services-grid">
            <div className="service-card-new animate-on-scroll animate-fade-up">
              <div className="service-icon-wrap">
                <i className="bi bi-cake2"></i>
              </div>
              <h3>Custom Cakes</h3>
              <p>Personalised cakes for birthdays, weddings, and every special moment in between.</p>
              <ul className="service-list">
                <li>Wedding & Engagement Cakes</li>
                <li>Birthday & Celebration Cakes</li>
                <li>Custom Designs & Themes</li>
              </ul>
              <span className="service-price-tag">From R250</span>
            </div>
            <div className="service-card-new animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="service-icon-wrap">
                <i className="bi bi-cup-hot"></i>
              </div>
              <h3>Traditional Treats</h3>
              <p>Authentic South African bakes made with recipes passed down through generations.</p>
              <ul className="service-list">
                <li>Koesisters & Vetkoek</li>
                <li>Scones & Rusks</li>
                <li>Magwinya & Snowballs</li>
              </ul>
              <span className="service-price-tag">From R60</span>
            </div>
            <div className="service-card-new animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="service-icon-wrap">
                <i className="bi bi-gift"></i>
              </div>
              <h3>Gift Boxes</h3>
              <p>Beautifully packaged assortments perfect for gifting and corporate events.</p>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="section section-alt">
        <div className="container">
          <div className="text-center mb-5 animate-on-scroll animate-fade-up">
            <div className="section-label">SIMPLE PROCESS</div>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">Get your perfect cake in 3 easy steps</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4 animate-on-scroll animate-fade-up">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Find a Baker</h3>
                <p className="step-desc">Browse local bakers in your area using our location search</p>
              </div>
            </div>
            <div className="col-md-4 animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Place Your Order</h3>
                <p className="step-desc">Contact them via WhatsApp to discuss your custom requirements</p>
              </div>
            </div>
            <div className="col-md-4 animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Enjoy!</h3>
                <p className="step-desc">Receive your freshly baked treats delivered to your door</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="text-center mb-5 animate-on-scroll animate-fade-up">
            <div className="section-label">PRICING</div>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle mx-auto">Typical price ranges from our bakers</p>
          </div>
          <div className="pricing-table animate-on-scroll animate-scale">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Price Range</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Custom Cake</td>
                  <td>Small (6")</td>
                  <td className="price-cell">R250 - R400</td>
                  <td>2-3 days</td>
                </tr>
                <tr>
                  <td>Custom Cake</td>
                  <td>Medium (8")</td>
                  <td className="price-cell">R400 - R650</td>
                  <td>2-3 days</td>
                </tr>
                <tr>
                  <td>Custom Cake</td>
                  <td>Large (10")</td>
                  <td className="price-cell">R650 - R1000</td>
                  <td>3-5 days</td>
                </tr>
                <tr>
                  <td>Cupcakes</td>
                  <td>Dozen</td>
                  <td className="price-cell">R120 - R200</td>
                  <td>1-2 days</td>
                </tr>
                <tr>
                  <td>Gift Box</td>
                  <td>Assorted</td>
                  <td className="price-cell">R150 - R300</td>
                  <td>Same day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section section-alt">
        <div className="container">
          <div className="text-center mb-5 animate-on-scroll animate-fade-up">
            <div className="section-label">FIND BAKERS</div>
            <h2 className="section-title">Local Bakers Near You</h2>
            <p className="section-subtitle mx-auto">Select your location to find verified bakers in your area</p>
          </div>

          <div className="mb-5">
            <LocationSelector onChange={(val) => { setSelected(val); fetchPartners(val); }} />
          </div>

          <div className="animate-on-scroll animate-fade-up">
            <h3 className="mb-4">Bakers in {selected.city}, {selected.province}</h3>
            {partners.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-search" style={{fontSize: '3rem', color: 'var(--text-muted)'}}></i>
                <p className="mt-3" style={{color: 'var(--text-muted)'}}>No bakers found in this area yet. Check back soon!</p>
              </div>
            ) : (
              <div className="row g-4">
                {partners.map((p) => (
                  <div key={p.id} className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h3 className="service-title mb-1">{p.name}</h3>
                          <p className="service-tagline">{p.city}, {p.province}</p>
                        </div>
                        <span className="hero-badge">
                          <i className="bi bi-star-fill"></i> 4.8
                        </span>
                      </div>
                      <div className="mb-3">
                        <strong style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>Specialties:</strong>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                          {(p.specialties || []).map((spec, idx) => (
                            <span key={idx} className="hero-badge" style={{fontSize: '0.75rem'}}>
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a href={`https://wa.me/27${p.phone || '0000000000'}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-100 justify-content-center">
                        <i className="bi bi-whatsapp"></i>
                        Contact on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{paddingTop: '40px', paddingBottom: '40px', borderTop: '1px solid var(--border-color)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a href="#" className="nav-brand mb-3">
                <i className="bi bi-cake2"></i>
                Monate<span>Cakes</span>
              </a>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                Connecting you with the best local bakers in South Africa.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end mb-3">
                <a href="#services" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>Services</a>
                <a href="#pricing" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>Pricing</a>
                <a href="#partners" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>Find Bakers</a>
              </div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>
                © 2026 Monate Cakes. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
