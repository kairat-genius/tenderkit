import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import CabinetNav from "../../components/CabinetNav";
import { NoTariff } from "../../components";
import { useData } from "../../hooks/DataContext";

// Обёрточный компонент для всех маршрутов внутри "cabinet"
const CabinetLayout = () => {
  const { data } = useData();
  const location = useLocation();

  if (!data) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ); 
  }

  // Проверяем, является ли текущий маршрут
  const isProfileRoute = location.pathname === '/cabinet/profile'; 
  const isTrackingRoute = location.pathname === '/cabinet/tracking'; 
  const isFavoriteRoute = location.pathname === '/cabinet/favorites';

  return (
    <div id="elToResetScroll" className="layout__body">
      <cabinet className="ng-star-inserted">
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
                ) : (isProfileRoute || data.subscription) ? (
                  <Outlet />
                ) : (
                  <NoTariff />
                )}
              </div>
            </div>
          </div>
        </div>
      </cabinet>
      <Footer />
    </div>
  );
};

export default CabinetLayout;

