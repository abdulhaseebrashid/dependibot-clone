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
      description: "Crafting cutting-edge software solutions tailored to your unique business needs..."
    },
    {
      iconSrc: businessAnalyticsIcon,
      title: "Business Analytics", 
      description: "Unlocking insights and driving data-driven decisions for your organization's success..."
    },
    {
      iconSrc: websiteDevelopmentIcon,
      title: "Website Development",
      description: "Building dynamic and engaging websites that captivate audiences and drive results..."
    },
    {
      iconSrc: qualityAssuranceIcon,
      title: "Quality Assurance",
      description: "Ensuring the highest standards of quality and reliability in every aspect of our solutions..."
    },
    {
      iconSrc: frontendDevelopmentIcon,
      title: "Front End (UI/UX) Development",
      description: "Building seamless and visually engaging user interfaces that enhance user experiences..."
    },
    {
      iconSrc: forecastingIcon,
      title: "Forecasting",
      description: "Utilizing advanced analytics and predictive modeling to anticipate trends and guide strategic planning..."
    }
  ];

  // Fallback icon component for missing icons
  const FallbackIcon = ({ title }) => (
    <div className="fallback-icon">
      <span className="fallback-icon-text">
        {title.split(' ').map(word => word[0]).join('').slice(0, 2)}
      </span>
    </div>
  );

  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="expertise__content">
          {/* Header Section */}
          <div className="expertise__header">
            <div className="expertise__badge">Our Expertise</div>
            <h2 className="expertise__title">
              Harnessing the Power of Technology
            </h2>
            <div className="expertise__description">
              <p>
                In the fast-paced world of technology, staying ahead of the curve is essential. Our team of seasoned 
                software engineers, designers, and visionaries are at the forefront of technological advancements. 
                From web and mobile app development to cloud solutions and AI integration, we have the expertise to 
                turn your ideas into cutting-edge digital solutions.
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
                    onError={(e) => {
                      // Hide broken image and show fallback
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <FallbackIcon title={service.title} />
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