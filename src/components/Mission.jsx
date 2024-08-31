import React from "react";
import CardVM from "./cardvm";
import "./Mission.css";

function Mission() {
  return (
    <div className="mission">
      <h1>Our Mission:</h1>
      <div className="mission-card">
        <CardVM
          src="/images/v&m.png"
          text="MISSION"
          label="To foster a stimulating environment for students to learn, collaborate, and engage in cutting-edge quantum research.
  To provide opportunities for students to connect with leading experts in the field and gain hands-on experience.
  To promote interdisciplinary collaborations and foster a culture of innovation.
Unlocking the Quantum Future Together"
          path="/sign-up"
        />
      </div>
    </div>
  );
}

export default Mission;