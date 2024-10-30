import React from "react";
import { postDeleteFolder } from "../../../api/User/Folder/postDeleteFolder";

const RemoveFolder = ({ closeModal, folder, onRemove}) => {

  const handleRemove = (e) => {
    e.preventDefault(); 
    postDeleteFolder({ folder_id: folder.id, closeModal, onRemove})
  };
  return (
    <div class="modal modal--guarantees modal--active ng-star-inserted">
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title modal__title--center">
            Вы действительно хотите удалить данную "{folder.title}" папку?
          </div>
        </div>
        <div class="modal__body">
          <div class="modal__section modal__section--footer">
            <div class="button-group button-group--sm button-group--expand">
              <div class="button-group__layout">
                <button type="button" class="button button--primary-transparent button--expand" onClick={closeModal}>
                  Отмена
                </button>
              </div>
              <div class="button-group__layout">
                <button type="button"class="button button--primary button--expand" onClick={handleRemove}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveFolder;
