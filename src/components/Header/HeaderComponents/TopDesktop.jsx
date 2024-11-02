import React from "react";
import Cookies from 'js-cookie';
import {Link} from "react-router-dom"
// svg
import { ReactComponent as Instagram } from "../../../assets/svg/social/instagram.svg";
import { ReactComponent as TelegramTop } from "../../../assets/svg/social/telegram-top.svg";
import { ReactComponent as Whatsapp } from "../../../assets/svg/social/whatsapp.svg";
import { ReactComponent as CallAlt } from "../../../assets/svg/icon/call-alt.svg";
import { ReactComponent as WhatsupAlt } from "../../../assets/svg/social/whatsup-alt.svg";
import { ReactComponent as TelegramAlt } from "../../../assets/svg/social/telegram-alt.svg";
import { ReactComponent as ChevrondownAlt } from "../../../assets/svg/pointer/chevrondown-alt.svg";

// components header
import SocialButton from "./SocialButton";
import { TrackingBlog } from "./index";

const TopDesktop = ({openModal, data}) => {
  const handleLogout = () => {
    Cookies.remove('refresh');
    Cookies.remove('access');
};
  return (
    <div className="top desktop" style={{zIndex: '100'}}>
      <div className="top__container container container--lg">
          <a href="/" className="header__logo logo"><span>Tender</span>kit</a>
        <div className="top__section">
          <ul className="top__list">
            <li className="top__item">
              <a
                routerlink="/instruction"
                className="top__link"
                href="/instruction"
              >
                Инструкция
              </a>
            </li>
            <li className="top__item">
              <a routerlink="/contacts" className="top__link" href="/contacts">
                Контакты
              </a>
            </li>
            <li className="top__item">
              <a routerlink="/faq" className="top__link" href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="header__section header__section--rtl">
          <div className="button-group button-group--ms">
            {data && data.fio ? (
            <div className="button-group__layout ng-star-inserted">
              <div className="dropdown dropdown--header dropdown--hover">
                <button
                  type="button"
                  className="header__link header__link--primary">
                  {data.fio}
                  <span className="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt className="icon__svg"/> 
                  </span>
                </button>
                <div className="dropdown__body">
                  <ul className="option option--header">
                    <li className="option__layout">
                      <Link className="option__button" to="/cabinet/profile">
                        Личный кабинет
                      </Link>
                    </li>
                    <li className="option__layout">
                      <a href="/" className="option__button" onClick={handleLogout}>
                        Выход
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
            <div className="button-group__layout ng-star-inserted" id="voiti">
              <button type="button" className="button button--primary button--sm" onClick={() => openModal('login')}>
                Войти
              </button>
            </div>
            <div className="button-group__layout ng-star-inserted" id="registracia">
              <button type="button" className="button button--primary-outline button--sm" onClick={() => openModal('register')}>
                Регистрация
              </button>
            </div>
            </>
          )}
          </div>
        </div>
        <div className="top__section top__section--rtl">
          <ul className="button-group button-group--sm">
            <SocialButton
              href="https://www.instagram.com/zakupki.kz"
              title="Instagram"
              IconComponent={Instagram}
            />
            <SocialButton
              href="https://wa.me/+77057638953"
              title="Написать в WhatsApp"
              IconComponent={Whatsapp}
            />
            <SocialButton
              href="tg://resolve?domain=Portalzakupki"
              title="Написать в Telegram"
              IconComponent={TelegramTop}
            />

            <li className="button-group__layout">
              <div className="top__dropdown dropdown dropdown--hover">
                <button
                  type="button"
                  className="top__button top__button--menu button"
                  title="Позвонить"
                >
                  <span className="top__icon icon">
                    <CallAlt className="icon__svg" />
                  </span>
                </button>
                <div className="dropdown__body m-menu m-menu--top m-menu--active">
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
                      <dt className="m-menu__dt">
                        Звонки
                      </dt>
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
              </div>
            </li>
            <li className="button-group__layout">
              <a href="tel:+77075790000" className="top__link__phone">
              +7 (705)-763-89-53
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopDesktop;
