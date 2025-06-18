import "./HowItWorks.css"

// Import SVG icons from the service-icons directory using your preferred pattern
import icon1 from "../../assets/images/icons/service-icons/icon1.svg"
import icon2 from "../../assets/images/icons/service-icons/icon2.svg"
import icon3 from "../../assets/images/icons/service-icons/icon3.svg"
import icon4 from "../../assets/images/icons/service-icons/icon4.svg"

// Import webp arrow images from the same directory (only 3 arrows needed)
import uparrow1 from "../../assets/images/icons/service-icons/uparrow1.webp"
import downarrow1 from "../../assets/images/icons/service-icons/downarrow1.webp"
import uparrow2 from "../../assets/images/icons/service-icons/uparrow2.webp"

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Ideas",
      description: "We brainstorm and refine innovative concepts to address client needs and market demands.",
      iconSrc: icon1,
    },
    {
      id: 2,
      title: "Design",
      description:
        "We create detailed and user-centric designs that lay the foundation for effective and engaging solutions.",
      iconSrc: icon2,
    },
    {
      id: 3,
      title: "Development",
      description: "Our expert team brings designs to life, developing the robust and scalable solutions for you.",
      iconSrc: icon3,
    },
    {
      id: 4,
      title: "Sustain",
      description: "We provide ongoing support & maintenance to ensure long-term success and continuous improvement.",
      iconSrc: icon4,
    },
  ]

  // Only 3 arrows needed (between 4 steps)
  const arrowImages = [uparrow1, downarrow1, uparrow2]

  // Fallback icon component for missing icons (same as your Expertise component)
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
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works__content">
          {/* Header */}
          <div className="how-it-works__header">
            <div className="how-it-works__badge">How it works</div>
            <h2 className="how-it-works__title">Our Strategy Is Your Success</h2>
          </div>

          {/* Process Steps */}
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={step.id} className="process-step">
                {/* Step Content */}
                <div className="step-content">
                  {/* Icon with fallback system like your Expertise component */}
                  <div className="step-icon">
                    <img
                      src={step.iconSrc || "/placeholder.svg"}
                      alt={`${step.title} Icon`}
                      className="step-icon-image"
                      onError={(e) => {
                        // Hide broken image and show fallback (same as your Expertise)
                        e.target.style.display = "none"
                        const fallback = e.target.nextElementSibling
                        if (fallback) fallback.style.display = "flex"
                      }}
                    />
                    <FallbackIcon title={step.title} />
                  </div>

                  {/* Step Info */}
                  <div className="step-info">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>

                {/* Arrow (only for first 3 steps, not the last one) */}
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <img
                      src={arrowImages[index] || "/placeholder.svg"}
                      alt="Arrow"
                      className="arrow-image"
                      onError={(e) => {
                        console.log(`Failed to load arrow: ${arrowImages[index]}`)
                        e.target.src = "/placeholder.svg"
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
