import React from "react";

// svg

// components home

const SortLots = () => {
  return (
    <aside
      default="publicationDateTime.desc"
      filtername="sort"
      class="filter__section"
    >
      <div class="toolbar__layout">
        <select class="toolbar__item toolbar__select select ng-untouched ng-pristine ng-valid">
          <option value="publicationDateTime.asc" class="ng-star-inserted">
            По дате публикации: сначала старые
          </option>
          <option value="publicationDateTime.desc" class="ng-star-inserted">
            По дате публикации: сначала новые
          </option>
          <option value="sumNoNds.asc" class="ng-star-inserted">
            По сумме: по возрастанию
          </option>
          <option value="sumNoNds.desc" class="ng-star-inserted">
            По сумме: по убыванию
          </option>
          <option value="endDateTime.asc" class="ng-star-inserted">
            По дате окончания: сначала старые
          </option>
          <option value="endDateTime.desc" class="ng-star-inserted">
            По дате окончания: сначала новые
          </option>
          <option value="beginDateTime.asc" class="ng-star-inserted">
            По дате начала: сначала старые
          </option>
          <option value="beginDateTime.desc" class="ng-star-inserted">
            По дате начала: сначала новые
          </option>
        </select>
      </div>
    </aside>
  );
};

export default SortLots;
