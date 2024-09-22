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
                src="/images/mem11.webp"
                text="MS ANITHA JOSE"
                label="ICFOSS Advisor"
                path="/"
              />
              <CardItem
                src="/images/mem12(1).webp" 
                text="MS ANILA A"
                label="ICFOSS Advisor"
                path="/."
              />
              <CardItem
                src="/images/mem5.webp"
                text="Abil A Cherian"
                label="Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem9(1).webp"
                text="Anamika U R"
                label="Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem7.webp"
                text="Milan Saji"
                label="Deputy-Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem(1).webp"
                text="Devendu D"
                label="Deputy-Chief-Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem6cr.webp"
                text="Yashas R Nair"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem8.webp"
                text="Joel Biju"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem.webp"
                text="Abhijit R Nair"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem4(1).webp"
                text="Aarcha Prasannan"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem1(1).webp"
                text="Megha Aajith"
                label="Ambassador"
                path="/"
              />
              <CardItem
                src="/images/mem2(1).webp"
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
