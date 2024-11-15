import React, { useState } from "react";
import InputField from "../InputField";
import { postLogin } from "../../../api/User/postLogin";
import {postResetPassword} from "../../../api/User/RessetPassword/postResetPassword"
import { useToast } from "../../ToastContext";
// svg
import { ReactComponent as Eye } from "../../../assets/svg/pointer/eye.svg";

const Login = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false);
  const { showToast } = useToast();
  const handleLogin = () => {
    postLogin({ email, password, onClose, showToast  });
  };

  const handleResetPassword = () => {
    postResetPassword({email, onClose, showToast})
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleRecovery = () => {
    setIsRecoveringPassword(!isRecoveringPassword);
  };
  return (
    <div className="modal modal--active">
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title"> {isRecoveringPassword ? "Восстановление пароля" : "Войти"}</div>
          <div className="modal__close" onClick={onClose}></div>
        </div>
        <div className="modal__body ng-untouched ng-pristine ng-invalid">
          <div className="modal__section">
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
            <div className="modal__layout">
              <button type="button" className="button button--primary-transparent button--md button--expand" onClick={handleToggleRecovery}>
              {isRecoveringPassword ? "" : "Забыли пароль?"}
              
              </button>
            </div>
          </div>
          <div className="modal__section modal__section--footer">
            <div className="modal__layout modal__layout--sm">
              <button
                className="button button--primary button--expand"
                disabled={!email || (!isRecoveringPassword && !password)}
                onClick={isRecoveringPassword ? handleResetPassword : handleLogin}
              >
                {isRecoveringPassword ? "Восстановить" : "Войти"}
              </button>
            </div>
            <div className="modal__layout modal__layout--sm">
              <button
                type="button"
                className="button button--primary-transparent button--expand"
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
    </div>
  );
};

export default Login;
