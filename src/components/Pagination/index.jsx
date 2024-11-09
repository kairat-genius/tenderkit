import React from "react";
import { ReactComponent as Chevronleft } from "../../assets/svg/pointer/chevronleft.svg";
import { ReactComponent as ChevronRight } from "../../assets/svg/pointer/chevronright.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageButtons = [];
  const maxVisibleButtons = 5; 

  let startPage, endPage;

  if (totalPages <= maxVisibleButtons) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(maxVisibleButtons / 2)) {
      startPage = 1;
      endPage = maxVisibleButtons;
    }
    else if (currentPage + Math.floor(maxVisibleButtons / 2) >= totalPages) {
      startPage = totalPages - maxVisibleButtons + 1;
      endPage = totalPages;
    }
    else {
      startPage = currentPage - Math.floor(maxVisibleButtons / 2);
      endPage = currentPage + Math.floor(maxVisibleButtons / 2);
    }
  }

  if (startPage > 1) {
    pageButtons.push(
      <li key={1} className="pagination-control__item">
        <button
          type="button"
          className={`pagination-control__button button ${currentPage === 1 ? 'pagination-control__button--active' : ''}`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      </li>
    );
    if (startPage > 2) {
      pageButtons.push(<li key="start-ellipsis" className="pagination-control__item">...</li>);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <li className="pagination-control__item" key={i}>
        <button
          type="button"
          className={`pagination-control__button button ${currentPage === i ? 'pagination-control__button--active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageButtons.push(<li key="end-ellipsis" className="pagination-control__item">...</li>);
    }
    pageButtons.push(
      <li key={totalPages} className="pagination-control__item">
        <button
          type="button"
          className={`pagination-control__button button ${currentPage === totalPages ? 'pagination-control__button--active' : ''}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      </li>
    );
  }

  return (
    <div className="pagination">
      <ul className="pagination-control">
        <li className="pagination-control__item">
          <button
            type="button"
            className="pagination-control__button button"
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Перейти на предыдущую страницу"
          >
            <div className="pagination-control__icon icon">
              <Chevronleft className="icon__svg" />
            </div>
          </button>
        </li>
        {pageButtons}
        <li className="pagination-control__item">
          <button
            type="button"
            className="pagination-control__button button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Перейти на следующую страницу"
          >
            <div className="pagination-control__icon icon">
              <ChevronRight className="icon__svg" />
            </div>
          </button>
        </li>
      </ul>
    
    </div>
  );
};

export default Pagination;

