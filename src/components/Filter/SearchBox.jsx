import React from "react";

// svg
import { ReactComponent as Exclamation } from "../../assets/svg/icon/exclamation.svg";

// components
import { DeliveryLocation, MultiSearch } from "./index";

const SearchBox = ({filters, handleFilterChange}) => {
  
  return (
    <div class="hero__searchbar">
      <div class="hero__searchbar-layout hero__searchbar-layout--input">
        <MultiSearch 
        value={filters.search || []}
        onChange={(value) => handleFilterChange("search", value)}
        />
        <div class="filter__layout filter__layout--options ng-star-inserted">
          <div class="filter__option ng-star-inserted">
            <div class="checkbox checkbox--primary">
              <input
                type="checkbox"
                id="spec"
                class="checkbox__control ng-untouched ng-pristine ng-valid"
              />
              <div class="checkbox__check"></div>
              <label htmlFor="spec" class="checkbox__label">
                Искать в тех. спецификации
              </label>
              <div class="checkbox__help">
                <div class="primary-hint primary-hint--warning">
                  <div class="primary-hint__title">
                    Особенность поиска в тех. спецификации
                  </div>
                  <div class="primary-hint__description">
                    <div class="primary-hint__description-icon icon">
                      <Exclamation class="icon__svg" />
                    </div>
                    <div class="primary-hint__description-text">
                      Есть вероятность нерелевантого результата поиска
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="filter__option ng-star-inserted">
            <div class="checkbox checkbox--primary">
              <input
                type="checkbox"
                id="dop"
                class="checkbox__control ng-untouched ng-pristine ng-valid"
              />
              <div class="checkbox__check"></div>
              <label htmlFor="dop" class="checkbox__label">
                Искать в доп. характеристиках
              </label>
              <div class="checkbox__help">
                <div class="primary-hint primary-hint--warning">
                  <div class="primary-hint__title">
                    Искать в доп. характеристиках
                  </div>
                  <div class="primary-hint__description">
                    <div class="primary-hint__description-icon icon">
                      <Exclamation class="icon__svg" />
                    </div>
                    <div class="primary-hint__description-text">
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
