// pages/careers.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Careers({ theme, setTheme }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    specialty: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickApply = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    sessionStorage.setItem('bakerApplication', JSON.stringify(formData));
    setTimeout(() => {
      router.push('/entrepreneur-signup');
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Join Our Baker Network | Monate Cakes</title>
        <meta name="description" content="Become part of South Africa's premier home baker network." />
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
          <div className="hero-bg-elements">
            <div className="hero-gradient-orb orb-1"></div>
            <div className="hero-gradient-orb orb-2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text animate-on-scroll animate-fade-up">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  <span>Now Accepting Applications</span>
                </div>
                <h1 className="hero-title">
                  Elevate Your <span className="title-accent">Baking Craft</span>
                </h1>
                <p className="hero-subtitle">
                  Partner with South Africa&apos;s most trusted artisan baker platform. Access new markets, build your brand, and transform your passion into prosperity.
                </p>

                <div className="hero-metrics">
                  <div className="metric">
                    <span className="metric-value">500+</span>
                    <span className="metric-label">Partner Bakers</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">10K+</span>
                    <span className="metric-label">Monthly Orders</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">R50K</span>
                    <span className="metric-label">Avg. Earnings</span>
                  </div>
                </div>

                <div className="hero-cta-group">
                  <a href="#apply" className="btn-primary">
                    <span>Start Application</span>
                    <span className="btn-arrow">→</span>
                  </a>
                  <Link href="/partners" className="btn-ghost">
                    <span>Meet Our Bakers</span>
                  </Link>
                </div>
              </div>

              <div className="hero-visual animate-on-scroll animate-fade-left">
                <div className="visual-card">
                  <div className="card-image">
                    <img src="/images/Cake Whisper Sisters.jpeg" alt="Professional home baker" />
                    <div className="card-overlay"></div>
                  </div>
                  <div className="card-badge">
                    <span>⭐</span>
                    <span>Verified Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section section-values">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag">Why Partner With Us</span>
              <h2 className="section-title">Built for Baker Success</h2>
            </div>

            <div className="values-grid">
              <div className="value-card animate-on-scroll animate-fade-up">
                <div className="value-icon">🌐</div>
                <h3 className="value-title">Expanded Digital Reach</h3>
                <p className="value-desc">Connect with customers across South Africa. Our platform brings orders to you from beyond your neighborhood.</p>
              </div>

              <div className="value-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="value-icon">🛡️</div>
                <h3 className="value-title">Trust &amp; Verification</h3>
                <p className="value-desc">Our verified badge builds instant credibility. Customers trust our platform, meaning more orders for you.</p>
              </div>

              <div className="value-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="value-icon">💬</div>
                <h3 className="value-title">Direct Communication</h3>
                <p className="value-desc">Seamless WhatsApp integration for customer interactions. No complicated systems—just simple ordering.</p>
              </div>

              <div className="value-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="value-icon">📈</div>
                <h3 className="value-title">Revenue Growth</h3>
                <p className="value-desc">Our bakers report 3x increase in monthly orders. More visibility equals more business for you.</p>
              </div>

              <div className="value-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.4s'}}>
                <div className="value-icon">📣</div>
                <h3 className="value-title">Marketing Tools</h3>
                <p className="value-desc">Professional profile, featured listings, and promotional opportunities to showcase your specialties.</p>
              </div>

              <div className="value-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.5s'}}>
                <div className="value-icon">👥</div>
                <h3 className="value-title">Baker Community</h3>
                <p className="value-desc">Join a network of passionate artisans. Share knowledge, collaborate, and grow together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section section-process">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag light">Simple Onboarding</span>
              <h2 className="section-title light">Three Steps to Get Started</h2>
            </div>

            <div className="process-timeline">
              <div className="process-step animate-on-scroll animate-fade-up">
                <div className="step-indicator">
                  <span className="step-number">01</span>
                  <div className="step-line"></div>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Submit Application</h4>
                  <p className="step-desc">Complete our quick application form. Share your specialties, location, and portfolio of your best work.</p>
                </div>
              </div>

              <div className="process-step animate-on-scroll animate-fade-up" style={{animationDelay: '0.15s'}}>
                <div className="step-indicator">
                  <span className="step-number">02</span>
                  <div className="step-line"></div>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Verification Call</h4>
                  <p className="step-desc">A brief call with our team to verify your credentials and discuss how we can best support your business.</p>
                </div>
              </div>

              <div className="process-step animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="step-indicator">
                  <span className="step-number">03</span>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Launch Your Profile</h4>
                  <p className="step-desc">Go live on our platform and start receiving orders. Our team will help optimize your profile for success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-testimonials">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag">Partner Stories</span>
              <h2 className="section-title">Voices From Our Network</h2>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card animate-on-scroll animate-fade-up">
                <div className="testimonial-quote">
                  <span className="quote-icon">❝</span>
                  <p className="quote-text">&quot;Joining Monate Cakes tripled my orders within the first month. Customers from all over Durban now discover my cakes online.&quot;</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="/images/Cake Whisper Sisters.jpeg" alt="Sarah M." />
                  </div>
                  <div className="author-info">
                    <span className="author-name">Sarah M.</span>
                    <span className="author-business">Sweet Delights Bakery, Durban</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="testimonial-quote">
                  <span className="quote-icon">❝</span>
                  <p className="quote-text">&quot;My traditional koesisters are now famous across Johannesburg. The platform made connecting with customers effortless.&quot;</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="/images/Queens-Scone-Kitchen.jpeg" alt="Thabo K." />
                  </div>
                  <div className="author-info">
                    <span className="author-name">Thabo K.</span>
                    <span className="author-business">Heritage Bakes, Johannesburg</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="testimonial-quote">
                  <span className="quote-icon">❝</span>
                  <p className="quote-text">&quot;From home kitchen to professional wedding cake supplier. Monate Cakes gave me the tools to scale my entire business.&quot;</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="/images/Wisdom & Whisk Bakery.jpeg" alt="Lisa R." />
                  </div>
                  <div className="author-info">
                    <span className="author-name">Lisa R.</span>
                    <span className="author-business">Elegant Cakes, Cape Town</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section id="apply" className="section section-apply">
          <div className="container">
            <div className="apply-wrapper animate-on-scroll animate-scale">
              <div className="apply-content">
                <span className="section-tag light">Begin Your Journey</span>
                <h2 className="apply-title">Ready to Grow Your Business?</h2>
                <p className="apply-description">
                  Complete this quick form and our team will guide you through the rest. Most applications are processed within 48 hours.
                </p>
              </div>

              <form className="apply-form" onSubmit={handleQuickApply}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+27 XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City / Area</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="e.g., Cape Town, Sandton"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="specialty">Baking Specialty</label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your main specialty</option>
                    <option value="wedding-cakes">Wedding &amp; Celebration Cakes</option>
                    <option value="cupcakes">Cupcakes &amp; Small Treats</option>
                    <option value="traditional">Traditional South African Bakes</option>
                    <option value="artisan-bread">Artisan Breads</option>
                    <option value="pastries">Pastries &amp; Desserts</option>
                    <option value="custom">Custom &amp; Specialty Orders</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue Application</span>
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>

                <p className="form-note">
                  By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Alternative CTA */}
        <section className="section section-alt-cta">
          <div className="container">
            <div className="alt-cta-content animate-on-scroll animate-fade-up">
              <h3 className="alt-cta-title">Prefer to talk first?</h3>
              <p className="alt-cta-desc">Schedule a call with our partnership team to discuss your baking business.</p>
              <a href="mailto:partners@monatecakes.co.za" className="btn-secondary">
                <span>📧</span>
                <span>partners@monatecakes.co.za</span>
              </a>
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
          --color-sage: #8B9A7D;
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
          transition: background 0.3s ease, color 0.3s ease;
        }

        /* ========================================
           HERO SECTION
           ======================================== */
        .hero {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 0 60px;
          background: linear-gradient(165deg, #0F0F0F 0%, #1A1A2E 40%, #1F1F35 100%);
          overflow: hidden;
        }

        .hero-bg-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .orb-1 {
          top: 10%;
          left: 20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(196, 149, 106, 0.2) 0%, transparent 70%);
        }

        .orb-2 {
          bottom: 10%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(139, 154, 125, 0.15) 0%, transparent 70%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 40px;
          }
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-content {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 64px;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(196, 149, 106, 0.1);
          border: 1px solid rgba(196, 149, 106, 0.2);
          padding: 10px 18px;
          border-radius: 100px;
          margin-bottom: 24px;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-caramel-light);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--color-caramel);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .title-accent {
          display: block;
          background: linear-gradient(135deg, var(--color-caramel-light) 0%, #E8C9A8 50%, var(--color-caramel) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .hero-metrics {
          display: flex;
          gap: 32px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-value {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .metric-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 28px;
          background: linear-gradient(135deg, var(--color-caramel) 0%, var(--color-caramel-dark) 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(196, 149, 106, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(196, 149, 106, 0.35);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 28px;
          background: transparent;
          color: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .btn-arrow {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
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

        .visual-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
        }

        .card-image {
          position: relative;
          aspect-ratio: 3/4;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.6) 100%);
        }

        .card-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          color: #1C1C1C;
        }

        /* ========================================
           SECTION STYLES
           ======================================== */
        .section {
          padding: 80px 0;
        }

        @media (min-width: 768px) {
          .section {
            padding: 100px 0;
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .section-tag {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-caramel);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 16px;
        }

        .section-tag.light {
          color: var(--color-caramel-light);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 500;
          color: var(--text-primary);
        }

        .section-title.light {
          color: #FFFFFF;
        }

        /* ========================================
           VALUES SECTION
           ======================================== */
        .section-values {
          background: var(--bg-primary);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .value-card {
          padding: 32px 28px;
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .value-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .value-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* ========================================
           PROCESS SECTION
           ======================================== */
        .section-process {
          background: linear-gradient(180deg, #0F0F0F 0%, #1A1A2E 100%);
        }

        .process-timeline {
          max-width: 700px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          gap: 24px;
        }

        .step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .step-number {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-caramel) 0%, var(--color-caramel-dark) 100%);
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 50%;
        }

        .step-line {
          width: 2px;
          flex: 1;
          min-height: 60px;
          background: linear-gradient(180deg, var(--color-caramel) 0%, rgba(196, 149, 106, 0.2) 100%);
          margin: 12px 0;
        }

        .step-content {
          padding-bottom: 40px;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .step-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* ========================================
           TESTIMONIALS SECTION
           ======================================== */
        .section-testimonials {
          background: var(--bg-secondary);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          padding: 32px;
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--border-color);
        }

        .testimonial-quote {
          position: relative;
          margin-bottom: 24px;
        }

        .quote-icon {
          font-size: 2.5rem;
          color: var(--color-caramel);
          opacity: 0.3;
          line-height: 1;
        }

        .quote-text {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-style: italic;
          margin-top: 8px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--color-caramel-light);
        }

        .author-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .author-business {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* ========================================
           APPLICATION SECTION
           ======================================== */
        .section-apply {
          background: linear-gradient(165deg, #0F0F0F 0%, #1A1A2E 50%, #1F1F35 100%);
          position: relative;
          overflow: hidden;
        }

        .apply-wrapper {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 40px 24px;
        }

        @media (min-width: 992px) {
          .apply-wrapper {
            grid-template-columns: 1fr 1.2fr;
            padding: 64px 56px;
            gap: 64px;
          }
        }

        .apply-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        .apply-description {
          font-family: var(--font-body);
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        /* Form Styles */
        .apply-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .form-group input,
        .form-group select {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #FFFFFF;
          transition: all 0.2s ease;
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--color-caramel);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 18px center;
          padding-right: 48px;
        }

        .form-group select option {
          background: #1A1A2E;
          color: #FFFFFF;
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 32px;
          background: linear-gradient(135deg, var(--color-caramel) 0%, var(--color-caramel-dark) 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(196, 149, 106, 0.3);
          margin-top: 8px;
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(196, 149, 106, 0.4);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #FFFFFF;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-note {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-align: center;
        }

        .form-note a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: underline;
        }

        .form-note a:hover {
          color: var(--color-caramel-light);
        }

        /* ========================================
           ALTERNATIVE CTA
           ======================================== */
        .section-alt-cta {
          background: var(--bg-primary);
          padding: 60px 0;
        }

        .alt-cta-content {
          text-align: center;
        }

        .alt-cta-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .alt-cta-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background: var(--color-caramel);
          color: #FFFFFF;
          border-color: var(--color-caramel);
        }

        /* ========================================
           ANIMATIONS
           ======================================== */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-fade-left {
          transform: translateX(30px);
        }

        .animate-on-scroll.animate-scale {
          transform: scale(0.95);
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }

        /* ========================================
           MOBILE OPTIMIZATIONS
           ======================================== */
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px;
            min-height: auto;
          }

          .hero-metrics {
            gap: 20px;
          }

          .metric-value {
            font-size: 1.5rem;
          }

          .hero-cta-group {
            flex-direction: column;
          }

          .btn-primary,
          .btn-ghost {
            width: 100%;
            justify-content: center;
          }

          .section {
            padding: 60px 0;
          }

          .value-card {
            padding: 24px 20px;
          }

          .apply-wrapper {
            padding: 32px 20px;
          }
        }

        /* Touch-friendly */
        @media (hover: none) {
          .btn-primary:hover,
          .btn-ghost:hover,
          .value-card:hover {
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