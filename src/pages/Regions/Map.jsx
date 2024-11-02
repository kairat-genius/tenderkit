// components/icons/TwitterIcon.jsx
import React from "react";
import regionsData from "../../json/region.json";

const Map = ({ selectedRegions, onRegionClick }) => (
  <svg
    id="svg-map"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 661 366"
    role="group"
    className="svg-map"
    width="602"
    height="333.33"
  >
    {regionsData.map((region) => (
      <g
        key={region.code}
        id={region.code}
        role="checkbox"
        className="svg-map__group"
        onClick={() => onRegionClick(region.code)}
        aria-checked={selectedRegions.includes(region.code) ? "true" : "false"}
      >
        <path d={region.path} className="svg-map__region" />
      </g>
    ))}

    <g
      id="almaty-city"
      role="checkbox"
      className="svg-map__group"
      onClick={() => onRegionClick("750000000")}
      aria-checked={selectedRegions.includes("750000000") ? "true" : "false"}
    >
      <g className="svg-map__city">
        <circle
          cx="496.092"
          cy="301.045"
          r="9"
          className="svg-map__city-path"
        ></circle>
        <text x="501.935" y="306.09" fontSize="14" className="svg-map__text">
          Алматы
        </text>
        <circle
          cx="496.092"
          cy="301.045"
          r="2.78141"
          className="svg-map__circle"
        ></circle>
      </g>
    </g>
    <g
      id="astana-city"
      role="checkbox"
      className="svg-map__group"
      onClick={() => onRegionClick("710000000")}
      aria-checked={selectedRegions.includes("710000000") ? "true" : "false"}
    >
      <g className="svg-map__city">
        <circle
          cx="391.789"
          cy="128.597"
          r="9"
          className="svg-map__city-path"
        ></circle>
        <text x="374.685" y="119.343" fontSize="14" className="svg-map__text">
          Астана
        </text>
        <circle
          cx="391.789"
          cy="128.597"
          r="2.78141"
          className="svg-map__circle"
        ></circle>
      </g>
    </g>
    <g
      id="shymkent-city"
      role="checkbox"
      className="svg-map__group"
      onClick={() => onRegionClick("790000000")}
      aria-checked={selectedRegions.includes("790000000") ? "true" : "false"}
    >
      <g className="svg-map__city">
        <circle
          cx="370.928"
          cy="333.379"
          r="9"
          className="svg-map__city-path"
        ></circle>
        <text x="348.962" y="348.16" fontSize="14" className="svg-map__text">
          Шымкент
        </text>
        <circle
          cx="370.928"
          cy="333.379"
          r="2.78141"
          className="svg-map__circle"
        ></circle>
      </g>
    </g>
  </svg>
);

export default Map;
