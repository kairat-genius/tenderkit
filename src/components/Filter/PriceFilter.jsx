import React from "react";

const PriceFilter = ({ name, placeholder, label, value, onChange }) => {
  return (
    <div class="field-group__layout">
      <form
        noValidate=""
        autoComplete="off"
        class="inputfield ng-untouched ng-pristine ng-valid"
      >
        <input
          type="number"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          name={name}
          class="inputfield__input input ng-untouched ng-pristine ng-valid"
          placeholder={placeholder}
          value={value}
      onChange={(e) => onChange(e.target.value)}
        />
        <label class="inputfield__label">{label}</label>
      </form>
    </div>
  );
};

export default PriceFilter;
