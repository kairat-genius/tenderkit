import React from "react";
import { ReactComponent as Refresh } from "../../../assets/svg/settings/refresh.svg";
import { ReactComponent as TrashOutline } from "../../../assets/svg/pointer/trash-outline.svg";
import { postCreateDeleteTracking } from "../../../api/User/Tracking/postCreateDeleteTracking";
import { formatDate } from "../../../hooks/LotUtils";

const TrackingItem = ({ history, lot, onMoveToHistory, onMoveToActive }) => {
  const lotSlug = lot.slug;

  const handleTrackingToggle = async () => {
    await postCreateDeleteTracking({ lotSlug });

    // Если лот был активным, после удаления перемещаем его в историю
    if (history === false || history === undefined) {
      onMoveToHistory(lot);
    } else {
      // Если лот в истории, после восстановления перемещаем его в активные
      onMoveToActive(lot);
    }
  };

  return (
    <div className="tracking-sidebar__layout ng-star-inserted">
      <a href={`/result/${lot.slug}`} className="sr-item__name ng-star-inserted">
      {lot.title && (
        <h3 className="tracking-sidebar__title"> {lot.title} </h3>
      )}
        <div className="tracking-sidebar__body">
          <dd className="description-list description-list--inline">
          {lot.lotNumber && (
            <div className="description-list__layout">
              <dt className="description-list__key"> № Лота: </dt>
              <dd className="description-list__value"> {lot.lotNumber} </dd>
            </div>
          )}
           {lot.status && (
            <div className="description-list__layout">
              <dt className="description-list__key"> Статус: </dt>
              <dd className="description-list__value"> {lot.status} </dd>
            </div>
           )}
          </dd>
        </div>
      </a>
      <div className="tracking-sidebar__meta">
        <time className="tracking-sidebar__date">
          {formatDate(lot.created_at)}
        </time>
        <ul className="button-group button-group--divider">
          <li className="button-group__layout ng-star-inserted">
            <button
              type="button"
              className="button button--secondary-transparent button--icon button--sm"
              onClick={handleTrackingToggle}
              title={
                history === false || history === undefined
                  ? "Удалить"
                  : "Восстановить"
              }
            >
              <div className="button__icon icon">
                {history === false || history === undefined ? (
                  <TrashOutline />
                ) : (
                  <Refresh />
                )}
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrackingItem;
