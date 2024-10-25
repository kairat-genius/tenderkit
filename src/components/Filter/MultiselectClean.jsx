import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

// svg
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";

const MultiSelectClean = () => {
  const [isActive, setIsActive] = useState(false);

  // Обработчик для переключения класса активного состояния
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div class="field-group__section">
      <div class="field-group__layout">
        <div clickoutside="" className={`primary-select ${isActive ? "primary-select--active" : ""}`}>
          <div class="primary-select__header " onClick={toggleActive}>
            <div class="primary-select__container">
              <div class="primary-select__label"> Признаки и приоритеты </div>
              <div class="primary-select__value">
                <span>Выбрать</span>
              </div>
            </div>
            <div class="primary-select__toggle icon">
              <ChevrondownAlt class="icon__svg" />
            </div>
          </div>
          <OutsideClickHandler onOutsideClick={() => setIsActive(false)} >
          <div class="primary-select__body">
            <div class="primary-select__block ng-star-inserted">
              <div class="button-group button-group--sm button-group--expand">
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
                    id="flagDisabilityOrganization"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Закупка среди организаций инвалидов</span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagKgzSingleOrganizer"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Закупки Единого организатора КГЗ МФ РК</span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagZakupFurniture"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Закупка легкой и мебельной промышленности</span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagZakupSmr"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Закупка с признаком СМР</span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagWorkSign"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>
                      Признак работы. 1-работа с ТЭО/ПСД, 2-работа на разработку
                      ТЭО/ПСД
                    </span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagConsultingService"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Консультационная услуга</span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagPrequalification"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>
                      Конкурс с предварительным квалификационным отбором
                    </span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagFromZhanaozen"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Среди предприятий г.Жанаозен</span>
                  </label>
                </div>
              </li>
              <li class="option__layout ng-star-inserted">
                <div class="option__checkbox checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__control"
                    id="flagHoldingProducer"
                  />
                  <div class="checkbox__check"></div>
                  <label class="checkbox__label">
                    <span>Среди товаропроизводителей ФНБ Самрук Казына</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectClean;
