import React, {useState} from "react";
import Phone from "../../Phone";
import InputField from "../InputField";
import { ReactComponent as Eye } from "../../../assets/svg/pointer/eye.svg";
import { postRegister } from "../../../api/User/postRegister";
import { useToast } from "../../ToastContext";

const Register = ({ onClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fio, setFio] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const { showToast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({}); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    const errors = {};


    if (fio.trim() === "") errors.fio = "Поле Ф.И.О не должно быть пустым";
    if (companyName.trim() === "") errors.companyName = "Поле Название компании не должно быть пустым";
    if (phone.trim() === "") errors.phone = "Поле Телефон не должно быть пустым";
    if (email.trim() === "") errors.email = "Поле E-mail не должно быть пустым";
    if (password.trim() === "") errors.password = "Поле Пароль не должно быть пустым";
    if (password.length < 8) errors.password = "Пароль должен содержать минимум 8 символов";
    if (phone.length < 10) errors.phone = "Телефон должен содержать минимум 10 символов"; 

    if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return; 
    }

    setServerErrors({});
    
    try {
        const serverErrors = await postRegister({ email, password, fio, companyName, phone, onClose, showToast });

        if (serverErrors) {
            setValidationErrors(serverErrors); 
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const { email: emailErrors, password: passwordErrors, phone: phoneErrors } = error.response.data;

            setServerErrors({
                email: emailErrors ? emailErrors[0] : null,
                password: passwordErrors ? passwordErrors[0] : null,
                phone: phoneErrors ? phoneErrors[0] : null,
            });
        }
    }
};


  return (
    <div className="modal modal--register modal--active" >
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title"> Регистрация </div>
          <div className="modal__close" onClick={onClose}></div>
        </div>
        <div className="modal__body ng-dirty ng-touched ng-invalid">
          <div className="tab-content">
            <div className="tab-content__panel tab-content__panel--active">
              <div className="modal__section">
                <InputField
                  placeholder="Ф.И.О"
                  label="Ф.И.О"
                  isInvalid={!!validationErrors.fio}
                  errorMessage={validationErrors.fio}
                  formcontrolname="name"
                  value={fio}
                  onChange={(e) => {
                    setFio(e.target.value);
                    setValidationErrors((prev) => ({ ...prev, fio: undefined }));
                  }}
                />
                 <InputField
                  placeholder="Название компании"
                  label="Название компании"
                  isInvalid={!!validationErrors.companyName}
                  errorMessage={validationErrors.companyName}
                  formcontrolname="companyName"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    setValidationErrors((prev) => ({ ...prev, companyName: undefined }));
                  }}
                />

                <Phone value={phone} onChange={(value) => {
                    setPhone(value);
                    setValidationErrors((prev) => ({ ...prev, phone: undefined }));
                  }} 
                  isInvalid={!!validationErrors.phone || !!serverErrors.phone}
                  errorMessage={validationErrors.phone || serverErrors.phone}
                  />
                <InputField
                  placeholder="E-mail"
                  label="E-mail"
                  formcontrolname="email"
                  isInvalid={!!validationErrors.email || !!serverErrors.email}
                  errorMessage={validationErrors.email || serverErrors.email}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setValidationErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                />
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  label="Придумайте пароль"
                  formcontrolname="password"
                  isInvalid={!!validationErrors.password || !!serverErrors.password}
                  errorMessage={validationErrors.password || serverErrors.password}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setValidationErrors((prev) => ({ ...prev, password: undefined }));
                  }}
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
              <div className="modal__section modal__section--footer">
                <div className="modal__layout modal__layout--sm" id="registracia_dalee">
                  <button  type="button"  className="button button--primary button--expand" onClick={handleRegister}>
                    Регистрация 
                  </button>
                </div>
                <div className="modal__layout modal__layout--sm">
                  <button type="button" className="button button--secondary-transparent button--expand" onClick={onClose}>
                    Отмена
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
