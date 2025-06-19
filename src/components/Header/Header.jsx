import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import companyLogo from '../../assets/images/backgrounds/company.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Careers', href: '#careers' },
    { name: 'Our Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <img 
              src={companyLogo || "/placeholder.svg"} 
              alt="Dependibot Logo"
              className="logo-image"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.name} className="nav__item">
                  <a href={item.href} className="nav__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header__cta">
            <button className="btn btn--primary btn--medium">
              Let's Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="header__mobile-menu">
            <nav className="mobile-nav">
              <ul className="mobile-nav__list">
                {navItems.map((item) => (
                  <li key={item.name} className="mobile-nav__item">
                    <a 
                      href={item.href} 
                      className="mobile-nav__link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-nav__cta">
                <button className="btn btn--primary btn--medium">
                  Let's Connect
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;