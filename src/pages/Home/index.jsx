import React from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

// components home
import {ContentHome, SearchBox, AccountResetPassword} from "./HomeComponents";

const Home = () => {
  const { uuid, token } = useParams();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const email = queryParams.email;

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
                              Портал закупок ERG, MP.kz, Nadloc, ЕТS-Тендер,
                              Национальный банк, BI-Group, Bazis-A и другие
                              коммерческие площадки
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </area-panel>
            <SearchBox />
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
          {uuid && token && (
        <AccountResetPassword uuid={uuid} token={token} email={email} />
      )}
      </main>
  );
};

export default Home;
