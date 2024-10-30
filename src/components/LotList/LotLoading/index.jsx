import React from "react";

const LotLoading = () => {
  return (
      <div className="sr-item sr-item--skeleton">
        <div className="sr-item__data">
          <div className="sr-item__layout">
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="sr-item__layout">
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="sr-item__layout">
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="sr-item__data-layout">
            <div className="sr-item__data-group">
              <div className="skeleton skeleton-text"></div>
            </div>
            <div className="sr-item__data-group">
              <div className="skeleton skeleton-text"></div>
            </div>
            <div className="sr-item__data-group">
              <div className="skeleton skeleton-text"></div>
            </div>
          </div>
        </div>
        <div className="sr-item__details">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
  );
};

export default LotLoading;
