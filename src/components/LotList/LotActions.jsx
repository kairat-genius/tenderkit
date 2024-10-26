import React, { useState } from "react";
import { postCreateDeleteFavorite } from "../../api/User/Favorite/postCreateDeleteFavorite";
import { postCreateDeleteTracking } from "../../api/User/Tracking/postCreateDeleteTracking";
// svg
import { ReactComponent as Tracking } from "../../assets/svg/icon/tracking.svg";
import { ReactComponent as Star } from "../../assets/svg/icon/star.svg";
import { ReactComponent as Folder } from "../../assets/svg/document/folder.svg";
import { ReactComponent as Plus } from "../../assets/svg/pointer/plus.svg";
import { useData } from "../../hooks/DataContext";

const LotActions = ({ lot }) => {
  const { data } = useData();
  const [isFavorite, setIsFavorite] = useState(lot.is_favorite);
  const [isTracking, setIsTracking] = useState(lot.is_tracking);
  const lotSlug = lot.slug;

  const handleFavoriteToggle = async () => {
    await postCreateDeleteFavorite({ lotSlug });
    setIsFavorite((prevState) => !prevState);
  };

  const handleTrackingToggle = async () => {
    await postCreateDeleteTracking({ lotSlug });
    setIsTracking((prevState) => !prevState);
  };

  if (!data) {
    return null; 
  }

  return (
    <div class="sr-item__actions ng-star-inserted">
      {data.subscription &&
        data.subscription.tariff.tracking_tenders_access !== false && (
      <div class="sr-item__action ng-star-inserted">
        <button
          class={`button button--secondary-transparent button--action button--sm ${
            isTracking ? "button--warning-transparent" : ""
          }`}
          onClick={handleTrackingToggle}
        >
          <span class="sr-item__action-title"> Отслеживать </span>
          <span class="button__icon button__icon--after icon">
            <Tracking class="icon__svg" />
          </span>
        </button>
      </div>
        )}
      {data.subscription &&
        data.subscription.tariff.favorite_access !== false && (
          <div class="sr-item__action ng-star-inserted">
            <button
              class={`button button--secondary-transparent button--action button--sm ${
                isFavorite ? "button--warning-transparent" : ""
              }`}
              onClick={handleFavoriteToggle}
            >
              <span class="sr-item__action-title ng-star-inserted">
                {isFavorite ? "Убрать из избранных" : "В избранное"}
              </span>
              <span class="button__icon button__icon--after icon">
                <Star class="icon__svg" />
              </span>
            </button>
          </div>
        )}
      <div
        clickoutside=""
        class="sr-item__action dropdown dropdown--folders sr-item__hint ng-star-inserted"
      >
        <button class="button button--secondary-transparent button--action button--sm">
          <span class="sr-item__action-title ng-star-inserted">Добавить</span>
          <span class="button__icon button__icon--after icon ng-star-inserted">
            <Folder class="icon__svg" />
          </span>
        </button>
        <div class="dropdown__body">
          <ul class="option option--folders">
            <li class="option__layout ng-star-inserted">
              <button class="option__button">
                <span class="button__icon button__icon--before icon">
                  <Plus class="icon__svg" />
                </span>
                Создать папку
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LotActions;
