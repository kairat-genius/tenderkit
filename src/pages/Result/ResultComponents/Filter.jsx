import React, {useState} from "react";

// svg
import { ReactComponent as ChevrondownAlt } from "../../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as AddSquare } from "../../../assets/svg/pointer/add-square.svg";
import { ReactComponent as IconFilter } from "../../../assets/svg/pointer/filter.svg";

// components Result Filter
import {
  SearchBox,
  Calendar,
  MultiSelect,
  FilterFooter,
  PriceFilter,
  MultiSelectClean
} from "../../../components/Filter";
import Breadcrumb from "../../../components/Breadcrumb";

const tenderSubjectTypesOptions = [
  { id: "GOODS", label: "Товар" },
  { id: "WORKS", label: "Работа" },
  { id: "SERVICES", label: "Услуга" },
];

const tenderTypesOptions = [
  { id: "OT", label: "Тендеры и конкурсы" },
  { id: "CP", label: "Запрос ценовых предложений" },
  { id: "IO", label: "Из одного источника" },
  { id: "SP", label: "Особый порядок" },
];

const Filter = () => {
  const [isFilterVisible, setFilterVisible] = useState(true);

  // Обработчик для переключения видимости фильтра
  const toggleFilterVisibility = () => {
    setFilterVisible(!isFilterVisible);
  };


  return (
    <div class="content">
      <div class="content__block content__block--filter">
        <div class="container">
          <Breadcrumb />
          <h1 class="visually-hidden"> seo.TENDER_SEARCH </h1>
          <div class={`filter filter--no-padding ${isFilterVisible ? 'filter--active' : ''}`}>
            <div class="filter__title">
              Поиск закупок
              <button type="button" class="filter__toggle button" onClick={toggleFilterVisibility}>
                <span class="icon">
                  <IconFilter class="icon__svg"/>
                </span>
              </button>
            </div>
            <SearchBox />
            {isFilterVisible && (
            <search-filter class="filter__body ng-star-inserted">
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <MultiSelect
                      filterName="tenderTypes"
                      label="Вид закупок"
                      options={tenderTypesOptions}
                      selectedCount={1}
                    />
                    <MultiSelect
                      filterName="tenderSubjectTypes"
                      label="Предмет закупок"
                      options={tenderSubjectTypesOptions}
                      selectedCount={0}
                    />
                  </div>
                  <div class="field-group__section">
                    <MultiSelect
                      filterName="tenderTypes"
                      label="Вид закупок"
                      options={tenderTypesOptions}
                      selectedCount={1}
                    />
                    <MultiSelect
                      filterName="tenderSubjectTypes"
                      label="Предмет закупок"
                      options={tenderSubjectTypesOptions}
                      selectedCount={0}
                    />
                  </div>
                </div>
              </div>
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
                            <AddSquare class="icon__svg"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                 <MultiSelectClean />
                </div>
              </div>
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <PriceFilter name="sumForm" placeholder="Мин. сумма закупки" label="Мин. сумма закупки" />
                    <PriceFilter name="sumTo" placeholder="Макс. сумма закупки" label="Макс. сумма закупки" />
                  </div>
                  <div class="field-group__section">
                    <Calendar label="Дата публикации от" />
                    <Calendar label="Дата публикации до" />
                  </div>
                </div>
              </div>
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <div class="field-group__layout">
                      <div class="inputfield inputfield--suffix">
                        <input
                          type="text"
                          class="inputfield__input input"
                          readOnly=""
                          placeholder="Организаторы"
                        />
                        <label class="inputfield__label"> Организаторы </label>
                        <div class="inputfield__suffix">
                          <span class="inputfield__icon inputfield__icon--primary icon">
                            <AddSquare class="icon__svg"/>
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
                        />
                        <label class="inputfield__label"> Номер лота </label>
                      </form>
                    </div>
                  </div>
                  <div class="field-group__section">
                    <Calendar label="Дата начала от" />
                    <Calendar label="Дата начала до" />
                  </div>
                </div>
              </div>
              <div class="filter__layout">
                <div class="field-group">
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
                            <ChevrondownAlt class="icon__svg"/>
                          </div>
                        </div>
                        <div class="primary-select__body"></div>
                      </div>
                    </sidebar-filter-subscribe>
                  </div>
                  <div class="field-group__section">
                    <Calendar label="Дата окончания от" />
                    <Calendar label="Дата окончания до" />
                  </div>
                </div>
              </div>
            </search-filter>
            )}
            <FilterFooter onClick={toggleFilterVisibility} isFilterVisible={isFilterVisible}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
