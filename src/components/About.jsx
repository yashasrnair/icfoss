import React from "react";
import CardAb from "./Carditemab";
import "./About.css";

function About() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-us-card">
        <CardAb
          src="/images/abgrid.svg"
          text="ICFO Student Branch at College of Engineering Kalloppara"
          label="Unlocking the Quantum Future Together
The ICFO Student Branch at College of Engineering Kalloppara is a vibrant community of passionate students dedicated to exploring the exciting world of quantum science and technology. As a part of the prestigious Institute of Photonic Sciences (ICFO), we aim to inspire and empower the next generation of quantum researchers and innovators.
"
          path="/sign-up"
        />
      </div>
    </div>
  );
}

export default About;