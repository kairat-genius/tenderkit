import React from "react";
import { ReactComponent as Map } from "../../assets/svg/regions/map.svg";

import Breadcrumb from "../../components/Breadcrumb"

const Regions = () => {
  return (
      <main class="ng-star-inserted">
        <div class="content">
          <div class="content__block content__block--head">
            <div class="container container--lg">
             <Breadcrumb />
              <h1 class="content__title"> Тендеры по&nbsp;областям </h1>
              <div class="grid grid--regions">
                <div style={{position: "relative"}}>
                 <Map />
                  <div id="map-tooltip" class="svg-map__tooltip" style={{display: "none", left: "527.502px", top: "155.079px", transform: "translate(-50%, calc(-100% - 10px))"}}>
                    <p class="bold">Абайская обл.</p>
                  </div>
                </div>
                <div class="options options--regions">
                  <div class="options__header">
                    <label class="checkbox">
                      <input type="checkbox" class="checkbox__control" />
                      <span class="checkbox__check"></span>
                      <span class="checkbox__label">
                        {" "}
                        Выбрать все{" "}
                        <span class="checkbox__counter"> 13 465 856 </span>
                      </span>
                    </label>
                  </div>
                  <div class="options__body">
                    <ul class="options__list ng-star-inserted">
                      <li class="options__item ng-star-inserted">
                        <label class="checkbox">
                          <input type="checkbox" class="checkbox__control" />
                          <span class="checkbox__check"></span>
                          <span class="checkbox__label">
                            {" "}
                            Абайская область{" "}
                            <span class="checkbox__counter"> 319 428 </span>
                          </span>
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div class="options__footer">
                    <div class="button-group button-group--sm">
                      <div class="button-group__layout">
                        <button type="button" class="options__button button button--secondary-transparent">
                          Сбросить
                        </button>
                      </div>
                      <div class="button-group__layout" id="oblasti_primenit">
                        <button type="button" class="options__button button button--primary">
                          Применить
                        </button>
                      </div>
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

export default Regions;
