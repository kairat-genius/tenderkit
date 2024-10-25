import React, {useState} from "react";
import { Link } from "react-router-dom";

// svg
import { ReactComponent as FolderColored } from "../../../../assets/svg/document/folder-colored.svg";
import { ReactComponent as Plus } from "../../../../assets/svg/pointer/plus.svg";
import { ReactComponent as EditAltFilled } from "../../../../assets/svg/pointer/edit-alt-filled.svg";
import { ReactComponent as Trash } from "../../../../assets/svg/pointer/trash.svg";

// components FoldersList
import {CreateEditFolder, RemoveFolder} from "../../../../components";

const FoldersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // новое состояние для отслеживания режима
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const openCreateModal = () => {
    setIsEditing(false); // устанавливаем создание
    setIsModalOpen(true);
  };

  const openEditModal = () => {
    setIsEditing(true); // устанавливаем редактирование
    setIsModalOpen(true);
  };

  const openRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRemoveModalOpen(false); // закрываем модалку удаления
  };

  return (
    <>
      <app-folders class="body__iner-content body__iner-content--overflow ng-star-inserted">
        <h2 class="body__title title title--h3"> Папки</h2>
        <div class="body__layout ng-star-inserted">
          <div class="folders folders--cabinet">
            <div class="folders__table">
              <div class="folders__row folders__row--header">
                <div class="folders__cell folders__cell--w-full">
                  <div class="button-group">
                    <div class="button-group__layout">
                      <button class="folders__button folders__button--add button" onClick={openCreateModal}>
                        <span class="button__icon button__icon--before icon">
                          <Plus class="icon__svg" />
                        </span>
                        Создать новую папку
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="folders__row ng-star-inserted">
                <Link
                  className="folders__cell folders__cell--w-full folders__cell--link"
                  to="/cabinet/folders/1293"
                >
                  <div class="button-group button-group--sm">
                    <div class="button-group__layout">
                      <a class="folders__button folders__button--folder button">
                        <span
                          class="button__icon icon"
                          style={{ color: "rgb(253, 127, 111)" }}
                        >
                          <FolderColored class="icon__svg" />
                        </span>
                      </a>
                    </div>
                    <div class="button-group__layout truncate">
                      <span class="truncate" title="папка">
                        папка
                      </span>
                    </div>
                  </div>
                </Link>
                <div class="folders__cell">
                  <div class="button-group">
                    <div class="button-group__layout button-group__layout--rtl">
                      <button
                        type="button"
                        class="folders__button folders__button--edit button"
                        onClick={openEditModal} 
                      >
                        <span class="button__icon icon">
                          <EditAltFilled class="icon__svg" />
                        </span>
                      </button>
                    </div>
                    <div class="button-group__layout">
                      <button
                        type="button"
                        class="folders__button folders__button--remove button"
                        onClick={openRemoveModal}
                      >
                        <span class="button__icon icon">
                          <Trash class="icon__svg" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="folders__row ng-star-inserted">
                <Link
                  className="folders__cell folders__cell--w-full folders__cell--link"
                  to="/cabinet/folders/1294"
                >
                  <div class="button-group button-group--sm">
                    <div class="button-group__layout">
                      <a class="folders__button folders__button--folder button">
                        <span
                          class="button__icon icon"
                          style={{ color: "rgb(65, 175, 181)" }}
                        >
                          <FolderColored class="icon__svg" />
                        </span>
                      </a>
                    </div>
                    <div class="button-group__layout truncate">
                      <span class="truncate" title="папки">
                        папки
                      </span>
                    </div>
                  </div>
                </Link>
                <div class="folders__cell">
                  <div class="button-group">
                    <div class="button-group__layout button-group__layout--rtl">
                      <button
                        type="button"
                        class="folders__button folders__button--edit button"
                        onClick={openEditModal} 
                      >
                        <span class="button__icon icon">
                          <EditAltFilled class="icon__svg" />
                        </span>
                      </button>
                    </div>
                    <div class="button-group__layout">
                      <button
                        type="button"
                        class="folders__button folders__button--remove button"
                        onClick={openRemoveModal}
                      >
                        <span class="button__icon icon">
                          <Trash class="icon__svg" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-folders>
      {isModalOpen && <CreateEditFolder closeModal={closeModal} isEditing={isEditing} />}
      {isRemoveModalOpen && <RemoveFolder closeModal={closeModal} />}
    </>
  );
};

export default FoldersList;
