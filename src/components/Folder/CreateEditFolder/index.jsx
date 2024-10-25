import React from "react";

// svg
import {ReactComponent as FolderColored} from "../../../assets/svg/document/folder-colored.svg"

const CreateEditFolder = ({closeModal, isEditing }) => {
  return (
    <folder-edit-modal class="modal modal--active ng-star-inserted">
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title"> {isEditing ? "Изменение папки" : "Создание папки"} </div>
          <div class="modal__close" onClick={closeModal}></div>
        </div>
        <form
       noValidate=""
          autoComplete="off"
          class="modal__body ng-untouched ng-pristine ng-valid"
        >
          <div class="modal__section">
            <div class="modal__layout">
              <div class="inputfield">
                <input
                  formcontrolname="name"
                  type="text"
                  class="inputfield__input input ng-untouched ng-pristine ng-valid"
                  placeholder="Название папки"
                />
                <label class="inputfield__label"> Название папки </label>
              </div>
            </div>
          </div>
          <div class="modal__section">
            <legend class="modal__legend"> Выберите цвет </legend>
            <ul class="option option--folders-list">
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(65, 175, 181)"}}>
                  <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted option__layout--selected">
                <span class="icon" style={{color: "rgb(0, 122, 128)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(253, 127, 111)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(106, 161, 255)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(148, 84, 146)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(115, 112, 181)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(178, 224, 97)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(108, 151, 64)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(210, 74, 74)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(215, 182, 9)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
              <li class="option__layout ng-star-inserted">
                <span class="icon" style={{color: "rgb(111, 119, 127)"}}>
                <FolderColored class="icon__svg"/>
                </span>
              </li>
            </ul>
          </div>
          <div class="modal__section modal__section--footer">
            <div class="modal__layout modal__layout--sm">
              <button class="button button--primary button--expand">
                Сохранить
              </button>
            </div>
            <div class="modal__layout modal__layout--sm">
              <button class="button button--primary-transparent button--expand">
                Отмена
              </button>
            </div>
          </div>
        </form>
      </div>
    </folder-edit-modal>
  );
};

export default CreateEditFolder;
