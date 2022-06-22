import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`../images/${props.img}`)}
        alt="katie"
        className="card--image"
      />
      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        <span>{props.rating} </span>
        <span className="grey">({props.reviewCount}) • </span>
        <span className="grey"> {props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>From ${props.price} / person</p>
    </div>
  );
}
