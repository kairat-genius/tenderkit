import React from "react";
import { postDeleteFolder } from "../../../api/User/Folder/postDeleteFolder";
import { useToast } from "../../ToastContext";

const RemoveFolder = ({ closeModal, folder, onRemove}) => {
  const { showToast } = useToast();
  const handleRemove = (e) => {
    e.preventDefault(); 
    postDeleteFolder({ folder_id: folder.id, closeModal, onRemove, showToast })
  };
  return (
    <div className="modal modal--guarantees modal--active ng-star-inserted">
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title modal__title--center">
            Вы действительно хотите удалить данную "{folder.title}" папку?
          </div>
        </div>
        <div className="modal__body">
          <div className="modal__section modal__section--footer">
            <div className="button-group button-group--sm button-group--expand">
              <div className="button-group__layout">
                <button type="button" className="button button--primary-transparent button--expand" onClick={closeModal}>
                  Отмена
                </button>
              </div>
              <div className="button-group__layout">
                <button type="button"className="button button--primary button--expand" onClick={handleRemove}>
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
