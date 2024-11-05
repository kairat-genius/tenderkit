import { Outlet } from "react-router-dom";

// Обёрточный компонент для всех маршрутов внутри "blog"
const BlogLayout = () => {
  return (
      <div className="ng-star-inserted">
        <main className="content">
          <div className="content__block content__block--head content__block--theme-secondary">
              <Outlet />
          </div>
        </main>
      </div>
  );
};

export default BlogLayout;
