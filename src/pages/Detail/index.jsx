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

const Skeleton = ({ width = "100%", height = "2em" }) => (
  <div className="sr-item__details" style={{ width, height }}>
  <div className="skeleton skeleton-text"></div>
  <div className="skeleton skeleton-text"></div>
</div>
);

const Detail = () => {
  const { data } = useData();
  const { slug } = useParams();
  const [detail, setDetail] = useState({
    title: <Skeleton />,
    advertisement: {
      advertisementNumber: <Skeleton/>,
      title: <Skeleton  />,
    },
    shortDesc: <Skeleton  />,
    additionalDesc: <Skeleton />,
    url: <Skeleton  />,
  });
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
    <main className="ng-star-inserted">
      <MetaTags page="detailLot" title={detail.title} slug={slug}/>
      <div className="layout__container">
        <div className="body">
          <div className="body__content">
            <Breadcrumb lot={detail.title} />
            <div className="ng-star-inserted">
              <div className="body__container">
                <h1 className="visually-hidden">
                  Тендер {detail.truCode}: Товар {detail.advertisement.title},
                  {detail.count} {detail.unit}
                </h1>
                <div className="page-lot ng-star-inserted">
                  <div className="page-lot__info">
                    <div className="lot">
                      <div className="lot__title title title--h3 ng-star-inserted">
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
                      <div className="lot__info">
                        <div className="lot__description">
                          {detail.advertisement.title}
                        </div>
                        <div className="lot__sum">
                          <div className="lot__price ng-star-inserted">
                            {detail.totalPrice} <span className="currency">₸</span>
                          </div>
                          <div className="lot__status ng-star-inserted">
                            Статус:
                            <span className="status-badge status-badge--winner">
                              {detail.advertisement.status}
                            </span>
                          </div>
                        </div>
                        <div className="lot__time ng-star-inserted">
                          <div>До окончания тендера</div>
                          <Countdown targetDate={targetDate} />
                        </div>
                        <div className="lot__details">
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
                      <div className="lot__toggle">
                        <div
                          className={`toggle-button ${
                            isInfoVisible ? "toggle-button--active" : ""
                          }`}
                          onClick={toggleInfoVisibility}
                        >
                          <div className="toggle-button__icon icon">
                            <Angleup className="icon__svg" />
                          </div>
                          <span className="ng-star-inserted">
                            {isInfoVisible
                              ? "скрыть"
                              : "Информация и документы"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <LotActionsDetail lot={detail} />
                  <div className="page-lot__details">
                    <div className="lot lot--details lot--with-actions">
                      <div className="lot__container">
                        <h2 className="lot__info-title title title--h3 ng-star-inserted">
                          Лот
                          {hasTenderAccess ? (
                            <a
                              target="_blank"
                              className="lot__info-link link ng-star-inserted"
                              href={detail.url}
                            >
                              {detail.lotNumber}
                              <div className="link__icon link__icon--default link__icon--after icon">
                                <IconLink className="icon__svg" />
                              </div>
                            </a>
                          ) : (
                            <a href="/tariffs" className="lot__link link">
                              {detail.advertisement.advertisementNumber}
                              <div className="link__icon link__icon--default link__icon--after icon">
                                <IconLink className="icon__svg" />
                              </div>
                            </a>
                          )}
                        </h2>
                        <div className="lot__info">
                          <div className="sr-item sr-item--secondary">
                            <div className="sr-item__info">
                              <h3 className="sr-item__title title">
                                {detail.title}
                              </h3>
                              <div className="sr-item__field-label ng-star-inserted">
                                Краткая характеристика:
                              </div>
                              {hasTenderAccess ? (
                                <div className="sr-item__field-data ng-star-inserted">
                                  {detail.shortDesc}
                                </div>
                              ) : (
                                <a href="/tariffs" className="lot__link link">
                                  {detail.shortDesc}
                                </a>
                              )}
                              <div className="sr-item__field-label ng-star-inserted">
                                Доп. характеристика:
                              </div>
                              {hasTenderAccess ? (
                                <div className="sr-item__field-data ng-star-inserted">
                                  {detail.additionalDesc}
                                </div>
                              ) : (
                                <a href="/tariffs" className="lot__link link">
                                  {detail.additionalDesc}
                                </a>
                              )}
                              <div className="sr-item__layout">
                                <div className="sr-item__price ng-star-inserted">
                                  {detail.totalPrice}
                                  <span className="currency">₸</span>
                                </div>
                                <div className="sr-item__status ng-star-inserted">
                                  Статус:
                                  <span className="status-badge status-badge--winner">
                                    {detail.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lot__details">
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
                      <div className="lot__sidebar">
                        {hasTenderAccess ? (
                          <div className="lot__sidebar-section ng-star-inserted">
                            <div className="lot__sidebar-title title title--h3">
                              Источник
                            </div>
                            <a
                              type="url"
                              className="lot__link link link--default"
                              target="_blank"
                              href={detail.url}
                            >
                              {detail.url}
                            </a>
                          </div>
                        ) : (
                          <div className="lot__sidebar-section ng-star-inserted">
                            <div className="lot__sidebar-title title title--h3">
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
                          <div className="lot__sidebar-section ng-star-inserted">
                            <div className="lot__sidebar-title title title--h3">
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
                      <h3 className="title title--h3 ng-star-inserted">
                        Остальные лоты: {other.length}
                      </h3>
                      <div className="page-lot__list ng-star-inserted">
                        {other.map((lot) => (
                          <div className="page-lot__list-item ng-star-inserted">
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
