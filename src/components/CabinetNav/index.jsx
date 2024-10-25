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

const CabinetNav = ({header}) => {
 
  const handleLogout = () => {
      Cookies.remove('refresh');
      Cookies.remove('access');
   
  };
  return (
    <ul className={`sidebar ${header ? header : ''}`}>
        <li class="sidebar__layout">
          <NavLink
            className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/profile"
          >
            <span class="sidebar__icon icon">
              <UserAlt class="icon__svg" />
            </span>
            Профиль
          </NavLink>
        </li>
        <li class="sidebar__layout">
          <NavLink
             className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/subscribes"
          >
            <span class="sidebar__icon icon">
              <Mail class="icon__svg" />
            </span>
            Мои подписки
          </NavLink>
        </li>
        <li class="sidebar__layout">
          <NavLink
             className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/tracking"
          >
            <span class="sidebar__icon icon">
              <Tracking class="icon__svg" />
            </span>
            Отслеживание
          </NavLink>
        </li>
        <li class="sidebar__layout">
          <NavLink
            className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/favorites"
          >
            <span class="sidebar__icon icon">
              <Star class="icon__svg" />
            </span>
            Избранное
          </NavLink>
        </li>
        <li class="sidebar__layout">
          <NavLink
            className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/folders"
          >
            <span class="sidebar__icon icon">
              <Folder class="icon__svg" />
            </span>
            Папки
          </NavLink>
        </li>
        <li class="sidebar__layout">
          <NavLink
             className={({ isActive }) => 
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
            to="/cabinet/mailing-history"
          >
            <span class="sidebar__icon icon">
              <Recent class="icon__svg" />
            </span>
            История рассылок
            </NavLink>
        </li>
        <li class="sidebar__layout">
          <a
            routerlinkactive="sidebar__link--active"
            class="sidebar__link sidebar__link--logout"
            onClick={handleLogout}
            href="/"
          >
            <span class="sidebar__icon icon">
              <Logout class="icon__svg" />
            </span>
            Выйти
          </a>
        </li>
      </ul>

  );
};

export default CabinetNav;
