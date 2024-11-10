import React, { useState, useEffect } from "react";
import Share from "../../../components/Share";
import { postCreateDeleteFavorite } from "../../../api/User/Favorite/postCreateDeleteFavorite";
import { postCreateDeleteTracking } from "../../../api/User/Tracking/postCreateDeleteTracking";
import { ReactComponent as Tracking } from "../../../assets/svg/icon/tracking.svg";
import { ReactComponent as Star } from "../../../assets/svg/icon/star.svg";
import { useData } from "../../../hooks/DataContext";
import { useToast } from "../../ToastContext";
const LotActionsDetail = ({lot}) => {
    const { data } = useData();
    const [isFavorite, setIsFavorite] = useState(lot.is_favorite);
    const [isTracking, setIsTracking] = useState(lot.is_tracking);
    const lotSlug = lot.slug;
    const { showToast } = useToast();

    useEffect(() => {
        setIsFavorite(lot.is_favorite);
        setIsTracking(lot.is_tracking);
      }, [lot.is_favorite, lot.is_tracking]);

    const handleFavoriteToggle = async () => {
        await postCreateDeleteFavorite({ lotSlug, showToast });
        setIsFavorite((prevState) => !prevState);
      };
    
      const handleTrackingToggle = async () => {
        await postCreateDeleteTracking({ lotSlug, showToast });
        setIsTracking((prevState) => !prevState);
      };
    
      if (!data) {
        return null; 
      }
  return (
    <div className="page-lot__actions">
      <div className="button-group button-group--lot-actions">
      {data.subscription &&
        data.subscription.tariff.tracking_tenders_access !== false && (
        <div className="button-group__layout ng-star-inserted">
          <button className={`button button--action button--sm ${
            isTracking ? "button--primary-transparent" : "button--secondary-transparent"
          }`} onClick={handleTrackingToggle}>
            <span className="ng-star-inserted"> {isTracking ? "Перестать отслеживать" : "Отслеживать"} </span>
            <span className="button__icon button__icon--after icon">
              <Tracking className="icon__svg" />
            </span>
          </button>
        </div>
        )}
         {data.subscription &&
        data.subscription.tariff.favorite_access !== false && (
        <div className="button-group__layout">
          <button className={`button button--action button--sm button--secondary-transparent ${
            isFavorite ? "button--warning-transparent" : ""
          }`} onClick={handleFavoriteToggle}>
            <span className="ng-star-inserted">  {isFavorite ? "Убрать из избранных" : "В избранное"} </span>
            <span className="button__icon button__icon--after icon">
              <Star className="icon__svg" />
            </span>
          </button>
        </div>
         )}
        <Share url={lot.slug}/>
      </div>
    </div>
  );
};

export default LotActionsDetail;
