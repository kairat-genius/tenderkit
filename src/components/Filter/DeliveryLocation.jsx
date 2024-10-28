
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
    <div class="hero__searchbar-layout">
    <div
      filtername="regionIds"
      class="field-group__layout"
    >
      <div clickoutside="" className={`primary-select ${isActive ? "primary-select--active" : ""}`}>
        <div class="primary-select__header" onClick={toggleActive}>
          <div class="primary-select__icon icon ng-star-inserted">
            <Pin class="icon__svg"/>
          </div>
          <div class="primary-select__container">
            <div class="primary-select__label">
              Место поставки
            </div>
            <div class="primary-select__value"> {selectedCount > 0 ? `Выбрано: ${selectedCount}` : "Выбрать"} </div>
          </div>
          <div class="primary-select__toggle icon">
            <ChevrondownAlt class="icon__svg"/>
          </div>
        </div>
        {isActive && (
        <div class="primary-select__body">
          <div class="primary-select__block ng-star-inserted">
            <div class="button-group button-group--sm button-group--expand">
              <div class="button-group__layout">
                <button class="button-group__button button button--secondary button--sm"  onClick={handleSelectAll}>
                  Выбрать все
                </button>
              </div>
              <div class="button-group__layout">
                <button class="button-group__button button button--secondary-outline button--sm" onClick={handleReset}>
                  Сбросить
                </button>
              </div>
            </div>
          </div>
          <ul class="option">
          {regions.map((region) => (
            <li class="option__layout ng-star-inserted" key={region.id}>
              <div class="option__checkbox checkbox">
                <input
                  type="checkbox"
                  class="checkbox__control"
                  id={region.id}
                  checked={value.includes(region.id)} // Проверяем, выбран ли этот элемент
                  onChange={() => handleOptionChange(region.id)}
                />
                <div class="checkbox__check"></div>
                <label class="checkbox__label" htmlFor={region.id}>
                  <span class="ng-star-inserted">
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
