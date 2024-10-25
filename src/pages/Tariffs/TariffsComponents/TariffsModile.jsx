import React from "react";

// svg
import { ReactComponent as Check } from "../../../assets/svg/icon/check.svg";

const TariffsModile = () => {
  return (
    <div class="content__block content__block--theme-secondary content__block--bottom">
      <section class="content__layout">
        <tariff-table>
          <div class="tariff-abtest ng-star-inserted">
            <ul class="tariff-abtest__m-tariff-list">
              <li class="tariff-abtest__m-tariff-item ng-star-inserted">
                <div class="tariff-abtest__m-tariff-left">
                  <div class="tariff-abtest__feat"> Базовый </div>
                  <div class="tariff-abtest__feat-desc"> 85 000 ₸ /в год </div>
                </div>
                <div class="tariff-abtest__m-tariff-right">
                  <span class="icon m-tariff-icon">
                    <svg-chevronright
                      _nghost-serverapp-c110=""
                      class="icon__svg"
                    >
                      <svg
                        _ngcontent-serverApp-c110=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          _ngcontent-serverApp-c110=""
                          d="M8.9101 20.67c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74l-6.52-6.52c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22Z"
                        ></path>
                      </svg>
                    </svg-chevronright>
                  </span>
                </div>
              </li>
              <li class="tariff-abtest__m-tariff-item ng-star-inserted">
                <div class="tariff-abtest__m-tariff-left">
                  <div class="tariff-abtest__feat"> Стандарт </div>
                  <div class="tariff-abtest__feat-desc"> 155 000 ₸ /в год </div>
                </div>
                <div class="tariff-abtest__m-tariff-right">
                  <span class="icon m-tariff-icon">
                    <svg-chevronright
                      _nghost-serverapp-c110=""
                      class="icon__svg"
                    >
                      <svg
                        _ngcontent-serverApp-c110=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          _ngcontent-serverApp-c110=""
                          d="M8.9101 20.67c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74l-6.52-6.52c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22Z"
                        ></path>
                      </svg>
                    </svg-chevronright>
                  </span>
                </div>
              </li>
              <li class="tariff-abtest__m-tariff-item ng-star-inserted">
                <div class="tariff-abtest__m-tariff-left">
                  <div class="tariff-abtest__badge tariff-abtest__badge--only ng-star-inserted">
                    {" "}
                    Самый выгодный{" "}
                  </div>
                  <div class="tariff-abtest__feat"> Бизнес </div>
                  <div class="tariff-abtest__feat-desc"> 455 000 ₸ /в год </div>
                </div>
                <div class="tariff-abtest__m-tariff-right">
                  <span class="icon m-tariff-icon">
                    <svg-chevronright
                      _nghost-serverapp-c110=""
                      class="icon__svg"
                    >
                      <svg
                        _ngcontent-serverApp-c110=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          _ngcontent-serverApp-c110=""
                          d="M8.9101 20.67c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74l-6.52-6.52c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22Z"
                        ></path>
                      </svg>
                    </svg-chevronright>
                  </span>
                </div>
              </li>
              <li class="tariff-abtest__m-tariff-item ng-star-inserted">
                <div class="tariff-abtest__m-tariff-left">
                  <div class="tariff-abtest__feat"> Премиум </div>
                  <div class="tariff-abtest__feat-desc">
                    {" "}
                    1 670 000 ₸ /в год{" "}
                  </div>
                </div>
                <div class="tariff-abtest__m-tariff-right">
                  <span class="icon m-tariff-icon">
                    <svg-chevronright
                      _nghost-serverapp-c110=""
                      class="icon__svg"
                    >
                      <svg
                        _ngcontent-serverApp-c110=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          _ngcontent-serverApp-c110=""
                          d="M8.9101 20.67c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74l-6.52-6.52c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22Z"
                        ></path>
                      </svg>
                    </svg-chevronright>
                  </span>
                </div>
              </li>
            </ul>
            <div class="tariff-abtest__m-buy-layout">
              <button
                type="button"
                class="button button--primary tariff-abtest__m-buy tariff-abtest__m-buy--lg"
              >
                {" "}
                Сравнить тарифы{" "}
              </button>
            </div>
          </div>
        </tariff-table>
      </section>
    </div>
  );
};

export default TariffsModile;
