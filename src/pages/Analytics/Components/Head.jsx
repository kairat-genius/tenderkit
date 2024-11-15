import React from "react";
import Breadcrumb from "../../../components/Breadcrumb"
import { Link } from "react-router-dom";

const Head = () => {
  return (
      <div className="content__head head">
        <div className="container container--md">
          <Breadcrumb />
          <div className="head__wrap">
            <img src="/assets/analytics/analytics.png" width="382" height="382" className="head__image" alt="Аналитика" title="Аналитика - image №16"/>
            <div className="head__content">
              <h1 className="head__title">
                Анализируйте и&nbsp;побеждайте вместе с&nbsp;нами
              </h1>
              <p className="head__desc">
                 Аналитика даёт возможность оценить свою конкурентоспособность
                на&nbsp;рынке, узнать о&nbsp;настоящих и&nbsp;будущих
                объявлениях заказчиков. Аналитика также позволяет сделать разбор
                тендеров по&nbsp;отраслям и&nbsp;регионам
              </p>
              <div className="head__actions">
                <Link to="/analytics-search" className="head__button button button--primary">
                  Перейти к аналитике
                </Link>
                <Link to="/tariffs" className="head__button button button--primary-outline">
                  Посмотреть тарифы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Head;


