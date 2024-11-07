import React, { useState, useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb";
import MetaTags from "../../components/MetaTags";
import NotFound404 from "../../components/NotFound404";
import Documents from "../../components/Detail/Documents";
import LotActionsDetail from "../../components/Detail/LotActionsDetail";
import LotList from "../../components/LotList";
import LotInfo from "../../components/Detail/LotInfo";

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
  const [error, setError] = useState(null);
  useEffect(() => {
    getDetailLot(setDetail, slug, setError);
    getDetailLotOther(setOther, slug);
  }, [slug]);

  const toggleInfoVisibility = () => {
    setInfoVisible(!isInfoVisible);
  };

  if (error) {
    if (error.response && error.response.status === 404) {
      return <NotFound404 />;
    }
    return <div>Error: {error.message}</div>;
  }


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
    <main ClassName="ng-star-inserted">
      <MetaTags page="detailLot" title={detail.title} slug={slug}/>
      <div ClassName="layout__container">
        <div ClassName="body">
          <div ClassName="body__content">
            <Breadcrumb lot={detail.title} />
            <div ClassName="ng-star-inserted">
              <div ClassName="body__container">
                <h1 ClassName="visually-hidden">
                  Тендер {detail.truCode}: Товар {detail.advertisement.title},
                  {detail.count} {detail.unit}
                </h1>
                <div ClassName="page-lot ng-star-inserted">
                  <div ClassName="page-lot__info">
                    <div ClassName="lot">
                      <div ClassName="lot__title title title--h3 ng-star-inserted">
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
                      <div ClassName="lot__info">
                        <div ClassName="lot__description">
                          {detail.advertisement.title}
                        </div>
                        <div ClassName="lot__sum">
                          <div ClassName="lot__price ng-star-inserted">
                            {detail.totalPrice} <span ClassName="currency">₸</span>
                          </div>
                          <div ClassName="lot__status ng-star-inserted">
                            Статус:
                            <span ClassName="status-badge status-badge--winner">
                              {detail.advertisement.status}
                            </span>
                          </div>
                        </div>
                        <div ClassName="lot__time ng-star-inserted">
                          <div>До окончания тендера</div>
                          <Countdown targetDate={targetDate} />
                        </div>
                        <div ClassName="lot__details">
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
                      <div ClassName="lot__toggle">
                        <div
                          ClassName={`toggle-button ${
                            isInfoVisible ? "toggle-button--active" : ""
                          }`}
                          onClick={toggleInfoVisibility}
                        >
                          <div ClassName="toggle-button__icon icon">
                            <Angleup ClassName="icon__svg" />
                          </div>
                          <span ClassName="ng-star-inserted">
                            {isInfoVisible
                              ? "скрыть"
                              : "Информация и документы"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <LotActionsDetail lot={detail} />
                  <div ClassName="page-lot__details">
                    <div ClassName="lot lot--details lot--with-actions">
                      <div ClassName="lot__container">
                        <h2 ClassName="lot__info-title title title--h3 ng-star-inserted">
                          Лот
                          {hasTenderAccess ? (
                            <a
                              target="_blank"
                              ClassName="lot__info-link link ng-star-inserted"
                              href={detail.url}
                            >
                              {detail.lotNumber}
                              <div ClassName="link__icon link__icon--default link__icon--after icon">
                                <IconLink ClassName="icon__svg" />
                              </div>
                            </a>
                          ) : (
                            <a href="/tariffs" className="lot__link link">
                              {detail.advertisement.advertisementNumber}
                              <div ClassName="link__icon link__icon--default link__icon--after icon">
                                <IconLink ClassName="icon__svg" />
                              </div>
                            </a>
                          )}
                        </h2>
                        <div ClassName="lot__info">
                          <div ClassName="sr-item sr-item--secondary">
                            <div ClassName="sr-item__info">
                              <h3 ClassName="sr-item__title title">
                                {detail.title}
                              </h3>
                              <div ClassName="sr-item__field-label ng-star-inserted">
                                Краткая характеристика:
                              </div>
                              {hasTenderAccess ? (
                                <div ClassName="sr-item__field-data ng-star-inserted">
                                  {detail.shortDesc}
                                </div>
                              ) : (
                                <a href="/tariffs" className="lot__link link">
                                  {detail.shortDesc}
                                </a>
                              )}
                              <div ClassName="sr-item__field-label ng-star-inserted">
                                Доп. характеристика:
                              </div>
                              {hasTenderAccess ? (
                                <div ClassName="sr-item__field-data ng-star-inserted">
                                  {detail.additionalDesc}
                                </div>
                              ) : (
                                <a href="/tariffs" className="lot__link link">
                                  {detail.additionalDesc}
                                </a>
                              )}
                              <div ClassName="sr-item__layout">
                                <div ClassName="sr-item__price ng-star-inserted">
                                  {detail.totalPrice}
                                  <span ClassName="currency">₸</span>
                                </div>
                                <div ClassName="sr-item__status ng-star-inserted">
                                  Статус:
                                  <span ClassName="status-badge status-badge--winner">
                                    {detail.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div ClassName="lot__details">
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
                      <div ClassName="lot__sidebar">
                        {hasTenderAccess ? (
                          <div ClassName="lot__sidebar-section ng-star-inserted">
                            <div ClassName="lot__sidebar-title title title--h3">
                              Источник
                            </div>
                            <a
                              type="url"
                              ClassName="lot__link link link--default"
                              target="_blank"
                              href={detail.url}
                            >
                              {detail.url}
                            </a>
                          </div>
                        ) : (
                          <div ClassName="lot__sidebar-section ng-star-inserted">
                            <div ClassName="lot__sidebar-title title title--h3">
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
                          <div ClassName="lot__sidebar-section ng-star-inserted">
                            <div ClassName="lot__sidebar-title title title--h3">
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
                      <h3 ClassName="title title--h3 ng-star-inserted">
                        Остальные лоты: {other.length}
                      </h3>
                      <div ClassName="page-lot__list ng-star-inserted">
                        {other.map((lot) => (
                          <div ClassName="page-lot__list-item ng-star-inserted">
                            <LotList lot={lot} />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
