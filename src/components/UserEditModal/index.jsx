import React, { useState, useEffect } from "react";
import { putUserDataUpdate } from "../../api/User/putUserDataUpdate";
import { postResetPassword } from "../../api/User/RessetPassword/postResetPassword";
import InputField from "../LoginRegister/InputField";

const UserEditModal = ({ closeModal, data, onUpdateUserData }) => {
  const [fio, setFio] = useState(data.fio);
  const [companyName, setCompanyName] = useState(data.companyName);
  const [phone, setPhone] = useState(data.phone);
  const [isSaving, setIsSaving] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

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
      await putUserDataUpdate({ phone, fio, companyName });
      onUpdateUserData({ email: data.email, fio, companyName, phone });
      closeModal();
    } catch (error) {
      console.error("Ошибка при обновлении данных", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetPassword = () => {
    postResetPassword({email: data.email, onClose: closeModal})
  };

  return (
    <user-edit-modal class="modal modal--active">
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title"> Настройки профиля </div>
          <div class="modal__close" onClick={closeModal}></div>
        </div>
        <div class="modal__body ng-pristine ng-invalid ng-touched">
          <div class="modal__section">
            <div class="modal__layout">
              <div class="inputfield">
                <input
                  name="4"
                  type="text"
                  placeholder="E-mail"
                  formcontrolname="email"
                  class="inputfield__input input ng-untouched ng-pristine"
                  disabled="true"
                  value={data.email}
                />
                <label class="inputfield__label"> E-mail </label>
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
          <div class="modal__section">
            <div class="modal__layout modal__layout--sm">
              <button class="button button--primary-transparent button--expand" onClick={handleResetPassword}>
                <span class="ng-star-inserted"> Изменить пароль </span>
              </button>
            </div>
            <div class="modal__layout modal__layout--sm">
              <button
                class="button button--primary button--expand"
                disabled={isSaving || !isChanged}
                onClick={handleSave}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </user-edit-modal>
  );
};

export default UserEditModal;
