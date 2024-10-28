import React from "react";
import { SearchBox, PriceFilter, MultiSelect } from "../../Filter";


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

const CreateEditSubscribes = ({closeModal, isEditing }) => {
  return (
    <div
      class="layout ng-star-inserted"
      style={{position: "absolute", top: "0", left: "0"}}
    >
      <div class="modal modal--lg modal--active">
        <div class="modal__container">
          <div class="modal__header">
            <div class="modal__title"> Настройки </div>
          </div>
          <div class="modal__body">
            <div class="modal__section">
              <div class="modal__layout">
                <div class="inputfield">
                  <input
                    type="text"
                    class="inputfield__input input ng-untouched ng-pristine ng-valid"
                    placeholder="Название рассылки"
                  />
                  <label class="inputfield__label"> Название рассылки </label>
                </div>
              </div>
            </div>
            <div class="modal__section">
              <subscribes-filter>
                <div class="filter__section">
                  <div class="filter__layout">
                    <SearchBox />
                  </div>
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
                          <div class="field-group__item inputfield">
                            <input
                              type="text"
                              class="inputfield__input input"
                              readOnly=""
                              placeholder="Исключить слова"
                            />
                            <label class="inputfield__label">
                              Исключить слова
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="filter__layout filter__layout--lg">
                    <div class="field-group">
                      <div clickoutside="" class="field-group__section">
                        <div class="field-group__layout">
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
                                <svg-add-square
                                  _nghost-serverapp-c209=""
                                  class="icon__svg"
                                >
                                  <svg

                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path

                                      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                                    ></path>
                                  </svg>
                                </svg-add-square>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="field-group__section">
                        <PriceFilter name="sumForm" placeholder="Мин. сумма закупки" label="Мин. сумма закупки" />
                    <PriceFilter name="sumTo" placeholder="Макс. сумма закупки" label="Макс. сумма закупки" />
                      </div>
                    </div>
                  </div>
                  <div class="filter__layout">
                    <div class="field-group">
                      <div class="field-group__section">
                        <div class="field-group__layout">
                          <label class="modal__switch switch switch--compact">
                            <input
                              type="checkbox"
                              class="switch__control ng-untouched ng-pristine"
                              disabled=""
                            />
                            <span class="switch__check"></span>
                            <span class="switch__label"> E-mail рассылка </span>
                          </label>
                          <div class="inputfield">
                            <input
                              type="email"
                              placeholder="E-mail"
                              aria-describedby="subscribes-filter-email"
                              disabled=""
                              class="inputfield__input input input--default"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="field-group__section"></div>
                    </div>
                  </div>
                </div>
              </subscribes-filter>
            </div>
          </div>
          <div class="modal__footer">
            <div class="button-group button-group--sm">
              <div class="button-group__layout">
                <button class="button button--primary-transparent" onClick={closeModal}>
                  Отменить
                </button>
              </div>
              <div class="button-group__layout">
                <button class="button button--primary" disabled="">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditSubscribes;
