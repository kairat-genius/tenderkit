import { Outlet, useLocation } from "react-router-dom";
import CabinetNav from "../../components/CabinetNav";
import NoTariff from "../../components/NoTariff";
import { useData } from "../../hooks/DataContext";

// Обёрточный компонент для всех маршрутов внутри "cabinet"
const CabinetLayout = () => {
  const { data } = useData();
  const location = useLocation();

  if (!data) {
    return (
     <div></div>
    ); 
  }

  // Проверяем, является ли текущий маршрут
  const isProfileRoute = location.pathname === '/cabinet/profile'; 
  const isTrackingRoute = location.pathname === '/cabinet/tracking'; 
  const isFavoriteRoute = location.pathname === '/cabinet/favorites';
  const isFolderRoute = location.pathname === '/cabinet/folders';

  return (
        <div className="layout__container ng-star-inserted">
          <div className="body body--cabinet">
            <div className="body__content">
              <div className="body__wrapper">
                <div className="body__sidebar">
                  <h1 className="body__heading title title--h2"> Личный кабинет</h1>
                  <CabinetNav />
                </div>

                {isTrackingRoute && data.subscription && data.subscription.tariff.tracking_tenders_access === false ? (
                  <NoTariff />
                ) : isFavoriteRoute && data.subscription && data.subscription.tariff.favorite_access === false ? (
                  <NoTariff />
                ) : isFolderRoute && data.subscription && data.subscription.tariff.folder_access === false ? (
                  <NoTariff />
                ) : (isProfileRoute || data.subscription) ? (
                  <Outlet />
                ) : (
                  <NoTariff />
                )}
              </div>
            </div>
          </div>
        </div>
  );
};

export default CabinetLayout;

