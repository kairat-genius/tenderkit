import React from "react";

const SortLots = ({ sortOption, setSortOption }) => {
  const handleChange = (event) => {
    setSortOption(event.target.value); 
  };

  return (
    <aside
      default="published_newest"
      filtername="sort"
      className="filter__section"
    >
      <div className="toolbar__layout">
        <select
          className="toolbar__item toolbar__select select"
          value={sortOption} 
          onChange={handleChange} 
        >
          <option value="published_newest">
            По дате публикации: сначала новые
          </option>
          <option value="published_oldest">
            По дате публикации: сначала старые
          </option>
          <option value="price_asc">
            По сумме: по возрастанию
          </option>
          <option value="price_desc">
            По сумме: по убыванию
          </option>
          <option value="ending_asc">
            По дате окончания: сначала старые
          </option>
          <option value="ending_desc">
            По дате окончания: сначала новые
          </option>
          <option value="starting_asc">
            По дате начала: сначала старые
          </option>
          <option value="starting_desc">
            По дате начала: сначала новые
          </option>
        </select>
      </div>
    </aside>
  );
};

export default SortLots;
