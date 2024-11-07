import React from "react";

// svg
import { ReactComponent as Exclamation } from "../../assets/svg/icon/exclamation.svg";

// components
import { DeliveryLocation, MultiSearch } from "./index";

const SearchBox = ({filters, handleFilterChange}) => {
  
  return (
    <div ClassName="hero__searchbar">
      <div ClassName="hero__searchbar-layout hero__searchbar-layout--input">
        <MultiSearch 
        value={filters.search || []}
        onChange={(value) => handleFilterChange("search", value)}
        />
        <div ClassName="filter__layout filter__layout--options ng-star-inserted">
          <div ClassName="filter__option ng-star-inserted">
            <div ClassName="checkbox checkbox--primary">
              <input
                type="checkbox"
                id="spec"
                ClassName="checkbox__control ng-untouched ng-pristine ng-valid"
              />
              <div ClassName="checkbox__check"></div>
              <label htmlFor="spec" ClassName="checkbox__label">
                Искать в тех. спецификации
              </label>
              <div ClassName="checkbox__help">
                <div ClassName="primary-hint primary-hint--warning">
                  <div ClassName="primary-hint__title">
                    Особенность поиска в тех. спецификации
                  </div>
                  <div ClassName="primary-hint__description">
                    <div ClassName="primary-hint__description-icon icon">
                      <Exclamation ClassName="icon__svg" />
                    </div>
                    <div ClassName="primary-hint__description-text">
                      Есть вероятность нерелевантого результата поиска
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ClassName="filter__option ng-star-inserted">
            <div ClassName="checkbox checkbox--primary">
              <input
                type="checkbox"
                id="dop"
                ClassName="checkbox__control ng-untouched ng-pristine ng-valid"
              />
              <div ClassName="checkbox__check"></div>
              <label htmlFor="dop" ClassName="checkbox__label">
                Искать в доп. характеристиках
              </label>
              <div ClassName="checkbox__help">
                <div ClassName="primary-hint primary-hint--warning">
                  <div ClassName="primary-hint__title">
                    Искать в доп. характеристиках
                  </div>
                  <div ClassName="primary-hint__description">
                    <div ClassName="primary-hint__description-icon icon">
                      <Exclamation ClassName="icon__svg" />
                    </div>
                    <div ClassName="primary-hint__description-text">
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
