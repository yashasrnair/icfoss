import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Carousel from "react-bootstrap/Carousel";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <Carousel>
        <Carousel.Item>
          <CardItem
            src="/images/mem.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardItem
            src="/images/mem1.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardItem
            src="images/mem7.jpg"
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            label="Mystery"
            path="/services"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardItem
            src="/images/mem5.jpg"
            text="Experience Football on Top of the Himilayan Mountains"
            label="Adventure"
            path="/products"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardItem
            src="/images/mem6cr.jpg"
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adrenaline"
            path="/sign-up"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Cards;
