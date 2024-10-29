import React from 'react';

import styles from './404.module.css';
import img_404 from "../../assets/404.jpg";


const NotFound404 = () => {
  const goToHome = () => {
    window.location.href = '/'; 
  };

  return (
    <div className={styles.container404}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>404</h1>
          <h3>Страница не найдена!</h3>
        </div>
        <img src={img_404} alt="страница не найдена" />
        <div className={styles.footer}>
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