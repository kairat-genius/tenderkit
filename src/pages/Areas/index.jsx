import React, { useState, useEffect } from "react";
import { getSource } from "../../api/Lots/Filter/getSource";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
// svg
import { ReactComponent as Search } from "../../assets/svg/pointer/search.svg";

// components Areas
import {Breadcrumb, MetaTags } from "../../components";

const Areas = () => {
  const [sources, setSource] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [checkedSources, setCheckedSources] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSource(setSource);
  }, []);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    const newCheckedSources = {};
    sources.forEach((source) => {
      newCheckedSources[source.id] = !selectAll; 
    });
    setCheckedSources(newCheckedSources);
  };

  const handleCheckboxChange = (id) => {
    setCheckedSources((prevCheckedSources) => ({
      ...prevCheckedSources,
      [id]: !prevCheckedSources[id], 
    }));
  };

  const handleApply = () => {
    const selectedIds = Object.keys(checkedSources).filter((id) => checkedSources[id]);

    const currentFilter = JSON.parse(localStorage.getItem("Filter")) || {};
    
    const filterData = {
      ...currentFilter, 
      source: selectedIds,
    };

    localStorage.setItem("Filter", JSON.stringify(filterData)); 
    navigate("/result");
  };

  const handleReset = () => {
    setCheckedSources({});
    setSelectAll(false);

    const currentFilter = JSON.parse(localStorage.getItem("Filter")) || {};
    delete currentFilter.source;
    localStorage.setItem("Filter", JSON.stringify(currentFilter));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSources = sources.filter((source) =>
    source.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="ng-star-inserted">
       <MetaTags page="areas"/>
      <div className="content">
        <div className="content__block content__block--head">
          <div className="container container--lg">
            <Breadcrumb />
            <h1 className="content__title"> Тендеры по&nbsp;площадкам </h1>
            <div className="options options--areas">
              <div className="options__header">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox__control"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                  <span className="checkbox__check"></span>
                  <span className="checkbox__label"> Выбрать все </span>
                </label>
                <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
                <form
                  noValidate
                  autoComplete="off"
                  onClick={() => setIsSearch(true)}
                  className={`options__search inputfield inputfield--search inputfield--icon ng-untouched ng-pristine ng-valid ${isSearch ? "inputfield--icon-expand" : ""}`}
                >
                  <input
                    type="search"
                    className="inputfield__input input ng-valid ng-touched ng-dirty"
                    placeholder="Введите название площадки"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <div className="inputfield__prefix">
                    <span className="inputfield__icon icon">
                      <Search className="icon__svg" />
                    </span>
                  </div>
                </form>
                </OutsideClickHandler>
              </div>
              <div className="options__body">
                <ul className="options__list">
                  {filteredSources.map((source) => (
                    <li className="options__item ng-star-inserted" key={source.id}>
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox__control"
                          checked={checkedSources[source.id] || false}
                          onChange={() => handleCheckboxChange(source.id)}
                        />
                        <span className="checkbox__check"></span>
                        <span className="checkbox__label"> {source.title} </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="options__footer">
                <div className="button-group button-group--sm">
                  <div className="button-group__layout">
                    <button
                      type="button"
                      className="options__button button button--secondary-transparent"
                      onClick={handleReset}
                    >
                      Сбросить
                    </button>
                  </div>
                  <div className="button-group__layout" id="ploshadki_primenit">
                    <button
                      type="button"
                      className="options__button button button--primary"
                      onClick={handleApply}
                    >
                      Применить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Areas;
