import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

// Обёрточный компонент для всех маршрутов внутри 
const IndexLayout = () => {
  return (
    <div id="elToResetScroll" className="layout__body">
      <Outlet />
      <Footer/>
    </div>
  );
};

export default IndexLayout;