import React from 'react';

const SocialButton = ({ href, title, IconComponent }) => (
  <li className="button-group__layout">
    <a href={href} target="_blank" title={title} className="top__button button">
      <span className="top__icon icon">
        <IconComponent className="icon__svg" />
      </span>
    </a>
  </li>
);

export default SocialButton;