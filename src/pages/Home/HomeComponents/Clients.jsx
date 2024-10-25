import React from "react";

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
  return (
    <section class="content__block">
      <div class="container container--lg">
        <h2 class="content__title"> Наши клиенты и партнеры </h2>
        <div class="slider">
          <div class="slider__container container container--lg">
            <ngx-slick-carousel class="slider__items carousel slick-initialized slick-slider">
              <button
                class="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
              >
                Previous
              </button>
              <div class="slick-list draggable">
                <div
                  class="slick-track"
                  style={{
                    opacity: "1",
                    width: "6020px",
                    transform: "translate3d(-1204px, 0px, 0px)",
                  }}
                >
                  {clients.map((client) => (
                    <div
                      key={client.id}
                      className="slide slick-slide ng-star-inserted"
                      data-slick-index={client.id - 1}
                      aria-hidden="false"
                      style={{ width: "172px" }}
                      tabindex="0"
                    >
                      <div className="slider__item">
                        <img alt={client.alt} src={client.src} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                class="slick-next slick-arrow"
                aria-label="Next"
                type="button"
              >
                Next
              </button>
            </ngx-slick-carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
