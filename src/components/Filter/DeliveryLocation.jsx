
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
//svg
import { ReactComponent as Pin } from "../../assets/svg/icon/pin.svg";
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";
const DeliveryLocation = () => {
  const [isActive, setIsActive] = useState(false);

  // Обработчик для переключения класса активного состояния
  const toggleActive = () => {
    setIsActive(!isActive);
  };

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
            <div class="primary-select__value"> Выбрать </div>
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
                <button class="button-group__button button button--secondary button--sm">
                  Выбрать все
                </button>
              </div>
              <div class="button-group__layout">
                <button class="button-group__button button button--secondary-outline button--sm">
                  Сбросить
                </button>
              </div>
            </div>
          </div>
          <ul class="option">
            <li class="option__layout ng-star-inserted">
              <div class="option__checkbox checkbox">
                <input
                  type="checkbox"
                  class="checkbox__control"
                  id="d5ca7ef6-d3d0-46e2-be84-1ca615f62566"
                />
                <div class="checkbox__check"></div>
                <label class="checkbox__label">
                  <span class="ng-star-inserted">
                    Абайская область
                  </span>
                </label>
              </div>
            </li>
            <li class="option__layout ng-star-inserted">
              <div class="option__checkbox checkbox">
                <input
                  type="checkbox"
                  class="checkbox__control"
                  id="0ece36cb-4e6f-4dea-a05e-0c919f10198b"
                />
                <div class="checkbox__check"></div>
                <label class="checkbox__label">
                  <span class="ng-star-inserted">
                    Акмолинская область
                  </span>
                </label>
              </div>
            </li>
            <li class="option__layout ng-star-inserted">
              <div class="option__checkbox checkbox">
                <input
                  type="checkbox"
                  class="checkbox__control"
                  id="a16edd3a-9049-4fdf-b6f7-1015f5054649"
                />
                <div class="checkbox__check"></div>
                <label class="checkbox__label">
                  <span class="ng-star-inserted">
                    Актюбинская область
                  </span>
                </label>
              </div>
            </li>
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
