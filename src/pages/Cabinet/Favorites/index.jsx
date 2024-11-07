import React, {useState, useEffect} from "react";
import { getListFavorite } from "../../../api/User/Favorite/getListFavorite";
import { getListFolder } from "../../../api/User/Folder/getListFolder";

import Pagination from "../../../components/Pagination";
import LotList from "../../../components/LotList";

const Favorites = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [folders, setFolder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20

  useEffect(() => {
    getListFavorite({setData, setCount, currentPage});
}, [currentPage]); 

useEffect(() => {
  getListFolder({ setFolder });
}, []);

const totalPages = Math.ceil(count / itemsPerPage);

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};

const FavoriteRemove = (slug) => {
  setData((prevData) => prevData.filter(data => data.slug !== slug));
  setCount((prevCount) => prevCount - 1);
};

  return (
    <main className="body__iner-content body__iner-content--overflow ng-star-inserted">
      <h2 className="body__title title title--h3"> Избранное</h2>
      <div className="body__layout searchresults">
        <ul className="searchresults__list">
        {data.map((lot) => (
          <li className="searchresults__item ng-star-inserted" key={lot.slug}>
              <LotList lot={lot}  folders={folders}
                        openDropdownId={openDropdownId}
                        setOpenDropdownId={setOpenDropdownId}
                        FavoriteRemove={FavoriteRemove}/>
          </li>
           ))}
        </ul>
      </div>
      {totalPages > 1 && (
      <div className="body__layout">
        <div className="panel panel--footer">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
      )}
    </main>
  );
};

export default Favorites;
