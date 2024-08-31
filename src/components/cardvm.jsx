import React from "react";

function CardVM({ src, text, label, path }) {
  return (
    <div className="CardVM">
    <div className="image-container"></div>
      <img src={src} alt="bg-box" />
      <div className="text-container">
        <h2 className="text">{text}</h2>
        <p className="label">{label}</p>
      </div>
    </div>
  );
}

export default CardVM;