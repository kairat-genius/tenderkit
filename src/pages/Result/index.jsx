import React, {useState, useEffect, useRef} from "react";
import * as XLSX from "xlsx"; 
import { useData } from "../../hooks/DataContext";
import { getListFolder } from "../../api/User/Folder/getListFolder";
// svg
import { ReactComponent as Xls } from "../../assets/svg/document/xls.svg";
import { ReactComponent as Folder } from "../../assets/svg/document/folder.svg";

// components 
import { Filter } from "./ResultComponents/index";

import { getListLots } from "../../api/Lots/getListLots";

import SortLots from "../../components/SortLots";
import LotLoading from "../../components/LotList/LotLoading";
import MetaTags from "../../components/MetaTags";
import LotList from "../../components/LotList";
import Pagination from "../../components/Pagination";

const Result = () => {
  const { data } = useData();
  const [Lotdata, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedLots, setSelectedLots] = useState([]); 
  const [selectAll, setSelectAll] = useState(false); 
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const ListRef = useRef(null);
  const [sortOption, setSortOption] = useState("published_newest");
  const [folders, setFolder] = useState([]);
  const [filters, setFilters] = useState({
    // дате завершения
    endDate_from: "",
    endDate_to: "",
    // дате начала
    startDate_from: "",
    startDate_to: "",

    lotNumber: "",
    organizer: [],
    purchaseType: [],
    deliveryRegion: [],
    // Поиск по заголовку или коду.
    search: [],
    exclude: [],
    source: [],
    status: [],
    tenderSubjectType: [],

    // цена
    totalPrice_from: "",
    totalPrice_to: "",

  });

  const [isLoading, setIsLoading] = useState(false); 
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      await getListLots({ setData, setCount, offset, filters, sortOption });
      setIsLoading(false); // Set loading state to false after fetching
    };
    
    fetchData();
  }, [currentPage, fetchTrigger, sortOption]);

  useEffect(() => {
    const filterData = JSON.parse(localStorage.getItem("Filter")) || {};
  
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filterData,  
    }));
    
    const fetchDataWithFilters = async () => {
      setIsLoading(true); 
      await getListLots({ setData, setCount, offset: 0, sortOption, filters: { ...filters, ...filterData } });
      setIsLoading(false); 
    };
    
    fetchDataWithFilters();
  }, []);


  useEffect(() => {
    if (data && data.subscription && data.subscription.tariff.folder_access !== false) {
      getListFolder({ setFolder });
    }
  }, [data]);

  const itemsPerPage = 20;
  const offset = itemsPerPage * (currentPage -1)

  const handleButtonClick = () => {
    setCurrentPage(1);
    setFetchTrigger((prev) => !prev); 

    localStorage.setItem("Filter", JSON.stringify(filters));

    if (ListRef.current) {
      ListRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const totalPages = Math.ceil(count / itemsPerPage); 

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

    if (ListRef.current) {
      const elementPosition = ListRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  // Обработка выбора всех лотов
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedLots([]); // Снимаем выделение со всех лотов
    } else {
      setSelectedLots(Lotdata.map((lot) => lot.slug)); // Выбираем все лоты
    }
    setSelectAll(!selectAll); // Переключаем состояние "выбрать все"
  };

  // Обработка выбора конкретного лота
  const handleSelectLot = (id) => {
    setSelectedLots((prevSelectedLots) => {
      if (prevSelectedLots.includes(id)) {
        return prevSelectedLots.filter((lotId) => lotId !== id);
      } else {
        return [...prevSelectedLots, id];
      }
    });
  };

   // Функция для генерации XML файла
   const downloadSelectedLots = () => {
    const selectedData = Lotdata.filter((lot) => selectedLots.includes(lot.slug));

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
      <MetaTags page="result"/>
      <div className="content">
        <Filter setFilters={setFilters} filters={filters} handleButtonClick={handleButtonClick}/>
        <div className="content__block content__block--search content__block--theme-secondary" ref={ListRef}>
          <div className="searchresults">
            <div className="searchresults__layout searchresults__layout--sm">
              <div className="container">
                <h2 className="searchresults__title"> Найдено лотов: {count} </h2>
              </div>
            </div>
            <div className="searchresults__layout searchresults__layout--sm searchresults__sticky">
              <div className="container">
                <div className="panel panel--toolbar">
                  <div className="panel__layout shrink">
                    <div className="toolbar">
                      <div className="toolbar__item toolbar__item--checkbox">
                          <label htmlFor="checkboxAll" className="checkbox checkbox--default">
                            <input
                              id="checkboxAll"
                              type="checkbox"
                              className="checkbox__control"
                              title="Выбрать все"
                              checked={selectAll} 
                              onChange={handleSelectAll}
                            />
                            <span className="checkbox__check"></span>
                          </label>
                      </div>
                    </div>
                  </div>
                  <div className="panel__layout shrink">
                    <div className={`toolbar ${selectedLots.length > 0 ? 'toolbar--primary' : ''}`}>
                      <button type="button" className="toolbar__item button" onClick={downloadSelectedLots} aria-label="Скачать лоты в Excel файле">
                        <span className="toolbar__icon button__icon button__icon--before icon">
                          <Xls className="icon__svg" />
                        </span>
                        Скачать <span className="resultfolder">&nbsp;все</span>
                      </button>
                    </div>
                  </div>
                  <div className="panel__layout shrink">
                    <div className={`toolbar ${selectedLots.length > 0 ? 'toolbar--primary-outline' : 'toolbar--disabled'}`}>
                      <button type="button" className="toolbar__item button" disabled={selectedLots.length === 0} aria-label="Добавить в папку">
                        <span className="toolbar__icon button__icon icon button__icon--before">
                          <Folder className="icon__svg" />
                        </span>
                        <span className="ng-star-inserted resultfolder">Добавить в папку</span>
                      </button>
                    </div>
                  </div>
                  <div className="panel__layout ng-star-inserted resultnone">
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
                      <SortLots sortOption={sortOption} setSortOption={setSortOption} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchresults__layout searchresults__layout--sm">
              <div className="container">
                <ul className="searchresults__list">
                {isLoading ? 
                (Array.from({ length: 20 }, (_, index) => ( <li className="searchresults__item ng-star-inserted" key={index}> <LotLoading /></li>
                       ))
                  ) : (
                  Lotdata.map((lot) => (
                    <li className="searchresults__item ng-star-inserted" key={lot.slug}>
                      <LotList 
                        lot={lot}
                        checked={selectedLots.includes(lot.slug)} 
                        onChange={() => handleSelectLot(lot.slug)} 
                        chekbox={true}
                        folders={folders}
                        openDropdownId={openDropdownId}
                        setOpenDropdownId={setOpenDropdownId}
                      />
                    </li>
                  ))
                )}
                </ul>
              </div>
            </div>
            {totalPages > 1 && (
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
