import React from 'react';
import { Link } from 'react-router-dom';

const OptionLayout = ({ classLayout, href, label, classButton }) => (
  <li className={classLayout}>
    <Link to={href} className={classButton}>
      {label}
    </Link>
  </li>
);

export default OptionLayout;