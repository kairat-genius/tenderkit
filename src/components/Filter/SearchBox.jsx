import React from "react";

// svg
import { ReactComponent as Exclamation } from "../../assets/svg/icon/exclamation.svg";

// components
import { DeliveryLocation, MultiSearch } from "./index";

const SearchBox = ({filters, handleFilterChange}) => {
  
  return (
    <div className="hero__searchbar">
      <div className="hero__searchbar-layout hero__searchbar-layout--input">
        <MultiSearch 
        value={filters.search || []}
        onChange={(value) => handleFilterChange("search", value)}
        />
        <div className="filter__layout filter__layout--options ng-star-inserted">
          <div className="filter__option ng-star-inserted">
            <div className="checkbox checkbox--primary">
              <input
                type="checkbox"
                id="spec"
                className="checkbox__control ng-untouched ng-pristine ng-valid"
              />
              <div className="checkbox__check"></div>
              <label htmlFor="spec" className="checkbox__label">
                Искать в тех. спецификации
              </label>
              <div className="checkbox__help">
                <div className="primary-hint primary-hint--warning">
                  <div className="primary-hint__title">
                    Особенность поиска в тех. спецификации
                  </div>
                  <div className="primary-hint__description">
                    <div className="primary-hint__description-icon icon">
                      <Exclamation className="icon__svg" />
                    </div>
                    <div className="primary-hint__description-text">
                      Есть вероятность нерелевантого результата поиска
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter__option ng-star-inserted">
            <div className="checkbox checkbox--primary">
              <input
                type="checkbox"
                id="dop"
                className="checkbox__control ng-untouched ng-pristine ng-valid"
              />
              <div className="checkbox__check"></div>
              <label htmlFor="dop" className="checkbox__label">
                Искать в доп. характеристиках
              </label>
              <div className="checkbox__help">
                <div className="primary-hint primary-hint--warning">
                  <div className="primary-hint__title">
                    Искать в доп. характеристиках
                  </div>
                  <div className="primary-hint__description">
                    <div className="primary-hint__description-icon icon">
                      <Exclamation className="icon__svg" />
                    </div>
                    <div className="primary-hint__description-text">
                      Есть вероятность нерелевантого результата поиска
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeliveryLocation 
      value={filters.deliveryRegion || []}
      onChange={(value) => handleFilterChange("deliveryRegion", value)}/>
    </div>
  );
};

export default SearchBox;
