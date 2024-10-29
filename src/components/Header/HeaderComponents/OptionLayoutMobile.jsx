import React from "react";
import { Link } from 'react-router-dom';

const OptionLayoutMobile = ({ href, IconComponent, closeMenu, title }) => (
  <li className="option__layout">
    <Link to={href} className="option__button" onClick={closeMenu}>
    {title}
    <span class="option__arrow-icon icon">
      <IconComponent className="icon__svg" />
    </span>
    </Link>
  </li>
);

export default OptionLayoutMobile;
