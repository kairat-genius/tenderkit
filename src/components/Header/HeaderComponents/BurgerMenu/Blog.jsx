
import React from "react";


const Blog = ({onClick}) => {
  return (

    <div className="m-menu m-menu--active">
    <div className="m-menu__overlay" onClick={onClick}></div>
    <div className="m-menu__container m-event-notification--blog">
      <p className="m-event-notification__title"> Новая статья в блоге </p>
      <div className="m-event-notification__columns">
        <div className="m-event-notification__left-column">
          <a
            className="m-event-notification__image-link"
            href="/blog/article/637"
          >
            <img
              width="64"
              height="37"
              className="m-event-notification__image"
              src="https://zakupki-prod.object.pscloud.io/zakupki/a3c7e6c8-1fbc-46ed-ae88-c8c429fd53d51.png"
              alt="Технические неполадки с получением данных с ЕЭП Mitwork"
              title="Технические неполадки с получением данных с ЕЭП Mitwork - image"
            />
          </a>
        </div>
        <div className="m-event-notification__right-column">
          <ul className="m-event-notification__categories">
            <li className="tag tag--event ng-star-inserted">
              <span
                className="tag__label"
                title="Уведомления о технических работах"
              >
              
                Уведомления о технических работах
              </span>
            </li>
          </ul>
          <a className="m-event-notification__sub-title" href="/blog/article/637">
            Технические неполадки с получением данных с ЕЭП Mitwork
          </a>
        </div>
      </div>
      <p className="tag tag--author-event">
        <span className="tag__avatar avatar">
          <img
            loading="lazy"
            className="avatar__image"
            src="https://zakupki-prod.object.pscloud.io/zakupki/0a698cec-8cd2-4cf9-8081-cf41f956e1aczakup%20chat%20icon.png"
            alt="Команда Zakupki.kz"
            title="Команда Zakupki.kz - image"
          />
        </span>
        <span className="tag__label"> Команда Zakupki.kz </span>
      </p>
    </div>

  </div>

  );
};

export default Blog;
