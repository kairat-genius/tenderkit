
import React from "react";
// svg
import { ReactComponent as CallAlt } from "../../../../assets/svg/icon/call-alt.svg";
import { ReactComponent as WhatsupAlt } from "../../../../assets/svg/social/whatsup-alt.svg";
import { ReactComponent as TelegramAlt } from "../../../../assets/svg/social/telegram-alt.svg";


const Phone = ({onClick}) => {
  return (
    <div className="m-menu m-menu--active">
    <div className="m-menu__overlay" onClick={onClick}></div>

    <div className="m-menu__container">
      <dl className="m-menu__dl">
        <dt className="m-menu__dt"> Написать в мессенджеры </dt>
        <dd className="m-menu__dd">
          <a
            href="https://wa.me/+77057638953"
            target="_blank"
            className="m-menu__link link"
          >
            <span className="m-menu__icon icon">
              <WhatsupAlt className="icon__svg" />
            </span>
            +7 (705)-763-89-53 - WhatsApp
          </a>
        </dd>
        <dd className="m-menu__dd">
          <a
            href="tg://resolve?domain=Portalzakupki"
            target="_blank"
            className="m-menu__link link"
          >
            <span className="m-menu__icon icon">
              <TelegramAlt className="icon__svg" />
            </span>
            +7 (705)-763-89-53 - Telegram
          </a>
        </dd>
        <dt className="m-menu__dt"> Звонки </dt>
        <dd className="m-menu__dd">
          <a href="tel:+77057638953" className="m-menu__link link">
            <span className="m-menu__icon icon">
              <CallAlt className="icon__svg" />
            </span>
            +7 (705)-763-89-53
          </a>
        </dd>
      </dl>
    </div>
  </div>
  );
};

export default Phone;
