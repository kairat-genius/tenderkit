import React from "react";

const ContactLink = ({ href, icon: Icon, title, text }) => (
  <div className="body__layout">
    <a href={href} className="link link--call" aria-label={title}>
      <span className="link__icon link__icon--secondary icon">
        <Icon className="icon__svg" />
      </span>
      <div className="link__title">
        {title && <span>{title}</span>} {text}
      </div>
    </a>
  </div>
);

export default ContactLink;
