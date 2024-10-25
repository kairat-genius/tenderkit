import React, {useState, useEffect} from "react";
import * as XLSX from "xlsx"; // Import xlsx
// svg
import { ReactComponent as Xls } from "../../assets/svg/document/xls.svg";
import { ReactComponent as Folder } from "../../assets/svg/document/folder.svg";

// components 
import { Filter } from "./ResultComponents/index";
import { Pagination, LotList, SortLots } from "../../components";

import { getListLots } from "../../api/Lots/getListLots";

const Result = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedLots, setSelectedLots] = useState([]); 
  const [selectAll, setSelectAll] = useState(false); 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    getListLots({ setData, setCount, currentPage });
  }, [currentPage]);

  const totalPages = Math.ceil(count / itemsPerPage); // общее количество страниц

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Обработка выбора всех лотов
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedLots([]); // Снимаем выделение со всех лотов
    } else {
      setSelectedLots(data.map((lot) => lot.lotNumber)); // Выбираем все лоты
    }
    setSelectAll(!selectAll); // Переключаем состояние "выбрать все"
  };

  // Обработка выбора конкретного лота
  const handleSelectLot = (id) => {
    setSelectedLots((prevSelectedLots) => {
      if (prevSelectedLots.includes(id)) {
        // Убираем лот из выбранных
        return prevSelectedLots.filter((lotId) => lotId !== id);
      } else {
        // Добавляем лот в выбранные
        return [...prevSelectedLots, id];
      }
    });
  };

   // Функция для генерации XML файла
   const downloadSelectedLots = () => {
    const selectedData = data.filter((lot) => selectedLots.includes(lot.lotNumber));

    const worksheet = XLSX.utils.json_to_sheet(selectedData.map(lot => ({
      LotNumber: lot.lotNumber,
      Title: lot.title,
      Organizer: lot.organizer,
      DeliveryAddress: lot.deliveryAddress,
      TotalPrice: lot.totalPrice,
      Status: lot.status,
    })));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Lots");

    const fileName = "selected_lots.xlsx";
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <main className="ng-star-inserted">
      <div className="content">
        <Filter />
        <div id="top_layout" className="content__block content__block--search content__block--theme-secondary">
          <div className="searchresults">
            <div className="searchresults__layout searchresults__layout--sm">
              <div className="container">
                <h2 className="searchresults__title"> Найдено лотов: {count} </h2>
              </div>
            </div>
            <div id="sticky_layout" className="searchresults__layout searchresults__layout--sm searchresults__sticky">
              <div className="container">
                <div className="panel panel--toolbar">
                  <div className="panel__layout shrink">
                    <div className="toolbar">
                      <div className="toolbar__item toolbar__item--checkbox">
                        <checkbox-all>
                          <label className="checkbox checkbox--default">
                            <input
                              type="checkbox"
                              className="checkbox__control"
                              checked={selectAll} // Select all state
                              onChange={handleSelectAll}
                            />
                            <span className="checkbox__check"></span>
                          </label>
                        </checkbox-all>
                      </div>
                    </div>
                  </div>
                  <div className="panel__layout shrink">
                    <div className={`toolbar ${selectedLots.length > 0 ? 'toolbar--primary' : ''}`}>
                      <button className="toolbar__item button" onClick={downloadSelectedLots}>
                        <span className="toolbar__icon button__icon button__icon--before icon">
                          <Xls className="icon__svg" />
                        </span>
                        Скачать все
                      </button>
                    </div>
                  </div>
                  <div className="panel__layout shrink">
                    <div className={`toolbar ${selectedLots.length > 0 ? 'toolbar--primary-outline' : 'toolbar--disabled'}`}>
                      <button className="toolbar__item button" disabled={selectedLots.length === 0}>
                        <span className="toolbar__icon button__icon icon button__icon--before">
                          <Folder className="icon__svg" />
                        </span>
                        <span className="ng-star-inserted">Добавить в папку</span>
                      </button>
                    </div>
                  </div>
                  <div className="panel__layout ng-star-inserted">
                    <div className={`toolbar toolbar--secondary ${selectedLots.length > 0 ? '' : 'toolbar--disabled'}`}>
                      <p className="toolbar__item">
                        {selectedLots.length > 0 
                          ? `Выбрано лотов: ${selectedLots.length}`
                          : "Максимум доступно к скачиванию 1000 лотов"}
                      </p>
                    </div>
                  </div>
                  <div className="panel__layout panel__layout--right">
                    <div className="toolbar">
                      <SortLots />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchresults__layout searchresults__layout--sm">
              <div className="container">
                <ul className="searchresults__list">
                  {data.map((lot) => (
                    <li className="searchresults__item ng-star-inserted" key={lot.lotNumber}>
                      <LotList 
                        lot={lot}
                        checked={selectedLots.includes(lot.lotNumber)} 
                        onChange={() => handleSelectLot(lot.lotNumber)} 
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {data.length > 19 && (
              <div className="searchresults__layout searchresults__layout--sm">
                <div className="container">
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;
