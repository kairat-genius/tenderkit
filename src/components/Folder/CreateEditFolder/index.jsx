import React, { useState } from "react";
import { postCreateFolder } from "../../../api/User/Folder/postCreateFolder";

const CreateEditFolder = ({ closeModal, isEditing, refreshFolders, existingFolders }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!existingFolders(title)) {
      setError("Папка с таким названием уже существует!");
      return;
    }

    postCreateFolder({ title, closeModal, refreshFolders });
  };

  return (
    <div class="modal modal--active ng-star-inserted">
      <div class="modal__container" style={{ minHeight: "0" }}>
        <div class="modal__header">
          <div class="modal__title">
            {isEditing ? "Изменение папки" : "Создание папки"}{" "}
          </div>
          <div class="modal__close" onClick={closeModal}></div>
        </div>
        <form
          noValidate=""
          autoComplete="off"
          class="modal__body ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          <div class="modal__section">
            <div class="modal__layout">
              <div class="inputfield">
                <input
                  formcontrolname="name"
                  type="text"
                  class="inputfield__input input ng-untouched ng-pristine ng-valid"
                  placeholder="Название папки"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError("");
                  }}
                />
                <label class="inputfield__label"> Название папки </label>
                {error && (
                  <div className="validation-message validation-message--alert">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="modal__section modal__section--footer">
            <div class="modal__layout modal__layout--sm">
              <button
                class="button button--primary button--expand"
                type="submit"
              >
                Сохранить
              </button>
            </div>
            <div class="modal__layout modal__layout--sm">
              <button
                class="button button--primary-transparent button--expand"
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
