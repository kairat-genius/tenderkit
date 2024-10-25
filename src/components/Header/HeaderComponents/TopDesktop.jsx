import React from "react";

// svg
import { ReactComponent as Instagram } from "../../../assets/svg/social/instagram.svg";
import { ReactComponent as TelegramTop } from "../../../assets/svg/social/telegram-top.svg";
import { ReactComponent as Whatsapp } from "../../../assets/svg/social/whatsapp.svg";
import { ReactComponent as CallAlt } from "../../../assets/svg/icon/call-alt.svg";
import { ReactComponent as WhatsupAlt } from "../../../assets/svg/social/whatsup-alt.svg";
import { ReactComponent as TelegramAlt } from "../../../assets/svg/social/telegram-alt.svg";

// components header
import SocialButton from "./SocialButton";

const TopDesktop = () => {

  return (
    <div class="top desktop">
      <div class="top__container container container--lg">
        <div class="top__section">
          <ul class="top__list">
            <li class="top__item">
              <a
                routerlink="/instruction"
                class="top__link"
                href="/instruction"
              >
                Инструкция
              </a>
            </li>
            <li class="top__item">
              <a routerlink="/contacts" class="top__link" href="/contacts">
                Контакты
              </a>
            </li>
            <li class="top__item">
              <a routerlink="/faq" class="top__link" href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div class="top__section top__section--rtl">
          <ul class="button-group button-group--sm">
            <SocialButton
              href="https://www.instagram.com/zakupki.kz"
              title="Instagram"
              IconComponent={Instagram}
            />
            <SocialButton
              href="https://wa.me/+77005790001"
              title="Написать в WhatsApp"
              IconComponent={Whatsapp}
            />
            <SocialButton
              href="tg://resolve?domain=Portalzakupki"
              title="Написать в Telegram"
              IconComponent={TelegramTop}
            />

            <li class="button-group__layout">
              <div class="top__dropdown dropdown dropdown--hover">
                <button
                  type="button"
                  class="top__button top__button--menu button"
                  title="Позвонить"
                >
                  <span class="top__icon icon">
                    <CallAlt class="icon__svg" />
                  </span>
                </button>
                <div class="dropdown__body m-menu m-menu--top m-menu--active">
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
                      <dt class="m-menu__dt">
                        {" "}
                        Связаться с нами (9:30-18:30, пн-пт){" "}
                      </dt>
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
              </div>
            </li>
            <li class="button-group__layout">
              <a href="tel:+77075790000" class="top__link">
                {" "}
                +7 (707)-579-00-00{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopDesktop;
