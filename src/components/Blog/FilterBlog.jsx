import React, {useState} from "react";

import {ReactComponent as Search} from "../../assets/svg/pointer/search.svg"
import {ReactComponent as ChevrondownAlt} from "../../assets/svg/pointer/chevrondown-alt.svg"

const FilterBlog = ({setFilterType, setSearchText, handleSearch}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Названию");
  const [searchInput, setSearchInput] = useState("");
  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setFilterType(option === "Названию" ? "title" : "content"); 
    setIsDropdownActive(false);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setSearchText(event.target.value); 
  };
  return (
    <div class="searchresults__layout">
      <div class="panel panel--articles">
        <div class="panel__layout">
          <form noValidate="" autoComplete="off" class="inputfield inputfield--prefix ng-untouched ng-pristine ng-valid">
            <input
              type="search"
              placeholder="Поиск по статьям"
              class="inputfield__input input"
              value={searchInput} // Привязываем к состоянию
              onChange={handleSearchChange} // Обработчик изменений
            />
            <label class="inputfield__label"> Поиск по статьям </label>
            <div class="inputfield__prefix ng-star-inserted">
              <span class="inputfield__icon icon">
                <Search class="icon__svg"/>
              </span>
            </div>
          </form>
        </div>
        <div class="panel__layout panel__layout--select">
          <sidebar-filter-select
            filtername="filterQueryType"
            class="field-group__layout"
          >
            <div class="field-group__layout">
              <div onClick={toggleDropdown}
                className={`primary-select ${isDropdownActive ? "primary-select--active" : ""}`}>
                <div class="primary-select__header-longer">
                  <div class="primary-select__container">
                    <div class="primary-select__label ng-star-inserted">
                      Поиск по
                    </div>
                    <div class="primary-select__value ng-star-inserted">
                      <span class="ng-star-inserted">{selectedOption}</span>
                    </div>
                  </div>
                  <div class="primary-select__toggle icon">
                    <ChevrondownAlt class="icon__svg"/>
                  </div>
                </div>
                <div class="primary-select__body">
                  <div class="primary-select__option ng-star-inserted" onClick={() => handleOptionClick("Названию")}>
                    <span class="ng-star-inserted">Названию</span>
                  </div>
                  <div class="primary-select__option ng-star-inserted" onClick={() => handleOptionClick("Содержанию")}>
                    <span class="ng-star-inserted">Содержанию</span>
                  </div>
                </div>
              </div>
            </div>
          </sidebar-filter-select>
        </div>
        <div class="panel__layout">
          <button type="button" class="button button--primary" onClick={handleSearch}>
            Поиск
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBlog;
