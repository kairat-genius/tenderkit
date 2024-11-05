import React, { useState} from "react";

// svg
import { ReactComponent as CallAlt } from "../../../assets/svg/icon/call-alt.svg";
import { ReactComponent as IconUser } from "../../../assets/svg/mobile/user.svg";
import { ReactComponent as Menu } from "../../../assets/svg/mobile/menu.svg";
import { ReactComponent as Cross } from "../../../assets/svg/mobile/cross.svg";

// components header
import { Navbar, Phone, User } from "./BurgerMenu";

const HeaderMobile = ({data, openModal}) => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null); // Начальный компонент - null

  const toggleBurgerMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
    setActiveComponent(null); // Закрыть активный компонент при открытии меню
  };

  const handleComponentChange = (component) => {
    if (activeComponent === component) {
      // Если компонент уже активен, закрыть его
      setActiveComponent(null);
    } else {
      // Открыть новый компонент и закрыть меню
      setActiveComponent(component);
      setIsBurgerMenu(false); 
    }
  };

  const closeMenu = () => {
    setIsBurgerMenu(false);
    setActiveComponent(null); 
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'm-menu__overlay') {
      handleComponentChange();
    }
};


  return (

    <div className="header mobile">
      <div className="header__container container container--lg">
      <a href="/" className="header__logo logo"><span>Tender</span>kit</a>
        <div className="header__section header__section--rtl">
          <div className="button-group">
            <div className="button-group__layout">
              <button
                type="button"
                aria-label="Телефон"
                className={`header__link ${activeComponent === "phone" ? 'header__link--active' : ''}`}
                onClick={() => handleComponentChange("phone")}
              >
                <span className="header__icon icon">
                  <CallAlt className="icon__svg" />
                </span>
              </button>
              <button
                type="button"
                aria-label="Пользователь"
                className={`header__link ${activeComponent === "user" ? 'header__link--active' : ''}`}
                onClick={() => handleComponentChange("user")}
              >
                <span className="header__icon icon">
                  <IconUser className="icon__svg" />
                </span>
              </button>
              <button
                onClick={toggleBurgerMenu}
                type="button"
                aria-label="Меню"
                className={`header__link ${isBurgerMenu ? 'header__link--open' : ''}`}
              >
                <span className="header__icon icon">
                  <Menu className="icon__svg--menu icon__svg" />
                  <Cross className="icon__svg--cross icon__svg" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    
        {isBurgerMenu && <Navbar isActive={isBurgerMenu} openModal={openModal} closeMenu={closeMenu} data={data}/>}
        {activeComponent === "phone" && <Phone isActive={activeComponent === "phone"}  onClick={handleBackgroundClick}/>} 
        {activeComponent === "user" && <User isActive={activeComponent === "user"} openModal={openModal} onClick={handleBackgroundClick} data={data} closeMenu={closeMenu}/>} 


    </div>

  );
};

export default HeaderMobile;
