import React, { useState, useEffect } from "react";
import { putUserDataUpdate } from "../../api/User/putUserDataUpdate";
import { postResetPassword } from "../../api/User/RessetPassword/postResetPassword";
import InputField from "../LoginRegister/InputField";
import { useToast } from "../ToastContext";
const UserEditModal = ({ closeModal, data, onUpdateUserData }) => {
  const [fio, setFio] = useState(data.fio);
  const [companyName, setCompanyName] = useState(data.companyName);
  const [phone, setPhone] = useState(data.phone);
  const [isSaving, setIsSaving] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    // Проверяем, изменились ли данные
    setIsChanged(
      fio !== data.fio ||
      companyName !== data.companyName ||
      phone !== data.phone
    );
  }, [fio, companyName, phone, data]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await putUserDataUpdate({ phone, fio, companyName, showToast });
      onUpdateUserData({ email: data.email, fio, companyName, phone });
      closeModal();
    } catch (error) {
      console.error("Ошибка при обновлении данных", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetPassword = () => {
    postResetPassword({email: data.email, onClose: closeModal, showToast})
  };

  return (
    <div className="modal modal--active">
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title"> Настройки профиля </div>
          <div className="modal__close" onClick={closeModal}></div>
        </div>
        <div className="modal__body ng-pristine ng-invalid ng-touched">
          <div className="modal__section">
            <div className="modal__layout">
              <div className="inputfield">
                <input
                  name="4"
                  type="text"
                  placeholder="E-mail"
                  formcontrolname="email"
                  className="inputfield__input input ng-untouched ng-pristine"
                  disabled="true"
                  value={data.email}
                />
                <label className="inputfield__label"> E-mail </label>
              </div>
            </div>
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
            <InputField
              placeholder="Номер телефона"
              label="Номер телефона"
              isInvalid={phone.trim() === ""}
              formcontrolname="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="modal__section">
            <div className="modal__layout modal__layout--sm">
              <button className="button button--primary-transparent button--expand" onClick={handleResetPassword}>
                <span className="ng-star-inserted"> Изменить пароль </span>
              </button>
            </div>
            <div className="modal__layout modal__layout--sm">
              <button
                className="button button--primary button--expand"
                disabled={isSaving || !isChanged}
                onClick={handleSave}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditModal;
