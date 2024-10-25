import React, {useState, useEffect} from "react";
import { getListFavorite } from "../../../api/User/Favorite/getListFavorite";
// 
import { LotList, Pagination } from "../../../components";
const Favorites = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20

  useEffect(() => {
    getListFavorite({setData, setCount, currentPage});
}, [currentPage]); 

const totalPages = Math.ceil(count / itemsPerPage);

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};
  return (
    <favorites class="body__iner-content body__iner-content--overflow ng-star-inserted">
      <h2 class="body__title title title--h3"> Избранное</h2>
      <div class="body__layout searchresults">
        <ul class="searchresults__list">
        {data.map((lot, index) => (
          <li class="searchresults__item ng-star-inserted" key={index}>
              <LotList lot={lot}/>
          </li>
           ))}
        </ul>
      </div>
      {data.length > 20 && (
      <div class="body__layout">
        <div class="panel panel--footer">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
      )}
    </favorites>
  );
};

export default Favorites;
