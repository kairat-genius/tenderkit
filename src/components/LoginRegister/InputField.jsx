const InputField = ({
    type = "text",
    placeholder,
    label,
    isInvalid = false,
    suffix,
    formcontrolname,
    value,
    onChange,
  }) => {
    return (
      <div className={`modal__layout ${isInvalid ? "inputfield--alert" : ""}`}>
        <div className={`inputfield ${suffix ? "inputfield--suffix" : ""}`}>
          <input
            type={type}
            placeholder={placeholder}
            formcontrolname={formcontrolname}
            className="inputfield__input input ng-dirty ng-touched ng-invalid"
            value={value}
            onChange={onChange}
          />
          <label className="inputfield__label">{label}</label>
          {suffix && <div className="inputfield__suffix">{suffix}</div>}
        </div>
        {isInvalid && (
          <div className="validation-message validation-message--alert">
            Поле не заполнено!
          </div>
        )}
      </div>
    );
  };
  
  export default InputField;
  