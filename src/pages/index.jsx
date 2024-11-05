import { Outlet } from "react-router-dom";

// Обёрточный компонент для всех маршрутов внутри 
const IndexLayout = () => {
  return (
    <div id="elToResetScroll" className="layout__body">
      <Outlet />
    </div>
  );
};

export default IndexLayout;