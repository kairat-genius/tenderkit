import React, { useState } from "react";
import InputField from "../InputField";
import { postLogin } from "../../../api/User/postLogin";
import {postResetPassword} from "../../../api/User/RessetPassword/postResetPassword"

// svg
import { ReactComponent as Eye } from "../../../assets/svg/pointer/eye.svg";

const Login = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false);
  const handleLogin = () => {
    postLogin({ email, password, onClose });
  };

  const handleResetPassword = () => {
    postResetPassword({email, onClose})
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleRecovery = () => {
    setIsRecoveringPassword(!isRecoveringPassword);
  };
  return (
    <login-modal class="modal modal--active">
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title"> {isRecoveringPassword ? "Восстановление пароля" : "Войти"}</div>
          <div class="modal__close" onClick={onClose}></div>
        </div>
        <div class="modal__body ng-untouched ng-pristine ng-invalid">
          <div class="modal__section">
            <InputField
              placeholder="E-mail"
              label="E-mail"
              formcontrolname="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             {!isRecoveringPassword && (
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              label="Пароль"
              formcontrolname="password"
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
             )}
            <div class="modal__layout">
              <button type="button" class="button button--primary-transparent button--md button--expand" onClick={handleToggleRecovery}>
              {isRecoveringPassword ? "" : "Забыли пароль?"}
              
              </button>
            </div>
          </div>
          <div class="modal__section modal__section--footer">
            <div class="modal__layout modal__layout--sm">
              <button
                class="button button--primary button--expand"
                disabled={!email || (!isRecoveringPassword && !password)}
                onClick={isRecoveringPassword ? handleResetPassword : handleLogin}
              >
                {isRecoveringPassword ? "Восстановить" : "Войти"}
              </button>
            </div>
            <div class="modal__layout modal__layout--sm">
              <button
                class="button button--primary-transparent button--expand"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToRegister();
                }}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </login-modal>
  );
};

export default Login;
