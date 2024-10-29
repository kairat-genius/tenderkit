import React from "react";
import CabinetNav from "../../../CabinetNav";

const User = ({ onClick, data, openModal, closeMenu }) => {
  return (
    <div class="m-menu m-menu--active">
      <div class="m-menu__overlay" onClick={onClick}></div>
      <div class="m-menu__container">
        {data && data.fio ? (
          <CabinetNav header="sidebar--header ng-star-inserted" />
        ) : (
          <div class="button-group button-group--vertical ng-star-inserted">
            <div class="button-group__layout" id="registracia">
              <button
                type="button"
                class="button button--primary button--md button--expand"
                onClick={() => {
                  openModal("register");
                  closeMenu();
                }}
              >
                Регистрация
              </button>
            </div>
            <div class="button-group__layout" id="voiti">
              <button
                type="button"
                class="button button--secondary-transparent button--md button--expand"
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
