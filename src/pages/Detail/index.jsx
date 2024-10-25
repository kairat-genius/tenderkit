import React, {useState} from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { LotInfo, LotList, Share, Documents } from "../../components";

import { ReactComponent as Angleup } from "../../assets/svg/pointer/arrows/angleup.svg";
import { ReactComponent as Tracking } from "../../assets/svg/icon/tracking.svg";
import { ReactComponent as Star } from "../../assets/svg/icon/star.svg";
import { ReactComponent as IconLink } from "../../assets/svg/pointer/link/link.svg";

import Countdown from "../../hooks/Countdown";


const Detail = () => {
  const targetDate = new Date("2024-10-30T00:00:00");

  const [isInfoVisible, setInfoVisible] = useState(false);

  const toggleInfoVisibility = () => {
    setInfoVisible(!isInfoVisible);
  };
  return (
      <lot class="ng-star-inserted">
        <div class="layout__container">
          <div class="body">
            <div class="body__content">
              <Breadcrumb />
              <lot-info class="ng-star-inserted">
                <div class="body__container">
                  <h1 class="visually-hidden">
                    Тендер 259213.990.000000: Товар (Товары ПТС, МГ (повторно)),
                    50 Штука
                  </h1>
                  <div class="page-lot ng-star-inserted">
                    <div class="page-lot__info">
                      <div class="lot">
                        <div class="lot__title title title--h3 ng-star-inserted">
                          Объявление: <span>1038199</span>
                        </div>
                        <div class="lot__info">
                          <div class="lot__description">
                            Товары ПТС, МГ (повторно)
                          </div>
                          <div class="lot__sum">
                            <div class="lot__price ng-star-inserted">
                              4 957 627,42 <span class="currency">₸</span>
                            </div>
                            <div class="lot__status ng-star-inserted">
                              Статус:
                              <span class="status-badge status-badge--winner">
                                Опубликовано
                              </span>
                            </div>
                          </div>
                          <div class="lot__time ng-star-inserted">
                            <div>До окончания тендера</div>
                            <Countdown targetDate={targetDate} />
                          </div>
                          <div class="lot__details">
                            <LotInfo LotLabel="Опубликовано:" LotData="17.10.2024 17:50"/>
                            <LotInfo LotLabel="Завершение:" LotData="24.10.2024 11:00"/>
                            {isInfoVisible && (
                               <>
                            <LotInfo LotLabel="Вид закупки:" LotData="Тендеры и конкурсы"/>
                            <LotInfo LotLabel="Организатор:" LotData="ГУ Аппарат акима Нижние Кайрактинского сельского округа Шетского района Карагандинской области"/>
                            <LotInfo LotLabel="Электронная почта:" LotData='akimat_nk@mail.ru' href="mailto:akimat_nk@mail.ru" isLink={true}  />
                            <LotInfo LotLabel="Телефон:" LotData="87103351407"/>
                            </>
                            )}
                          </div>
                        </div>
                        <div class="lot__toggle">
                          <div class={`toggle-button ${isInfoVisible ? "toggle-button--active" : ""}`} onClick={toggleInfoVisibility}>
                            <div class="toggle-button__icon icon">
                              <Angleup class="icon__svg" />
                            </div>
                            <span class="ng-star-inserted">
                            {isInfoVisible ? "скрыть" : "Информация и документы"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="page-lot__actions">
                      <div class="button-group button-group--lot-actions">
                        <div class="button-group__layout ng-star-inserted">
                          <button class="button button--action button--sm button--secondary-transparent">
                            <span class="ng-star-inserted"> Отслеживать </span>
                            <span class="button__icon button__icon--after icon">
                              <Tracking class="icon__svg" />
                            </span>
                          </button>
                        </div>
                        <div class="button-group__layout">
                          <button class="button button--action button--sm button--secondary-transparent">
                            <span class="ng-star-inserted"> В избранное </span>
                            <span class="button__icon button__icon--after icon">
                              <Star class="icon__svg" />
                            </span>
                          </button>
                        </div>
                       <Share />
                      </div>
                    </div>
                    <div class="page-lot__details">
                      <div class="lot lot--details lot--with-actions">
                        <div class="lot__container">
                          <h2 class="lot__info-title title title--h3 ng-star-inserted">
                            Лот
                            <a target="_blank" class="lot__info-link link ng-star-inserted" href="https://zakup.sk.kz/#/ext(popup:item/3786095/lot)?tabs=lot&amp;q=3786095&amp;adst=ALL&amp;lst=ALL&amp;page=1">
                              3786095
                              <div class="link__icon link__icon--default link__icon--after icon">
                                <IconLink class="icon__svg" />
                              </div>
                            </a>
                          </h2>
                          <div class="lot__info">
                            <div class="sr-item sr-item--secondary">
                              <div class="sr-item__info">
                                <h3 class="sr-item__title title"> Колпак </h3>
                                <div class="sr-item__field-label ng-star-inserted">
                                  Краткая характеристика:
                                </div>
                                <div class="sr-item__field-data ng-star-inserted">
                                  для кислородного балонна
                                </div>
                                <div class="sr-item__field-label ng-star-inserted">
                                  Доп. характеристика:
                                </div>
                                <div class="sr-item__field-data ng-star-inserted">
                                  Колпак для баллонов универсальный
                                </div>
                                <div class="sr-item__layout">
                                  <div class="sr-item__price ng-star-inserted">
                                    158 600 <span class="currency">₸</span>
                                  </div>
                                  <div class="sr-item__status ng-star-inserted">
                                    Статус:
                                    <span class="status-badge status-badge--winner">
                                      Опубликовано
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="lot__details">
                          <LotInfo LotLabel="Код ТРУ:" LotData="259213.990.000000"/>
                          <LotInfo LotLabel="Единица измерения:" LotData="Штука"/>
                          <LotInfo LotLabel="Количество:" LotData="50"/>
                          <LotInfo LotLabel="Цена за единицу:" LotData="3 172 ₸"/>
                          <LotInfo LotLabel="Место поставки:" LotData="КАЗАХСТАН, аул Талдыколь"/>
                          <LotInfo LotLabel="Заказчик:" LotData='Акционерное общество "Интергаз Центральная Азия"' href="" isLink={true}  />
                            <LotInfo LotLabel="Сроки поставки:" LotData="С даты подписания договора в течение 30 Календарные дней"/>
                            <LotInfo LotLabel="Вид закупки:" LotData="Запрос ценовых предложений"/>
                            <LotInfo LotLabel="Номер пункта плана:" LotData="2327-1 Т"/>
                          </div>
                        </div>
                        <div class="lot__sidebar">
                          <div class="lot__sidebar-section ng-star-inserted">
                            <div class="lot__sidebar-title title title--h3">
                              Источник
                            </div>
                            <a type="url" class="lot__link link link--default">
                              Самрук-Қазына
                            </a>
                          </div>
                          <Documents />
                          <div class="lot__sidebar-section">
                            <a href="https://eep.mitwork.kz?utm_source=zakupki&amp;utm_medium=banner&amp;utm_campaign=zakupki" target="_blank" class="promo">
                                <img src="https://zakupki.kz/assets/img/banner-mitwork.jpg" width="285" height="285" alt="Евразийский электронный портал" title="Евразийский электронный портал" class="promo__image" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 class="title title--h3 ng-star-inserted">
                      Остальные лоты: 12
                    </h3>
                    <div class="page-lot__list ng-star-inserted">
                      <div class="page-lot__list-item ng-star-inserted">
                          <LotList />
                      </div>
                    </div>
                  </div>
                </div>
              </lot-info>
            </div>
          </div>
        </div>
      </lot>
  );
};

export default Detail;
