import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// svg
import { ReactComponent as Arrowleft } from "../../assets/svg/pointer/arrows/arrowleft.svg";
import { ReactComponent as ChevronRight } from "../../assets/svg/pointer/chevronright.svg";

const Breadcrumb = ({ urls, title, lot }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const breadcrumbNames = {
    '': 'Главная',
    'result': 'Поиск закупок',
    'regions': 'Тендеры по областям',
    'tarrifs': 'Тарифы и услуги',
    'blog': 'Блог',
    'tariffs': 'Тарифы',
    'privacy-policy': 'Политика конфиденциальности',
    'user-agreement': 'Пользовательское соглашение',
    'contacts': 'Контакты',
    'analytics': 'Аналитика'
  };

  // Get path segments
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

   // Функция для удаления последнего сегмента пути
   const handleGoBack = () => {
    if (pathSegments.length > 1) {
      const newPath = `/${pathSegments.slice(0, -1).join("/")}`;
      navigate(newPath); 
    } else {
      navigate('/'); 
    }
  };

  return (
    <nav role="navigation" className="breadcrumb content__breadcrumb">
      <button type="button" className="button button--secondary-outline button--sm" onClick={handleGoBack}>
        <span className="button__icon button__icon--before icon">
          <Arrowleft className="icon__svg" />
        </span>
        Вернуться назад
      </button>
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link className="breadcrumb__link" to="/">
            Главная
          </Link>
          <span className="breadcrumb__divider icon" aria-hidden="true">
            <ChevronRight className="icon__svg" />
          </span>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

          if (pathSegments[index - 1] === 'blog') {
            if (isLast) {
              return (
                <li className="breadcrumb__item" key={index}>
                  <span className="breadcrumb__link" aria-current="page">
                    {urls}
                  </span>
                </li>
              );
            } else {
              return (
                <li className="breadcrumb__item" key={index}>
                  <Link className="breadcrumb__link" to={path}>
                    {urls}
                  </Link>
                  <span className="breadcrumb__divider icon" aria-hidden="true">
                    <ChevronRight className="icon__svg" />
                  </span>
                </li>
                
              );
            }
          }

          if (pathSegments[index - 2] === 'blog') {
            if (isLast) {
              return (
                <li className="breadcrumb__item" key={index}>
                  <span className="breadcrumb__link" aria-current="page">
                    {title}
                  </span>
                </li>
              );
            } 
          }

          if (pathSegments[index - 1] === 'result') {
            if (isLast) {
              return (
                <li className="breadcrumb__item" key={index}>
                  <span className="breadcrumb__link" aria-current="page">
                    {lot}
                  </span>
                </li>
              );
            } 
          }

          return (
            <li className="breadcrumb__item" key={index}>
              {isLast ? (
                <span className="breadcrumb__link" aria-current="page">
                  {breadcrumbNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)}
                </span>
              ) : (
                <>
                  <Link className="breadcrumb__link" to={path}>
                    {breadcrumbNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                  <span className="breadcrumb__divider icon" aria-hidden="true">
                    <ChevronRight className="icon__svg" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
