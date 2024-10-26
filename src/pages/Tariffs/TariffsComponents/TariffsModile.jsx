import React, {useState} from "react";
import textData from "./tariffs.json"; 
// svg
import { ReactComponent as Chevronright } from "../../../assets/svg/pointer/chevronright.svg";
import { ReactComponent as Check } from "../../../assets/svg/icon/check.svg";

const TariffsModile = ({ tariffs }) => {
  const [openTariffId, setOpenTariffId] = useState(null); 

  const handleToggle = (id) => {
    setOpenTariffId((prevId) => (prevId === id ? null : id)); 
  };
  return (
    <div class="content__block content__block--theme-secondary content__block--bottom">
      <section class="content__layout">
        <div class="tariff-abtest ng-star-inserted">
          <ul class="tariff-abtest__m-tariff-list">
            {tariffs.map((tariff) => (
              <li key={tariff.id}>
                <div
                  class="tariff-abtest__m-tariff-item ng-star-inserted"
                  onClick={() => handleToggle(tariff.id)}
                >
                  <div class="tariff-abtest__m-tariff-left">
                    <div class="tariff-abtest__feat"> {tariff.name} </div>
                    <div class="tariff-abtest__feat-desc">
                    {tariff.price} ₸ /в {tariff.duration === 365 ? "год" : `${tariff.duration} дней`}
                    </div>
                  </div>
                  <div class="tariff-abtest__m-tariff-right">
                    <span class="icon m-tariff-icon">
                      <Chevronright class="icon__svg" />
                    </span>
                  </div>
                </div>
                {openTariffId === tariff.id && (
                  <div class="tariff-abtest ng-star-inserted">
                    <ul class="tariff-abtest__m-feat-list">
                      {textData.rows.map(
                        (feature) =>
                          tariff[feature.key] && (
                            <li
                              className="tariff-abtest__m-feat-item ng-star-inserted"
                              key={feature.key}
                            >
                              <div className="tariff-abtest__m-feat-left">
                                <span className="icon tariff-abtest__icon-yes">
                                  <Check className="icon__svg" />
                                </span>
                              </div>
                              <div>
                                <div className="tariff-abtest__feat">
                                  {feature.title}
                                </div>
                                <div className="tariff-abtest__feat-desc">
                                  {feature.description}
                                </div>
                              </div>
                            </li>
                          )
                      )}
                    </ul>
                    <div class="tariff-abtest__m-panel-buy"  style={{ backgroundColor: '#e4f0e9' }}>
                      <div class="tariff-abtest__m-total">
                        Итого: {tariff.price} ₸ /в {tariff.duration === 365 ? "год" : `${tariff.duration} дней`}
                      </div>
                      <div class="button-group button-group--tariff-buy" style={{ width: "100px", margin: "0 auto" }}>
                        <div class="button-group__layout">
                          <button type="button" class="button button--primary tariff-abtest__m-buy">
                            Купить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TariffsModile;
