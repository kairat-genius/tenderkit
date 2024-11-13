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
  Exclude,
} from "../../../components/Filter";
import Breadcrumb from "../../../components/Breadcrumb";
const OrganizerModal = React.lazy(() => import("../../../components/OrganizerModal"));
import MultiSelectResult from "./MultiSelectResult";


const Filter = ({ filters, setFilters, handleButtonClick }) => {
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [isOrganizerModalOpen, setOrganizerModalOpen] = useState(false); 
  const [ isExcludeOpen , setExcludeOpen ] = useState(false); 
  
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

  const toggExcludeModal = () => {
    setExcludeOpen(!isExcludeOpen);
  };

  return (
    <div className="content">
      <div className="content__block content__block--filter">
        <div className="container">
          <Breadcrumb />
          <h1 className="visually-hidden"> seo.TENDER_SEARCH </h1>
          <div
            className={`filter filter--no-padding ${
              isFilterVisible ? "filter--active" : ""
            }`}
          >
            <div className="filter__title">
              Поиск закупок
              <button
                type="button"
                className="filter__toggle button"
                onClick={toggleFilterVisibility}
                aria-label="Переключить фильтры"
              >
                <span className="icon">
                  <IconFilter className="icon__svg" />
                </span>
              </button>
            </div>
            <SearchBox 
            filters={filters}
            handleFilterChange={handleFilterChange}
            />
            {isFilterVisible && (
              <div className="filter__body ng-star-inserted">
                <MultiSelectResult
                  filters={filters}
                  handleFilterChange={handleFilterChange}
                />
                <div className="filter__layout">
                  <div className="field-group">
                    <div className="field-group__section">
                      <div className="field-group__layout" onClick={toggExcludeModal}>
                        <div className="inputfield inputfield--suffix">
                          <input
                            type="text"
                            className="inputfield__input input"
                            readOnly=""
                            placeholder="Исключить слова"
                            value={filters.exclude.length > 0 ? `Исключено слов: ${filters.exclude.length}` : ""}
                          />
                          <label className="inputfield__label">
                            Исключить слова
                          </label>
                          <div className="inputfield__suffix">
                            <span className="inputfield__icon inputfield__icon--primary icon">
                              <AddSquare className="icon__svg" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field-group__section">
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
                <div className="filter__layout">
                  <div className="field-group">
                    <div className="field-group__section">
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
                    <div className="field-group__section">
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
                <div className="filter__layout">
                  <div className="field-group">
                    <div className="field-group__section">
                      <div className="field-group__layout" onClick={toggleOrganizerModal}>
                        <div className="inputfield inputfield--suffix">
                          <input
                            type="text"
                            className="inputfield__input input"
                            readOnly=""
                            placeholder="Организаторы"
                            value={filters.organizer.length > 0 ? `Организаторов: ${filters.organizer.length}` : ""}
                          />
                          <label className="inputfield__label">
                            Организаторы
                          </label>
                          <div className="inputfield__suffix">
                            <span className="inputfield__icon inputfield__icon--primary icon">
                              <AddSquare className="icon__svg" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="field-group__layout">
                        <form
                          noValidate=""
                          autoComplete="off"
                          className="inputfield ng-untouched ng-pristine ng-valid"
                        >
                          <input
                            type="text"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            name="lotNumber"
                            className="inputfield__input input ng-untouched ng-pristine ng-valid"
                            placeholder="Номер лота"
                            value={filters.lotNumber}
                            onChange={(event) =>
                              handleFilterChange(
                                "lotNumber",
                                event.target.value
                              )
                            }
                          />
                          <label className="inputfield__label"> Номер лота </label>
                        </form>
                      </div>
                    </div>
                    <div className="field-group__section">
                      <div className="field-group__layout">
                        <div
                          clickoutside=""
                          className="primary-select primary-select--disabled"
                        >
                          <div className="primary-select__header">
                            <div className="primary-select__container">
                              <div className="primary-select__label ng-star-inserted">
                                Мои подписки
                              </div>
                              <div className="primary-select__value ng-star-inserted">
                                Доступно по платному тарифу
                              </div>
                            </div>
                            <div className="primary-select__toggle icon">
                              <ChevrondownAlt className="icon__svg" />
                            </div>
                          </div>
                          <div className="primary-select__body"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      <Exclude onClose={toggExcludeModal}
      isExcludeOpen={isExcludeOpen}
      value={filters.exclude || []}
      onChange={(value) => handleFilterChange("exclude", value)}
        />
     
        <OrganizerModal onClose={toggleOrganizerModal} 
        filters={filters} // Передаем filters
          handleFilterChange={handleFilterChange}
          isOrganizerModalOpen={isOrganizerModalOpen}
          />
      
    </div>
  );
};

export default Filter;
