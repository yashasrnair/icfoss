import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Marquee from "react-fast-marquee";

function Cards() {
  return (
    <div className="cards">
      <h1>The Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Marquee direction="left" 
            pauseOnHover 
            velocity={1}>
          <ul className="cards__items">
              <CardItem
                src="/images/mem11.jpg"
                text="MS ANITHA JOSE"
                label="ICFOSS Advisor"
                path="/"
              />
              <CardItem
                src="/images/mem12.jpg"
                text="MS ANILA A"
                label="ICFOSS Advisor"
                path="/"
              />
              <CardItem
                src="/images/mem5.jpg"
                text="Abil A Cherian"
                label="Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem9(1).jpg"
                text="Anamika U R"
                label="Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem7.jpg"
                text="Milan Saji"
                label="Deputy-Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem(1).jpg"
                text="Devendu D"
                label="Deputy-Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem6cr.jpg"
                text="Yashas R Nair"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem8.jpg"
                text="Joel Biju"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem.jpg"
                text="Abhijit R Nair"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem4(1).jpg"
                text="Aarcha Prasannan"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem1(1).jpg"
                text="Megha Aajith"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem2(1).jpg"
                text="Anjana S V"
                label="Ambassador"
                path="/"
              />
          </ul>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Cards;
