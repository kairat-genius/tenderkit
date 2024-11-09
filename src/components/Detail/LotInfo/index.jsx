import React from "react";

const LotInfo = ({LotLabel, LotData, href, isLink}) => {
  return (
    <div className="lot__layout ng-star-inserted">
      <div className="lot__label"> {LotLabel} </div>
      <div className="lot__data">
      {isLink ? (
          <a
            target="_blank"
            className="lot__link link"
            href={href}
          >
            {LotData}
          </a>
        ) : (
          LotData
        )}
        </div>
    </div>
  );
};

export default LotInfo;
