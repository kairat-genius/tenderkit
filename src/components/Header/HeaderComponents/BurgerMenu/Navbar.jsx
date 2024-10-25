
import React from "react";

// svg
import { ReactComponent as CallAlt } from "../../../../assets/svg/icon/call-alt.svg";
import { ReactComponent as WhatsupAlt } from "../../../../assets/svg/social/whatsup-alt.svg";
import { ReactComponent as TelegramAlt } from "../../../../assets/svg/social/telegram-alt.svg";
import { ReactComponent as ChevrondownAlt } from "../../../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as Arrowright } from "../../../../assets/svg/mobile/arrowright.svg";

// components header
import { OptionLayoutMobile, OptionLayout} from "../index";


const Navbar = ({data, openModal }) => {
  return ( 
      <div className="m-nav m-nav--active">
        <div class="m-nav__container">
          <ul class="m-nav__list">
            <li class="m-nav__item dropdown dropdown--header">
              <a class="m-nav__link">
                Тендеры
                <span class="dropdown__arrow-icon icon">
                  <ChevrondownAlt class="icon__svg" />
                </span>
              </a>
              <div class="dropdown__body">
                <ul class="option">
                  <OptionLayoutMobile href="/result" title="По&nbsp;ключевым словам" IconComponent={Arrowright}/>
                  <OptionLayoutMobile href="/regions" title="По&nbsp;областям/регионам" IconComponent={Arrowright}/>
                  <OptionLayoutMobile href="/areas" title="По&nbsp;площадкам" IconComponent={Arrowright}/>
                  <OptionLayoutMobile href="/plans" title="Планы закупок" IconComponent={Arrowright}/>
                  <OptionLayoutMobile href="/contracts" title="Договоры закупок" IconComponent={Arrowright}/>
                </ul>
              </div>
            </li>
            <li class="m-nav__item dropdown dropdown--header">
              <a class="m-nav__link">
                Сервисы
                <span class="dropdown__arrow-icon icon">
                  <ChevrondownAlt class="icon__svg" />
                </span>
              </a>
              <div class="dropdown__body">
                <ul class="option">
                  <OptionLayoutMobile href="/kompra" title="Проверка контрагентов" IconComponent={Arrowright}/>
                  <OptionLayoutMobile href="/kompra-monitoring" title="Мониторинг конкурентов" IconComponent={Arrowright}/>
                </ul>
              </div>
            </li>
            <li class="m-nav__item">
              <a routerlink="/tariffs" class="m-nav__link" href="/tariffs">
                <span class="m-nav__text"> Тарифы </span>
              </a>
            </li>
            <li class="m-nav__item">
              <a routerlink="/education" class="m-nav__link" href="/education">
                Обучение
                <span class="option__arrow-icon icon">
                  <Arrowright class="icon__svg" />
                </span>
              </a>
            </li>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/analytics" label="Аналитика"/>
            <li class="m-nav__item dropdown dropdown--header">
              <a class="m-nav__link">
                Реестры
                <span class="dropdown__arrow-icon icon">
                  <ChevrondownAlt class="icon__svg" />
                </span>
              </a>
              <div class="dropdown__body">
                <ul class="option">
                  <OptionLayoutMobile href="/register-suppliers-manufacturers" title="Реестр поставщиков и производителей" IconComponent={Arrowright}/>
                  <OptionLayoutMobile href="/register-qualified-employees" title="Реестр квалифицированных сотрудников" IconComponent={Arrowright}/>
                </ul>
              </div>
            </li>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/blog" label="Блог"/>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/popular-tender-categories" label="Самые популярные категории тендеров"/>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/about-us" label="О нас"/>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/instruction" label="Инструкция"/>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/faq" label="FAQ"/>
          </ul>
          <div class="m-nav__layout">
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
                  </span>
                  +7 (700)-579-00-01 - WhatsApp
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
                  </span>
                  +7 (700)-579-00-01 - Telegram
                </a>
              </dd>
              <dt class="m-menu__dt"> Связаться с нами (9:30-18:30, пн-пт) </dt>
              <dd class="m-menu__dd">
                <a href="tel:+77075790000" class="m-menu__link link">
                  <span class="m-menu__icon icon">
                    <CallAlt class="icon__svg" />
                  </span>
                  +7 (707)-579-00-00 - бесплатный звонок
                </a>
              </dd>
              <dd class="m-menu__dd">
                <a href="tel:+79585815790" class="m-menu__link link">
                  <span class="m-menu__icon icon">
                    <CallAlt class="icon__svg" />
                  </span>
                  +7 (958)-581-57-90 - для РФ
                </a>
              </dd>
            </dl>
          </div>
          {!data && (
          <div class="m-nav__layout ng-star-inserted">
            <div class="button-group button-group--vertical">
              <div class="button-group__layout" id="registracia">
                <button type="button" class="button button--primary button--md button--expand" onClick={() => openModal('register')}>
                  Регистрация
                </button>
              </div>
              <div class="button-group__layout" id="voiti">
                <button type="button" class="button button--secondary-transparent button--md button--expand" onClick={() => openModal('login')}>
                  Войти
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;
