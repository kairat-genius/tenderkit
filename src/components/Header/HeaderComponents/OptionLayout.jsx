import React from 'react';
import { Link } from 'react-router-dom';

const OptionLayout = ({ classLayout, href, label, classButton, closeMenu }) => (
  <li className={classLayout}>
    <Link to={href} className={classButton} onClick={closeMenu}>
      {label}
    </Link>
  </li>
);

export default OptionLayout;