import React from "react";

const LotInfo = ({LotLabel, LotData, href, isLink}) => {
  return (
    <div ClassName="lot__layout ng-star-inserted">
      <div ClassName="lot__label"> {LotLabel} </div>
      <div ClassName="lot__data">
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
