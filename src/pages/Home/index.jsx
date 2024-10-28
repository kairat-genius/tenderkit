import React from "react";


// components home
import {ContentHome} from "./HomeComponents";
import {DeliveryLocation, MultiSearch} from "../../components/Filter"

const Home = () => {

  return (
      <main class="ng-star-inserted">
        <section class="hero">
          <div class="hero__container container">
            <h1 class="hero__title">
              Поиск тендеров в&nbsp;Казахстане по&nbsp;всем площадкам
              <br />
              в&nbsp;одном месте
            </h1>
            <a href="" class="hero__onboarding">
              Нужна помощь с поиском?
            </a>
            <area-panel hidden="">
              <div class="hero__search-options ng-star-inserted">
                <div class="hero__search-option">
                  <div class="checkbox checkbox--primary">
                    <input
                      type="checkbox"
                      name="checkall"
                      class="checkbox__control"
                    />
                    <div class="checkbox__check"></div>
                    <label class="checkbox__label"> Выбрать все </label>
                  </div>
                </div>
                <div class="hero__search-option ng-star-inserted">
                  <div class="checkbox checkbox--primary">
                    <input
                      type="checkbox"
                      name="goszakup"
                      class="checkbox__control"
                    />
                    <div class="checkbox__check"></div>
                    <label class="checkbox__label">
                      Государственные закупки
                    </label>
                  </div>
                </div>
                <div class="hero__search-option ng-star-inserted">
                  <div class="checkbox checkbox--primary">
                    <input
                      type="checkbox"
                      name="goszakup"
                      class="checkbox__control"
                    />
                    <div class="checkbox__check"></div>
                    <label class="checkbox__label"> Самрук-Қазына </label>
                  </div>
                </div>
                <div class="hero__search-option ng-star-inserted">
                  <div class="checkbox checkbox--primary">
                    <input
                      type="checkbox"
                      name="goszakup"
                      class="checkbox__control"
                    />
                    <div class="checkbox__check"></div>
                    <label class="checkbox__label"> ЕЭП Mitwork </label>
                  </div>
                </div>
                <div class="hero__search-option">
                  <div class="checkbox checkbox--primary">
                    <input
                      type="checkbox"
                      name="others"
                      class="checkbox__control"
                    />
                    <div class="checkbox__check"></div>
                    <label class="checkbox__label"> Другие площадки </label>
                    <div class="checkbox__help">
                      <div class="tariff-table__help">
                        <div class="primary-hint">
                          <div class="primary-hint__description">
                            <div class="primary-hint__description-text">
                              {" "}
                              Портал закупок ERG, MP.kz, Nadloc, ЕТS-Тендер,
                              Национальный банк, BI-Group, Bazis-A и другие
                              коммерческие площадки{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </area-panel>
            <search-box class="hero__search">
              <div class="hero__searchbar">
              <div class="hero__searchbar-layout hero__searchbar-layout--input">
               <MultiSearch />
               </div>
                <button
                  class="hero__searchbar-button button button--primary ng-star-inserted"
                  id="poisk"
                  style={{width: "200px"}}
                >
                  Поиск
                </button>
              </div>
            </search-box>
            <dl class="hero__dl">
              <dt class="hero__dt"> Поиск по: </dt>
              <dd class="hero__dd">
                <a routerlink="plans" class="hero__link" href="/plans">
                  планам,
                </a>
              </dd>
              <dd class="hero__dd">
                <a routerlink="result" class="hero__link" href="/result">
                  закупкам,
                </a>
              </dd>
              <dd class="hero__dd">
                <a routerlink="contracts" class="hero__link" href="/contracts">
                  договорам
                </a>
              </dd>
            </dl>
          </div>
        </section>
          <ContentHome />
      </main>
  );
};

export default Home;
