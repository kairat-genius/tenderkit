import React from "react";
import { Link } from 'react-router-dom';

const OptionLayoutMobile = ({ href, label, IconComponent }) => (
  <li className="option__layout">
    <Link to={href} className="option__button">
      {label}
    </Link>
    <span class="option__arrow-icon icon">
      <IconComponent className="icon__svg" />
    </span>
  </li>
);

export default OptionLayoutMobile;
