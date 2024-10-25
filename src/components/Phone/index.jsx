import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Phone = ({value, onChange, isInvalid}) => {
    const inputStyle = {
        width: "100%",
        height: "56px",
        fontSize: "1rem",
        lineHeight: "1.25rem",
        color: "#343a40",
        backgroundColor: "#edf6f7",
        border: "1px solid transparent",
        borderRadius: "100px",
        transition: "background-color .3s ease-out, border-color .3s ease-out",
      };
  return (
    <div class="modal__layout">
      <div class="inputfield inputfield--country dropdown dropdown--menu inputfield--alert">
        <PhoneInput country={"kz"} preferredCountries={["kz", "ru"]} inputStyle={inputStyle} value={value}  onChange={onChange}/>
      </div>
      {isInvalid && (
          <div className="validation-message validation-message--alert">
            Поле не заполнено!
          </div>
        )}
    </div>
  );
};

export default Phone;
