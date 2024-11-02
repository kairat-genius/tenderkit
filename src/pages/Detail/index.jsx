import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import {
  LotInfo,
  LotList,
  LotActionsDetail,
  Documents,
} from "../../components";
import { useParams } from "react-router-dom";
import { getDetailLot } from "../../api/Lots/getDetailLot";
import { getDetailLotOther } from "../../api/Lots/getDetailLotOther";
import { formatDate, formatTime } from "../../hooks/LotUtils";
import { useData } from "../../hooks/DataContext";
import { ReactComponent as Angleup } from "../../assets/svg/pointer/arrows/angleup.svg";
import { ReactComponent as IconLink } from "../../assets/svg/pointer/link/link.svg";

import Countdown from "../../hooks/Countdown";

const Detail = () => {
  const { data } = useData();
  const { slug } = useParams();
  const [detail, setDetail] = useState({ advertisement: {} });
  const [other, setOther] = useState([]);
  const [isInfoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    getDetailLot(setDetail, slug);
    getDetailLotOther(setOther, slug);
  }, [slug]);

  const toggleInfoVisibility = () => {
    setInfoVisible(!isInfoVisible);
  };

  const now = new Date();
  const endingDate = new Date(detail.advertisement.endingDate);

  const timeDiff = endingDate - now;

  const formatRemainingTime = () => {
    if (timeDiff > 0) {
      const remainingDate = new Date(endingDate);
      return remainingDate.toISOString();
    } else {
      return 0;
    }
  };

  const targetDate = formatRemainingTime();

  const allDocuments = [
    ...(detail.documents || []),
    ...(detail.advertisement?.documents || []),
  ];

  const hasTenderAccess =
    data &&
    data.subscription &&
    data.subscription.tariff &&
    data.subscription.tariff.tender_access !== false;
  return (
    <lot class="ng-star-inserted">
      <div class="layout__container">
        <div class="body">
          <div class="body__content">
            <Breadcrumb lot={detail.title} />
            <lot-info class="ng-star-inserted">
              <div class="body__container">
                <h1 class="visually-hidden">
                  Тендер {detail.truCode}: Товар {detail.advertisement.title},
                  {detail.count} {detail.unit}
                </h1>
                <div class="page-lot ng-star-inserted">
                  <div class="page-lot__info">
                    <div class="lot">
                      <div class="lot__title title title--h3 ng-star-inserted">
                        Объявление:
                        {hasTenderAccess ? (
                          <span>
                            {detail.advertisement.advertisementNumber}
                          </span>
                        ) : (
                          <a href="/tariffs" className="lot__link link">
                            {detail.advertisement.advertisementNumber}
                          </a>
                        )}
                      </div>
                      <div class="lot__info">
                        <div class="lot__description">
                          {detail.advertisement.title}
                        </div>
                        <div class="lot__sum">
                          <div class="lot__price ng-star-inserted">
                            {detail.totalPrice} <span class="currency">₸</span>
                          </div>
                          <div class="lot__status ng-star-inserted">
                            Статус:
                            <span class="status-badge status-badge--winner">
                              {detail.advertisement.status}
                            </span>
                          </div>
                        </div>
                        <div class="lot__time ng-star-inserted">
                          <div>До окончания тендера</div>
                          <Countdown targetDate={targetDate} />
                        </div>
                        <div class="lot__details">
                          <LotInfo
                            LotLabel="Начало:"
                            LotData={`${formatDate(
                              detail.advertisement.startingDate
                            )} ${formatTime(
                              detail.advertisement.startingDate
                            )}`}
                          />
                          <LotInfo
                            LotLabel="Завершение:"
                            LotData={`${formatDate(
                              detail.advertisement.endingDate
                            )} ${formatTime(detail.advertisement.endingDate)}`}
                          />
                          {isInfoVisible && (
                            <>
                              <LotInfo
                                LotLabel="Вид закупки:"
                                LotData={detail.advertisement.purchaseType}
                                href={!hasTenderAccess ? "/tariffs" : ""}
                                isLink={!hasTenderAccess}
                              />
                              <LotInfo
                                LotLabel="Организатор:"
                                LotData={detail.advertisement.organizer}
                                href={!hasTenderAccess ? "/tariffs" : ""}
                                isLink={!hasTenderAccess}
                              />
                              <LotInfo
                                LotLabel="Электронная почта:"
                                LotData={detail.advertisement.email}
                                href={
                                  !hasTenderAccess
                                    ? "/tariffs"
                                    : `mailto:${detail.advertisement.email}`
                                }
                                isLink={true}
                              />
                              <LotInfo
                                LotLabel="Телефон:"
                                LotData={detail.advertisement.phone}
                                href={!hasTenderAccess ? "/tariffs" : ""}
                                isLink={!hasTenderAccess}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      <div class="lot__toggle">
                        <div
                          class={`toggle-button ${
                            isInfoVisible ? "toggle-button--active" : ""
                          }`}
                          onClick={toggleInfoVisibility}
                        >
                          <div class="toggle-button__icon icon">
                            <Angleup class="icon__svg" />
                          </div>
                          <span class="ng-star-inserted">
                            {isInfoVisible
                              ? "скрыть"
                              : "Информация и документы"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <LotActionsDetail lot={detail} />
                  <div class="page-lot__details">
                    <div class="lot lot--details lot--with-actions">
                      <div class="lot__container">
                        <h2 class="lot__info-title title title--h3 ng-star-inserted">
                          Лот
                          {hasTenderAccess ? (
                            <a
                              target="_blank"
                              class="lot__info-link link ng-star-inserted"
                              href={detail.url}
                            >
                              {detail.lotNumber}
                              <div class="link__icon link__icon--default link__icon--after icon">
                                <IconLink class="icon__svg" />
                              </div>
                            </a>
                          ) : (
                            <a href="/tariffs" className="lot__link link">
                              {detail.advertisement.advertisementNumber}
                              <div class="link__icon link__icon--default link__icon--after icon">
                                <IconLink class="icon__svg" />
                              </div>
                            </a>
                          )}
                        </h2>
                        <div class="lot__info">
                          <div class="sr-item sr-item--secondary">
                            <div class="sr-item__info">
                              <h3 class="sr-item__title title">
                                {detail.title}
                              </h3>
                              <div class="sr-item__field-label ng-star-inserted">
                                Краткая характеристика:
                              </div>
                              {hasTenderAccess ? (
                                <div class="sr-item__field-data ng-star-inserted">
                                  {detail.shortDesc}
                                </div>
                              ) : (
                                <a href="/tariffs" className="lot__link link">
                                  {detail.shortDesc}
                                </a>
                              )}
                              <div class="sr-item__field-label ng-star-inserted">
                                Доп. характеристика:
                              </div>
                              {hasTenderAccess ? (
                                <div class="sr-item__field-data ng-star-inserted">
                                  {detail.additionalDesc}
                                </div>
                              ) : (
                                <a href="/tariffs" className="lot__link link">
                                  {detail.additionalDesc}
                                </a>
                              )}
                              <div class="sr-item__layout">
                                <div class="sr-item__price ng-star-inserted">
                                  {detail.totalPrice}
                                  <span class="currency">₸</span>
                                </div>
                                <div class="sr-item__status ng-star-inserted">
                                  Статус:
                                  <span class="status-badge status-badge--winner">
                                    {detail.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="lot__details">
                          <LotInfo
                            LotLabel="Код ТРУ:"
                            LotData={detail.truCode}
                          />
                          <LotInfo
                            LotLabel="Единица измерения:"
                            LotData={detail.unit}
                          />
                          <LotInfo
                            LotLabel="Количество:"
                            LotData={detail.count}
                          />
                          <LotInfo
                            LotLabel="Цена за единицу:"
                            LotData={`${detail.pricePerUnit} ₸`}
                          />
                          <LotInfo
                            LotLabel="Место поставки:"
                            LotData={detail.deliveryAddress}
                          />
                          <LotInfo
                            LotLabel="Заказчик:"
                            LotData={detail.customer}
                            href={!hasTenderAccess ? "/tariffs" : ""}
                            isLink={!hasTenderAccess}
                          />
                          <LotInfo
                            LotLabel="Сроки поставки:"
                            LotData={detail.schedule}
                            href={!hasTenderAccess ? "/tariffs" : ""}
                            isLink={!hasTenderAccess}
                          />
                          <LotInfo
                            LotLabel="Предмет закупок:"
                            LotData={detail.tenderSubjectType}
                            href={!hasTenderAccess ? "/tariffs" : ""}
                            isLink={!hasTenderAccess}
                          />
                          <LotInfo
                            LotLabel="Номер пункта плана:"
                            LotData={detail.rowNumber}
                            href={!hasTenderAccess ? "/tariffs" : ""}
                            isLink={!hasTenderAccess}
                          />
                        </div>
                      </div>
                      <div class="lot__sidebar">
                        {hasTenderAccess ? (
                          <div class="lot__sidebar-section ng-star-inserted">
                            <div class="lot__sidebar-title title title--h3">
                              Источник
                            </div>
                            <a
                              type="url"
                              class="lot__link link link--default"
                              target="_blank"
                              href={detail.url}
                            >
                              {detail.url}
                            </a>
                          </div>
                        ) : (
                          <div class="lot__sidebar-section ng-star-inserted">
                            <div class="lot__sidebar-title title title--h3">
                              Источник
                            </div>
                            <a href="/tariffs" className="lot__link link">
                              Приобретите тариф, чтобы получить полную
                              информацию!
                            </a>
                          </div>
                        )}

                        {hasTenderAccess ? (
                          <Documents allDocuments={allDocuments} />
                        ) : (
                          <div class="lot__sidebar-section ng-star-inserted">
                            <div class="lot__sidebar-title title title--h3">
                              Документы
                            </div>
                            <a href="/tariffs" className="lot__link link">
                              Приобретите тариф, чтобы получить полную
                              информацию!
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {other.length > 0 && (
                    <>
                      <h3 class="title title--h3 ng-star-inserted">
                        Остальные лоты: {other.length}
                      </h3>
                      <div class="page-lot__list ng-star-inserted">
                        {other.map((lot) => (
                          <div class="page-lot__list-item ng-star-inserted">
                            <LotList lot={lot} />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
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
