import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
// Обёрточный компонент для всех маршрутов внутри 
const IndexLayout = () => {
  return (

    <div id="elToResetScroll" className="layout__body">
      <Suspense fallback={<div></div>}>
      <Outlet />
      </Suspense>
    </div>
  );
};

export default IndexLayout;