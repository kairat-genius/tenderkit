import React from "react";
import textData from "./tariffs.json"; 
// svg
import { ReactComponent as Check } from "../../../assets/svg/icon/check.svg";


const TariffsDesktop = ({ tariffs, openModal }) => {
  const renderAccessIcons = (accessKey) => {
    return tariffs.map((tariff) =>
      tariff[accessKey] ? (
        <div className="tariff-abtest__cell ng-star-inserted" style={{ width: "17.5%" }} key={tariff.id}>
          <span className="icon tariff-abtest__icon-yes ng-star-inserted">
            <Check className="icon__svg" />
          </span>
        </div>
      ) : 
      <div className="tariff-abtest__cell ng-star-inserted" style={{ width: "17.5%" }} key={tariff.id}>
    </div>
    );
  };
  return (
    <div class="tariff-abtest ng-star-inserted">
      <div class="tariff-abtest__table">
        <div id="sticky_layout" class="tariff-abtest__row tariff-abtest__row--header tariff-abtest__row--sticky" >
          <div class="tariff-abtest__cell tariff-abtest__cell--title"  style={{ width: "30%" }}>
            <span class="tariff-abtest__title">Наименование</span>
          </div>
          {tariffs.map((tariff) => (
            <div class="tariff-abtest__cell ng-star-inserted"  style={{ width: "17.5%" }} key={tariff.id} >
              <div class="tariff-abtest__title"> {tariff.name} </div>
              <div class="tariff-abtest__price">
              {tariff.price} ₸ /в {tariff.duration === 365 ? "год" : `${tariff.duration} дней`}
              </div>
              <button class="tariff-abtest__buy" id="tarify_baza_vybrat" onClick={() => openModal(tariff.id, tariff.name)}>
                Купить
              </button>
            </div>
          ))}
        </div>
        {textData.rows.map((row) => (
        <div class="tariff-abtest__row ng-star-inserted" key={row.key}>
        
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }} >
            <div class="tariff-abtest__feat">
            {row.title}
            </div>
            <div>
              <span class="tariff-abtest__feat-desc">
              {row.description}
              </span>
            </div>
          </div>
          {renderAccessIcons(row.key)}
        </div>
        ))}
      </div>
    </div>
  );
};

export default TariffsDesktop;
