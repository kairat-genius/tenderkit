import React, { useState } from "react";

// svg
import { ReactComponent as ChevrondownAlt } from "../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as Mail } from "../../assets/svg/social/mail.svg";

const FilterFooter = ({ onClick, isFilterVisible, handleButtonClick, setFilters }) => {
  const handleResetFilters = () => {
    setFilters({
      endDate_from: "",
      endDate_to: "",
      startDate_from: "",
      startDate_to: "",
      lotNumber: "",
      organizer: [],
      purchaseType: [],
      deliveryRegion: [],
      search: "",
      source: [],
      status: [],
      tenderSubjectType: [],
      totalPrice_from: "",
      totalPrice_to: "",
    });

    localStorage.removeItem("Filter");
    localStorage.removeItem("selectedOrganizers");
  };

  return (
    <div className="filter__footer">
      <div className="panel">
        <div className="panel__layout">
          <div className="button-group">
            <div className="button-group__layout desktop">
              <button
                type="button"
                className="button button--secondary-transparent ng-star-inserted"
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
                className="button button--secondary-outline"
                id="poisk_zakupok_podpisatsya"
              >
                <span className="button__icon button__icon--before icon">
                  <Mail className="icon__svg" />
                </span>
                <span className="button__title">
                  Подписаться на результаты поиска
                </span>
              </button>
            </subscribe-btn>
          </div>
        </div>
        <div className="panel__layout panel__layout--rtl">
          <div className="button-group">
            <div className="button-group__layout desktop">
              <button type="button" className="button button--primary-outline" onClick={handleResetFilters}>
                Сбросить фильтр
              </button>
            </div>
            <div className="button-group__layout" id="poisk_zakupok_poisk">
              <button type="button" className="button button--primary" onClick={handleButtonClick}>
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
