import React, { useState, useEffect } from "react";
import { postCreateDeleteFavorite } from "../../api/User/Favorite/postCreateDeleteFavorite";
import { postCreateDeleteTracking } from "../../api/User/Tracking/postCreateDeleteTracking";

import { useData } from "../../hooks/DataContext";
// svg
import { ReactComponent as Tracking } from "../../assets/svg/icon/tracking.svg";
import { ReactComponent as Star } from "../../assets/svg/icon/star.svg";
import { ReactComponent as Folder } from "../../assets/svg/document/folder.svg";
import { ReactComponent as Plus } from "../../assets/svg/pointer/plus.svg";
import { ReactComponent as FolderColored } from "../../assets/svg/document/folder-colored.svg";

const LotActions = ({ lot, folders, openDropdownId, setOpenDropdownId, FavoriteRemove }) => {
  const { data } = useData();

  const [isFavorite, setIsFavorite] = useState(lot.is_favorite);
  const [isTracking, setIsTracking] = useState(lot.is_tracking);
  const lotSlug = lot.slug;

  const handleFavoriteToggle = async () => {
    await postCreateDeleteFavorite({ lotSlug });
    setIsFavorite((prevState) => !prevState);
    FavoriteRemove(lotSlug)
  };

  const handleTrackingToggle = async () => {
    await postCreateDeleteTracking({ lotSlug });
    setIsTracking((prevState) => !prevState);
  };

  const toggleDropdown = (slug) => {
    setOpenDropdownId((prevId) => (prevId === slug ? null : slug));
  };

  if (!data) {
    return null;
  }

  return (
    <div className="sr-item__actions ng-star-inserted">
      {data.subscription &&
        data.subscription.tariff.tracking_tenders_access !== false && (
          <div className="sr-item__action ng-star-inserted">
            <button
              className={`button button--action button--sm ${
                isTracking
                  ? "button--primary-transparent"
                  : "button--secondary-transparent"
              }`}
              onClick={handleTrackingToggle}
            >
              <span className="sr-item__action-title">
                {isTracking ? "Перестать отслеживать" : "Отслеживать"}
              </span>
              <span className="button__icon button__icon--after icon">
                <Tracking className="icon__svg" />
              </span>
            </button>
          </div>
        )}
      {data.subscription &&
        data.subscription.tariff.favorite_access !== false && (
          <div className="sr-item__action ng-star-inserted">
            <button
              className={`button button--action button--sm ${
                isFavorite
                  ? "button--warning-transparent"
                  : "button--secondary-transparent"
              }`}
              onClick={handleFavoriteToggle}
            >
              <span className="sr-item__action-title ng-star-inserted">
                {isFavorite ? "Убрать из избранных" : "В избранное"}
              </span>
              <span className="button__icon button__icon--after icon">
                <Star className="icon__svg" />
              </span>
            </button>
          </div>
        )}
              {data.subscription &&
        data.subscription.tariff.folder_access !== false && (
      <div className="sr-item__action dropdown dropdown--folders sr-item__hint ng-star-inserted dropdown--active">
        <button className="button button--secondary-transparent button--action button--sm"  onClick={() => toggleDropdown(lotSlug)} >
          <span className="sr-item__action-title ng-star-inserted">
            Добавить
          </span>
          <span className="button__icon button__icon--after icon ng-star-inserted">
            <Folder className="icon__svg" />
          </span>
        </button>
        {openDropdownId === lotSlug && (
          <div className="dropdown__body">
            <ul className="option option--folders">
              {folders.map((folder) => (
                <li className="option__layout ng-star-inserted" key={folder.id}>
                  <button className="option__button option__button--folder">
                    <span
                      className="button__icon button__icon--before icon"
                      style={{ color: "rgb(0, 122, 128)" }}
                    >
                      <FolderColored />
                    </span>
                    {folder.title}
                  </button>
                </li>
              ))}
              <li className="option__layout ng-star-inserted">
                <button className="option__button">
                  <span className="button__icon button__icon--before icon">
                    <Plus className="icon__svg" />
                  </span>
                  Создать папку
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
        )}
    </div>
  );
};

export default LotActions;
