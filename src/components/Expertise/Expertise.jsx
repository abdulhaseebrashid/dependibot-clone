import React from 'react';
import './Expertise.css';

// Import all the SVG icons using your preferred pattern
import computerDevelopmentIcon from '../../assets/images/icons/service-icons/computerdevelopment.svg';
import businessAnalyticsIcon from '../../assets/images/icons/service-icons/business-analytics.svg';
import websiteDevelopmentIcon from '../../assets/images/icons/service-icons/website-development.svg';
import qualityAssuranceIcon from '../../assets/images/icons/service-icons/quality-assurance.svg';
import frontendDevelopmentIcon from '../../assets/images/icons/service-icons/frontend-development.svg';
import forecastingIcon from '../../assets/images/icons/service-icons/forecasting.svg';

const Expertise = () => {
  const services = [
    {
      iconSrc: computerDevelopmentIcon,
      title: "Software Development",
      description: "Crafting cutting-edge software solutions tailored to your unique business needs and requirements.",
      fallbackText: "SD"
    },
    {
      iconSrc: businessAnalyticsIcon,
      title: "Business Analytics",
      description: "Unlocking insights and driving data-driven decisions for your organization's success and growth.",
      fallbackText: "BA"
    },
    {
      iconSrc: websiteDevelopmentIcon,
      title: "Website Development",
      description: "Building dynamic and engaging websites that captivate audiences and drive measurable results.",
      fallbackText: "WD"
    },
    {
      iconSrc: qualityAssuranceIcon,
      title: "Quality Assurance",
      description: "Ensuring the highest standards of quality and reliability in every aspect of our solutions.",
      fallbackText: "QA"
    },
    {
      iconSrc: frontendDevelopmentIcon,
      title: "Front End (UI/UX) Development",
      description: "Building seamless and visually engaging user interfaces that enhance user experiences.",
      fallbackText: "FE"
    },
    {
      iconSrc: forecastingIcon,
      title: "Forecasting",
      description: "Utilizing advanced analytics and predictive modeling to anticipate trends and guide strategic planning.",
      fallbackText: "FC"
    },
  ];

  // Improved fallback icon component
  const FallbackIcon = ({ text, title }) => (
    <div className="fallback-icon">
      <span className="fallback-icon-text" title={title}>
        {text}
      </span>
    </div>
  );

  // Handle image load error
  const handleImageError = (e, fallbackText, title) => {
    e.target.style.display = 'none';
    const iconContainer = e.target.parentElement;
    const fallbackDiv = iconContainer.querySelector('.fallback-icon');
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  };

  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="expertise__content">
          {/* Header Section */}
          <div className="expertise__header">
            <div className="expertise__badge">Our Expertise</div>
            <h2 className="expertise__title">Harnessing the Power of Technology</h2>
            <div className="expertise__description">
              <p>
                In the fast-paced world of technology, staying ahead of the curve is essential. Our team of seasoned
                software engineers, designers, and visionaries are at the forefront of technological advancements. From
                web and mobile app development to cloud solutions and AI integration, we have the expertise to turn your
                ideas into cutting-edge digital solutions.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="expertise__grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">
                  <img
                    src={service.iconSrc || "/placeholder.svg"}
                    alt={`${service.title} Icon`}
                    className="service-icon"
                    onLoad={(e) => {
                      // Image loaded successfully, hide fallback
                      const iconContainer = e.target.parentElement;
                      const fallbackDiv = iconContainer.querySelector('.fallback-icon');
                      if (fallbackDiv) {
                        fallbackDiv.style.display = 'none';
                      }
                    }}
                    onError={(e) => handleImageError(e, service.fallbackText, service.title)}
                  />
                  <FallbackIcon text={service.fallbackText} title={service.title} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;