import React, { useState } from "react";

// svg
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as Mail } from "../../assets/svg/social/mail.svg";

const FilterFooter = ({ onClick, isFilterVisible }) => {
  return (
    <div class="filter__footer">
      <div class="panel">
        <div class="panel__layout">
          <div class="button-group">
            <div class="button-group__layout desktop">
              <button
                type="button"
                class="button button--secondary-transparent ng-star-inserted"
                onClick={onClick}
              >
                {isFilterVisible ? (
                  <>
                    <span className="button__icon button__icon--before icon button__icon--turn">
                      <ChevrondownAlt className="icon__svg" />
                    </span>
                    Скрыть
                  </>
                ) : (
                  <>
                    <span className="button__icon button__icon--before icon">
                      <ChevrondownAlt className="icon__svg" />
                    </span>
                    Расширенный поиск
                  </>
                )}
              </button>
            </div>
            <subscribe-btn class="button-group__layout">
              <button
                type="button"
                class="button button--secondary-outline"
                id="poisk_zakupok_podpisatsya"
              >
                <span class="button__icon button__icon--before icon">
                  <Mail class="icon__svg" />
                </span>
                <span class="button__title">
                  Подписаться на результаты поиска
                </span>
              </button>
            </subscribe-btn>
          </div>
        </div>
        <div class="panel__layout panel__layout--rtl">
          <div class="button-group">
            <div class="button-group__layout desktop">
              <button type="button" class="button button--primary-outline">
                Сбросить фильтр
              </button>
            </div>
            <div class="button-group__layout" id="poisk_zakupok_poisk">
              <button type="button" class="button button--primary">
                Поиск
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterFooter;
