import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
return (
  <div className="hero-container">
    <h1>
      Igniting Open Source Excellence at College of Engineering Kalloparaa
    </h1>
    <p>Join the ICFOSS Club for Innovation and Collaboration</p>
    <div className="hero-btns">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        JOIN NOW
      </Button>
      
    </div>
  </div>
);
}

export default HeroSection;