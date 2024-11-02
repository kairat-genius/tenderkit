import React from "react";
import { NavLink} from "react-router-dom";
import Cookies from 'js-cookie';
// svg
import { ReactComponent as UserAlt } from "../../assets/cabinet/user-alt.svg";
import { ReactComponent as Mail } from "../../assets/svg/social/mail.svg";
import { ReactComponent as Tracking } from "../../assets/svg/icon/tracking.svg";
import { ReactComponent as Star } from "../../assets/svg/icon/star.svg";
import { ReactComponent as Folder } from "../../assets/svg/document/folder.svg";
import { ReactComponent as Recent } from "../../assets/cabinet/recent.svg";

import { ReactComponent as Logout } from "../../assets/cabinet/logout.svg";

const CabinetNav = ({header, closeMenu}) => {
 
  const handleLogout = () => {
      Cookies.remove('refresh');
      Cookies.remove('access');
   
  };
  return (
    <ul className={`sidebar ${header ? header : ''}`}>
        <li className="sidebar__layout">
          <NavLink
            className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/profile"
            onClick={header ? () => closeMenu() : undefined}
          >
            <span className="sidebar__icon icon">
              <UserAlt className="icon__svg" />
            </span>
            Профиль
          </NavLink>
        </li>
        <li className="sidebar__layout">
          <NavLink
             className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/subscribes"
            onClick={header ? () => closeMenu() : undefined}
          >
            <span className="sidebar__icon icon">
              <Mail className="icon__svg" />
            </span>
            Мои подписки
          </NavLink>
        </li>
        <li className="sidebar__layout">
          <NavLink
             className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/tracking"
            onClick={header ? () => closeMenu() : undefined}
          >
            <span className="sidebar__icon icon">
              <Tracking className="icon__svg" />
            </span>
            Отслеживание
          </NavLink>
        </li>
        <li className="sidebar__layout">
          <NavLink
            className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/favorites"
            onClick={header ? () => closeMenu() : undefined}
          >
            <span className="sidebar__icon icon">
              <Star className="icon__svg" />
            </span>
            Избранное
          </NavLink>
        </li>
        <li className="sidebar__layout">
          <NavLink
            className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/folders"
            onClick={header ? () => closeMenu() : undefined}
          >
            <span className="sidebar__icon icon">
              <Folder className="icon__svg" />
            </span>
            Папки
          </NavLink>
        </li>
        <li className="sidebar__layout">
          <NavLink
             className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/mailing-history"
            onClick={header ? () => closeMenu() : undefined}
          >
            <span className="sidebar__icon icon">
              <Recent className="icon__svg" />
            </span>
            История рассылок
            </NavLink>
        </li>
        <li className="sidebar__layout">
          <a
            routerlinkactive="sidebar__link--active"
            className="sidebar__link sidebar__link--logout"
            onClick={handleLogout}
            href="/"
          >
            <span className="sidebar__icon icon">
              <Logout className="icon__svg" />
            </span>
            Выйти
          </a>
        </li>
      </ul>

  );
};

export default CabinetNav;
