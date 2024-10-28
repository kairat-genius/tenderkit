import React, { useState } from "react";

// svg
import { ReactComponent as ChevrondownAlt } from "../../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as AddSquare } from "../../../assets/svg/pointer/add-square.svg";
import { ReactComponent as IconFilter } from "../../../assets/svg/pointer/filter.svg";

// components Result Filter
import {
  SearchBox,
  Calendar,
  FilterFooter,
  PriceFilter,
} from "../../../components/Filter";
import { Breadcrumb, OrganizerModal } from "../../../components";
import MultiSelectResult from "./MultiSelectResult";


const Filter = ({ filters, setFilters, handleButtonClick }) => {
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [isOrganizerModalOpen, setOrganizerModalOpen] = useState(false); 
  
  // Обработчик для переключения видимости фильтра
  const toggleFilterVisibility = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const toggleOrganizerModal = () => {
    setOrganizerModalOpen(!isOrganizerModalOpen);
  };

  return (
    <div class="content">
      <div class="content__block content__block--filter">
        <div class="container">
          <Breadcrumb />
          <h1 class="visually-hidden"> seo.TENDER_SEARCH </h1>
          <div
            class={`filter filter--no-padding ${
              isFilterVisible ? "filter--active" : ""
            }`}
          >
            <div class="filter__title">
              Поиск закупок
              <button
                type="button"
                class="filter__toggle button"
                onClick={toggleFilterVisibility}
              >
                <span class="icon">
                  <IconFilter class="icon__svg" />
                </span>
              </button>
            </div>
            <SearchBox 
            filters={filters}
            handleFilterChange={handleFilterChange}
            />
            {isFilterVisible && (
              <search-filter class="filter__body ng-star-inserted">
                <MultiSelectResult
                  filters={filters}
                  handleFilterChange={handleFilterChange}
                />
                <div class="filter__layout">
                  <div class="field-group">
                    <div class="field-group__section">
                      <div class="field-group__layout">
                        <div class="inputfield inputfield--suffix">
                          <input
                            type="text"
                            class="inputfield__input input"
                            readOnly=""
                            placeholder="Исключить слова"
                          />
                          <label class="inputfield__label">
                            Исключить слова
                          </label>
                          <div class="inputfield__suffix">
                            <span class="inputfield__icon inputfield__icon--primary icon">
                              <AddSquare class="icon__svg" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field-group__section">
                      <Calendar
                        label="Дата начало от"
                        value={filters.startDate_from}
                        onChange={(value) =>
                          handleFilterChange("startDate_from", value)
                        }
                      />
                      <Calendar
                        label="Дата начало до"
                        value={filters.startDate_to}
                        onChange={(value) =>
                          handleFilterChange("startDate_to", value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="filter__layout">
                  <div class="field-group">
                    <div class="field-group__section">
                      <PriceFilter
                        name="sumForm"
                        placeholder="Мин. сумма закупки"
                        label="Мин. сумма закупки"
                        value={filters.totalPrice_from}
                        onChange={(value) =>
                          handleFilterChange("totalPrice_from", value)
                        }
                      />
                      <PriceFilter
                        name="sumTo"
                        placeholder="Макс. сумма закупки"
                        label="Макс. сумма закупки"
                        value={filters.totalPrice_to}
                        onChange={(value) =>
                          handleFilterChange("totalPrice_to", value)
                        }
                      />
                    </div>
                    <div class="field-group__section">
                      <Calendar
                        label="Дата окончания от"
                        value={filters.endDate_from}
                        onChange={(value) =>
                          handleFilterChange("endDate_from", value)
                        }
                      />
                      <Calendar
                        label="Дата окончания до"
                        value={filters.endDate_to}
                        onChange={(value) =>
                          handleFilterChange("endDate_to", value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="filter__layout">
                  <div class="field-group">
                    <div class="field-group__section">
                      <div class="field-group__layout" onClick={toggleOrganizerModal}>
                        <div class="inputfield inputfield--suffix">
                          <input
                            type="text"
                            class="inputfield__input input"
                            readOnly=""
                            placeholder="Организаторы"
                          />
                          <label class="inputfield__label">
                            Организаторы
                          </label>
                          <div class="inputfield__suffix">
                            <span class="inputfield__icon inputfield__icon--primary icon">
                              <AddSquare class="icon__svg" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="field-group__layout">
                        <form
                          noValidate=""
                          autoComplete="off"
                          class="inputfield ng-untouched ng-pristine ng-valid"
                        >
                          <input
                            type="text"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="none"
                            spellCheck="false"
                            name="lotNumber"
                            class="inputfield__input input ng-untouched ng-pristine ng-valid"
                            placeholder="Номер лота"
                            value={filters.lotNumber}
                            onChange={(event) =>
                              handleFilterChange(
                                "lotNumber",
                                event.target.value
                              )
                            }
                          />
                          <label class="inputfield__label"> Номер лота </label>
                        </form>
                      </div>
                    </div>
                    <div class="field-group__section">
                      <sidebar-filter-subscribe class="field-group__layout">
                        <div
                          clickoutside=""
                          class="primary-select primary-select--disabled"
                        >
                          <div class="primary-select__header">
                            <div class="primary-select__container">
                              <div class="primary-select__label ng-star-inserted">
                                Мои подписки
                              </div>
                              <div class="primary-select__value ng-star-inserted">
                                Доступно по платному тарифу
                              </div>
                            </div>
                            <div class="primary-select__toggle icon">
                              <ChevrondownAlt class="icon__svg" />
                            </div>
                          </div>
                          <div class="primary-select__body"></div>
                        </div>
                      </sidebar-filter-subscribe>
                    </div>
                  </div>
                </div>
              </search-filter>
            )}
            <FilterFooter
              onClick={toggleFilterVisibility}
              isFilterVisible={isFilterVisible}
              handleButtonClick={handleButtonClick}
              setFilters={setFilters}
            />
          </div>
        </div>
      </div>
     
        <OrganizerModal onClose={toggleOrganizerModal} 
        filters={filters} // Передаем filters
          handleFilterChange={handleFilterChange}
          isOrganizerModalOpen={isOrganizerModalOpen}
          />
      
    </div>
  );
};

export default Filter;
