import React from "react";
// svg
import { ReactComponent as ChevrondownAlt } from "../../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as ArrowRightDropdown } from "../../../assets/svg/pointer/arrows/arrow-right-dropdown.svg";

// components header
import { OptionLayout } from "./index";

const HeaderDesktop = () => {

  return (
    <div className="header desktop">
      <div className="container container--lg">
        <div className="header__section">
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item dropdown dropdown--header dropdown--hover">
                <button type="button" className="header__link">
                  Тендеры
                  <span className="dropdown__arrow-icon dropdown__arrow-icon--sm icon">
                    <ChevrondownAlt className="icon__svg" />
                  </span>
                </button>
                <div className="dropdown__body">
                  <ul className="option option--header">
                    <li className="option__layout option__layout--dropdown dropdown dropdown--header dropdown--hover dropdown--lvl-2">
                      <button type="button" className="option__button">
                        Актуальные
                        <span className="option__icon icon">
                          <ArrowRightDropdown className="icon__svg" />
                        </span>
                      </button>
                      <div className="dropdown__body">
                        <ul className="option option--header">
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
                href="/analytics"
                label="Аналитика"
              />
              <OptionLayout
                classLayout="header__item"
                classButton="header__link"
                href="/blog"
                label="Блог"
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
