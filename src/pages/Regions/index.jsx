import React, { useState, useEffect } from "react";
import Map from "./Map";
import { getDeliveryRegion } from "../../api/Lots/Filter/getDeliveryRegion";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const Regions = () => {
  const [regions, setRegion] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // State for "Select All"
  const [checkedRegions, setCheckedRegions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getDeliveryRegion(setRegion);
  }, []);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    const newCheckedRegions = {};
    regions.forEach((region) => {
      newCheckedRegions[region.code] = !selectAll; // Use region.code instead of index
    });
    setCheckedRegions(newCheckedRegions);
  };

  // Handle individual checkbox change using region code
  const handleCheckboxChange = (code) => {
    setCheckedRegions((prevCheckedRegions) => ({
      ...prevCheckedRegions,
      [code]: !prevCheckedRegions[code], // Toggle the specific checkbox using region code
    }));
  };

  const handleApply = () => {
    // Collect selected region codes
    const selectedCodes = Object.keys(checkedRegions).filter(
      (code) => checkedRegions[code]
    );

    // Save the selected IDs to local storage
    const selectedIds = selectedCodes.map((code) =>
      regions.find((region) => region.code === code).id // Get the ID based on selected region code
    );
    const currentFilter = JSON.parse(localStorage.getItem("Filter")) || {};

    const filterData = {
      ...currentFilter,
      deliveryRegion: selectedIds, // Store selected IDs
    };

    localStorage.setItem("Filter", JSON.stringify(filterData));
    navigate("/result");
  };

  const handleReset = () => {
    setCheckedRegions({});
    setSelectAll(false);

    const currentFilter = JSON.parse(localStorage.getItem("Filter")) || {};

    delete currentFilter.deliveryRegion;

    localStorage.setItem("Filter", JSON.stringify(currentFilter));
    
  };

  return (
    <main className="ng-star-inserted">
      <div className="content">
        <div className="content__block content__block--head">
          <div className="container container--lg">
            <Breadcrumb />
            <h1 className="content__title"> Тендеры по&nbsp;областям </h1>
            <div className="grid grid--regions">
              <div style={{ position: "relative" }}>
                <Map
                  selectedRegions={Object.keys(checkedRegions).filter(
                    (code) => checkedRegions[code]
                  )}
                  onRegionClick={handleCheckboxChange}
                />
                <div
                  id="map-tooltip"
                  className="svg-map__tooltip"
                  style={{
                    display: "none",
                    left: "527.502px",
                    top: "155.079px",
                    transform: "translate(-50%, calc(-100% - 10px))",
                  }}
                >
                  <p className="bold">Абайская обл.</p>
                </div>
              </div>
              <div className="options options--regions">
                <div className="options__header">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      className="checkbox__control"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                    <span className="checkbox__check"></span>
                    <span className="checkbox__label">Выбрать все</span>
                  </label>
                </div>
                <div className="options__body">
                  <ul className="options__list ng-star-inserted">
                    {regions.map((region) => (
                      <li
                        className="options__item ng-star-inserted"
                        key={region.id}
                      >
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            className="checkbox__control"
                            checked={checkedRegions[region.code] || false}
                            onChange={() => handleCheckboxChange(region.code)} // Use region.code
                          />
                          <span className="checkbox__check"></span>
                          <span className="checkbox__label">
                            {region.title}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="options__footer">
                  <div className="button-group button-group--sm">
                    <div className="button-group__layout">
                      <button
                        type="button"
                        className="options__button button button--secondary-transparent"
                        onClick={handleReset}
                      >
                        Сбросить
                      </button>
                    </div>
                    <div className="button-group__layout" id="oblasti_primenit">
                      <button
                        type="button"
                        className="options__button button button--primary"
                        onClick={handleApply}
                      >
                        Применить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Regions;
