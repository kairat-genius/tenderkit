import React from 'react';
import { ReactComponent as Tracking } from "../../../assets/svg/pointer/tracking.svg";

const TrackingBlog = () => (
    <div
    class="button-group__layout button-group__layout--icon"
    id="kolokolchik"
  >
    <div
      clickoutside=""
      class="dropdown dropdown--event-notification event-notification event-notification--blog"
    >
      <button type="button" class="event-button">
        <span class="event-button__icon icon">
          <Tracking class="icon__svg" />
        </span>
      </button>
      <div class="dropdown__body">
        <div class="event-notification__header">
          <div class="event-notification__date-time">
            Новая статья в блоге
          </div>
          <div class="event-notification__close"></div>
        </div>
        <div class="event-notification__body">
          <a
            class="event-notification__image-link"
            href="/blog/article/637"
          >
            <img
              width="187"
              height="103"
              class="event-notification__image"
              src="https://zakupki-prod.object.pscloud.io/zakupki/a3c7e6c8-1fbc-46ed-ae88-c8c429fd53d51.png"
              alt="Технические неполадки с получением данных с ЕЭП Mitwork"
              title="Технические неполадки с получением данных с ЕЭП Mitwork - image"
            />
          </a>
          <div class="event-notification__content">
            <ul class="event-notification__categories">
              <li class="tag tag--event ng-star-inserted">
                <span
                  class="tag__label"
                  title="Уведомления о технических работах"
                >
                  Уведомления о технических работах
                </span>
              </li>
            </ul>
            <a
              class="event-notification__title"
              href="/blog/article/637"
            >
              Технические неполадки с получением данных с ЕЭП
              Mitwork
            </a>
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
      </div>
    </div>
  </div>
);

export default TrackingBlog;