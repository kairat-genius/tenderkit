import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
// svg

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg className={`${className} arrow-6 custom-arrow--next`} onClick={onClick} style={{ ...style }} width="5px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g>
      <polygon className="arrow-6-pl" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
    </g>
  </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
       <svg className={`${className} arrow-6 custom-arrow--prev`} onClick={onClick}  style={{ ...style }} width="5px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
       <g transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
         <polygon className="arrow-6-pl" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
       </g>
     </svg>
  );
}
const reviewsData = [
  {
    name: "Аян Нурмухаметов",
    date: "22 августа",
    review:
      "Отличный сервис! Теперь не нужно тратить время на поиск тендеров по разным площадкам — все в одном месте. Рекомендую!",
  },
  {
    name: "Динара Тлеубаева",
    date: "15 ноября",
    review:
      "Тендеры приходят на почту каждый день, что очень удобно. Благодаря этому я всегда в курсе свежих тендеров!",
  },
  {
    name: "Алибек Сагидуллаев",
    date: "22 января",
    review:
      "Персональный менеджер помог мне разобраться с платформой. Очень доволен поддержкой и качеством обслуживания.",
  },
  {
    name: "Алия Жанибекова",
    date: "3 сентября",
    review:
      "Скачивание тендеров в формате Excel значительно упростило мою работу. Удобно анализировать данные и делиться ими с командой.",
  },
  {
    name: "Нурсултан Касымов",
    date: "4 мая",
    review:
      "Удобный поиск и много фильтров. Очень легко находить именно то, что нужно. Я впечатлён!",
  },
  {
    name: "Гульнара Бекмагамбетова",
    date: "8 февраля",
    review:
      "Приятно удивлена тем, насколько быстро можно найти нужные тендеры. Tenderkit действительно экономит время!",
  },
  {
    name: "Роман Аманжолов",
    date: "3 апреля",
    review:
      "Пользуюсь услугами tenderkit уже несколько месяцев. Очень доволен. Чувствую, что мои шансы на победу в тендерах возросли.",
  },
  {
    name: "Асем Султанова",
    date: "26 июля",
    review:
      "Все тендеры в одном месте — это мечта! Особенно нравится, что не нужно регистрироваться на каждой площадке.",
  },
  {
    name: "Ерлан Тагиров",
    date: "9 октября",
    review:
      "Сервис работает без сбоев. Всегда могу рассчитывать на оперативную информацию о новых закупках.",
  },
  {
    name: "Лаура Кенжебаева",
    date: "8 декабря",
    review:
      "Отличная платформа для тех, кто хочет участвовать в тендерах. Очень полезная рассылка и качественный поиск.",
  },
];

const Reviews = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="custom-arrow custom-arrow--next"/>,
    prevArrow: <SamplePrevArrow className="custom-arrow custom-arrow--prev"/>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach((slide) => {
        if (slide.classList.contains('slick-active')) {
          slide.setAttribute('inert', 'true'); 
        } else {
          slide.removeAttribute('inert'); 
        }
      });
    },
  };
    

  return (
    <section className="content__block content__block--theme-secondary">
      <div className="container container--md">
        <h2 className="content__title">Отзывы</h2>
        <div className="reviews">
          <Slider ref={sliderRef} {...settings} >
            {reviewsData.map((review, index) => (
              <div className="col-md-4" key={index}>
                <div className="ant074_testimonials-testim-inner ant074_testimonials-first">
                <h6>
                    {review.name}
                  </h6>
                  <span className="ant__comment" >
                      {review.date}
                    </span>
                  <p>{review.review}</p>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
