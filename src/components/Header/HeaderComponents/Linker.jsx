import React from 'react';

const Linker = ({ IconComponent, name, className }) => {
  return (
    <a className="header__app">
      <div className={`linker linker--32 ${className}`}>
        <div className="linker__logo">
          <div className="linker__icon icon">
            <IconComponent className="icon__svg" />
          </div>
        </div>
        <div className="linker__name">{name}</div>
      </div>
    </a>
  );
};

export default Linker;
