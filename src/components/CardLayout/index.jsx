import React from "react";

const CardLayout = ({IconComponent, label, dataId}) => {
  return (
    <div class="card__layout">
    <div class="card__image">
      <span class="card__icon icon">
        <IconComponent class="icon__svg" />
      </span>
    </div>
    <div class="card__details">
      <div class="card__label"> {label} </div>
      <div class="card__data"> {dataId} </div>
    </div>
  </div>
  );
};

export default CardLayout;
