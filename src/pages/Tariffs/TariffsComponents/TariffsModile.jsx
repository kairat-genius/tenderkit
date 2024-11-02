import React, {useState} from "react";
// svg
import { ReactComponent as Chevronright } from "../../../assets/svg/pointer/chevronright.svg";
import { ReactComponent as Check } from "../../../assets/svg/icon/check.svg";

const TariffsModile = ({ tariffs, openModal, textData }) => {
  const [openTariffId, setOpenTariffId] = useState(null); 

  const handleToggle = (id) => {
    setOpenTariffId((prevId) => (prevId === id ? null : id)); 
  };
  return (
    <div className="content__block content__block--theme-secondary content__block--bottom">
      <section className="content__layout">
        <div className="tariff-abtest ng-star-inserted">
          <ul className="tariff-abtest__m-tariff-list">
            {tariffs.map((tariff) => (
              <li key={tariff.id}>
                <div
                  className="tariff-abtest__m-tariff-item ng-star-inserted"
                  onClick={() => handleToggle(tariff.id)}
                >
                  <div className="tariff-abtest__m-tariff-left">
                    <div className="tariff-abtest__feat"> {tariff.name} </div>
                    <div className="tariff-abtest__feat-desc">
                    {tariff.price} ₸ /в {tariff.duration === 365 ? "год" : `${tariff.duration} дней`}
                    </div>
                  </div>
                  <div className="tariff-abtest__m-tariff-right">
                    <span className="icon m-tariff-icon">
                      <Chevronright className="icon__svg" />
                    </span>
                  </div>
                </div>
                {openTariffId === tariff.id && (
                  <div className="tariff-abtest ng-star-inserted">
                    <ul className="tariff-abtest__m-feat-list">
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
                    <div className="tariff-abtest__m-panel-buy"  style={{ backgroundColor: '#e4f0e9' }}>
                      <div className="tariff-abtest__m-total">
                        Итого: {tariff.price} ₸ /в {tariff.duration === 365 ? "год" : `${tariff.duration} дней`}
                      </div>
                      <div className="button-group button-group--tariff-buy" style={{ width: "100px", margin: "0 auto" }}>
                        <div className="button-group__layout">
                          <button type="button" className="button button--primary tariff-abtest__m-buy" onClick={() => openModal(tariff.id, tariff.name)}>
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
