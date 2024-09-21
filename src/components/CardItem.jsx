import React from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
          <LazyLoad height={250}>
            <img className="cards__item__img" alt="members " src={props.src} />
            </LazyLoad>
            <span className="cards__item__label">{props.label}</span>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
