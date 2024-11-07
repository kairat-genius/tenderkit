import React from "react";

const SocialGroupLayout = ({title, IconComponent, href}) => {
  return (
    <li ClassName="button-group__layout">
    <a href={href} target="_blank" ClassName="button-group__button button" title={title}>
      <div ClassName="icon">
        <IconComponent ClassName="icon__svg" />
      </div>
    </a>
  </li>
  );
};

export default SocialGroupLayout;
