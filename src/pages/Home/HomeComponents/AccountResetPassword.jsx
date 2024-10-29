import React, {useState} from "react";
import {ReactComponent as Eye} from "../../../assets/svg/pointer/eye.svg"
import { postResetPasswordConfirm } from "../../../api/User/RessetPassword/postResetPasswordConfirm";

import { toast } from "react-toastify";
const AccountResetPassword = ({uuid, token, email}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCloseModal = () => {
    window.location.href = "/"; 
  };

 const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      postResetPasswordConfirm({ uuid, token, new_password: newPassword, email, handleCloseModal })
    } else {
        toast.error("Пароли не совпадают");
    }
  };

  const handleBlurNewPassword = () => {
    setShowNewPassword(false);
  };

  const handleBlurConfirmPassword = () => {
    setShowConfirmPassword(false); 
  };


  return (
    <div class="modal modal--active">
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title">Новый пароль</div>
          <div class="modal__close" onClick={handleCloseModal}></div>
        </div>
        <div class="modal__body ng-untouched ng-pristine ng-invalid">
          <div class="modal__section">
            <div class="modal__layout">
              <div class="inputfield inputfield--disabled">
                <input
                  value={email || ""}
                  type="text"
                  placeholder="E-mail"
                  formcontrolname="email"
                  class="inputfield__input input ng-untouched ng-pristine ng-valid"
                />
                <label class="inputfield__label"> E-mail </label>
              </div>
            </div>
            <div class="modal__layout">
              <div class="inputfield inputfield--suffix">
                <input
                  formcontrolname="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  class="inputfield__input input ng-untouched ng-pristine ng-invalid"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Придумайте новый пароль"
                  onBlur={handleBlurNewPassword}
                />
                <label class="inputfield__label">
                  Придумайте новый пароль
                </label>
                <div class="inputfield__suffix">
                  <button
                    type="button"
                    class="inputfield__button button"
                    title="Показать пароль"
                    onClick={() => setShowNewPassword(!showNewPassword)} 
                  >
                    <span class="icon">
                      <Eye />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="modal__layout">
              <div class="inputfield inputfield--suffix">
                <input
                  formcontrolname="confirm_password"
                  class="inputfield__input input ng-untouched ng-pristine ng-invalid"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Придумайте новый пароль"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleBlurConfirmPassword}
                />
                <label class="inputfield__label"> Повторите пароль </label>
                <div class="inputfield__suffix">
                  <button
                    type="button"
                    class="inputfield__button button"
                    title="Показать пароль"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                  >
                    <span class="icon">
                    <Eye />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal__section modal__section--footer">
            <div class="modal__layout">
              <button class="button button--primary button--expand" disabled={!newPassword || !confirmPassword} onClick={handleResetPassword}>
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountResetPassword;
