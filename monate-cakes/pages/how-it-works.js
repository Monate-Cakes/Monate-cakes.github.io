// pages/how-it-works.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function HowItWorks({ theme, setTheme }) {
  const [activeTab, setActiveTab] = useState('customers');

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
  }, []);

  return (
    <>
      <Head>
        <title>How It Works | Monate Cakes</title>
        <meta name="description" content="Learn how Monate Cakes connects you with talented local home bakers. Simple ordering for customers, seamless business growth for entrepreneurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={`page-wrapper ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
          </div>
          <div className="container">
            <div className="hero-content animate-on-scroll animate-fade-up">
              <span className="hero-badge">
                <span className="badge-icon">✨</span>
                Simple &amp; Seamless
              </span>
              <h1 className="hero-title">How It Works</h1>
              <p className="hero-subtitle">
                Whether you&apos;re craving artisan treats or building your baking empire,
                we&apos;ve made the journey delightfully simple.
              </p>

              {/* Tab Switcher */}
              <div className="tab-switcher">
                <button
                  className={`tab-btn ${activeTab === 'customers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('customers')}
                >
                  <span className="tab-icon">👤</span>
                  <span>For Customers</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'entrepreneurs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('entrepreneurs')}
                >
                  <span className="tab-icon">🧁</span>
                  <span>For Entrepreneurs</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Section */}
        <div className="content-section" style={{ display: activeTab === 'customers' ? 'block' : 'none' }}>
          {/* Customer Introduction */}
          <section className="section section-intro">
            <div className="container">
              <div className="intro-grid animate-on-scroll animate-fade-up">
                <div className="intro-content">
                  <span className="section-tag">For Cake Lovers</span>
                  <h2 className="section-title">Discover &amp; Order Artisan Treats</h2>
                  <p className="section-desc">
                    Finding the perfect homemade cake shouldn&apos;t be hard. Monate Cakes connects you
                    with verified local bakers who pour love into every creation. From birthday
                    cakes to traditional koesisters, your next favorite treat is just a few taps away.
                  </p>
                  <div className="intro-features">
                    <div className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>Verified local bakers</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>Direct communication</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>Custom orders welcome</span>
                    </div>
                  </div>
                </div>
                <div className="intro-visual">
                  <div className="visual-card">
                    <img src="/images/Cake Whisper Sisters.jpeg" alt="Customer browsing cakes" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Steps */}
          <section className="section section-steps">
            <div className="container">
              <div className="section-header animate-on-scroll animate-fade-up">
                <span className="section-tag light">Step by Step</span>
                <h2 className="section-title light">Your Journey to Delicious</h2>
              </div>

              <div className="steps-grid">
                <div className="step-card animate-on-scroll animate-fade-up">
                  <div className="step-number-badge">01</div>
                  <div className="step-icon-wrapper">
                    <span className="step-emoji">🔍</span>
                  </div>
                  <h3 className="step-title">Browse &amp; Discover</h3>
                  <p className="step-desc">Explore our curated network of talented home bakers in your area. Filter by specialty, location, or browse featured creators.</p>
                  <ul className="step-details">
                    <li>View baker portfolios &amp; specialties</li>
                    <li>Read customer reviews &amp; ratings</li>
                    <li>Check delivery areas &amp; availability</li>
                  </ul>
                </div>

                <div className="step-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                  <div className="step-number-badge">02</div>
                  <div className="step-icon-wrapper">
                    <span className="step-emoji">💬</span>
                  </div>
                  <h3 className="step-title">Connect &amp; Customize</h3>
                  <p className="step-desc">Found the perfect baker? Reach out directly via WhatsApp to discuss your vision, customize your order, and get a quote.</p>
                  <ul className="step-details">
                    <li>Direct WhatsApp communication</li>
                    <li>Discuss custom requirements</li>
                    <li>Get personalized quotes</li>
                  </ul>
                </div>

                <div className="step-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                  <div className="step-number-badge">03</div>
                  <div className="step-icon-wrapper">
                    <span className="step-emoji">💳</span>
                  </div>
                  <h3 className="step-title">Confirm &amp; Pay</h3>
                  <p className="step-desc">Once you&apos;ve agreed on the details, confirm your order with the baker. Payment terms are arranged directly with your chosen baker.</p>
                  <ul className="step-details">
                    <li>Flexible payment options</li>
                    <li>Secure deposit arrangements</li>
                    <li>Order confirmation receipt</li>
                  </ul>
                </div>

                <div className="step-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
                  <div className="step-number-badge">04</div>
                  <div className="step-icon-wrapper">
                    <span className="step-emoji">❤️</span>
                  </div>
                  <h3 className="step-title">Receive &amp; Enjoy</h3>
                  <p className="step-desc">Collect your order or have it delivered. Enjoy your freshly made artisan treats and share the love by leaving a review!</p>
                  <ul className="step-details">
                    <li>Pickup or delivery options</li>
                    <li>Freshly made to order</li>
                    <li>Share your experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Flow Diagram */}
          <section className="section section-flow">
            <div className="container">
              <div className="section-header animate-on-scroll animate-fade-up">
                <span className="section-tag">Visual Guide</span>
                <h2 className="section-title">Customer Journey Flow</h2>
              </div>

              <div className="flow-diagram animate-on-scroll animate-fade-up">
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="flow-step-icon start">🚀</div>
                    <span className="flow-step-label">Start</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">🔍</div>
                    <span className="flow-step-label">Browse Bakers</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">👤</div>
                    <span className="flow-step-label">View Profile</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon highlight">💬</div>
                    <span className="flow-step-label">WhatsApp Chat</span>
                  </div>
                </div>
                
                <div className="flow-connector">↓</div>
                
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="flow-step-icon success">🎉</div>
                    <span className="flow-step-label">Enjoy &amp; Review</span>
                  </div>
                  <div className="flow-arrow">←</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">🚚</div>
                    <span className="flow-step-label">Pickup/Delivery</span>
                  </div>
                  <div className="flow-arrow">←</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">👨‍🍳</div>
                    <span className="flow-step-label">Baker Prepares</span>
                  </div>
                  <div className="flow-arrow">←</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">💳</div>
                    <span className="flow-step-label">Pay &amp; Confirm</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer CTA */}
          <section className="section section-cta">
            <div className="container">
              <div className="cta-card animate-on-scroll animate-scale">
                <div className="cta-content">
                  <h3 className="cta-title">Ready to Discover Amazing Bakers?</h3>
                  <p className="cta-desc">Browse our network of talented home bakers and find your next favorite treat.</p>
                  <Link href="/partners" className="btn-primary">
                    <span>Explore Bakers</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Entrepreneur Section */}
        <div className="content-section" style={{ display: activeTab === 'entrepreneurs' ? 'block' : 'none' }}>
          {/* Entrepreneur Introduction */}
          <section className="section section-intro">
            <div className="container">
              <div className="intro-grid animate-on-scroll animate-fade-up">
                <div className="intro-content">
                  <span className="section-tag entrepreneur-tag">For Home Bakers</span>
                  <h2 className="section-title">Grow Your Baking Business</h2>
                  <p className="section-desc">
                    Turn your passion into profit. Monate Cakes provides the platform, visibility,
                    and tools you need to reach more customers and scale your home baking business.
                    Join our network of successful artisan bakers across South Africa.
                  </p>
                  <div className="intro-features">
                    <div className="feature-item">
                      <span className="feature-check entrepreneur">✓</span>
                      <span>Professional profile page</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-check entrepreneur">✓</span>
                      <span>Increased customer reach</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-check entrepreneur">✓</span>
                      <span>Marketing support</span>
                    </div>
                  </div>
                </div>
                <div className="intro-visual">
                  <div className="visual-card">
                    <img src="/images/Queens-Scone-Kitchen.jpeg" alt="Successful home baker" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Entrepreneur Steps */}
          <section className="section section-steps">
            <div className="container">
              <div className="section-header animate-on-scroll animate-fade-up">
                <span className="section-tag light entrepreneur-tag">Your Path to Success</span>
                <h2 className="section-title light">Join Our Baker Network</h2>
              </div>

              <div className="steps-grid">
                <div className="step-card entrepreneur-card animate-on-scroll animate-fade-up">
                  <div className="step-number-badge entrepreneur">01</div>
                  <div className="step-icon-wrapper entrepreneur">
                    <span className="step-emoji">📝</span>
                  </div>
                  <h3 className="step-title">Submit Application</h3>
                  <p className="step-desc">Complete our simple online application form. Share your baking story, specialties, and showcase your best creations.</p>
                  <ul className="step-details">
                    <li>Basic personal information</li>
                    <li>Business &amp; specialty details</li>
                    <li>Portfolio images or social links</li>
                  </ul>
                </div>

                <div className="step-card entrepreneur-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                  <div className="step-number-badge entrepreneur">02</div>
                  <div className="step-icon-wrapper entrepreneur">
                    <span className="step-emoji">✅</span>
                  </div>
                  <h3 className="step-title">Verification Process</h3>
                  <p className="step-desc">Our team reviews your application and conducts a brief verification call to ensure quality and build trust with customers.</p>
                  <ul className="step-details">
                    <li>Application review (24-48 hrs)</li>
                    <li>Quick verification call</li>
                    <li>Food safety discussion</li>
                  </ul>
                </div>

                <div className="step-card entrepreneur-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                  <div className="step-number-badge entrepreneur">03</div>
                  <div className="step-icon-wrapper entrepreneur">
                    <span className="step-emoji">🖼️</span>
                  </div>
                  <h3 className="step-title">Profile Setup</h3>
                  <p className="step-desc">Once approved, we help you create a stunning profile that showcases your unique style and attracts your ideal customers.</p>
                  <ul className="step-details">
                    <li>Professional profile page</li>
                    <li>Portfolio gallery setup</li>
                    <li>Pricing &amp; menu configuration</li>
                  </ul>
                </div>

                <div className="step-card entrepreneur-card animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
                  <div className="step-number-badge entrepreneur">04</div>
                  <div className="step-icon-wrapper entrepreneur">
                    <span className="step-emoji">📈</span>
                  </div>
                  <h3 className="step-title">Go Live &amp; Grow</h3>
                  <p className="step-desc">Your profile goes live! Start receiving inquiries, fulfilling orders, and building your reputation in the community.</p>
                  <ul className="step-details">
                    <li>Receive customer inquiries</li>
                    <li>Build reviews &amp; reputation</li>
                    <li>Access marketing opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Entrepreneur Flow Diagram */}
          <section className="section section-flow">
            <div className="container">
              <div className="section-header animate-on-scroll animate-fade-up">
                <span className="section-tag entrepreneur-tag">Visual Guide</span>
                <h2 className="section-title">Entrepreneur Journey Flow</h2>
              </div>

              <div className="flow-diagram entrepreneur-flow animate-on-scroll animate-fade-up">
                <div className="flow-phase-label">Application Phase</div>
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="flow-step-icon start">🚀</div>
                    <span className="flow-step-label">Start Here</span>
                  </div>
                  <div className="flow-arrow ent">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">📝</div>
                    <span className="flow-step-label">Fill Application</span>
                  </div>
                  <div className="flow-arrow ent">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">📧</div>
                    <span className="flow-step-label">Submit &amp; Wait</span>
                  </div>
                </div>
                
                <div className="flow-connector ent">↓</div>
                
                <div className="flow-phase-label">Verification Phase</div>
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="flow-step-icon highlight ent">📞</div>
                    <span className="flow-step-label">Team Review</span>
                  </div>
                  <div className="flow-arrow ent">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">🎯</div>
                    <span className="flow-step-label">Verification Call</span>
                  </div>
                  <div className="flow-arrow ent">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">✅</div>
                    <span className="flow-step-label">Approved!</span>
                  </div>
                </div>
                
                <div className="flow-connector ent">↓</div>
                
                <div className="flow-phase-label">Growth Phase</div>
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="flow-step-icon">🖼️</div>
                    <span className="flow-step-label">Setup Profile</span>
                  </div>
                  <div className="flow-arrow ent">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon">👁️</div>
                    <span className="flow-step-label">Go Live</span>
                  </div>
                  <div className="flow-arrow ent">→</div>
                  <div className="flow-step">
                    <div className="flow-step-icon success ent">📈</div>
                    <span className="flow-step-label">Grow Business</span>
                  </div>
                </div>

                <div className="flow-cycle">
                  <div className="cycle-label">Ongoing Success Cycle</div>
                  <div className="cycle-steps">
                    <span>💬 Get Orders</span>
                    <span className="cycle-arrow">→</span>
                    <span>🧁 Bake &amp; Deliver</span>
                    <span className="cycle-arrow">→</span>
                    <span>⭐ Get Reviews</span>
                    <span className="cycle-arrow">→</span>
                    <span>🔄 Repeat</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Entrepreneur Benefits */}
          <section className="section section-benefits">
            <div className="container">
              <div className="section-header animate-on-scroll animate-fade-up">
                <span className="section-tag light entrepreneur-tag">What You Get</span>
                <h2 className="section-title light">Partner Benefits</h2>
              </div>

              <div className="benefits-grid">
                <div className="benefit-item animate-on-scroll animate-fade-up">
                  <div className="benefit-icon">🌐</div>
                  <h4 className="benefit-title">Digital Presence</h4>
                  <p className="benefit-desc">Professional profile visible to thousands of potential customers</p>
                </div>
                <div className="benefit-item animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                  <div className="benefit-icon">🛡️</div>
                  <h4 className="benefit-title">Verified Badge</h4>
                  <p className="benefit-desc">Trust indicator that increases customer confidence</p>
                </div>
                <div className="benefit-item animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                  <div className="benefit-icon">👥</div>
                  <h4 className="benefit-title">Community</h4>
                  <p className="benefit-desc">Network with fellow bakers, share tips, and grow together</p>
                </div>
                <div className="benefit-item animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
                  <div className="benefit-icon">📣</div>
                  <h4 className="benefit-title">Marketing Tools</h4>
                  <p className="benefit-desc">Featured listings, promotions, and social media exposure</p>
                </div>
              </div>
            </div>
          </section>

          {/* Entrepreneur CTA */}
          <section className="section section-cta">
            <div className="container">
              <div className="cta-card entrepreneur-cta animate-on-scroll animate-scale">
                <div className="cta-content">
                  <h3 className="cta-title">Ready to Start Your Journey?</h3>
                  <p className="cta-desc">Join our network of successful home bakers and grow your business today.</p>
                  <Link href="/careers" className="btn-primary entrepreneur-btn">
                    <span>Apply Now</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section (Shared) */}
        <section className="section section-faq">
          <div className="container">
            <div className="section-header animate-on-scroll animate-fade-up">
              <span className="section-tag">Common Questions</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="faq-grid">
              <div className="faq-item animate-on-scroll animate-fade-up">
                <h4 className="faq-question">How do I contact a baker?</h4>
                <p className="faq-answer">Each baker profile has a direct WhatsApp link. Simply click the &quot;Chat on WhatsApp&quot; button to start a conversation about your order.</p>
              </div>
              <div className="faq-item animate-on-scroll animate-fade-up" style={{animationDelay: '0.1s'}}>
                <h4 className="faq-question">Are all bakers verified?</h4>
                <p className="faq-answer">Yes! Every baker on our platform goes through a verification process to ensure quality and reliability for our customers.</p>
              </div>
              <div className="faq-item animate-on-scroll animate-fade-up" style={{animationDelay: '0.2s'}}>
                <h4 className="faq-question">How long does verification take?</h4>
                <p className="faq-answer">Most applications are reviewed within 24-48 hours. The verification call is typically scheduled within a few days of approval.</p>
              </div>
              <div className="faq-item animate-on-scroll animate-fade-up" style={{animationDelay: '0.3s'}}>
                <h4 className="faq-question">Is there a cost to join as a baker?</h4>
                <p className="faq-answer">Contact our team for current partnership options. We offer flexible plans designed to help bakers of all sizes succeed.</p>
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
          transition: background 0.3s ease;
        }

        /* ========================================
           HERO SECTION
           ======================================== */
        .hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 140px 0 80px;
          background: linear-gradient(165deg, #0F0F0F 0%, #1A1A2E 40%, #1F1F35 100%);
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .orb-1 {
          top: 20%;
          left: 30%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(196, 149, 106, 0.15) 0%, transparent 70%);
        }

        .orb-2 {
          bottom: 20%;
          right: 20%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(139, 154, 125, 0.12) 0%, transparent 70%);
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
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(196, 149, 106, 0.15);
          border: 1px solid rgba(196, 149, 106, 0.3);
          padding: 10px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-caramel-light);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Tab Switcher */
        .tab-switcher {
          display: inline-flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px;
          border-radius: 14px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: transparent;
          border: none;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.05);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, var(--color-caramel) 0%, var(--color-caramel-dark) 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(196, 149, 106, 0.4);
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        /* ========================================
           SECTION STYLES
           ======================================== */
        .content-section {
          width: 100%;
        }

        .section {
          padding: 80px 0;
          width: 100%;
        }

        @media (min-width: 768px) {
          .section {
            padding: 100px 0;
          }
        }

        .section-intro {
          background: var(--bg-primary);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .intro-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 64px;
          }
        }

        .section-tag {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-caramel);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 12px;
        }

        .section-tag.light {
          color: var(--color-caramel-light);
        }

        .section-tag.entrepreneur-tag {
          color: var(--color-sage);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .section-title.light {
          color: #FFFFFF;
        }

        .section-desc {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .intro-features {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .feature-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: var(--color-caramel);
          color: white;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .feature-check.entrepreneur {
          background: var(--color-sage);
        }

        .intro-visual {
          display: none;
        }

        @media (min-width: 992px) {
          .intro-visual {
            display: block;
          }
        }

        .visual-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .visual-card img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Steps Section */
        .section-steps {
          background: linear-gradient(180deg, #0F0F0F 0%, #1A1A2E 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .step-card {
          padding: 32px 24px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .step-number-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(196, 149, 106, 0.2);
          line-height: 1;
        }

        .step-number-badge.entrepreneur {
          color: rgba(139, 154, 125, 0.2);
        }

        .step-icon-wrapper {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(196, 149, 106, 0.15) 0%, rgba(196, 149, 106, 0.08) 100%);
          border-radius: 16px;
          margin-bottom: 20px;
          border: 1px solid rgba(196, 149, 106, 0.2);
        }

        .step-icon-wrapper.entrepreneur {
          background: linear-gradient(135deg, rgba(139, 154, 125, 0.15) 0%, rgba(139, 154, 125, 0.08) 100%);
          border-color: rgba(139, 154, 125, 0.2);
        }

        .step-emoji {
          font-size: 1.75rem;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .step-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .step-details {
          list-style: none;
          padding: 0;
          margin: 0;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .step-details li {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
        }

        .step-details li::before {
          content: '•';
          position: absolute;
          left: 4px;
          color: var(--color-caramel-light);
          font-weight: bold;
        }

        .entrepreneur-card .step-details li::before {
          color: var(--color-sage);
        }

        /* ========================================
           FLOW DIAGRAM STYLES
           ======================================== */
        .section-flow {
          background: var(--bg-primary);
        }

        .flow-diagram {
          background: var(--bg-card);
          border-radius: 24px;
          padding: 40px 24px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
          overflow-x: auto;
        }

        @media (min-width: 768px) {
          .flow-diagram {
            padding: 48px;
          }
        }

        .flow-phase-label {
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          background: var(--color-sage);
          padding: 8px 20px;
          border-radius: 100px;
          display: inline-block;
          margin-left: 50%;
          transform: translateX(-50%);
        }

        .flow-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }

        @media (min-width: 768px) {
          .flow-steps {
            gap: 16px;
            flex-wrap: nowrap;
          }
        }

        .flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 80px;
        }

        @media (min-width: 768px) {
          .flow-step {
            min-width: 100px;
          }
        }

        .flow-step-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 14px;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .flow-step-icon {
            width: 64px;
            height: 64px;
            border-radius: 16px;
          }
        }

        .flow-step-icon.start {
          background: linear-gradient(135deg, var(--color-caramel) 0%, var(--color-caramel-dark) 100%);
          border-color: var(--color-caramel);
        }

        .flow-step-icon.highlight {
          background: rgba(196, 149, 106, 0.2);
          border-color: var(--color-caramel);
          border-width: 3px;
        }

        .flow-step-icon.highlight.ent {
          background: rgba(139, 154, 125, 0.2);
          border-color: var(--color-sage);
        }

        .flow-step-icon.success {
          background: linear-gradient(135deg, var(--color-sage) 0%, #6B7A5E 100%);
          border-color: var(--color-sage);
        }

        .flow-step-icon.success.ent {
          background: linear-gradient(135deg, var(--color-sage) 0%, #6B7A5E 100%);
        }

        .flow-step-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
        }

        @media (min-width: 768px) {
          .flow-step-label {
            font-size: 0.85rem;
          }
        }

        .flow-arrow {
          font-size: 1.25rem;
          color: var(--color-caramel);
          font-weight: bold;
        }

        .flow-arrow.ent {
          color: var(--color-sage);
        }

        .flow-connector {
          text-align: center;
          font-size: 1.5rem;
          color: var(--color-caramel);
          margin: 16px 0;
        }

        .flow-connector.ent {
          color: var(--color-sage);
        }

        .flow-cycle {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px dashed rgba(139, 154, 125, 0.3);
          text-align: center;
        }

        .cycle-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-sage);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .cycle-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .cycle-arrow {
          color: var(--color-sage);
          font-weight: bold;
        }

        /* ========================================
           BENEFITS SECTION
           ======================================== */
        .section-benefits {
          background: linear-gradient(180deg, #0F0F0F 0%, #1A1A2E 100%);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (min-width: 768px) {
          .benefits-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .benefit-item {
          text-align: center;
          padding: 28px 20px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateY(-4px);
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .benefit-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .benefit-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }

        /* ========================================
           CTA SECTION
           ======================================== */
        .section-cta {
          background: var(--bg-primary);
          padding: 60px 0 80px;
        }

        .cta-card {
          background: linear-gradient(135deg, #1C1C1C 0%, #2A2A3E 100%);
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(196, 149, 106, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .entrepreneur-cta {
          background: linear-gradient(135deg, #2D3A2D 0%, #1A2A1A 100%);
        }

        .entrepreneur-cta::before {
          background: radial-gradient(circle, rgba(139, 154, 125, 0.15) 0%, transparent 70%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .cta-desc {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 28px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, var(--color-caramel) 0%, var(--color-caramel-dark) 100%);
          color: #FFFFFF;
          border-radius: 12px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(196, 149, 106, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(196, 149, 106, 0.5);
        }

        .entrepreneur-btn {
          background: linear-gradient(135deg, var(--color-sage) 0%, #6B7A5E 100%);
          box-shadow: 0 4px 20px rgba(139, 154, 125, 0.4);
        }

        .entrepreneur-btn:hover {
          box-shadow: 0 8px 28px rgba(139, 154, 125, 0.5);
        }

        .btn-arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* ========================================
           FAQ SECTION
           ======================================== */
        .section-faq {
          background: var(--bg-secondary);
          padding-bottom: 100px;
        }

        .page-wrapper.dark .section-faq {
          background: #0F0F0F;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .faq-item {
          padding: 28px;
          background: var(--bg-card);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .page-wrapper.dark .faq-item {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .faq-question {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .faq-answer {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* ========================================
           ANIMATIONS
           ======================================== */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-scale {
          transform: scale(0.95);
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ========================================
           MOBILE OPTIMIZATIONS
           ======================================== */
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px;
            min-height: auto;
          }

          .tab-switcher {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
          }

          .tab-btn {
            justify-content: center;
            width: 100%;
          }

          .section {
            padding: 60px 0;
          }

          .flow-diagram {
            padding: 24px 16px;
          }
        }

        /* Touch-friendly for mobile */
        @media (hover: none) {
          .btn-primary:hover,
          .step-card:hover,
          .benefit-item:hover {
            transform: none;
          }

          .btn-primary:active {
            transform: scale(0.98);
          }
        }

        /* Safe area for notched devices */
        @supports (padding: max(0px)) {
          .hero {
            padding-top: max(140px, env(safe-area-inset-top) + 120px);
          }
        }
      `}</style>
    </>
  );
}