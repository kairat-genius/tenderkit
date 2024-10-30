import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
    { id: 1, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 2, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 3, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 4, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 5, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 6, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 7, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 8, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 9, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 10, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 11, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 12, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 13, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 14, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 15, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 16, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 17, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 18, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 19, src: "/src/assets/clients/magnum.png", alt: "magnum" },
    { id: 20, src: "/src/assets/clients/magnum.png", alt: "magnum" },

  ];

  const Clients = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,    
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
    };
  
    return (
      <section className="content__block">
        <div className="container container--lg">
          <h2 className="content__title">Наши клиенты и партнеры</h2>
          <div className="slider">
            <div className="slider__container container container--lg">
              <Slider {...settings} className="slider__items carousel">
                {clients.map((client) => (
                  <div key={client.id} className="slider__item">
                    <img alt={client.alt} src={client.src} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Clients;