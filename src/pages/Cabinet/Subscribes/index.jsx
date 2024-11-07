import React, {useState} from "react";

//svg 
import {ReactComponent as Search} from "../../../assets/svg/pointer/search.svg"
import {ReactComponent as Cog} from "../../../assets/svg/settings/cog.svg"
import {ReactComponent as AddSquareOutline } from "../../../assets/svg/pointer/add-square-outline.svg"
import {ReactComponent as TrashOutline  } from "../../../assets/svg/pointer/trash-outline.svg"

const RemoveSubscribes = React.lazy(() => import("../../../components/Subscribes/RemoveSubscribes"));
const CreateEditSubscribes = React.lazy(() => import("../../../components/Subscribes/CreateEditSubscribes"));


const Subscribes = () => {
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
    <my-subscribes class="body__iner-content ng-star-inserted">
      <div class="body__layout panel panel--tertiary">
        <div class="panel__layout">
          <h2 class="title title--h3"> Мои подписки </h2>
        </div>
        <div
          class="panel__layout panel__layout--rtl ng-star-inserted"
          id="sozdat_podpisku"
        >
          <button
            type="button"
            class="button button--primary-outline button--sm"
            onClick={openCreateModal} 
          >
            <span class="button__icon button__icon--before icon">
              <AddSquareOutline class="icon__svg"/>
            </span>
            Создать подписку
          </button>
        </div>
      </div>
      <div class="body__layout body__layout--md ng-star-inserted">
        <subscribe-selector class="card card--subscribe">
          <div class="card__header">
            <h3 class="card__title"> ключ </h3>
            <label class="card__switch switch">
              <span class="switch__label"> Рассылка </span>
              <input
                type="checkbox"
                class="switch__control ng-untouched ng-pristine ng-valid"
              />
              <span class="switch__check"></span>
            </label>
          </div>
          <div class="card__body">
            <ul class="button-group button-group--subscribe-settings">
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                >
                  <span class="button__icon button__icon--before icon">
                    <Search class="icon__svg"/>
                  </span>
                  <span class="ng-star-inserted"> Новые объявления </span>
                </button>
              </li>
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                >
                  <span class="button__icon button__icon--before icon">
                  <Search class="icon__svg"/>
                  </span>{" "}
                  Все объявления{" "}
                </button>
              </li>
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                >
                  <span class="button__icon button__icon--before icon">
                    <Cog class="icon__svg"/>
                  </span>
                  Настройки
                </button>
              </li>
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                  onClick={openRemoveModal}
                >
                  <span class="button__icon button__icon--before icon">
                  <TrashOutline class="icon__svg"/>
                  </span>
                  Удалить
                </button>
              </li>
            </ul>
          </div>
        </subscribe-selector>
      </div>
      <div class="body__layout body__layout--md ng-star-inserted">
        <subscribe-selector class="card card--subscribe">
          <div class="card__header">
            <h3 class="card__title"> подписка </h3>
            <label class="card__switch switch">
              <span class="switch__label"> Рассылка </span>
              <input
                type="checkbox"
                class="switch__control ng-untouched ng-pristine ng-valid"
              />
              <span class="switch__check"></span>
            </label>
          </div>
          <div class="card__body">
            <ul class="button-group button-group--subscribe-settings">
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                >
                  <span class="button__icon button__icon--before icon">
                  <Search class="icon__svg"/>
                  </span>
                  <span class="ng-star-inserted"> Новые объявления </span>
                </button>
              </li>
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                >
                  <span class="button__icon button__icon--before icon">
                  <Search class="icon__svg"/>
                  </span>
                  Все объявления
                </button>
              </li>
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                >
                  <span class="button__icon button__icon--before icon">
                  <Cog class="icon__svg"/>
                  </span>
                  Настройки
                </button>
              </li>
              <li class="button-group__layout">
                <button
                  type="button"
                  class="button button--secondary-transparent button--action button--sm"
                  onClick={openRemoveModal}
                >
                  <span class="button__icon button__icon--before icon">
                    <TrashOutline class="icon__svg"/>
                  </span>
                  Удалить
                </button>
              </li>
            </ul>
          </div>
        </subscribe-selector>
      </div>
      <pagination class="pagination"></pagination>
      {isModalOpen && <CreateEditSubscribes closeModal={closeModal} isEditing={isEditing} /> }
      {isRemoveModalOpen && <RemoveSubscribes closeModal={closeModal} />}
    </my-subscribes>
  );
};

export default Subscribes;
