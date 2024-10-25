import React, { useState } from "react";
import {Link} from "react-router-dom"
import Cookies from 'js-cookie';
import OutsideClickHandler from "react-outside-click-handler";
// svg
import { ReactComponent as ChevrondownAlt } from "../../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as IconServices } from "../../../assets/svg/icon/icon-services.svg";
import { ReactComponent as IconKgroup } from "../../../assets/svg/icon/icon-kgroup.svg";
import { ReactComponent as IconKompra } from "../../../assets/svg/icon/icon-kompra.svg";
import { ReactComponent as IconZakupki } from "../../../assets/svg/icon/icon-zakupki.svg";
import { ReactComponent as IconDecider } from "../../../assets/svg/icon/icon-decider.svg";
import { ReactComponent as IconFilter } from "../../../assets/svg/icon/icon-filter.svg";
import { ReactComponent as ArrowRightDropdown } from "../../../assets/svg/pointer/arrows/arrow-right-dropdown.svg";

// components header
import { Linker, OptionLayout, TrackingBlog } from "./index";

const HeaderDesktop = ({openModal, data}) => {
  const [isServices, setIsServices] = useState(false);

  // Функция для переключения класса active
  const toggleServices = () => {
    setIsServices(!isServices);
  };

  const handleLogout = () => {
    Cookies.remove('refresh');
    Cookies.remove('access');
};


  return (
    <OutsideClickHandler onOutsideClick={() => setIsServices(false)}>
    <div class="header desktop">
      <div class="header__container container container--lg">
        <div class="header__section">
          <div onClick={toggleServices} className={`header__services ${isServices ? "active" : ""}`}>
            <div class="header__services-icon icon">
              <IconServices />
            </div>
            <div class="header__apps">
              <Linker
                IconComponent={IconKgroup}
                name="Kompra Group"
                className="linker--kgroup"
              />
              <Linker
                IconComponent={IconKompra}
                name="Kompra"
                className="linker--kompra"
              />
              <Linker
                IconComponent={IconZakupki}
                name="Zakupki"
                className="linker--zakupki"
              />
              <Linker
                IconComponent={IconDecider}
                name="Decider"
                className="linker--decider"
              />
              <Linker
                IconComponent={IconFilter}
                name="Filter"
                className="linker--filter"
              />
            </div>
          </div>
          <a routerlink="/" class="header__logo logo" href="/">
            <img
              src="/index.svg"
              width="103"
              height="40"
              alt="tenderkit.kz"
              title="tenderkit.kz"
              class="logo__image"
            />
          </a>
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item dropdown dropdown--header dropdown--hover">
                <button type="button" class="header__link">
                  Тендеры
                  <span class="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt class="icon__svg" />
                  </span>
                </button>
                <div class="dropdown__body">
                  <ul class="option option--header">
                    <li class="option__layout option__layout--dropdown dropdown dropdown--header dropdown--hover dropdown--lvl-2">
                      <button type="button" class="option__button">
                        Актуальные
                        <span class="option__icon icon">
                          <ArrowRightDropdown class="icon__svg" />
                        </span>
                      </button>
                      <div class="dropdown__body">
                        <ul class="option option--header">
                          <OptionLayout
                            classLayout="option__layout"
                            classButton="option__button"
                            href="/result"
                            label="По&nbsp;ключевым словам"
                          />
                          <OptionLayout
                            classLayout="option__layout"
                            classButton="option__button"
                            href="/regions"
                            label="По&nbsp;областям/регионам"
                          />
                          <OptionLayout
                            classLayout="option__layout"
                            classButton="option__button"
                            href="/areas"
                            label="По&nbsp;площадкам"
                          />
                        </ul>
                      </div>
                    </li>
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/plans"
                      label="Планы закупок"
                    />
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/contracts"
                      label="Договоры закупок"
                    />
                  </ul>
                </div>
              </li>
              <li class="header__item dropdown dropdown--header dropdown--hover">
                <button type="button" class="header__link">
                  Сервисы
                  <span class="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt class="icon__svg" />
                  </span>
                </button>
                <div class="dropdown__body">
                  <ul class="option option--header">
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/kompra"
                      label="Проверка контрагента"
                    />
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/kompra-monitoring"
                      label="Мониторинг конкурентов"
                    />
                  </ul>
                </div>
              </li>
              <OptionLayout
                classLayout="header__item"
                classButton="header__link"
                href="/tariffs"
                label="Тарифы"
              />
              <OptionLayout
                classLayout="header__item"
                classButton="header__link"
                href="/education"
                label="Обучение"
              />
              <OptionLayout
                classLayout="header__item header__item--square"
                classButton="header__link"
                href="/education"
                label="Аналитика"
              />

              <li class="header__item dropdown dropdown--header dropdown--hover">
                <button type="button" class="header__link">
                  Реестры
                  <span class="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt class="icon__svg" />
                  </span>
                </button>
                <div class="dropdown__body">
                  <ul class="option option--header">
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/register-suppliers-manufacturers"
                      label="Реестр поставщиков и производителей"
                    />
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/register-qualified-employees"
                      label="Реестр квалифицированных сотрудников"
                    />
                  </ul>
                </div>
              </li>
              <OptionLayout
                classLayout="header__item"
                classButton="header__link"
                href="/blog"
                label="Блог"
              />
              <OptionLayout
                classLayout="header__item"
                classButton="header__link"
                href="/education"
                label="Аналитика"
              />
              <li class="header__item dropdown dropdown--header dropdown--hover">
                <button type="button" class="header__link">
                  Ещё
                  <span class="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt class="icon__svg" />
                  </span>
                </button>
                <div class="dropdown__body">
                  <ul class="option option--header">
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/popular-tender-categories"
                      label="Самые популярные категории тендеров"
                    />
                    <OptionLayout
                      classLayout="option__layout"
                      classButton="option__button"
                      href="/about-us"
                      label="О нас"
                    />
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__section header__section--rtl">
          <div class="button-group button-group--ms">
            <TrackingBlog />
            {data && data.fio ? (
            <div class="button-group__layout ng-star-inserted">
              <div class="dropdown dropdown--header dropdown--hover">
                <button
                  type="button"
                  class="header__link header__link--primary">
                  {data.fio}
                  <span class="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt class="icon__svg"/> 
                  </span>
                </button>
                <div class="dropdown__body">
                  <ul class="option option--header">
                    <li class="option__layout">
                      <Link className="option__button" to="/cabinet/profile">
                        Личный кабинет
                      </Link>
                    </li>
                    <li class="option__layout">
                      <a href="/" class="option__button" onClick={handleLogout}>
                        Выход
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
            <div class="button-group__layout ng-star-inserted" id="voiti">
              <button type="button" class="button button--primary button--sm" onClick={() => openModal('login')}>
                Войти
              </button>
            </div>
            <div class="button-group__layout ng-star-inserted" id="registracia">
              <button type="button" class="button button--primary-outline button--sm" onClick={() => openModal('register')}>
                Регистрация
              </button>
            </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
    </OutsideClickHandler>
  );
};

export default HeaderDesktop;
