import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";


// Обёрточный компонент для всех маршрутов внутри "blog"
const BlogLayout = () => {
  return (
    <div id="elToResetScroll" class="layout__body">
      <blog-articles class="ng-star-inserted">
        <main class="content">
          <div class="content__block content__block--head content__block--theme-secondary">
              <Outlet />
          </div>
        </main>
      </blog-articles>
      <Footer/>
    </div>
  );
};

export default BlogLayout;
