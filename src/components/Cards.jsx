import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Marquee from "react-fast-marquee";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Marquee direction="left" // Set direction to "left" for scrolling
            pauseOnHover // Pause animation when hovering over the marquee
            velocity={1}>
          <ul className="cards__items">
              <CardItem
                src="/images/mem1.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="/images/mem4.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
              <CardItem
                src="/images/mem3.jpg"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="/images/mem5.jpg"
                text="Experience Football on Top of the Himilayan Mountains"
                label="Adventure"
                path="/products"
              />
              <CardItem
                src="/images/mem6.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
              <CardItem
                src="/images/mem7.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
              <CardItem
                src="/images/mem.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
              <CardItem
                src="/images/mem8.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
              <CardItem
                src="/images/img-1.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
              <CardItem
                src="/images/img-2.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
              <CardItem
                src="/images/img-8.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
          </ul>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Cards;
