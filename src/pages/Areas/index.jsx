import React from "react";

// svg
import { ReactComponent as Search } from "../../assets/svg/pointer/search.svg";

// components Areas

import Breadcrumb from "../../components/Breadcrumb"

const Areas = () => {
  return (
      <main class="ng-star-inserted">
        <div class="content">
          <div class="content__block content__block--head">
            <div class="container container--lg">
            <Breadcrumb />
              <h1 class="content__title"> Тендеры по&nbsp;площадкам </h1>
              <div class="options options--areas">
                <div class="options__header">
                  <label class="checkbox">
                    <input type="checkbox" class="checkbox__control" />
                    <span class="checkbox__check"></span>
                    <span class="checkbox__label"> Выбрать все </span>
                  </label>
                  <form noValidate="" autoComplete="off" clickoutside="" class="options__search inputfield inputfield--search inputfield--icon ng-untouched ng-pristine ng-valid">
                    <input
                      type="search"
                      class="inputfield__input input ng-valid ng-touched ng-dirty"
                      placeholder="Введите название площадки"
                    />
                    <div class="inputfield__prefix">
                      <span class="inputfield__icon icon">
<Search class="icon__svg"/>
                      </span>
                    </div>
                  </form>
                </div>
                <div class="options__body">
                  <ul class="options__list">
                    <li class="options__item ng-star-inserted">
                      <label class="checkbox">
                        <input type="checkbox" class="checkbox__control" />
                        <span class="checkbox__check"></span>
                        <span class="checkbox__label">
                          Государственные закупки
                        </span>
                      </label>
                    </li>
                    <li class="options__item ng-star-inserted">
                      <label class="checkbox">
                        <input type="checkbox" class="checkbox__control" />
                        <span class="checkbox__check"></span>
                        <span class="checkbox__label"> Самрук-Қазына </span>
                      </label>
                    </li>
                   
                  </ul>
                </div>
                <div class="options__footer">
                  <div class="button-group button-group--sm">
                    <div class="button-group__layout">
                      <button
                        type="button"
                        class="options__button button button--secondary-transparent"
                      >
                        Сбросить
                      </button>
                    </div>
                    <div class="button-group__layout" id="ploshadki_primenit">
                      <button
                        type="button"
                        class="options__button button button--primary"
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
