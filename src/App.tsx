import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Team from './components/Team/Team'; // Add this import
import About from './components/About/About';
import WhyUs from './components/WhyUs/WhyUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Expertise />
      <About />
      <WhyUs />
      <Services />
      <HowItWorks />
      <Team /> {/* Add this component after HowItWorks */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;