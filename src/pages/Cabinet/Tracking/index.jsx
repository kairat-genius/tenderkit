import React, { useEffect, useState } from "react";
import { Pagination, TrackingItem } from "../../../components";
import { getListTracking } from "../../../api/User/Tracking/getListTracking";

const Tracking = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [data, setData] = useState({ active: [], history: [] }); // Хранение данных для каждой вкладки
  const [count, setCount] = useState({ active: 0, history: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [cacheLoaded, setCacheLoaded] = useState({ active: false, history: false }); // Флаги для кэширования
  const itemsPerPage = 20;

  // Флаг, определяющий, какие данные запрашивать
  const history = activeTab === 'history';

  useEffect(() => {
    if (!cacheLoaded[activeTab]) {
      getListTracking({
        setData: (fetchedData) => setData((prev) => ({ ...prev, [activeTab]: fetchedData })),
        setCount: (fetchedCount) => setCount((prev) => ({ ...prev, [activeTab]: fetchedCount })),
        currentPage,
        history
      });
      setCacheLoaded((prev) => ({ ...prev, [activeTab]: true }));
    }
  }, [currentPage, activeTab]); 

  const totalPages = Math.ceil(count[activeTab] / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setCacheLoaded((prev) => ({ ...prev, [activeTab]: false })); 
    }
  };

  const handleMoveToHistory = (lot) => {
    setData((prev) => ({
      active: prev.active.filter((item) => item.slug !== lot.slug), // Удаляем из активных
      history: [...prev.history, lot], // Добавляем в историю
    }));
  };

  // Перемещение лота обратно в активные
  const handleMoveToActive = (lot) => {
    setData((prev) => ({
      active: [...prev.active, lot], // Добавляем в активные
      history: prev.history.filter((item) => item.slug !== lot.slug), // Удаляем из истории
    }));
  };

  return (
    <tracking className="body__iner-content ng-star-inserted">
      <div className="body__iner-content ng-star-inserted">
        <div className="body__layout panel panel--tertiary">
          <div className="panel__layout">
            <h2 className="title title--h3">Отслеживание</h2>
          </div>
          <div className="panel__layout panel__layout--rtl">
            <ul className="tabs tabs--secondary tabs--md">
              <li className="tabs__layout">
                <button
                  type="button"
                  className={`tabs__button ${activeTab === 'active' ? 'tabs__button--active' : ''}`}
                  onClick={() => setActiveTab('active')}
                >
                  Активные
                </button>
              </li>
              <li className="tabs__layout">
                <button
                  type="button"
                  className={`tabs__button ${activeTab === 'history' ? 'tabs__button--active' : ''}`}
                  onClick={() => setActiveTab('history')}
                >
                  История
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tracking">
          <div className="tracking__sidebar">
            {data[activeTab].map((lot, index) => (
              <TrackingItem key={index} lot={lot}  onMoveToHistory={handleMoveToHistory} 
              onMoveToActive={handleMoveToActive}  history={activeTab === 'history'} />
            ))}
          </div>
         
        </div>
        {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
      </div>
    </tracking>
  );
};

export default Tracking;
