import React from 'react';
import worldImage from '../../assets/images/backgrounds/world.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__accent-line"></div>
            <h1 className="hero__title">
              MORE THAN JUST<br />
              A SOFTWARE<br />
              DEVELOPMENT<br />
              COMPANY
            </h1>
            
            <div className="hero__subtitle">
              <p className="hero__subtitle-main">
                We are your technology partners, dedicated to bringing your digital dreams to life
              </p>
            </div>
            
            <div className="hero__description">
              <p>
                Explore our world of expertise, discover what makes us unique, and 
                learn why working with us is the key to unlocking your digital potential.
              </p>
            </div>
            
            <div className="hero__cta">
              <button className="hero__btn hero__btn--primary hero__btn--large">
                Let's Connect
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__globe">
              <img 
                src={worldImage || "/placeholder.svg"} 
                alt="Global Technology Network"
                className="globe-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;