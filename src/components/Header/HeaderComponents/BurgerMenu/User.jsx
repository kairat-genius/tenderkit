import React from "react";
import CabinetNav from "../../../CabinetNav";

const User = ({ onClick, data, openModal, closeMenu }) => {
  return (
    <div className="m-menu m-menu--active">
      <div className="m-menu__overlay" onClick={onClick}></div>
      <div className="m-menu__container">
        {data && data.fio ? (
          <CabinetNav header="sidebar--header ng-star-inserted" closeMenu={closeMenu}/>
        ) : (
          <div className="button-group button-group--vertical ng-star-inserted">
            <div className="button-group__layout" id="registracia">
              <button
                type="button"
                className="button login-background button--md button--expand"
                onClick={() => {
                  openModal("register");
                  closeMenu();
                }}
              >
                Регистрация
              </button>
            </div>
            <div className="button-group__layout" id="voiti">
              <button
                type="button"
                className="button button--secondary-transparent button--md button--expand"
                onClick={() => { openModal("login"); closeMenu(); }}
              >
                Войти
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
