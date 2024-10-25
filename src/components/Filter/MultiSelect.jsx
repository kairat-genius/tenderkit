import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

// svg
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";

const MultiSelect = ({ filterName, label, options, selectedCount }) => {

  const [isActive, setIsActive] = useState(false);

  // Обработчик для переключения класса активного состояния
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div filtername={filterName} class="field-group__layout">
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)} >
      <div clickoutside="" className={`primary-select ${isActive ? "primary-select--active" : ""}`}>
        <div class="primary-select__header" onClick={toggleActive}>
          <div class="primary-select__container">
            <div class="primary-select__label">{label}</div>
            <div class="primary-select__value">
              <span class="ng-star-inserted">
                {selectedCount > 0 ? `Выбрано: ${selectedCount}` : "Выбрать"}
              </span>
            </div>
          </div>
          <div class="primary-select__toggle icon">
            <ChevrondownAlt class="icon__svg" />
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
            {options.map((option) => (
              <li class="option__layout ng-star-inserted" key={option.id}>
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id={option.id}
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">{option.label}</label>
                </div>
              </li>
            ))}
            ;
          </ul>
        </div>
        )}
      </div>
      </OutsideClickHandler>
      </div>
  );
};

export default MultiSelect;
