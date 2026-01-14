// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ theme, setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Also update localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="promo-banner">
        <span>🎉 New Year Special: Get 15% OFF on all custom cakes! Use code <span className="promo-code">NEWYEAR15</span></span>
      </div>

      <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${theme}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="nav-brand">
              <span className="brand-icon">🎂</span>
              <span className="brand-text">Monate<span className="brand-accent">Cakes</span></span>
            </Link>

            <ul className="nav-links">
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/partners">Bakers</Link></li>
            </ul>

            <div className="nav-actions">
              <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <Link href="/partners" className="btn-primary-nav">
                <span className="btn-icon">🔍</span>
                <span>Find Bakers</span>
              </Link>
              <button 
                className="mobile-menu-btn" 
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''} ${theme}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-icon">🎂</span>
            <span className="brand-text">Monate<span className="brand-accent">Cakes</span></span>
          </Link>
          <button 
            className="mobile-menu-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <div className="mobile-menu-links">
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>
            <span className="menu-icon">🍰</span>
            Services
          </Link>
          <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)}>
            <span className="menu-icon">💰</span>
            Pricing
          </Link>
          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>
            <span className="menu-icon">📋</span>
            How It Works
          </Link>
          <Link href="/partners" onClick={() => setMobileMenuOpen(false)}>
            <span className="menu-icon">👨‍🍳</span>
            Bakers
          </Link>
          <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>
            <span className="menu-icon">🚀</span>
            Join as Baker
          </Link>
        </div>

        <div className="mobile-menu-footer">
          <Link href="/partners" className="btn-primary-mobile" onClick={() => setMobileMenuOpen(false)}>
            <span>🔍</span>
            Find Bakers
          </Link>
          <button className="theme-toggle-mobile" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Promo Banner */
        .promo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          background: linear-gradient(90deg, #C4956A 0%, #A67C52 100%);
          color: white;
          text-align: center;
          padding: 10px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .promo-code {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
          margin-left: 4px;
        }

        /* Navbar */
        .navbar-custom {
          position: fixed;
          top: 40px;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.3s ease;
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(20px);
        }

        @media (min-width: 768px) {
          .navbar-custom {
            background: transparent;
          }
        }

        .navbar-custom.scrolled {
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(20px);
          padding: 12px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .navbar-custom.light.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Brand */
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .navbar-custom.light .nav-brand {
          color: #1C1C1C;
        }

        .brand-icon {
          font-size: 1.5rem;
        }

        .brand-accent {
          color: #C4956A;
        }

        /* Nav Links */
        .nav-links {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-links li a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-links li a:hover {
          color: #C4956A;
        }

        .navbar-custom.light .nav-links li a {
          color: rgba(0, 0, 0, 0.7);
        }

        .navbar-custom.light .nav-links li a:hover {
          color: #C4956A;
        }

        /* Nav Actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
        }

        .navbar-custom.light .theme-toggle {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .navbar-custom.light .theme-toggle:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .btn-primary-nav {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #C4956A 0%, #A67C52 100%);
          color: white;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(196, 149, 106, 0.3);
        }

        @media (min-width: 768px) {
          .btn-primary-nav {
            display: flex;
          }
        }

        .btn-primary-nav:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(196, 149, 106, 0.4);
        }

        .btn-icon {
          font-size: 1rem;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 12px;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .navbar-custom.light .mobile-menu-btn {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background: #FFFFFF;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar-custom.light .hamburger-line {
          background: #1C1C1C;
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2001;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 85%;
          max-width: 320px;
          background: #0F0F0F;
          z-index: 2002;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .mobile-menu.light {
          background: #FFFFFF;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 24px;
        }

        .mobile-menu.light .mobile-menu-header {
          border-color: rgba(0, 0, 0, 0.1);
        }

        .mobile-menu .nav-brand {
          font-size: 1.3rem;
        }

        .mobile-menu.light .nav-brand {
          color: #1C1C1C;
        }

        .mobile-menu-close {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 10px;
          color: #FFFFFF;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .mobile-menu.light .mobile-menu-close {
          background: rgba(0, 0, 0, 0.05);
          color: #1C1C1C;
        }

        .mobile-menu-links {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-menu-links a {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .mobile-menu-links a:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #C4956A;
        }

        .mobile-menu.light .mobile-menu-links a {
          color: #1C1C1C;
        }

        .mobile-menu.light .mobile-menu-links a:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .menu-icon {
          font-size: 1.2rem;
        }

        .mobile-menu-footer {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-menu.light .mobile-menu-footer {
          border-color: rgba(0, 0, 0, 0.1);
        }

        .btn-primary-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: linear-gradient(135deg, #C4956A 0%, #A67C52 100%);
          color: white;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
        }

        .theme-toggle-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
        }

        .mobile-menu.light .theme-toggle-mobile {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.1);
          color: #1C1C1C;
        }
      `}</style>
    </>
  );
}