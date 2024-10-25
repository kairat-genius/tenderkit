
import React from "react";


const Blog = ({onClick}) => {
  return (

    <div class="m-menu m-menu--active">
    <div class="m-menu__overlay" onClick={onClick}></div>
    <div class="m-menu__container m-event-notification--blog">
      <p class="m-event-notification__title"> Новая статья в блоге </p>
      <div class="m-event-notification__columns">
        <div class="m-event-notification__left-column">
          <a
            class="m-event-notification__image-link"
            href="/blog/article/637"
          >
            <img
              width="64"
              height="37"
              class="m-event-notification__image"
              src="https://zakupki-prod.object.pscloud.io/zakupki/a3c7e6c8-1fbc-46ed-ae88-c8c429fd53d51.png"
              alt="Технические неполадки с получением данных с ЕЭП Mitwork"
              title="Технические неполадки с получением данных с ЕЭП Mitwork - image"
            />
          </a>
        </div>
        <div class="m-event-notification__right-column">
          <ul class="m-event-notification__categories">
            <li class="tag tag--event ng-star-inserted">
              <span
                class="tag__label"
                title="Уведомления о технических работах"
              >
              
                Уведомления о технических работах
              </span>
            </li>
          </ul>
          <a class="m-event-notification__sub-title" href="/blog/article/637">
            Технические неполадки с получением данных с ЕЭП Mitwork
          </a>
        </div>
      </div>
      <p class="tag tag--author-event">
        <span class="tag__avatar avatar">
          <img
            loading="lazy"
            class="avatar__image"
            src="https://zakupki-prod.object.pscloud.io/zakupki/0a698cec-8cd2-4cf9-8081-cf41f956e1aczakup%20chat%20icon.png"
            alt="Команда Zakupki.kz"
            title="Команда Zakupki.kz - image"
          />
        </span>
        <span class="tag__label"> Команда Zakupki.kz </span>
      </p>
    </div>

  </div>

  );
};

export default Blog;
