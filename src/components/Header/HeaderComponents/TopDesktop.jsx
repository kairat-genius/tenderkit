import React from "react";
import Cookies from 'js-cookie';
import {Link} from "react-router-dom"
// svg
import { ReactComponent as ChevrondownAlt } from "../../../assets/svg/pointer/chevrondown-alt.svg";

const TopDesktop = ({openModal, data}) => {
  const handleLogout = () => {
    Cookies.remove('refresh');
    Cookies.remove('access');
};
  return (
    <div className="top desktop" style={{zIndex: '100'}}>
      <div className="top__container container container--lg">
          <Link to="/" className="header__logo logo"><span>Tender</span>kit</Link>
        <div className="top__section">
          <ul className="top__list">
            <li className="top__item">
              <Link className="top__link" to="/contacts">
                Контакты
              </Link>
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
              <button type="button" className="button button--sm login-background" onClick={() => openModal('login')}>
                Войти
              </button>
            </div>
            <div className="button-group__layout ng-star-inserted" id="registracia">
              <button type="button" className="button button--primary-outline button--sm register-background" onClick={() => openModal('register')}>
                Регистрация
              </button>
            </div>
            </>
          )}
          </div>
        </div>
        <div className="top__section top__section--rtl">
          <ul className="button-group button-group--sm">
            <li className="button-group__layout">
              <a href="tel:+77057638953" className="top__link__phone">
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
