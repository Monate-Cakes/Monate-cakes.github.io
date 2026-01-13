// pages/entrepreneur-signup.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function EntrepreneurSignup({ theme, setTheme }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',

    // Business Information
    businessName: '',
    yearsExperience: '',
    specialty: '',
    otherSpecialty: '',
    weeklyCapacity: '',

    // Location
    province: '',
    city: '',
    suburb: '',
    deliveryRadius: '',

    // Portfolio & Social
    portfolioImages: [],
    instagramHandle: '',
    facebookPage: '',
    websiteUrl: '',

    // Additional Details
    certificationsTraining: '',
    whyJoin: '',
    hearAboutUs: '',
    agreedToTerms: false,
  });

  // Prefill data from careers page
  useEffect(() => {
    const savedData = sessionStorage.getItem('bakerApplication');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(prev => ({
        ...prev,
        fullName: parsed.fullName || '',
        email: parsed.email || '',
        phone: parsed.phone || '',
        city: parsed.city || '',
        specialty: parsed.specialty || '',
      }));
      sessionStorage.removeItem('bakerApplication');
    }
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const stepTitles = [
    'Personal Details',
    'Business Information',
    'Location & Delivery',
    'Portfolio & Submit'
  ];

  if (submitSuccess) {
    return (
      <>
        <Head>
          <title>Application Submitted | Monate Cakes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Navbar theme={theme} setTheme={setTheme} />

        <section className="success-section">
          <div className="success-container">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h1>Application Submitted!</h1>
            <p>Thank you for applying to join the Monate Cakes baker network. Our team will review your application and contact you within 48 hours.</p>
            <div className="success-details">
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <span>Confirmation email sent to <strong>{formData.email}</strong></span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📱</span>
                <span>We'll call you at <strong>{formData.phone}</strong></span>
              </div>
            </div>
            <div className="success-actions">
              <Link href="/" className="btn-primary">
                <span>Back to Home</span>
              </Link>
              <Link href="/partners" className="btn-ghost">
                <span>Explore Our Bakers</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />

        <style jsx>{`
          .success-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 120px 20px 80px;
            background: linear-gradient(165deg, #0F0F0F 0%, #1A1A2E 50%, #1F1F35 100%);
          }

          .success-container {
            max-width: 520px;
            text-align: center;
            animation: fadeUp 0.6s ease;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .success-icon {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(139, 154, 125, 0.2) 0%, rgba(139, 154, 125, 0.1) 100%);
            border-radius: 50%;
            margin: 0 auto 32px;
            color: #8B9A7D;
          }

          h1 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.5rem;
            font-weight: 500;
            color: #FFFFFF;
            margin-bottom: 16px;
          }

          p {
            font-family: 'Outfit', sans-serif;
            font-size: 1.05rem;
            color: rgba(255, 255, 255, 0.65);
            line-height: 1.7;
            margin-bottom: 32px;
          }

          .success-details {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 32px;
          }

          .detail-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            padding: 8px 0;
          }

          .detail-item strong {
            color: #FFFFFF;
          }

          .success-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .btn-primary {
            display: inline-flex;
            align-items: center;
            padding: 14px 28px;
            background: linear-gradient(135deg, #C4956A 0%, #A67C52 100%);
            color: #FFFFFF;
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(196, 149, 106, 0.3);
          }

          .btn-ghost {
            display: inline-flex;
            align-items: center;
            padding: 14px 28px;
            background: transparent;
            color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-weight: 500;
            font-size: 0.95rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .btn-ghost:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          @media (max-width: 480px) {
            .success-actions {
              flex-direction: column;
            }

            .btn-primary, .btn-ghost {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Baker Application | Monate Cakes</title>
        <meta name="description" content="Complete your application to join South Africa's premier home baker network." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar theme={theme} setTheme={setTheme} />

      <section className="signup-section">
        <div className="signup-bg">
          <div className="bg-gradient"></div>
          <div className="bg-grain"></div>
        </div>

        <div className="container">
          {/* Progress Header */}
          <div className="progress-header animate-on-scroll animate-fade-up">
            <Link href="/careers" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>Back to Careers</span>
            </Link>

            <div className="progress-tracker">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}>
                  <div className="step-dot">
                    {currentStep > step ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <span>{step}</span>
                    )}
                  </div>
                  <span className="step-label">{stepTitles[step - 1]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="form-container animate-on-scroll animate-fade-up">
            <div className="form-header">
              <span className="form-step-indicator">Step {currentStep} of 4</span>
              <h1>{stepTitles[currentStep - 1]}</h1>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="form-step">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Your full legal name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
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
                      <label htmlFor="phone">Phone Number <span className="required">*</span></label>
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
                      <label htmlFor="idNumber">ID Number <span className="optional">(Optional)</span></label>
                      <input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        placeholder="For verification purposes"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                      />
                      <span className="field-hint">Required only for payment processing setup</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Information */}
              {currentStep === 2 && (
                <div className="form-step">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="businessName">Business / Brand Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        placeholder="e.g., Sweet Delights Bakery"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="yearsExperience">Years of Experience <span className="required">*</span></label>
                      <select
                        id="yearsExperience"
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="less-1">Less than 1 year</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="specialty">Primary Specialty <span className="required">*</span></label>
                      <select
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select your specialty</option>
                        <option value="wedding-cakes">Wedding & Celebration Cakes</option>
                        <option value="cupcakes">Cupcakes & Small Treats</option>
                        <option value="traditional">Traditional South African Bakes</option>
                        <option value="artisan-bread">Artisan Breads</option>
                        <option value="pastries">Pastries & Desserts</option>
                        <option value="custom">Custom & Specialty Orders</option>
                        <option value="vegan-gluten">Vegan & Gluten-Free</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="weeklyCapacity">Weekly Order Capacity <span className="required">*</span></label>
                      <select
                        id="weeklyCapacity"
                        name="weeklyCapacity"
                        value={formData.weeklyCapacity}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select capacity</option>
                        <option value="1-5">1-5 orders</option>
                        <option value="6-10">6-10 orders</option>
                        <option value="11-20">11-20 orders</option>
                        <option value="21-50">21-50 orders</option>
                        <option value="50+">50+ orders</option>
                      </select>
                    </div>
                  </div>

                  {formData.specialty === 'other' && (
                    <div className="form-group">
                      <label htmlFor="otherSpecialty">Please describe your specialty</label>
                      <input
                        type="text"
                        id="otherSpecialty"
                        name="otherSpecialty"
                        placeholder="Describe your baking specialty"
                        value={formData.otherSpecialty}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="certificationsTraining">Certifications & Training <span className="optional">(Optional)</span></label>
                    <textarea
                      id="certificationsTraining"
                      name="certificationsTraining"
                      placeholder="List any food safety certifications, culinary training, or relevant qualifications..."
                      value={formData.certificationsTraining}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Location & Delivery */}
              {currentStep === 3 && (
                <div className="form-step">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="province">Province <span className="required">*</span></label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select province</option>
                        <option value="gauteng">Gauteng</option>
                        <option value="western-cape">Western Cape</option>
                        <option value="kwazulu-natal">KwaZulu-Natal</option>
                        <option value="eastern-cape">Eastern Cape</option>
                        <option value="free-state">Free State</option>
                        <option value="limpopo">Limpopo</option>
                        <option value="mpumalanga">Mpumalanga</option>
                        <option value="north-west">North West</option>
                        <option value="northern-cape">Northern Cape</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City / Town <span className="required">*</span></label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="e.g., Johannesburg, Cape Town"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="suburb">Suburb / Area <span className="required">*</span></label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        placeholder="e.g., Sandton, Gardens"
                        value={formData.suburb}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="deliveryRadius">Delivery Radius <span className="required">*</span></label>
                      <select
                        id="deliveryRadius"
                        name="deliveryRadius"
                        value={formData.deliveryRadius}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select delivery radius</option>
                        <option value="pickup-only">Pickup Only</option>
                        <option value="5km">Within 5km</option>
                        <option value="10km">Within 10km</option>
                        <option value="20km">Within 20km</option>
                        <option value="30km">Within 30km</option>
                        <option value="citywide">Citywide</option>
                        <option value="nationwide">Nationwide Shipping</option>
                      </select>
                    </div>
                  </div>

                  <div className="info-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    <p>Your location helps us connect you with nearby customers. You can update your delivery areas at any time after joining.</p>
                  </div>
                </div>
              )}

              {/* Step 4: Portfolio & Submit */}
              {currentStep === 4 && (
                <div className="form-step">
                  <div className="form-group">
                    <label>Social Media & Portfolio Links <span className="optional">(At least one recommended)</span></label>
                    <div className="social-inputs">
                      <div className="social-input">
                        <span className="social-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="instagramHandle"
                          placeholder="Instagram username"
                          value={formData.instagramHandle}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <span className="social-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="facebookPage"
                          placeholder="Facebook page URL"
                          value={formData.facebookPage}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <span className="social-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                        </span>
                        <input
                          type="url"
                          name="websiteUrl"
                          placeholder="Website URL (if any)"
                          value={formData.websiteUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="whyJoin">Why do you want to join Monate Cakes? <span className="required">*</span></label>
                    <textarea
                      id="whyJoin"
                      name="whyJoin"
                      placeholder="Tell us about your baking journey and what you hope to achieve with us..."
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hearAboutUs">How did you hear about us?</label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                    >
                      <option value="">Select an option</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend or Family</option>
                      <option value="google">Google Search</option>
                      <option value="existing-baker">Existing Monate Baker</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="terms-checkbox">
                    <input
                      type="checkbox"
                      id="agreedToTerms"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="agreedToTerms">
                      I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a>, and confirm that all information provided is accurate.
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button type="button" className="btn-back" onClick={prevStep}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Previous</span>
                  </button>
                )}

                {currentStep < 4 ? (
                  <button type="button" className="btn-next" onClick={nextStep}>
                    <span>Continue</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting || !formData.agreedToTerms}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Support Info */}
          <div className="support-info animate-on-scroll animate-fade-up">
            <p>Need help? Contact us at <a href="mailto:support@monatecakes.co.za">support@monatecakes.co.za</a></p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* ========================================
           SIGNUP PAGE STYLES
           ======================================== */
        .signup-section {
          min-height: 100vh;
          position: relative;
          padding: 100px 0 60px;
          background: #0F0F0F;
        }

        .signup-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(165deg, #0F0F0F 0%, #1A1A2E 40%, #1F1F35 100%);
        }

        .bg-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }

        .container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Progress Header */
        .progress-header {
          margin-bottom: 40px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          text-decoration: none;
          margin-bottom: 32px;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .progress-tracker {
          display: flex;
          justify-content: space-between;
          position: relative;
        }

        .progress-tracker::before {
          content: '';
          position: absolute;
          top: 16px;
          left: 24px;
          right: 24px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 1;
        }

        .step-dot {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.4);
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .progress-step.active .step-dot {
          background: rgba(196, 149, 106, 0.2);
          border-color: #C4956A;
          color: #C4956A;
        }

        .progress-step.current .step-dot {
          background: #C4956A;
          border-color: #C4956A;
          color: #FFFFFF;
          box-shadow: 0 0 20px rgba(196, 149, 106, 0.4);
        }

        .step-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-align: center;
          display: none;
        }

        @media (min-width: 640px) {
          .step-label {
            display: block;
          }
        }

        .progress-step.active .step-label {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Form Container */
        .form-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px 24px;
          backdrop-filter: blur(20px);
        }

        @media (min-width: 640px) {
          .form-container {
            padding: 48px 40px;
          }
        }

        .form-header {
          margin-bottom: 32px;
        }

        .form-step-indicator {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: #C4956A;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .form-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 500;
          color: #FFFFFF;
          margin-top: 8px;
        }

        /* Form Elements */
        .form-step {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
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

        .form-group label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
        }

        .required {
          color: #E57373;
        }

        .optional {
          font-weight: 400;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.85rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          color: #FFFFFF;
          transition: all 0.2s ease;
          -webkit-appearance: none;
          appearance: none;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #C4956A;
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group select {
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 18px center;
          padding-right: 48px;
        }

        .form-group select option {
          background: #1A1A2E;
          color: #FFFFFF;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .field-hint {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
        }

        /* Social Inputs */
        .social-inputs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-input {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .social-input:focus-within {
          border-color: #C4956A;
          background: rgba(255, 255, 255, 0.08);
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
        }

        .social-input input {
          flex: 1;
          padding: 14px 16px 14px 0;
          background: transparent;
          border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          color: #FFFFFF;
        }

        .social-input input:focus {
          outline: none;
        }

        /* Info Card */
        .info-card {
          display: flex;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(139, 154, 125, 0.1);
          border: 1px solid rgba(139, 154, 125, 0.2);
          border-radius: 12px;
          color: #8B9A7D;
        }

        .info-card svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .info-card p {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Terms Checkbox */
        .terms-checkbox {
          display: flex;
          gap: 14px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          margin-top: 8px;
        }

        .terms-checkbox input[type="checkbox"] {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          accent-color: #C4956A;
          cursor: pointer;
        }

        .terms-checkbox label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          cursor: pointer;
        }

        .terms-checkbox label a {
          color: #C4956A;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        /* Form Navigation */
        .form-navigation {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-back:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
        }

        .btn-next,
        .btn-submit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #C4956A 0%, #A67C52 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-left: auto;
          box-shadow: 0 4px 20px rgba(196, 149, 106, 0.25);
        }

        .btn-next:hover,
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(196, 149, 106, 0.35);
        }

        .btn-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-submit.submitting {
          background: rgba(196, 149, 106, 0.6);
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

        /* Support Info */
        .support-info {
          text-align: center;
          margin-top: 32px;
        }

        .support-info p {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .support-info a {
          color: #C4956A;
          text-decoration: none;
        }

        .support-info a:hover {
          text-decoration: underline;
        }

        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Optimizations */
        @media (max-width: 480px) {
          .signup-section {
            padding: 90px 0 40px;
          }

          .form-container {
            padding: 24px 20px;
            border-radius: 20px;
          }

          .form-navigation {
            flex-direction: column-reverse;
          }

          .btn-back,
          .btn-next,
          .btn-submit {
            width: 100%;
            justify-content: center;
          }

          .btn-next,
          .btn-submit {
            margin-left: 0;
          }

          .progress-tracker::before {
            left: 16px;
            right: 16px;
          }
        }

        /* Touch-friendly for mobile */
        @media (hover: none) {
          .btn-next:hover,
          .btn-submit:hover:not(:disabled),
          .btn-back:hover {
            transform: none;
          }

          .btn-next:active,
          .btn-submit:active:not(:disabled) {
            transform: scale(0.98);
          }
        }

        /* Safe area for notched devices */
        @supports (padding: max(0px)) {
          .signup-section {
            padding-top: max(100px, env(safe-area-inset-top) + 80px);
            padding-bottom: max(60px, env(safe-area-inset-bottom) + 40px);
          }
        }
      `}</style>
    </>
  );
}
