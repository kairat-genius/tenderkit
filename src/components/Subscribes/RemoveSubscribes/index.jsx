import React from "react";

const RemoveSubscribes = ({closeModal}) => {
  return (
    <div
      class="layout ng-star-inserted"
      style={{position: "absolute", top: "0", left: "0"}}
    >
      <div class="modal modal--active">
        <div class="modal__container">
          <div class="modal__header">
            <div class="modal__title"> Удалить </div>
          </div>
          <div class="modal__body">
            <p class="modal__layout">
              Вы уверены что хотите удалить рассылку <strong>«Ноутбуки»</strong>
              ?
            </p>
          </div>
          <div class="modal__footer">
            <div class="button-group button-group--sm">
              <div class="button-group__layout">
                <button class="button button--secondary" onClick={closeModal}> Нет </button>
              </div>
              <div class="button-group__layout">
                <button class="button button--primary"> Да </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveSubscribes;
