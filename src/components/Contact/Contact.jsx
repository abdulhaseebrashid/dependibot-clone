import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'E-commerce Solutions',
    'Consulting & Strategy'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          {/* Header */}
          <div className="contact__header">
            <div className="contact__badge">Get In Touch</div>
            <h2 className="contact__title">
              Let's Connect and Build Something Amazing
            </h2>
            <p className="contact__description">
              Ready to transform your ideas into reality? We'd love to hear about your project 
              and discuss how we can help you achieve your digital goals.
            </p>
          </div>

          <div className="contact__wrapper">
            {/* Contact Info */}
            <div className="contact__info">
              <div className="contact__info-header">
                <h3>Why Choose Dependibot?</h3>
                <p>We're more than just developers - we're your technology partners.</p>
              </div>

              <div className="contact__benefits">
                <div className="benefit-item">
                  <div className="benefit-item__icon">🚀</div>
                  <div className="benefit-item__content">
                    <h4>Fast Delivery</h4>
                    <p>Quick turnaround times without compromising quality</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-item__icon">💡</div>
                  <div className="benefit-item__content">
                    <h4>Innovative Solutions</h4>
                    <p>Cutting-edge technology and creative problem-solving</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-item__icon">🤝</div>
                  <div className="benefit-item__content">
                    <h4>Dedicated Support</h4>
                    <p>24/7 support and ongoing maintenance for your projects</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-item__icon">🎯</div>
                  <div className="benefit-item__content">
                    <h4>Results-Driven</h4>
                    <p>Focused on delivering measurable business outcomes</p>
                  </div>
                </div>
              </div>

              <div className="contact__details">
                <div className="contact__detail">
                  <strong>Email:</strong> hello@dependibot.com
                </div>
                <div className="contact__detail">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </div>
                <div className="contact__detail">
                  <strong>Response Time:</strong> Within 24 hours
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact__form-wrapper">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <div className="form-submit">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    ✅ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;