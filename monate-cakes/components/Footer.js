import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <i className="bi bi-cake2"></i>
              <span>Monate<strong>Cakes</strong></span>
            </Link>
            <p className="footer-tagline">The sweetest way to celebrate.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">Custom Cakes</Link></li>
              <li><Link href="/#services">Event Catering</Link></li>
              <li><Link href="/#services">Gift Boxes</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link href="/partners">Our Bakers</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="https://wa.me/27825550000">WhatsApp Support</a></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:hello@monatecakes.co.za">
                  <i className="bi bi-envelope"></i> hello@monatecakes.co.za
                </a>
              </li>
              <li>
                <a href="https://wa.me/27825550000">
                  <i className="bi bi-whatsapp"></i> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Monate Cakes. All rights reserved.</p>
          <p className="footer-made">
            Made with <i className="bi bi-heart-fill" style={{color: '#ef4444'}}></i> in South Africa
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/27825550000" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </a>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
          padding: 60px 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(4, 1fr);
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 1.4rem;
          color: #10b981;
        }

        .footer-logo i {
          font-size: 1.6rem;
        }

        .footer-logo span {
          color: #ffffff;
          font-weight: 300;
        }

        .footer-logo strong {
          color: #10b981;
          font-weight: 600;
        }

        .footer-tagline {
          color: #6b7280;
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.5;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        @media (max-width: 480px) {
          .social-icons {
            justify-content: center;
          }
        }

        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #9ca3af;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: #10b981;
          border-color: #10b981;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-links h4 {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 480px) {
          .footer-links a {
            justify-content: center;
          }
        }

        .footer-links a:hover {
          color: #10b981;
        }

        .footer-links a i {
          font-size: 0.85rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 480px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        .footer-bottom p {
          color: #4b5563;
          font-size: 0.85rem;
          margin: 0;
        }

        .footer-made {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
        }
      `}</style>
    </footer>
  );
}