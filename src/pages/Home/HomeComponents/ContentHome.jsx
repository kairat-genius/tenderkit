import React from "react";
import { Link } from "react-router-dom";

// svg
import { ReactComponent as SettingsBoldAlt } from "../../../assets/svg/settings/settings-bold-alt.svg";
import { ReactComponent as Excel } from "../../../assets/svg/document/excel.svg";
import { ReactComponent as Manager } from "../../../assets/svg/document/manager.svg";
import { ReactComponent as First } from "../../../assets/svg/document/first.svg";
import { ReactComponent as FileSearch } from "../../../assets/svg/document/file-search.svg";
import { ReactComponent as Folders } from "../../../assets/svg/document/folders.svg";
import { ReactComponent as IconCopy } from "../../../assets/svg/icon/icon-copy.svg";
import { ReactComponent as IconFileArrow } from "../../../assets/svg/icon/icon-file-arrow.svg";
import { ReactComponent as Wpatsup } from "../../../assets/svg/social/whatsup.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/social/telegram.svg";
import { ReactComponent as IconUsers } from "../../../assets/svg/icon/icon-users.svg";

import { Clients, Reviews, WhyCard, Opportunities } from "./index";

const ContentHome = () => {
  return (
    <div className="content content--main">
      <div className="content__block">
        <div className="container container--lg">
          <Opportunities />
          <section className="content__layout">
            <div className="grid grid--contact">
              <article className="feedback-card feedback-card--main feedback-card--call">
                <h3 className="feedback-card__title"> Позвоните нам </h3>
                <p className="feedback-card__desc">
                  и наши мы специалисты ответят на ваши вопросы
                </p>
                <div className="feedback-card__actions">
                  <a href="tel:+77075790000" className="button button--primary">
                    Позвонить
                  </a>
                  <button
                    type="button"
                    className="button button--primary-outline"
                  >
                    Заказать звонок
                  </button>
                </div>
              </article>
              <article className="feedback-card feedback-card--main feedback-card--write">
                <h3 className="feedback-card__title"> Напишите нам </h3>
                <p className="feedback-card__desc">
                  мы подробно ответим на все вопросы
                </p>
                <div className="feedback-card__actions">
                  <a
                    href="tg://resolve?domain=Portalzakupki"
                    target="_blank"
                    className="button button--tertiary"
                  >
                    <span className="button__icon button__icon--before icon">
                      <Telegram className="icon__svg" />
                    </span>
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/+77005790001"
                    target="_blank"
                    className="button button--tertiary"
                  >
                    <span className="button__icon button__icon--before icon">
                      <Wpatsup className="icon__svg" />
                    </span>
                    WhatsApp
                  </a>
                </div>
              </article>
            </div>
          </section>
          <div className="content__layout">
            <dl className="statistics">
              <div className="statistics__layout">
                <div className="statistics__icon icon">
                  <IconFileArrow />
                </div>
                <div className="statistics__text">
                  <dt className="statistics__title"> 82 811 </dt>
                  <dd className="statistics__desc">
                    тендеров
                    <br />
                    <span>проводится</span> сегодня
                  </dd>
                </div>
              </div>
              <div className="statistics__layout">
                <div className="statistics__icon icon">
                  <IconCopy />
                </div>
                <div className="statistics__text">
                  <dt className="statistics__title"> 15+&nbsp;лет </dt>
                  <dd className="statistics__desc">
                    на рынке
                    <br />
                    Казахстана
                  </dd>
                </div>
              </div>
              <div className="statistics__layout">
                <div className="statistics__icon icon">
                  <IconUsers />
                </div>
                <div className="statistics__text">
                  <dt className="statistics__title"> 200 000+ </dt>
                  <dd className="statistics__desc">
                    пользователей
                    <br />
                    сервиса
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <section className="why">
            <h2 className="why__title content__title">
              Почему <span>мы</span>?
            </h2>
            <div className="grid grid--why">
              <WhyCard
                title="Более 100+ тендерных площадок"
                description="Мы предоставляем нашим клиентам доступ к полной базе данных, охватывающей более 100 тендерных площадок по всему Казахстану. Это позволяет оперативно получать информацию о всех актуальных закупках и эффективно участвовать в торгах."
                IconComponent={Folders}
              />
              <WhyCard
                title="Изучайте документацию без&nbsp;регистрации на&nbsp;первоисточниках"
                description="Наш сервис предоставляет полный доступ ко всем тендерным предложениям, без необходимости регистрации на каждой из первоисточников. Вы можете просматривать и анализировать актуальные закупки в одном месте, экономя время и избавляя от лишних действий"
                IconComponent={FileSearch}
              />
              <WhyCard
                title="Узнавайте о&nbsp;закупках первым"
                description="Мы отправляем нашим клиентам ежедневную рассылку с новыми тендерами каждый день сразу после публикации закупок. Это позволяет оперативно получать свежую информацию о подходящих предложениях прямо на электронную почту, всегда оставаясь в курсе актуальных возможностей для участия в торгах."
                IconComponent={First}
              />
              <WhyCard
                title="Персональный менеджер и&nbsp;индивидуальные консультации"
                description="На всех этапах работы с tenderkit.kz вас будет сопровождать персональный менеджер. Он поможет с навигацией по платформе, ответит на вопросы, проконсультирует по подбору тендеров и обеспечит поддержку на каждом шаге участия в закупках. "
                IconComponent={Manager}
              />
              <WhyCard
                title="Удобные выгрузки в&nbsp;Excel"
                description="Скачивайте всю информацию о закупках в удобном формате Excel для дальнейшей работы и анализа. Это позволяет легко сортировать данные, делать пометки и делиться таблицами с коллегами для более эффективной совместной работы над проектами."
                IconComponent={Excel}
              />
              <WhyCard
                title="Фильтры для любого запроса"
                description="Удобная система поиска с гибкими фильтрами быстро подберет тендеры, соответствующие именно вашим требованиям. Настраивайте параметры по категориям, регионам, бюджету и другим критериям, чтобы мгновенно находить самые подходящие предложения."
                IconComponent={SettingsBoldAlt}
              />
            </div>
          </section>
        </div>
      </div>
      <section className="content__block content__block--tariffs content__block--theme-secondary">
        <div className="container container--lg">
          <h2 className="content__title content__title--promo">
            Начните выигрывать с&nbsp;нами!
          </h2>
          <p className="content__paragraph">
            Узнайте подробнее о&nbsp;наших тарифах и&nbsp;выберите
            <br />
            подходящий для себя
          </p>
          <div className="content__actions">
            <Link className="button button--primary" to="/tariffs">
              Смотреть тарифы
            </Link>
          </div>
        </div>
      </section>
      <Clients />
      <Reviews />
    </div>
  );
};

export default ContentHome;
