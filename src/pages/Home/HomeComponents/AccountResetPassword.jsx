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
    <div className="modal modal--active">
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title">Новый пароль</div>
          <div className="modal__close" onClick={handleCloseModal}></div>
        </div>
        <div className="modal__body ng-untouched ng-pristine ng-invalid">
          <div className="modal__section">
            <div className="modal__layout">
              <div className="inputfield inputfield--disabled">
                <input
                  value={email || ""}
                  type="text"
                  placeholder="E-mail"
                  formcontrolname="email"
                  className="inputfield__input input ng-untouched ng-pristine ng-valid"
                />
                <label className="inputfield__label"> E-mail </label>
              </div>
            </div>
            <div className="modal__layout">
              <div className="inputfield inputfield--suffix">
                <input
                  formcontrolname="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="inputfield__input input ng-untouched ng-pristine ng-invalid"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Придумайте новый пароль"
                  onBlur={handleBlurNewPassword}
                />
                <label className="inputfield__label">
                  Придумайте новый пароль
                </label>
                <div className="inputfield__suffix">
                  <button
                    type="button"
                    className="inputfield__button button"
                    title="Показать пароль"
                    onClick={() => setShowNewPassword(!showNewPassword)} 
                  >
                    <span className="icon">
                      <Eye />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal__layout">
              <div className="inputfield inputfield--suffix">
                <input
                  formcontrolname="confirm_password"
                  className="inputfield__input input ng-untouched ng-pristine ng-invalid"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Придумайте новый пароль"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleBlurConfirmPassword}
                />
                <label className="inputfield__label"> Повторите пароль </label>
                <div className="inputfield__suffix">
                  <button
                    type="button"
                    className="inputfield__button button"
                    title="Показать пароль"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                  >
                    <span className="icon">
                    <Eye />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__section modal__section--footer">
            <div className="modal__layout">
              <button className="button button--primary button--expand" disabled={!newPassword || !confirmPassword} onClick={handleResetPassword}>
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
