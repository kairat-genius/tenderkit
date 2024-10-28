import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

// svg
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";

const MultiSelect = ({ filterName, label, options, value, onChange }) => {
  const [isActive, setIsActive] = useState(false);

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
    const allIds = options.map(option => option.id);
      onChange(allIds); // Выбираем все
  };

  const handleReset = () => {
    onChange([]);
  };

  const selectedCount = value.length;

  return (
    <div filtername={filterName} className="field-group__layout">
      <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
        <div className={`primary-select ${isActive ? "primary-select--active" : ""}`}>
          <div className="primary-select__header" onClick={toggleActive}>
            <div className="primary-select__container">
              <div className="primary-select__label">{label}</div>
              <div className="primary-select__value">
                <span className="ng-star-inserted">
                  {selectedCount > 0 ? `Выбрано: ${selectedCount}` : "Выбрать"}
                </span>
              </div>
            </div>
            <div className="primary-select__toggle icon">
              <ChevrondownAlt className="icon__svg" />
            </div>
          </div>
          {isActive && (
            <div className="primary-select__body">
              <div className="primary-select__block ng-star-inserted">
                <div className="button-group button-group--sm button-group--expand">
                  <div className="button-group__layout">
                    <button
                      className="button-group__button button button--secondary button--sm"
                      onClick={handleSelectAll}
                    >
                      Выбрать все
                    </button>
                  </div>
                  <div className="button-group__layout">
                    <button
                      className="button-group__button button button--secondary-outline button--sm"
                      onClick={handleReset}
                    >
                      Сбросить
                    </button>
                  </div>
                </div>
              </div>
              <ul className="option">
                {options.map((option) => (
                  <li className="option__layout ng-star-inserted" key={option.id}>
                    <div className="option__checkbox checkbox">
                      <input
                        type="checkbox"
                        className="checkbox__control"
                        id={option.id}
                        checked={value.includes(option.id)} // Проверяем, выбран ли этот элемент
                        onChange={() => handleOptionChange(option.id)} // Исправлено на правильный обработчик
                      />
                      <div className="checkbox__check"></div>
                      <label className="checkbox__label" htmlFor={option.id}>
                        {option.title}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default MultiSelect;
