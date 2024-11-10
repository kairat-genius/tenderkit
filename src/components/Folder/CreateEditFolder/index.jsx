import React, { useState } from "react";
import { postCreateFolder } from "../../../api/User/Folder/postCreateFolder";
import { useToast } from "../../ToastContext";
const CreateEditFolder = ({ closeModal, isEditing, refreshFolders, existingFolders }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const { showToast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!existingFolders(title)) {
      setError("Папка с таким названием уже существует!");
      return;
    }

    postCreateFolder({ title, closeModal, refreshFolders, showToast });
  };

  return (
    <div className="modal modal--active ng-star-inserted">
      <div className="modal__container" style={{ minHeight: "0" }}>
        <div className="modal__header">
          <div className="modal__title">
            {isEditing ? "Изменение папки" : "Создание папки"}{" "}
          </div>
          <div className="modal__close" onClick={closeModal}></div>
        </div>
        <form
          noValidate=""
          autoComplete="off"
          className="modal__body ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          <div className="modal__section">
            <div className="modal__layout">
              <div className="inputfield">
                <input
                  formcontrolname="name"
                  type="text"
                  className="inputfield__input input ng-untouched ng-pristine ng-valid"
                  placeholder="Название папки"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError("");
                  }}
                />
                <label className="inputfield__label"> Название папки </label>
                {error && (
                  <div className="validation-message validation-message--alert">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal__section modal__section--footer">
            <div className="modal__layout modal__layout--sm">
              <button
                className="button button--primary button--expand"
                type="submit"
              >
                Сохранить
              </button>
            </div>
            <div className="modal__layout modal__layout--sm">
              <button
                className="button button--primary-transparent button--expand"
                onClick={closeModal}
              >
                Отмена
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEditFolder;
