import React from 'react';
import { useNavigate } from 'react-router-dom';
import './404.css';
import img_404 from "../../assets/404.jpg";


const NotFound404 = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='container-404'>
    <div className="container">
      <div className="header">
        <h1>404</h1>
        <h3>Страница не найдена!</h3>
      </div>
      <img src={img_404} alt="страница не найдена" />
      <div className="footer">
        <p>
          Извините, запрашиваемая вами страница не найдена. Пожалуйста, вернитесь
          на главную страницу!
        </p>
        <button onClick={goToHome}>НА ГЛАВНУЮ</button>
      </div>
    </div>
    </div>
  );
};

export default NotFound404;