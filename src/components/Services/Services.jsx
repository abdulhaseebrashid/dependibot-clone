import "./Services.css"

// Import tick icon from your social-icons directory
import tickIcon from "../../assets/images/icons/social-icons/tick.svg"

const Services = () => {
  // Fallback icon component for missing images (same as your other components)
  const FallbackIcon = ({ title }) => (
    <div className="fallback-icon">
      <span className="fallback-icon-text">✓</span>
    </div>
  )

  const features = [
    {
      title: "Custom Software Development:",
      description:
        "We create tailored software applications that align perfectly with your unique business needs, ensuring efficiency and productivity gains.",
    },
    {
      title: "Agile Development:",
      description:
        "Our iterative approach ensures flexibility and allows us to adapt quickly to evolving project requirements, delivering results on time and within budget.",
    },
    {
      title: "Security and Quality Assurance:",
      description:
        "Your data's safety is our priority. We implement rigorous security measures and conduct thorough quality testing to guarantee robust and secure software solutions. We are SOC 2 Compliant!",
    },
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content">
          {/* Left Side - Main Content */}
          <div className="services__main">
            <div className="services__header">
              <div className="services__badge">What We Do</div>
              <h2 className="services__title">Custom Software Development</h2>
            </div>

            <div className="services__description">
              <p>
                At Dependibot, we specialize in crafting cutting-edge software solutions that drive innovation and
                elevate businesses to new heights. Our expert team of developers and engineers is committed to
                delivering excellence in every line of code we write. With Dependibot, you're not just getting software;
                you're gaining a trusted partner dedicated to your success.
              </p>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="services__features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-item__icon">
                  <div className="checkmark-icon">
                    <img
                      src={tickIcon || "/placeholder.svg"}
                      alt="Checkmark"
                      className="tick-icon-image"
                      onError={(e) => {
                        // Hide broken image and show fallback (same as your other components)
                        e.target.style.display = "none"
                        const fallback = e.target.nextElementSibling
                        if (fallback) fallback.style.display = "flex"
                      }}
                    />
                    <FallbackIcon title="✓" />
                  </div>
                </div>
                <div className="feature-item__content">
                  <h3 className="feature-item__title">{feature.title}</h3>
                  <p className="feature-item__description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
