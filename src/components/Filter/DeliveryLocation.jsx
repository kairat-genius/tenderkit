
import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { getDeliveryRegion } from "../../api/Lots/Filter";
//svg
import { ReactComponent as Pin } from "../../assets/svg/icon/pin.svg";
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";
const DeliveryLocation = ({value, onChange}) => {
  const [isActive, setIsActive] = useState(false);
  const [regions, setRegion] = useState([])

  useEffect(() => {
    getDeliveryRegion(setRegion);
  }, []);

  // Обработчик для переключения класса активного состояния
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleOptionChange = (id) => {
    const newValue = value.includes(id)
      ? value.filter((item) => item !== id) // Удаляем, если уже выбран
      : [...value, id]; // Добавляем, если не выбран

    onChange(newValue);
  };

  const handleSelectAll = () => {
    const allIds = regions.map(region => region.id);
      onChange(allIds); // Выбираем все
  };

  const handleReset = () => {
    onChange([]);
  };

  const selectedCount = value.length;

  return (
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
    <div className="hero__searchbar-layout">
    <div
      filtername="regionIds"
      className="field-group__layout"
    >
      <div clickoutside="" className={`primary-select ${isActive ? "primary-select--active" : ""}`}>
        <div className="primary-select__header" onClick={toggleActive} style={{minWidth: "266px"}}>
          <div className="primary-select__icon icon ng-star-inserted">
            <Pin className="icon__svg"/>
          </div>
          <div className="primary-select__container">
            <div className="primary-select__label">
              Место поставки
            </div>
            <div className="primary-select__value"> {selectedCount > 0 ? `Выбрано: ${selectedCount}` : "Выбрать"} </div>
          </div>
          <div className="primary-select__toggle icon">
            <ChevrondownAlt className="icon__svg"/>
          </div>
        </div>
        {isActive && (
        <div className="primary-select__body">
          <div className="primary-select__block ng-star-inserted">
            <div className="button-group button-group--sm button-group--expand">
              <div className="button-group__layout">
                <button className="button-group__button button button--secondary button--sm"  onClick={handleSelectAll}>
                  Выбрать все
                </button>
              </div>
              <div className="button-group__layout">
                <button className="button-group__button button button--secondary-outline button--sm" onClick={handleReset}>
                  Сбросить
                </button>
              </div>
            </div>
          </div>
          <ul className="option">
          {regions.map((region) => (
            <li className="option__layout ng-star-inserted" key={region.id}>
              <div className="option__checkbox checkbox">
                <input
                  type="checkbox"
                  className="checkbox__control"
                  id={region.id}
                  checked={value.includes(region.id)} // Проверяем, выбран ли этот элемент
                  onChange={() => handleOptionChange(region.id)}
                />
                <div className="checkbox__check"></div>
                <label className="checkbox__label" htmlFor={region.id}>
                  <span className="ng-star-inserted">
                    {region.title}
                  </span>
                </label>
              </div>
            </li>
          ))}
          </ul>
        </div>
        )}
      </div>
    </div>
  </div>
  </OutsideClickHandler>
  );
};

export default DeliveryLocation;
