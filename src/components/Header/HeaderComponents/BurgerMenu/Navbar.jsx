
import React, {useState} from "react";

// svg
import { ReactComponent as ChevrondownAlt } from "../../../../assets/svg/pointer/chevrondown-alt.svg";
import { ReactComponent as Arrowright } from "../../../../assets/svg/mobile/arrowright.svg";

// components header
import { OptionLayoutMobile, OptionLayout} from "../index";


const Navbar = ({data, openModal, closeMenu}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  return ( 
      <div className="m-nav m-nav--active" style={{zIndex: "10000"}}>
        <div className="m-nav__container">
          <ul className="m-nav__list">
          <li className={`m-nav__item dropdown dropdown--header ${activeDropdown === "tenders" ? 'dropdown--active' : ''}`}>
              <a className="m-nav__link" onClick={() => handleDropdownToggle("tenders")}>
                Тендеры
                <span className="dropdown__arrow-icon icon">
                  <ChevrondownAlt className="icon__svg" />
                </span>
              </a>
              <div className="dropdown__body">
                <ul className="option">
                  <OptionLayoutMobile href="/result" title="По&nbsp;ключевым словам" IconComponent={Arrowright} closeMenu={closeMenu}/>
                  <OptionLayoutMobile href="/regions" title="По&nbsp;областям/регионам" IconComponent={Arrowright} closeMenu={closeMenu}/>
                  <OptionLayoutMobile href="/areas" title="По&nbsp;площадкам" IconComponent={Arrowright} closeMenu={closeMenu}/>
                  <OptionLayoutMobile href="/plans" title="Планы закупок" IconComponent={Arrowright} closeMenu={closeMenu}/>
                  <OptionLayoutMobile href="/contracts" title="Договоры закупок" IconComponent={Arrowright} closeMenu={closeMenu}/>
                </ul>
              </div>
            </li>
            <li className="m-nav__item">
              <a routerlink="/tariffs" className="m-nav__link" href="/tariffs">
                <span className="m-nav__text"> Тарифы </span>
              </a>
            </li>
            <li className="m-nav__item">
              <a routerlink="/education" className="m-nav__link" href="/education">
                Обучение
                <span className="option__arrow-icon icon">
                  <Arrowright className="icon__svg" />
                </span>
              </a>
            </li>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/analytics" label="Аналитика" closeMenu={closeMenu}/>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/blog" label="Блог" closeMenu={closeMenu}/>
            <OptionLayout classLayout="m-nav__item" classButton="m-nav__link" href="/contacts" label="Контакты" closeMenu={closeMenu}/>
          </ul>
        
          {!data && (
          <div className="m-nav__layout ng-star-inserted">
            <div className="button-group button-group--vertical">
              <div className="button-group__layout" id="registracia">
                <button type="button" className="button login-background button--md button--expand" onClick={() => { openModal("register"); closeMenu();}}>
                  Регистрация
                </button>
              </div>
              <div className="button-group__layout" id="voiti">
                <button type="button" className="button button--secondary-transparent button--md button--expand"  onClick={() => { openModal("login"); closeMenu(); }}>
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
