// pages/partners.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { partnersData, getPartnerBySlug } from '../data/partnersData';

// Star Rating Component
const StarRating = ({ rating, interactive = false, onChange }) => {
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="star-rating">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          className={`star ${star <= (hover || rating) ? 'filled' : ''}`}
          onClick={() => interactive && onChange && onChange(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
          disabled={!interactive}
        >
          {star <= (hover || rating) ? '★' : '☆'}
        </button>
      ))}
      <style jsx>{`
        .star-rating { display: flex; gap: 4px; }
        .star {
          background: none;
          border: none;
          padding: 0;
          cursor: ${interactive ? 'pointer' : 'default'};
          font-size: 1.2rem;
          color: #374151;
          transition: transform 0.2s;
        }
        .star.filled { color: #fbbf24; }
        .star:hover:not(:disabled) { transform: scale(1.2); }
      `}</style>
    </div>
  );
};

// Partner Modal Component
const PartnerModal = ({ partner, onClose, reviews, onAddReview, theme }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({ rating: 0, author: '', text: '' });

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!partner) return null;

  const allReviews = [...(partner.reviews || []), ...reviews];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewData.rating === 0 || !reviewData.author.trim() || !reviewData.text.trim()) return;
    onAddReview(partner.id, {
      ...reviewData,
      date: new Date().toISOString().split('T')[0]
    });
    setReviewData({ rating: 0, author: '', text: '' });
    setShowReviewForm(false);
  };

  return (
    <div className={`modal-overlay ${theme}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-hero">
          <img src={partner.image} alt={partner.name} />
          <div className="modal-hero-overlay"></div>
          <div className="modal-hero-content">
            <div className="modal-rating">
              <span>⭐</span>
              <span>{partner.rating}</span>
              <span className="review-count">({allReviews.length} reviews)</span>
            </div>
            <h2>{partner.name}</h2>
            <p className="modal-location">📍 {partner.suburb}, {partner.city}</p>
          </div>
        </div>

        <div className="modal-scrollable">
          <div className="modal-tabs">
            {['about', 'menu', 'reviews', 'contact'].map(tab => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'reviews' ? `Reviews (${allReviews.length})` : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="modal-body">
          {activeTab === 'about' && (
            <div className="tab-content">
              <div className="about-section">
                <h3>Our Story</h3>
                <p>{partner.about}</p>
              </div>
              <div className="specialties-section">
                <h3>Specialties</h3>
                <div className="specialty-tags">
                  {partner.specialties.map((spec, idx) => (
                    <span key={idx} className="specialty-tag">{spec}</span>
                  ))}
                </div>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div>
                    <span className="info-label">Delivery Time</span>
                    <span className="info-value">{partner.deliveryTime}</span>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">💰</span>
                  <div>
                    <span className="info-label">Price Range</span>
                    <span className="info-value">{partner.priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className="tab-content">
              <h3>Our Offerings</h3>
              <div className="offerings-list">
                {partner.offerings.map((item, idx) => (
                  <div key={idx} className="offering-item">
                    <div className="offering-info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <span className="offering-price">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="menu-note">
                <span>ℹ️</span> Contact us for custom orders and special requests
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-content">
              <div className="reviews-header">
                <h3>Customer Reviews</h3>
                {!showReviewForm && (
                  <button className="btn-write-review" onClick={() => setShowReviewForm(true)}>
                    ✏️ Write a Review
                  </button>
                )}
              </div>

              {showReviewForm && (
                <form className="review-form" onSubmit={handleReviewSubmit}>
                  <h4>Write a Review</h4>
                  <div className="form-group">
                    <label>Your Rating</label>
                    <StarRating
                      rating={reviewData.rating}
                      interactive
                      onChange={(r) => setReviewData(prev => ({ ...prev, rating: r }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Your Name</label>
                    <input
                      type="text"
                      id="author"
                      value={reviewData.author}
                      onChange={(e) => setReviewData(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="review">Your Review</label>
                    <textarea
                      id="review"
                      value={reviewData.text}
                      onChange={(e) => setReviewData(prev => ({ ...prev, text: e.target.value }))}
                      placeholder="Share your experience..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-cancel" onClick={() => setShowReviewForm(false)}>Cancel</button>
                    <button type="submit" className="btn-submit-review" disabled={reviewData.rating === 0}>Submit Review</button>
                  </div>
                </form>
              )}

              <div className="reviews-list">
                {allReviews.length === 0 ? (
                  <div className="no-reviews">
                    <span className="no-reviews-icon">💬</span>
                    <p>No reviews yet. Be the first to review!</p>
                  </div>
                ) : (
                  allReviews.map((review, idx) => (
                    <div key={idx} className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">{review.author.charAt(0)}</div>
                          <div>
                            <span className="reviewer-name">{review.author}</span>
                            <span className="review-date">{review.date}</span>
                          </div>
                        </div>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="tab-content">
              <h3>Get in Touch</h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${partner.email}`}>{partner.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <a href={`https://wa.me/27${partner.phone}`}>+27 {partner.phone}</a>
                  </div>
                </div>
              </div>

              <div className="hours-section">
                <h4>Business Hours</h4>
                <div className="hours-grid">
                  {Object.entries(partner.hours).map(([day, hours]) => (
                    <div key={day} className="hours-row">
                      <span className="day">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                      <span className={`hours ${hours === 'Closed' ? 'closed' : ''}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/27${partner.phone}?text=Hi! I found you on Monate Cakes and would like to enquire about your baking services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-large"
              >
                💬 Contact on WhatsApp
              </a>
            </div>
          )}
        </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .modal-content {
          background: var(--bg-card, #111111);
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
          border-radius: 24px;
          width: 100%;
          max-width: 700px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .modal-scrollable {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          min-height: 0;
          position: relative;
        }

        .modal-overlay.light .modal-content {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.1);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          font-size: 1rem;
        }

        .modal-hero {
          position: relative;
          height: 280px;
          overflow: hidden;
          border-radius: 24px 24px 0 0;
          background: #1a1a1a;
          flex-shrink: 0;
        }

        .modal-hero img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .modal-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        .modal-hero-content {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
        }

        .modal-rating {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .review-count {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
        }

        .modal-hero-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
        }

        .modal-location {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .modal-tabs {
          display: flex;
          border-bottom: 2px solid var(--border-color, rgba(255, 255, 255, 0.15));
          padding: 0 24px;
          overflow-x: auto;
          background: var(--bg-card, #111111);
          position: sticky;
          top: 0;
          z-index: 100;
          flex-shrink: 0;
          gap: 8px;
        }

        .modal-overlay.light .modal-tabs {
          background: #F9F9F9;
          border-color: rgba(0, 0, 0, 0.1);
        }

        .tab {
          padding: 16px 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .tab:hover {
          color: rgba(255, 255, 255, 0.95);
        }

        .modal-overlay.light .tab {
          color: #7A7A7A;
        }

        .tab.active {
          color: #D4A574;
        }

        .tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #D4A574;
        }

        .modal-body {
          padding: 24px;
          flex: 1 1 auto;
          min-height: 0;
        }

        .tab-content h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary, white);
          margin-bottom: 20px;
        }

        .modal-overlay.light .tab-content h3 {
          color: #1C1C1C;
        }

        .about-section {
          margin-bottom: 32px;
        }

        .about-section p {
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
          line-height: 1.8;
        }

        .modal-overlay.light .about-section p {
          color: #4A4A4A;
        }

        .specialty-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }

        .specialty-tag {
          padding: 10px 20px;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 50px;
          color: #D4A574;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--bg-secondary, rgba(255, 255, 255, 0.03));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
          border-radius: 12px;
        }

        .modal-overlay.light .info-item {
          background: #F9F9F9;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .info-icon {
          font-size: 1.5rem;
        }

        .info-label {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted, rgba(255, 255, 255, 0.5));
          margin-bottom: 4px;
        }

        .modal-overlay.light .info-label {
          color: #7A7A7A;
        }

        .info-value {
          display: block;
          color: var(--text-primary, white);
          font-weight: 600;
        }

        .modal-overlay.light .info-value {
          color: #1C1C1C;
        }

        .offerings-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .offering-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          background: var(--bg-secondary, rgba(255, 255, 255, 0.03));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
          border-radius: 12px;
        }

        .modal-overlay.light .offering-item {
          background: #F9F9F9;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .offering-info h4 {
          color: var(--text-primary, white);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .modal-overlay.light .offering-info h4 {
          color: #1C1C1C;
        }

        .offering-info p {
          color: var(--text-muted, rgba(255, 255, 255, 0.5));
          font-size: 0.9rem;
        }

        .modal-overlay.light .offering-info p {
          color: #7A7A7A;
        }

        .offering-price {
          color: #D4A574;
          font-weight: 700;
          font-size: 1rem;
        }

        .menu-note {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          padding: 16px;
          background: rgba(212, 165, 116, 0.1);
          border-radius: 10px;
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
          font-size: 0.9rem;
        }

        .modal-overlay.light .menu-note {
          color: #4A4A4A;
        }

        .reviews-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .btn-write-review {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid rgba(212, 165, 116, 0.3);
          border-radius: 10px;
          color: #D4A574;
          font-weight: 500;
          cursor: pointer;
        }

        .review-form {
          background: var(--bg-secondary, rgba(255, 255, 255, 0.05));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .modal-overlay.light .review-form {
          background: #F9F9F9;
          border-color: rgba(0, 0, 0, 0.1);
        }

        .review-form h4 {
          color: var(--text-primary, white);
          margin-bottom: 20px;
          font-family: 'Cormorant Garamond', serif;
        }

        .modal-overlay.light .review-form h4 {
          color: #1C1C1C;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .modal-overlay.light .form-group label {
          color: #4A4A4A;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          background: var(--bg-card, rgba(0, 0, 0, 0.3));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
          border-radius: 10px;
          color: var(--text-primary, white);
          font-size: 1rem;
          font-family: inherit;
        }

        .modal-overlay.light .form-group input,
        .modal-overlay.light .form-group textarea {
          background: white;
          border-color: rgba(0, 0, 0, 0.1);
          color: #1C1C1C;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #D4A574;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }

        .btn-cancel {
          padding: 12px 24px;
          background: transparent;
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.2));
          border-radius: 10px;
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
          font-weight: 500;
          cursor: pointer;
        }

        .modal-overlay.light .btn-cancel {
          border-color: rgba(0, 0, 0, 0.2);
          color: #4A4A4A;
        }

        .btn-submit-review {
          padding: 12px 24px;
          background: linear-gradient(135deg, #D4A574 0%, #A67C52 100%);
          border: none;
          border-radius: 10px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-submit-review:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-item {
          padding: 20px;
          background: var(--bg-secondary, rgba(255, 255, 255, 0.03));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
          border-radius: 12px;
        }

        .modal-overlay.light .review-item {
          background: #F9F9F9;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .reviewer-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4A574 0%, #A67C52 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .reviewer-name {
          display: block;
          color: var(--text-primary, white);
          font-weight: 600;
        }

        .modal-overlay.light .reviewer-name {
          color: #1C1C1C;
        }

        .review-date {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted, rgba(255, 255, 255, 0.4));
        }

        .modal-overlay.light .review-date {
          color: #7A7A7A;
        }

        .review-text {
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .modal-overlay.light .review-text {
          color: #4A4A4A;
        }

        .no-reviews {
          text-align: center;
          padding: 40px;
          color: var(--text-muted, rgba(255, 255, 255, 0.5));
        }

        .modal-overlay.light .no-reviews {
          color: #7A7A7A;
        }

        .no-reviews-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 16px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--bg-secondary, rgba(255, 255, 255, 0.03));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
          border-radius: 12px;
        }

        .modal-overlay.light .contact-item {
          background: #F9F9F9;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .contact-icon {
          font-size: 1.5rem;
        }

        .contact-label {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted, rgba(255, 255, 255, 0.5));
          margin-bottom: 4px;
        }

        .modal-overlay.light .contact-label {
          color: #7A7A7A;
        }

        .contact-item a {
          color: var(--text-primary, white);
          text-decoration: none;
          font-weight: 500;
        }

        .modal-overlay.light .contact-item a {
          color: #1C1C1C;
        }

        .hours-section {
          margin-bottom: 32px;
        }

        .hours-section h4 {
          color: var(--text-primary, white);
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .modal-overlay.light .hours-section h4 {
          color: #1C1C1C;
        }

        .hours-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--bg-secondary, rgba(255, 255, 255, 0.02));
          border-radius: 8px;
        }

        .modal-overlay.light .hours-row {
          background: #F9F9F9;
        }

        .day {
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
        }

        .modal-overlay.light .day {
          color: #4A4A4A;
        }

        .hours {
          color: var(--text-primary, white);
          font-weight: 500;
        }

        .modal-overlay.light .hours {
          color: #1C1C1C;
        }

        .hours.closed {
          color: #ef4444;
        }

        .btn-whatsapp-large {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 18px;
          background: #25d366;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .modal-overlay {
            padding: 0;
            align-items: flex-start;
          }

          .modal-content {
            border-radius: 16px;
            max-height: 100vh;
            height: 100vh;
          }

          .modal-hero {
            height: 200px;
          }

          .modal-hero-content h2 {
            font-size: 1.5rem;
          }

          .modal-scrollable {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
          }

          .modal-tabs {
            padding: 0 12px;
            scrollbar-width: none;
            background: #111111;
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 2px solid rgba(212, 165, 116, 0.3);
            gap: 0;
          }

          .modal-overlay.light .modal-tabs {
            background: #F9F9F9;
          }

          .modal-tabs::-webkit-scrollbar {
            display: none;
          }

          .modal-body {
            padding: 20px 16px;
            -webkit-overflow-scrolling: touch;
          }

          .tab {
            padding: 14px 12px;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 600;
          }

          .tab.active {
            color: #D4A574;
          }

          .info-grid, .contact-grid {
            grid-template-columns: 1fr;
          }

          .review-header {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

// Partner Card Component
const PartnerCard = ({ partner, onClick, theme }) => {
  return (
    <div className={`partner-card ${theme}`} onClick={onClick}>
      <div className="partner-image">
        <img src={partner.image} alt={partner.name} />
        <div className="partner-rating">
          <span>⭐</span>
          <span>{partner.rating}</span>
        </div>
        <div className="partner-overlay">
          <span className="view-text">View Profile</span>
        </div>
      </div>
      <div className="partner-content">
        <h3>{partner.name}</h3>
        <p className="partner-location">📍 {partner.suburb}, {partner.city}</p>
        <p className="partner-desc">{partner.shortDesc}</p>
        <div className="partner-tags">
          {partner.specialties.slice(0, 3).map((spec, idx) => (
            <span key={idx} className="tag">{spec}</span>
          ))}
        </div>
        <div className="partner-meta">
          <span className="price">{partner.priceRange}</span>
          <span className="reviews">{partner.reviewCount} reviews</span>
        </div>
      </div>

      <style jsx>{`
        .partner-card {
          background: var(--bg-card, rgba(255, 255, 255, 0.03));
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .partner-card.light {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .partner-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 165, 116, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .partner-card.light:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .partner-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #1a1a1a;
        }

        .partner-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .partner-card:hover .partner-image img {
          transform: scale(1.05);
        }

        .partner-rating {
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
          z-index: 2;
        }

        .partner-overlay {
          position: absolute;
          inset: 0;
          background: rgba(212, 165, 116, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .partner-card:hover .partner-overlay {
          opacity: 1;
        }

        .view-text {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .partner-content {
          padding: 24px;
        }

        .partner-content h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary, #ffffff);
          margin-bottom: 8px;
        }

        .partner-card.light .partner-content h3 {
          color: #1C1C1C;
        }

        .partner-location {
          font-size: 0.9rem;
          color: var(--text-muted, rgba(255, 255, 255, 0.5));
          margin-bottom: 12px;
        }

        .partner-card.light .partner-location {
          color: #7A7A7A;
        }

        .partner-desc {
          font-size: 0.95rem;
          color: var(--text-secondary, rgba(255, 255, 255, 0.7));
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .partner-card.light .partner-desc {
          color: #4A4A4A;
        }

        .partner-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .tag {
          padding: 6px 14px;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid rgba(212, 165, 116, 0.2);
          border-radius: 50px;
          font-size: 0.8rem;
          color: #D4A574;
        }

        .partner-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
        }

        .partner-card.light .partner-meta {
          border-color: rgba(0, 0, 0, 0.08);
        }

        .price {
          font-weight: 600;
          color: var(--text-primary, #ffffff);
        }

        .partner-card.light .price {
          color: #1C1C1C;
        }

        .reviews {
          font-size: 0.9rem;
          color: var(--text-muted, rgba(255, 255, 255, 0.5));
        }

        .partner-card.light .reviews {
          color: #7A7A7A;
        }
      `}</style>
    </div>
  );
};

// Main Partners Page
export default function Partners({ theme, setTheme }) {
  const router = useRouter();
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [userReviews, setUserReviews] = useState({});

  useEffect(() => {
    if (router.query.baker) {
      const partner = getPartnerBySlug(router.query.baker);
      if (partner) setSelectedPartner(partner);
    }
  }, [router.query.baker]);

  const handleAddReview = (partnerId, review) => {
    setUserReviews(prev => ({
      ...prev,
      [partnerId]: [...(prev[partnerId] || []), review]
    }));
  };

  const filteredPartners = partnersData.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === 'all' || partner.specialties.some(s => s.toLowerCase().includes(filter.toLowerCase()));
    return matchesSearch && matchesFilter;
  });

  const specialtyFilters = ['all', 'cakes', 'cupcakes', 'scones', 'traditional', 'wedding'];

  return (
    <>
      <Head>
        <title>Our Bakers | Monate Cakes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme === 'dark' ? '#0F0F0F' : '#FDF8F3'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={`page-wrapper ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="partners-page">
          <div className="container">
            <div className="page-header">
              <Link href="/" className="back-link">← Back to Home</Link>
              <h1>Our Bakers</h1>
              <p>Discover talented home bakers ready to make your celebrations special</p>
            </div>

            <div className="filter-bar">
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search bakers or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-tags">
                {specialtyFilters.map(f => (
                  <button
                    key={f}
                    className={`filter-tag ${filter === f ? 'active' : ''}`}
                    onClick={() => setFilter(f)}
                  >
                    {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="results-info">
              <span>{filteredPartners.length} baker{filteredPartners.length !== 1 ? 's' : ''} found</span>
            </div>

            {filteredPartners.length === 0 ? (
              <div className="no-results">
                <span className="no-results-icon">🔍</span>
                <h3>No bakers found</h3>
                <p>Try adjusting your search or filters</p>
                <button onClick={() => { setSearchTerm(''); setFilter('all'); }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="partners-grid">
                {filteredPartners.map(partner => (
                  <PartnerCard
                    key={partner.id}
                    partner={partner}
                    theme={theme}
                    onClick={() => setSelectedPartner(partner)}
                  />
                ))}
              </div>
            )}
          </div>
        </main>

        {selectedPartner && (
          <PartnerModal
            partner={selectedPartner}
            reviews={userReviews[selectedPartner.id] || []}
            theme={theme}
            onClose={() => {
              setSelectedPartner(null);
              if (router.query.baker) {
                router.push('/partners', undefined, { shallow: true });
              }
            }}
            onAddReview={handleAddReview}
          />
        )}

        <Footer />
      </div>

      <style jsx>{`
        .page-wrapper {
          --bg-primary: #FDF8F3;
          --bg-secondary: #FFFBF7;
          --bg-card: #FFFFFF;
          --text-primary: #1C1C1C;
          --text-secondary: #4A4A4A;
          --text-muted: #7A7A7A;
          --border-color: rgba(0, 0, 0, 0.08);
          --color-caramel: #C4956A;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Outfit', sans-serif;
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

        .partners-page {
          padding: 120px 0 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 24px;
          font-family: var(--font-body);
        }

        .back-link:hover {
          color: var(--color-caramel);
        }

        .page-header h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .page-header p {
          color: var(--text-muted);
          font-size: 1.1rem;
          font-family: var(--font-body);
        }

        .filter-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .search-wrapper {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
        }

        .search-wrapper input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-primary);
          font-size: 1rem;
          font-family: var(--font-body);
        }

        .search-wrapper input:focus {
          outline: none;
          border-color: var(--color-caramel);
        }

        .search-wrapper input::placeholder {
          color: var(--text-muted);
        }

        .filter-tags {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-tag {
          padding: 10px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.3s;
        }

        .filter-tag:hover {
          border-color: var(--color-caramel);
        }

        .filter-tag.active {
          background: rgba(212, 165, 116, 0.2);
          border-color: var(--color-caramel);
          color: var(--color-caramel);
        }

        .results-info {
          margin-bottom: 24px;
          color: var(--text-muted);
          font-size: 0.95rem;
          font-family: var(--font-body);
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
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
          display: block;
          margin-bottom: 24px;
        }

        .no-results h3 {
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-display);
        }

        .no-results p {
          color: var(--text-muted);
          margin-bottom: 24px;
          font-family: var(--font-body);
        }

        .no-results button {
          padding: 12px 24px;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid rgba(212, 165, 116, 0.3);
          border-radius: 10px;
          color: var(--color-caramel);
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
        }

        @media (max-width: 768px) {
          .partners-page {
            padding: 120px 0 60px;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}