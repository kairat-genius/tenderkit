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
    <div className="searchresults__layout">
      <div className="panel panel--articles">
        <div className="panel__layout">
          <form noValidate="" autoComplete="off" className="inputfield inputfield--prefix ng-untouched ng-pristine ng-valid">
            <input
              type="search"
              placeholder="Поиск по статьям"
              className="inputfield__input input"
              value={searchInput} // Привязываем к состоянию
              onChange={handleSearchChange} // Обработчик изменений
            />
            <label className="inputfield__label"> Поиск по статьям </label>
            <div className="inputfield__prefix ng-star-inserted">
              <span className="inputfield__icon icon">
                <Search className="icon__svg"/>
              </span>
            </div>
          </form>
        </div>
        <div className="panel__layout panel__layout--select">
          <div filtername="filterQueryType" className="field-group__layout">
            <div className="field-group__layout">
              <div onClick={toggleDropdown} className={`primary-select ${isDropdownActive ? "primary-select--active" : ""}`}>
                <div className="primary-select__header-longer">
                  <div className="primary-select__container">
                    <div className="primary-select__label ng-star-inserted">
                      Поиск по
                    </div>
                    <div className="primary-select__value ng-star-inserted">
                      <span className="ng-star-inserted">{selectedOption}</span>
                    </div>
                  </div>
                  <div className="primary-select__toggle icon">
                    <ChevrondownAlt className="icon__svg"/>
                  </div>
                </div>
                <div className="primary-select__body">
                  <div className="primary-select__option ng-star-inserted" onClick={() => handleOptionClick("Названию")}>
                    <span className="ng-star-inserted">Названию</span>
                  </div>
                  <div className="primary-select__option ng-star-inserted" onClick={() => handleOptionClick("Содержанию")}>
                    <span className="ng-star-inserted">Содержанию</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel__layout">
          <button type="button" className="button button--primary" onClick={handleSearch}>
            Поиск
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBlog;
