import React from "react";

// components AnalyticsSearch

const AnalyticsSearch = () => {
  return (
    <div className="content">
      <div class="content__block content__block--filter">
        <div class="container">
          <h1 class="visually-hidden"> Аналитика </h1>
          <div class="filter filter--no-padding filter--active">
            <div class="filter__title">
              Аналитика
              <button type="button" class="filter__toggle button">
                <span class="icon">
                  <svg-filter _nghost-serverapp-c231="" class="icon__svg">
                    <svg
                      _ngcontent-serverApp-c231=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        _ngcontent-serverApp-c231=""
                        d="M10.94 22.65c-.48 0-.95-.12-1.39-.36-.88-.49-1.41-1.38-1.41-2.38v-5.3c0-.5-.33-1.25-.64-1.63L3.76 9.02c-.63-.63-1.11-1.71-1.11-2.52V4.2c0-1.6 1.21-2.85 2.75-2.85h13.2c1.52 0 2.75 1.23 2.75 2.75v2.2c0 1.05-.63 2.24-1.22 2.83l-4.33 3.83c-.42.35-.75 1.12-.75 1.74V19c0 .89-.56 1.92-1.26 2.34l-1.38.89c-.45.28-.96.42-1.47.42ZM5.4 2.85c-.7 0-1.25.59-1.25 1.35v2.3c0 .37.3 1.09.68 1.47l3.81 4.01c.51.63 1.01 1.68 1.01 2.62v5.3c0 .65.45.97.64 1.07.42.23.93.23 1.32-.01l1.39-.89c.28-.17.56-.71.56-1.07v-4.3c0-1.07.52-2.25 1.27-2.88l4.28-3.79c.34-.34.75-1.15.75-1.74V4.1c0-.69-.56-1.25-1.25-1.25H5.4Z"
                      ></path>
                    </svg>
                  </svg-filter>
                </span>
              </button>
            </div>
            <div class="select-params"> Выберите параметры </div>
            <div class="hero__searchbar-layout hero__searchbar-layout--input">
              <multi-search-box class="filter__layout filter__layout--searchbar">
                <div class="hero-search">
                  <div class="hero-search__icon icon">
                    <svg-search _nghost-serverapp-c204="" class="icon__svg">
                      <svg
                        _ngcontent-serverApp-c204=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          _ngcontent-serverApp-c204=""
                          d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM21.9999 22.7499c-.19 0-.38-.07-.53-.22l-2-2c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
                        ></path>
                      </svg>
                    </svg-search>
                  </div>
                  <label
                    for="hero-search"
                    clickoutside=""
                    class="hero-search__container"
                  >
                    <span class="hero-search__placeholder">
                      {" "}
                      Введите ключевые слова или ТРУ и нажмите Enter{" "}
                    </span>
                    <div class="hero-search__tags my-hide">
                      <form
                        novalidate=""
                        autocomplete="off"
                        class="hero-search__tags ng-untouched ng-pristine ng-valid"
                      >
                        <input
                          type="text"
                          id="hero-search"
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellcheck="false"
                          name="search_query_result"
                          class="hero-search__input"
                        />
                      </form>
                    </div>
                  </label>
                  <div class="hero-search__actions">
                    <div class="hero-search__action">
                      <button
                        type="button"
                        class="hero-search__add button ng-star-inserted"
                        title="Добавить"
                      >
                        <span class="button__icon icon">
                          <svg-add-square
                            _nghost-serverapp-c209=""
                            class="icon__svg"
                          >
                            <svg
                              _ngcontent-serverApp-c209=""
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                _ngcontent-serverApp-c209=""
                                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                              ></path>
                            </svg>
                          </svg-add-square>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </multi-search-box>
              <div class="filter__layout filter__layout--options">
                <div class="filter__option">
                  <div class="checkbox checkbox--primary">
                    <input
                      type="checkbox"
                      id="spec"
                      class="checkbox__control"
                    />
                    <div class="checkbox__check"></div>
                    <label for="spec" class="checkbox__label">
                      {" "}
                      Искать в тех. спецификации{" "}
                    </label>
                    <div class="checkbox__help">
                      <div class="primary-hint primary-hint--warning">
                        <div class="primary-hint__title">
                          {" "}
                          Особенность поиска в тех. спецификации{" "}
                        </div>
                        <div class="primary-hint__description">
                          <div class="primary-hint__description-icon icon">
                            <svg-exclamation
                              _nghost-serverapp-c104=""
                              class="icon__svg"
                            >
                              <svg
                                _ngcontent-serverApp-c104=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  _ngcontent-serverApp-c104=""
                                  d="M12 14.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM12 18.0001c-.06 0-.13-.01-.2-.02-.06-.01-.12-.03-.18-.06-.06-.02-.12-.05-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.13-.03.27-.03.39 0 .07.01.13.03.19.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71l-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02Z"
                                ></path>
                                <path
                                  _ngcontent-serverApp-c104=""
                                  d="M18.06 22.16H5.94c-1.95 0-3.44-.71-4.2-1.99-.75-1.28-.65-2.93.3-4.64L8.1 4.63c1-1.8 2.38-2.79 3.9-2.79s2.9.99 3.9 2.79l6.06 10.91c.95 1.71 1.06 3.35.3 4.64-.76 1.27-2.25 1.98-4.2 1.98ZM12 3.34c-.94 0-1.86.72-2.59 2.02L3.36 16.27c-.68 1.22-.79 2.34-.32 3.15.47.81 1.51 1.25 2.91 1.25h12.12c1.4 0 2.43-.44 2.91-1.25s.36-1.92-.32-3.15L14.59 5.36c-.73-1.3-1.65-2.02-2.59-2.02Z"
                                ></path>
                              </svg>
                            </svg-exclamation>
                          </div>
                          <div class="primary-hint__description-text">
                            {" "}
                            Есть вероятность нерелевантого результата поиска{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter__option">
                  <div class="checkbox checkbox--primary">
                    <input type="checkbox" id="dop" class="checkbox__control" />
                    <div class="checkbox__check"></div>
                    <label for="dop" class="checkbox__label">
                      {" "}
                      Искать в доп. характеристиках{" "}
                    </label>
                    <div class="checkbox__help">
                      <div class="primary-hint primary-hint--warning">
                        <div class="primary-hint__title">
                          {" "}
                          Искать в доп. характеристиках{" "}
                        </div>
                        <div class="primary-hint__description">
                          <div class="primary-hint__description-icon icon">
                            <svg-exclamation
                              _nghost-serverapp-c104=""
                              class="icon__svg"
                            >
                              <svg
                                _ngcontent-serverApp-c104=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  _ngcontent-serverApp-c104=""
                                  d="M12 14.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM12 18.0001c-.06 0-.13-.01-.2-.02-.06-.01-.12-.03-.18-.06-.06-.02-.12-.05-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.13-.03.27-.03.39 0 .07.01.13.03.19.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71l-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02Z"
                                ></path>
                                <path
                                  _ngcontent-serverApp-c104=""
                                  d="M18.06 22.16H5.94c-1.95 0-3.44-.71-4.2-1.99-.75-1.28-.65-2.93.3-4.64L8.1 4.63c1-1.8 2.38-2.79 3.9-2.79s2.9.99 3.9 2.79l6.06 10.91c.95 1.71 1.06 3.35.3 4.64-.76 1.27-2.25 1.98-4.2 1.98ZM12 3.34c-.94 0-1.86.72-2.59 2.02L3.36 16.27c-.68 1.22-.79 2.34-.32 3.15.47.81 1.51 1.25 2.91 1.25h12.12c1.4 0 2.43-.44 2.91-1.25s.36-1.92-.32-3.15L14.59 5.36c-.73-1.3-1.65-2.02-2.59-2.02Z"
                                ></path>
                              </svg>
                            </svg-exclamation>
                          </div>
                          <div class="primary-hint__description-text">
                            {" "}
                            Есть вероятность нерелевантого результата поиска{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="filter__body ng-star-inserted">
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <div class="inputfield inputfield--suffix">
                      <input
                        type="text"
                        class="inputfield__input input"
                        readonly=""
                        placeholder="Исключить слова"
                      />
                      <label class="inputfield__label"> Исключить слова </label>
                      <div class="inputfield__suffix">
                        <span class="inputfield__icon inputfield__icon--primary icon">
                          <svg-add-square
                            _nghost-serverapp-c209=""
                            class="icon__svg"
                          >
                            <svg
                              _ngcontent-serverApp-c209=""
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                _ngcontent-serverApp-c209=""
                                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                              ></path>
                            </svg>
                          </svg-add-square>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="field-group__section">
                    <sidebar-filter-multiselect
                      filtername="regionIds"
                      class="field-group__layout"
                    >
                      <div clickoutside="" class="primary-select">
                        <div class="primary-select__header">
                          <div class="primary-select__icon icon ng-star-inserted">
                            <svg-pin
                              _nghost-serverapp-c214=""
                              class="icon__svg"
                            >
                              <svg
                                _ngcontent-serverApp-c214=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  _ngcontent-serverApp-c214=""
                                  d="M12 14.17a3.87 3.87 0 1 1 0-7.75 3.87 3.87 0 0 1 0 7.75Zm0-6.23a2.38 2.38 0 1 0 .01 4.75A2.38 2.38 0 0 0 12 7.94Z"
                                ></path>
                                <path
                                  _ngcontent-serverApp-c214=""
                                  d="M12 22.76a5.97 5.97 0 0 1-4.13-1.67c-2.95-2.84-6.21-7.37-4.98-12.76C4 3.44 8.27 1.25 12 1.25h.01c3.73 0 8 2.19 9.11 7.09 1.22 5.39-2.04 9.91-4.99 12.75A5.97 5.97 0 0 1 12 22.76Zm0-20.01c-2.91 0-6.65 1.55-7.64 5.91C3.28 13.37 6.24 17.43 8.92 20a4.43 4.43 0 0 0 6.17 0c2.67-2.57 5.63-6.63 4.57-11.34-1-4.36-4.75-5.91-7.66-5.91Z"
                                ></path>
                              </svg>
                            </svg-pin>
                          </div>
                          <div class="primary-select__container">
                            <div class="primary-select__label">
                              {" "}
                              Место поставки{" "}
                            </div>
                            <div class="primary-select__value"> Выбрать </div>
                          </div>
                          <div class="primary-select__toggle icon">
                            <svg-chevrondown-alt
                              _nghost-serverapp-c27=""
                              class="icon__svg"
                            >
                              <svg
                                _ngcontent-serverApp-c27=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  _ngcontent-serverApp-c27=""
                                  d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
                                ></path>
                                <path
                                  _ngcontent-serverApp-c27=""
                                  d="M12 14.91a.74.74 0 0 1-.53-.22l-3.53-3.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l3 3 3-3a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3.53 3.53a.74.74 0 0 1-.53.22Z"
                                ></path>
                              </svg>
                            </svg-chevrondown-alt>
                          </div>
                        </div>
                        <div class="primary-select__body">
                          <div class="primary-select__block ng-star-inserted">
                            <div class="button-group button-group--sm button-group--expand">
                              <div class="button-group__layout">
                                <button class="button-group__button button button--secondary button--sm">
                                  {" "}
                                  Выбрать все{" "}
                                </button>
                              </div>
                              <div class="button-group__layout">
                                <button class="button-group__button button button--secondary-outline button--sm">
                                  {" "}
                                  Сбросить{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul class="option">
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Абайская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="0ece36cb-4e6f-4dea-a05e-0c919f10198b"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Акмолинская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="a16edd3a-9049-4fdf-b6f7-1015f5054649"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Актюбинская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="75429b20-82ef-444f-ba83-ee920a419f1a"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Алматинская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="d02ac8f2-1dd0-451c-8bf1-db509176cae2"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Атырауская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="bef48f8e-a9c7-47db-a1c2-0a4de830a47f"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Восточно-Казахстанская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="766ed069-c5ed-431f-bbf3-62ac55aa7872"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">г.Алматы</span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="35b2efd0-81b1-4859-a6fd-1ce46e1d1a00"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">г.Астана</span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="f4827dc9-6e1b-4c09-bdbf-88b8b012cc57"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    г.Шымкент
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="11e8dc86-2bff-4f8c-a0f3-bdbd68a23dc8"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">Другое</span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="a0ca0c6d-f1d1-45ed-bca5-6d92a553ea07"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Жамбылская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="a60adb76-1d25-4678-ab0b-44ee35108553"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Жетысуская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="ae5d481c-3592-4240-8242-b5772f0c6169"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Западно-Казахстанская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="5fac5fe3-d5b5-4c2b-a340-c7e07fd1feeb"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Карагандинская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="a8ac8926-1f90-4af3-9d74-58cefc7544cf"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Костанайская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="4c55d09a-9274-4e24-8596-e0b52e483f77"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Кызылординская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="e57aacf3-a36a-45f3-a940-e3f427892e94"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Мангистауская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="0b2889da-c178-4d95-b7a0-69ef72819426"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Павлодарская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="19d22157-9cdd-41ee-8d58-5743c3634b49"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Северо-Казахстанская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="e706e5ea-9a5a-45ae-921f-855f9c9614f1"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Туркестанская область
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="665cd2ec-37a3-4fdb-bf09-578b6e230de1"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  <span class="ng-star-inserted">
                                    Улытауская область
                                  </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </sidebar-filter-multiselect>
                  </div>
                </div>
              </div>
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <sidebar-filter-multiselect
                      filtername="tenderSubjectTypes"
                      class="field-group__layout"
                    >
                      <div clickoutside="" class="primary-select">
                        <div class="primary-select__header">
                          <div class="primary-select__container">
                            <div class="primary-select__label">
                              {" "}
                              Предмет закупки{" "}
                            </div>
                            <div class="primary-select__value">
                              <span class="ng-star-inserted">Все</span>
                            </div>
                          </div>
                          <div class="primary-select__toggle icon">
                            <svg-chevrondown-alt
                              _nghost-serverapp-c27=""
                              class="icon__svg"
                            >
                              <svg
                                _ngcontent-serverApp-c27=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  _ngcontent-serverApp-c27=""
                                  d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
                                ></path>
                                <path
                                  _ngcontent-serverApp-c27=""
                                  d="M12 14.91a.74.74 0 0 1-.53-.22l-3.53-3.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l3 3 3-3a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3.53 3.53a.74.74 0 0 1-.53.22Z"
                                ></path>
                              </svg>
                            </svg-chevrondown-alt>
                          </div>
                        </div>
                        <div class="primary-select__body">
                          <div class="primary-select__block ng-star-inserted">
                            <div class="button-group button-group--sm button-group--expand">
                              <div class="button-group__layout">
                                <button class="button-group__button button button--secondary button--sm">
                                  {" "}
                                  Выбрать все{" "}
                                </button>
                              </div>
                              <div class="button-group__layout">
                                <button class="button-group__button button button--secondary-outline button--sm">
                                  {" "}
                                  Сбросить{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul class="option">
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="GOODS"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label"> Товар </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="WORKS"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label"> Работа </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="SERVICES"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label"> Услуга </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </sidebar-filter-multiselect>
                  </div>
                  <div class="field-group__section">
                    <sidebar-filter-multiselect
                      filtername="tenderTypes"
                      class="field-group__layout"
                    >
                      <div clickoutside="" class="primary-select">
                        <div class="primary-select__header">
                          <div class="primary-select__container">
                            <div class="primary-select__label">
                              {" "}
                              Способ заключения{" "}
                            </div>
                            <div class="primary-select__value">
                              <span class="ng-star-inserted">Все</span>
                            </div>
                          </div>
                          <div class="primary-select__toggle icon">
                            <svg-chevrondown-alt
                              _nghost-serverapp-c27=""
                              class="icon__svg"
                            >
                              <svg
                                _ngcontent-serverApp-c27=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  _ngcontent-serverApp-c27=""
                                  d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
                                ></path>
                                <path
                                  _ngcontent-serverApp-c27=""
                                  d="M12 14.91a.74.74 0 0 1-.53-.22l-3.53-3.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l3 3 3-3a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3.53 3.53a.74.74 0 0 1-.53.22Z"
                                ></path>
                              </svg>
                            </svg-chevrondown-alt>
                          </div>
                        </div>
                        <div class="primary-select__body">
                          <div class="primary-select__block ng-star-inserted">
                            <div class="button-group button-group--sm button-group--expand">
                              <div class="button-group__layout">
                                <button class="button-group__button button button--secondary button--sm">
                                  {" "}
                                  Выбрать все{" "}
                                </button>
                              </div>
                              <div class="button-group__layout">
                                <button class="button-group__button button button--secondary-outline button--sm">
                                  {" "}
                                  Сбросить{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul class="option">
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="OT"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  {" "}
                                  Тендеры и конкурсы{" "}
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="CP"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  {" "}
                                  Запрос ценовых предложений{" "}
                                </label>
                              </div>
                            </li>
                            <li class="option__layout ng-star-inserted">
                              <div class="option__checkbox checkbox">
                                <input
                                  type="checkbox"
                                  class="checkbox__control"
                                  id="IO"
                                />
                                <div class="checkbox__check"></div>
                                <label class="checkbox__label">
                                  {" "}
                                  Из одного источника{" "}
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </sidebar-filter-multiselect>
                  </div>
                </div>
              </div>
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <form
                      novalidate=""
                      autocomplete="off"
                      class="inputfield ng-untouched ng-pristine ng-valid"
                    >
                      <input
                        type="text"
                        autocomplete="off"
                        autocorrect="off"
                       autocapitalize="off"
                        spellcheck="false"
                        name="sumForm"
                        class="inputfield__input input ng-untouched ng-pristine ng-valid"
                        placeholder="Мин. сумма закупки"
                      />
                      <label class="inputfield__label">
                        {" "}
                        Мин. сумма закупки{" "}
                      </label>
                    </form>
                  </div>
                  <div class="field-group__section">
                    <form
                      novalidate=""
                      autocomplete="off"
                      class="inputfield ng-untouched ng-pristine ng-valid"
                    >
                      <input
                        type="text"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                        spellcheck="false"
                        name="sumTo"
                        class="inputfield__input input ng-untouched ng-pristine ng-valid"
                        placeholder="Макс. сумма закупки"
                      />
                      <label class="inputfield__label">
                        {" "}
                        Макс. сумма закупки{" "}
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <div class="years-fieldset">
                      <div class="years-fieldset__title"> Период </div>
                      <ul class="list-row list-row--analytics">
                        <li class="list-row__layout ng-star-inserted">
                          <div class="checkbox">
                            <input
                              type="checkbox"
                              class="checkbox__control"
                              id="2022"
                            />
                            <div class="checkbox__check"></div>
                            <label class="checkbox__label" for="2022">
                              2022
                            </label>
                          </div>
                        </li>
                        <li class="list-row__layout ng-star-inserted">
                          <div class="checkbox">
                            <input
                              type="checkbox"
                              class="checkbox__control"
                              id="2023"
                            />
                            <div class="checkbox__check"></div>
                            <label class="checkbox__label" for="2023">
                              {" "}
                              2023{" "}
                            </label>
                          </div>
                        </li>
                        <li class="list-row__layout ng-star-inserted">
                          <div class="checkbox">
                            <input
                              type="checkbox"
                              class="checkbox__control"
                              id="2024"
                            />
                            <div class="checkbox__check"></div>
                            <label class="checkbox__label" for="2024">
                              {" "}
                              2024{" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="field-group__section">
                    <div class="years-fieldset">
                      <div class="years-fieldset__title"> Площадка </div>
                      <ul class="list-row list-row--analytics">
                        <li class="list-row__layout ng-star-inserted">
                          <div class="checkbox">
                            <input
                              type="checkbox"
                              class="checkbox__control"
                              id="cf7be890-64b9-4d85-a2b4-5e556f50029c"
                            />
                            <div class="checkbox__check"></div>
                            <label
                              class="checkbox__label"
                              for="cf7be890-64b9-4d85-a2b4-5e556f50029c"
                            >
                              {" "}
                              Государственные закупки{" "}
                            </label>
                          </div>
                        </li>
                        <li class="list-row__layout ng-star-inserted">
                          <div class="checkbox">
                            <input
                              type="checkbox"
                              class="checkbox__control"
                              id="5e0eafbc-d18b-4a93-87e0-1e3b6568de10"
                            />
                            <div class="checkbox__check"></div>
                            <label
                              class="checkbox__label"
                              for="5e0eafbc-d18b-4a93-87e0-1e3b6568de10"
                            >
                              {" "}
                              Самрук-Қазына{" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="filter__footer">
              <div class="panel">
                <div class="panel__layout"></div>
                <div class="panel__layout panel__layout--rtl">
                  <div class="button-group">
                    <div class="button-group__layout desktop">
                      <button
                        type="button"
                        class="button button--primary-outline"
                      >
                        {" "}
                        Сбросить фильтр{" "}
                      </button>
                    </div>
                    <div class="button-group__layout">
                      <button type="button" class="button button--primary">
                        {" "}
                        Сформировать отчет{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSearch;
