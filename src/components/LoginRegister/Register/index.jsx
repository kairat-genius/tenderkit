import React, {useState} from "react";
import Phone from "../../Phone";
import InputField from "../InputField";
import { ReactComponent as Eye } from "../../../assets/svg/pointer/eye.svg";
import { postRegister } from "../../../api/User/postRegister";

const Register = ({ onClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fio, setFio] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");

  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleRegister = () => {
      postRegister({email, password, fio, companyName, phone, onClose})
  };
  
  return (
    <register-modal class="modal modal--register modal--active" >
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title"> Регистрация </div>
          <div class="modal__close" onClick={onClose}></div>
        </div>
        <div class="modal__body ng-dirty ng-touched ng-invalid">
          <div class="tab-content">
            <div class="tab-content__panel tab-content__panel--active">
              <div class="modal__section">
                <InputField
                  placeholder="Ф.И.О"
                  label="Ф.И.О"
                  isInvalid={fio.trim() === ""}
                  formcontrolname="name"
                  value={fio}
                  onChange={(e) => setFio(e.target.value)}
                />
                 <InputField
                  placeholder="Название компании"
                  label="Название компании"
                  isInvalid={companyName.trim() === ""}
                  formcontrolname="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

                <Phone value={phone} onChange={setPhone} isInvalid={phone.trim() === ""}/>
                <InputField
                  placeholder="E-mail"
                  label="E-mail"
                  formcontrolname="email"
                  isInvalid={email.trim() === ""}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  label="Придумайте пароль"
                  formcontrolname="password"
                  isInvalid={password.trim() === ""}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suffix={
                    <button
                      type="button"
                      className="inputfield__button button"
                      title="Показать пароль"
                      onClick={togglePasswordVisibility}
                    >
                      <span className="icon">
                        <Eye className="icon__svg" />
                      </span>
                    </button>
                  }
                />
              </div>
              <div class="modal__section modal__section--footer">
                <div class="modal__layout modal__layout--sm" id="registracia_dalee">
                  <button  type="button"  class="button button--primary button--expand" disabled={!email || !password || !fio || !companyName || !phone} onClick={handleRegister}>
                    Регистрация 
                  </button>
                </div>
                <div class="modal__layout modal__layout--sm">
                  <button type="button" class="button button--secondary-transparent button--expand" onClick={onClose}>
                    Отмена
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </register-modal>
  );
};

export default Register;
