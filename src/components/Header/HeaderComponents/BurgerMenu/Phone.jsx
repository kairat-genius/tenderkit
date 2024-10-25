
import React from "react";
// svg
import { ReactComponent as CallAlt } from "../../../../assets/svg/icon/call-alt.svg";
import { ReactComponent as WhatsupAlt } from "../../../../assets/svg/social/whatsup-alt.svg";
import { ReactComponent as TelegramAlt } from "../../../../assets/svg/social/telegram-alt.svg";


const Phone = ({onClick}) => {
  return (
    <div class="m-menu m-menu--active">
    <div class="m-menu__overlay" onClick={onClick}></div>

    <div class="m-menu__container">
      <dl class="m-menu__dl">
        <dt class="m-menu__dt"> Написать в мессенджеры </dt>
        <dd class="m-menu__dd">
          <a
            href="https://wa.me/+77005790001"
            target="_blank"
            class="m-menu__link link"
          >
            <span class="m-menu__icon icon">
              <WhatsupAlt class="icon__svg" />
            </span>{" "}
            +7 (700)-579-00-01 - WhatsApp{" "}
          </a>
        </dd>
        <dd class="m-menu__dd">
          <a
            href="tg://resolve?domain=Portalzakupki"
            target="_blank"
            class="m-menu__link link"
          >
            <span class="m-menu__icon icon">
              <TelegramAlt class="icon__svg" />
            </span>{" "}
            +7 (700)-579-00-01 - Telegram{" "}
          </a>
        </dd>
        <dt class="m-menu__dt"> Связаться с нами (9:30-18:30, пн-пт) </dt>
        <dd class="m-menu__dd">
          <a href="tel:+77075790000" class="m-menu__link link">
            <span class="m-menu__icon icon">
              <CallAlt class="icon__svg" />
            </span>{" "}
            +7 (707)-579-00-00 - бесплатный звонок{" "}
          </a>
        </dd>
        <dd class="m-menu__dd">
          <a href="tel:+79585815790" class="m-menu__link link">
            <span class="m-menu__icon icon">
              <CallAlt class="icon__svg" />
            </span>{" "}
            +7 (958)-581-57-90 - для РФ{" "}
          </a>
        </dd>
      </dl>
    </div>
  </div>
  );
};

export default Phone;
