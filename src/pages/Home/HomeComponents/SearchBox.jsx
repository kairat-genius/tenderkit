import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// components SearchBox
import { MultiSearch } from "../../../components/Filter";

const SearchBox = () => {
  const [filters, setFilters] = useState({
    search: [],
  });
  const navigate = useNavigate();
  useEffect(() => {
    const savedFilters = localStorage.getItem("Filter");
    if (savedFilters) {
      setFilters(JSON.parse(savedFilters));
    }
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const handleSearchClick = () => {
    const existingFilters = JSON.parse(localStorage.getItem("Filter")) || {};
    const updatedFilters = {
      ...existingFilters,
      ...filters,
    };
    localStorage.setItem("Filter", JSON.stringify(updatedFilters));
    navigate("/result");
  };

  return (
    <div className="hero__search">
      <div className="hero__searchbar">
        <div className="hero__searchbar-layout hero__searchbar-layout--input">
          <MultiSearch
            value={filters.search || []}
            onChange={(value) => handleFilterChange("search", value)}
          />
        </div>
        <button
          className="hero__searchbar-button button button--primary"
          id="poisk"
          style={{ width: "200px" }}
          onClick={handleSearchClick}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
