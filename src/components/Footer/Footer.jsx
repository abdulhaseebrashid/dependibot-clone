import "./Footer.css"

// Import PNG images (logo and badge)
import logoImage from "../../assets/images/icons/social-icons/Dependibot-Logo.png"
import socBadgeImage from "../../assets/images/icons/social-icons/SOC-2-Certified.png"

// Import SVG icons (contact icons)
import callIcon from "../../assets/images/icons/social-icons/call.svg"
import mailIcon from "../../assets/images/icons/social-icons/mail.svg"
import locationIcon from "../../assets/images/icons/social-icons/location.svg"

// Import SVG social media icons
import facebookIcon from "../../assets/images/icons/social-icons/facebook.svg"
import instagramIcon from "../../assets/images/icons/social-icons/instagram.svg"
import xIcon from "../../assets/images/icons/social-icons/xIcon.svg"
import linkedinIcon from "../../assets/images/icons/social-icons/linkdin.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Fallback icon component for missing images (same as Expertise)
  const FallbackIcon = ({ title }) => (
    <div className="fallback-icon">
      <span className="fallback-icon-text">
        {title
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)}
      </span>
    </div>
  )

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Left Section - Logo and Badge */}
          <div className="footer__left">
            {/* Logo */}
            <div className="footer__logo">
              <img
                src={logoImage || "/placeholder.svg"}
                alt="Dependibot Logo"
                className="logo-image"
                onError={(e) => {
                  // Hide broken image and show fallback (same as Expertise)
                  e.target.style.display = "none"
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <FallbackIcon title="Dependibot" />
            </div>

            {/* SOC 2 Badge */}
            <div className="footer__badge">
              <img
                src={socBadgeImage || "/placeholder.svg"}
                alt="SOC 2 Certified"
                className="badge-image"
                onError={(e) => {
                  // Hide broken image and show fallback (same as Expertise)
                  e.target.style.display = "none"
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <FallbackIcon title="SOC 2" />
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="footer__middle">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer__right">
            <h3 className="footer__heading">Contact Us</h3>

            <div className="contact-info">
              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon">
                  <img
                    src={callIcon || "/placeholder.svg"}
                    alt="Phone Icon"
                    className="contact-icon-image"
                    onError={(e) => {
                      // Hide broken image and show fallback (same as Expertise)
                      e.target.style.display = "none"
                      const fallback = e.target.nextElementSibling
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  <FallbackIcon title="Phone" />
                </div>
                <div className="contact-details">
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+1 (501) 777-5761</div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <img
                    src={mailIcon || "/placeholder.svg"}
                    alt="Email Icon"
                    className="contact-icon-image"
                    onError={(e) => {
                      // Hide broken image and show fallback (same as Expertise)
                      e.target.style.display = "none"
                      const fallback = e.target.nextElementSibling
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  <FallbackIcon title="Email" />
                </div>
                <div className="contact-details">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">info@dependibot.com</div>
                </div>
              </div>

              {/* Locations */}
              <div className="contact-item">
                <div className="contact-icon">
                  <img
                    src={locationIcon || "/placeholder.svg"}
                    alt="Location Icon"
                    className="contact-icon-image"
                    onError={(e) => {
                      // Hide broken image and show fallback (same as Expertise)
                      e.target.style.display = "none"
                      const fallback = e.target.nextElementSibling
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  <FallbackIcon title="Location" />
                </div>
                <div className="contact-details">
                  <div className="contact-label">Locations</div>
                  <div className="contact-value">
                    Fayetteville, AR USA
                    <br />
                    Times Square, G8, Islamabad, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            Copyright © {currentYear} <span className="copyright-link">Dependibot</span> All rights reserved.
          </div>
          <div className="footer__social">
            <a href="#" className="social-link" aria-label="Facebook">
              <img
                src={facebookIcon || "/placeholder.svg"}
                alt="Facebook"
                className="social-icon-image"
                onError={(e) => {
                  // Hide broken image and show fallback (same as Expertise)
                  e.target.style.display = "none"
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <FallbackIcon title="Facebook" />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <img
                src={instagramIcon || "/placeholder.svg"}
                alt="Instagram"
                className="social-icon-image"
                onError={(e) => {
                  // Hide broken image and show fallback (same as Expertise)
                  e.target.style.display = "none"
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <FallbackIcon title="Instagram" />
            </a>
            <a href="#" className="social-link" aria-label="X (Twitter)">
              <img
                src={xIcon || "/placeholder.svg"}
                alt="X (Twitter)"
                className="social-icon-image"
                onError={(e) => {
                  // Hide broken image and show fallback (same as Expertise)
                  e.target.style.display = "none"
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <FallbackIcon title="X" />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <img
                src={linkedinIcon || "/placeholder.svg"}
                alt="LinkedIn"
                className="social-icon-image"
                onError={(e) => {
                  // Hide broken image and show fallback (same as Expertise)
                  e.target.style.display = "none"
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
              <FallbackIcon title="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
