import React from "react";

const PriceFilter = ({ name, placeholder, label, value, onChange }) => {
  return (
    <div ClassName="field-group__layout">
      <form
        noValidate=""
        autoComplete="off"
        ClassName="inputfield ng-untouched ng-pristine ng-valid"
      >
        <input
          type="number"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          name={name}
          ClassName="inputfield__input input ng-untouched ng-pristine ng-valid"
          placeholder={placeholder}
          value={value}
      onChange={(e) => onChange(e.target.value)}
        />
        <label ClassName="inputfield__label">{label}</label>
      </form>
    </div>
  );
};

export default PriceFilter;
