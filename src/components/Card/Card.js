import React from "react";
import style from "./Card.module.css";

const Card = ({ value }) => {
  return (
    <div className={`${style.container} countryCard`}>
      <div className="countryCard">
        <img className={style.image} src={value.flags.png} alt="" />
        <h2>{value.name.common}</h2>
      </div>
    </div>
  );
};

export default Card;
