import "./WhyUs.css"

// Import all the SVG icons using your preferred pattern (same as Expertise)
import icon1 from "../../assets/images/icons/service-icons/icon1.svg"
import icon2 from "../../assets/images/icons/service-icons/icon2.svg"
import icon3 from "../../assets/images/icons/service-icons/icon3.svg"

const WhyUs = () => {
  const features = [
    {
      iconSrc: icon1,
      title: "Strategic-Partnership",
      description:
        "We don't just build software; we build partnerships. When you choose to work with us, you're gaining a strategic ally who is dedicated to your success. We listen, we understand, and we work hand in hand with you to achieve your digital goals.",
      fallbackText: "SP",
    },
    {
      iconSrc: icon2,
      title: "Innovation-at-the-Core",
      description:
        "Innovation is in our DNA. We constantly explore new technologies and methodologies to ensure that your digital solutions are always cutting-edge. When you work with us, you're tapping into a world of innovation that keeps you ahead of the competition.",
      fallbackText: "IC",
    },
    {
      iconSrc: icon3,
      title: "Results-Driven",
      description:
        "We are not satisfied until you see results. Our track record of delivering successful projects speaks for itself. From improved user experiences to increased efficiency and revenue growth, we measure our success by the impact we create for your business.",
      fallbackText: "RD",
    },
  ]

  // Improved fallback icon component (same as Expertise)
  const FallbackIcon = ({ text, title }) => (
    <div className="fallback-icon">
      <span className="fallback-icon-text" title={title}>
        {text}
      </span>
    </div>
  )

  // Handle image load error (same as Expertise)
  const handleImageError = (e, fallbackText, title) => {
    e.target.style.display = "none"
    const iconContainer = e.target.parentElement
    const fallbackDiv = iconContainer.querySelector(".fallback-icon")
    if (fallbackDiv) {
      fallbackDiv.style.display = "flex"
    }
  }

  return (
    <section className="why-us" id="why-us">
      <div className="why-us__background">
        <div className="container">
          <div className="why-us__content">
            {/* Header */}
            <div className="why-us__header">
              <h2 className="why-us__title">
                Why Work with <span className="highlight">Dependibot</span>
              </h2>
              <p className="why-us__subtitle">Your Vision, Our Code</p>
            </div>

            {/* Features List */}
            <div className="why-us__features">
              {features.map((feature, index) => (
                <div key={index} className="feature-block">
                  <div className="feature-block__icon">
                    <img
                      src={feature.iconSrc || "/placeholder.svg"}
                      alt={`${feature.title} Icon`}
                      className="feature-icon"
                      onLoad={(e) => {
                        // Image loaded successfully, hide fallback
                        const iconContainer = e.target.parentElement
                        const fallbackDiv = iconContainer.querySelector(".fallback-icon")
                        if (fallbackDiv) {
                          fallbackDiv.style.display = "none"
                        }
                      }}
                      onError={(e) => handleImageError(e, feature.fallbackText, feature.title)}
                    />
                    <FallbackIcon text={feature.fallbackText} title={feature.title} />
                  </div>
                  <div className="feature-block__content">
                    <h3 className="feature-block__title">{feature.title}</h3>
                    <p className="feature-block__description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
