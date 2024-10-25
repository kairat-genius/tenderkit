import React from "react";

// svg
import { ReactComponent as FolderColored } from "../../../../assets/svg/document/folder-colored.svg";
import { ReactComponent as EditAltFilled } from "../../../../assets/svg/pointer/edit-alt-filled.svg";
import { ReactComponent as Trash } from "../../../../assets/svg/pointer/trash.svg";
import { ReactComponent as Tracking } from "../../../../assets/svg/icon/tracking.svg";
import { ReactComponent as Star } from "../../../../assets/svg/icon/star.svg";
import {ReactComponent as Xls} from "../../../../assets/svg/document/xls.svg";
import {ReactComponent as Folder} from "../../../../assets/svg/document/folder.svg";
// components FoldersDetail

import Breadcrumb from "../../../../components/Breadcrumb";

const FoldersDetail = () => {
  return (
    <app-lots-by-folder class="body__iner-content body__iner-content--overflow ng-star-inserted">
      <Breadcrumb />
      <div class="body__layout searchresults searchresults--folder">
        <div class="searchresults__layout">
          <div class="folders folders-toolbar">
            <div class="folders-toolbar__layout folders-toolbar__layout--checkbox">
              <checkbox-all>
                <label class="checkbox checkbox--default">
                  <input type="checkbox" class="checkbox__control" />
                  <span class="checkbox__check"></span>
                </label>
              </checkbox-all>
            </div>
            <div class="folders-toolbar__layout folders-toolbar__layout--folder">
              <a class="folders__button folders__button--folder button">
                <span
                  class="button__icon button__icon--before icon"
                  style={{ color: "rgb(65, 175, 181)" }}
                >
                  <FolderColored class="icon__svg" />
                </span>
                <span
                  class="truncate"
                  style={{ maxWidth: "200px"}}
                  title="папки (2 лотов)"
                >
                  папки (2 лотов)
                </span>
              </a>
            </div>
            <div class="folders-toolbar__layout folders-toolbar__layout--download">
              <button class="folders-toolbar__button folders-toolbar__button--primary button">
                <span class="button__icon button__icon--before icon">
                  <Xls class="icon__svg" />
                </span>{" "}
                Скачать все{" "}
              </button>
            </div>
            <div class="folders-toolbar__layout folders-toolbar__layout--actions">
              <div class="button-group">
                <div class="button-group__layout">
                  <button
                    type="button"
                    class="folders__button folders__button--edit button"
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
        <ul class="searchresults__list">
          <li class="searchresults__item ng-star-inserted">
            <sr-item>
              <div class="sr-item sr-item--folder">
                <div class="sr-item__container">
                  <div class="sr-item__before ng-star-inserted">
                    <label class="checkbox checkbox--default">
                      <input type="checkbox" class="checkbox__control" />
                      <span class="checkbox__check"></span>
                    </label>
                  </div>
                  <div class="sr-item__info">
                    <a
                      target="_blank"
                      class="sr-item__name ng-star-inserted"
                      href="/lot/70177a0d-a2c9-4b3d-86b1-f45623a7df58/lot-info"
                    >
                      <h3 class="sr-item__title sr-item__title--before title highlight">
                        Закупка комплектующих изделий и материалов
                        электрооборудования для КТК-Р
                      </h3>
                    </a>
                    <div class="sr-item__layout">
                      <dl class="description-list description-list--inline">
                        <div class="description-list__layout ng-star-inserted">
                          <dt class="description-list__key">Организатор:</dt>
                          <dd class="description-list__value">АО "КТК-Р"</dd>
                        </div>
                        <div class="description-list__layout">
                          <dt class="description-list__key ng-star-inserted">
                            {" "}
                            № Лота:{" "}
                          </dt>
                          <dd class="description-list__value ng-star-inserted">
                            <span class="ng-star-inserted">0199-PROC-2023</span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div class="sr-item__layout">
                      <div class="sr-item__date-info"></div>
                    </div>
                  </div>
                  <div class="sr-item__details">
                    <div class="sr-item__status ng-star-inserted">
                      <span class="sr-item__label">Статус</span>: Опубликовано{" "}
                    </div>
                    <div class="sr-item__attributes">
                      <div class="sr-item__help ng-star-inserted">
                        <img
                          width="24"
                          height="24"
                          class="sr-item__attributes-image"
                          src="assets/img/tender-sites/others.png"
                          alt="Каспийский консорциум"
                        />
                        <div class="primary-hint">
                          <div class="primary-hint__description">
                            <div class="primary-hint__description-text">
                              {" "}
                              Каспийский консорциум{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <span class="sr-item__badge sr-item__badge--secondary sr-item__badge--sm">
                        {" "}
                        ТЕНДЕР{" "}
                      </span>
                      <span class="sr-item__badge sr-item__badge--secondary-outline sr-item__badge--sm">
                        {" "}
                        Товар{" "}
                      </span>
                    </div>
                    <div class="sr-item__actions ng-star-inserted">
                      <div class="sr-item__action ng-star-inserted">
                        <button class="button button--secondary-transparent button--action button--sm">
                          <span class="sr-item__action-title">
                            {" "}
                            Отслеживать{" "}
                          </span>
                          <span class="button__icon button__icon--after icon">
                            <Tracking class="icon__svg" />
                          </span>
                        </button>
                      </div>
                      <div class="sr-item__action ng-star-inserted">
                        <button class="button button--secondary-transparent button--action button--sm">
                          <span class="sr-item__action-title ng-star-inserted">
                            {" "}
                            В избранное{" "}
                          </span>
                          <span class="button__icon button__icon--after icon">
                            <Star class="icon__svg" />
                          </span>
                        </button>
                      </div>
                      <button class="button button--secondary-transparent button--action button--sm ng-star-inserted">
                        <span class="sr-item__action-title">
                          {" "}
                          Убрать из папки{" "}
                        </span>
                        <span class="button__icon button__icon--after icon">
                          <Folder class="icon__svg" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </sr-item>
          </li>
        </ul>
      </div>
      <div class="body__layout">
        <pagination class="pagination"></pagination>
      </div>
    </app-lots-by-folder>
  );
};

export default FoldersDetail;
