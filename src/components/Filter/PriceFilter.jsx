import React from "react";

const PriceFilter = ({ name, placeholder, label, value, onChange }) => {
  return (
    <div className="field-group__layout">
      <form
        noValidate=""
        autoComplete="off"
        className="inputfield ng-untouched ng-pristine ng-valid"
      >
        <input
          type="number"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          name={name}
          className="inputfield__input input ng-untouched ng-pristine ng-valid"
          placeholder={placeholder}
          value={value}
      onChange={(e) => onChange(e.target.value)}
        />
        <label className="inputfield__label">{label}</label>
      </form>
    </div>
  );
};

export default PriceFilter;
