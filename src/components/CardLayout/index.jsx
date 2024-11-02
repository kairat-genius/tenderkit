import React from "react";

const CardLayout = ({IconComponent, label, dataId}) => {
  return (
    <div className="card__layout">
    <div className="card__image">
      <span className="card__icon icon">
        <IconComponent className="icon__svg" />
      </span>
    </div>
    <div className="card__details">
      <div className="card__label"> {label} </div>
      <div className="card__data"> {dataId} </div>
    </div>
  </div>
  );
};

export default CardLayout;
