import React from "react";

const SocialGroupLayout = ({title, IconComponent, href}) => {
  return (
    <li class="button-group__layout">
    <a href={href} target="_blank" class="button-group__button button" title={title}>
      <div class="icon">
        <IconComponent class="icon__svg" />
      </div>
    </a>
  </li>
  );
};

export default SocialGroupLayout;
