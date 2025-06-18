import "./About.css"

// Import SVG icon using your preferred pattern
import icon1 from "../../assets/images/icons/service-icons/aboutusIcon.webp"

const About = () => {
  // Fallback icon component (same as your other components)
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
    <section className="about" id="about">
      <div className="about__background">
        <div className="container">
          <div className="about__content">
            {/* Left Side - Blue Card */}
            <div className="about__card">
              <div className="about__card-icon">
                <img
                  src={icon1 || "/placeholder.svg"}
                  alt="Innovation Icon"
                  className="card-icon"
                  onError={(e) => {
                    // Hide broken image and show fallback (same as your other components)
                    e.target.style.display = "none"
                    const fallback = e.target.nextElementSibling
                    if (fallback) fallback.style.display = "flex"
                  }}
                />
                <FallbackIcon title="Innovation" />
              </div>
              <div className="about__card-text">
                <h3>
                  We're doing the
                  <br />
                  right thing.
                  <br />
                  The right way
                </h3>
              </div>
            </div>

            {/* Right Side - Header Only */}
            <div className="about__header">
              <div className="about__badge">About Us</div>
              <h2 className="about__title">
                Transforming <span className="highlight">Ideas</span> into Digital
                <br />
                Excellence
              </h2>
            </div>

            {/* Bottom Section - Description, Features, and CTA */}
            <div className="about__bottom">
              <div className="about__description">
                <p>
                  With more than 15 years of industry experience, Dependibot was born out of a passion for technology
                  and a desire to make a positive impact on the digital world. Over the years, we have grown into a
                  dynamic team of creative thinkers, problem solvers, and tech enthusiasts who are driven by a common
                  goal - to create exceptional code and digital experiences.
                </p>
              </div>

              <div className="about__features">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>We work with startups to large corporations</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>We can supplement your Tech team or be your Tech team</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>We can build, rebuild, or remodel your current systems</span>
                </div>
              </div>

              <div className="about__cta">
                <button className="btn btn--primary btn--large">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
