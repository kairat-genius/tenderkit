
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
    <div ClassName="hero__searchbar-layout">
    <div
      filtername="regionIds"
      ClassName="field-group__layout"
    >
      <div clickoutside="" className={`primary-select ${isActive ? "primary-select--active" : ""}`}>
        <div ClassName="primary-select__header" onClick={toggleActive}>
          <div ClassName="primary-select__icon icon ng-star-inserted">
            <Pin ClassName="icon__svg"/>
          </div>
          <div ClassName="primary-select__container">
            <div ClassName="primary-select__label">
              Место поставки
            </div>
            <div ClassName="primary-select__value"> {selectedCount > 0 ? `Выбрано: ${selectedCount}` : "Выбрать"} </div>
          </div>
          <div ClassName="primary-select__toggle icon">
            <ChevrondownAlt ClassName="icon__svg"/>
          </div>
        </div>
        {isActive && (
        <div ClassName="primary-select__body">
          <div ClassName="primary-select__block ng-star-inserted">
            <div ClassName="button-group button-group--sm button-group--expand">
              <div ClassName="button-group__layout">
                <button ClassName="button-group__button button button--secondary button--sm"  onClick={handleSelectAll}>
                  Выбрать все
                </button>
              </div>
              <div ClassName="button-group__layout">
                <button ClassName="button-group__button button button--secondary-outline button--sm" onClick={handleReset}>
                  Сбросить
                </button>
              </div>
            </div>
          </div>
          <ul ClassName="option">
          {regions.map((region) => (
            <li ClassName="option__layout ng-star-inserted" key={region.id}>
              <div ClassName="option__checkbox checkbox">
                <input
                  type="checkbox"
                  ClassName="checkbox__control"
                  id={region.id}
                  checked={value.includes(region.id)} // Проверяем, выбран ли этот элемент
                  onChange={() => handleOptionChange(region.id)}
                />
                <div ClassName="checkbox__check"></div>
                <label ClassName="checkbox__label" htmlFor={region.id}>
                  <span ClassName="ng-star-inserted">
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
