import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

// svg
import { ReactComponent as SlideRight } from "../../../assets/svg/pointer/slide-right.svg";
import { ReactComponent as SlideLeft } from "../../../assets/svg/pointer/slide-left.svg";

const reviewsData = [
    {
      src: "/assets/reviews/interteach.jpg",
      alt: "Interteach",
      title: "Interteach - image №59",
    },
    {
      src: "/assets/reviews/interteach.jpg",
      alt: "Kompra",
      title: "Kompra - image №60",
    },
    {
      src: "/assets/reviews/interteach.jpg",
      alt: "Zharyktas",
      title: "Zharyktas - image №61",
    },
    {
      src: "/assets/reviews/interteach.jpg",
      alt: "Kazjoltrans",
      title: "Kazjoltrans - image №62",
    },
    {
      src: "/assets/reviews/interteach.jpg",
      alt: "Kazkomplekt",
      title: "Kazkomplekt - image №63",
    },
  ];

const Reviews = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  const updateButtonStates = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = (imgSrc, imgAlt, imgTitle) => {
    setActiveImage({ src: imgSrc, alt: imgAlt, title: imgTitle });
  };

  const handleCloseModal = () => {
    setActiveImage(null);
  };

  useLayoutEffect(() => {
    updateButtonStates();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleImageLoad = () => {
      updateButtonStates();
    };

    const images = scrollContainer.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    window.addEventListener("resize", updateButtonStates);
    scrollContainer.addEventListener("scroll", updateButtonStates);

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
      window.removeEventListener("resize", updateButtonStates);
      scrollContainer.removeEventListener("scroll", updateButtonStates);
    };
  }, []);

  return (
    <section className="content__block content__block--theme-secondary">
      <div className="container container--md">
        <h2 className="content__title">Отзывы</h2>
        <div className="reviews">
          <div
            id="reviewsScroll"
            className="horizontal-scroll horizontal-scroll--box horizontal-scroll--reviews"
            ref={scrollRef}
          >
            <div className="horizontal-scroll__wrap">
              <ul className="reviews__list">
              {reviewsData.map((review, index) => (
                  <li className="reviews__item ng-star-inserted" key={index}>
                    <img
                      loading="lazy"
                      className="reviews__image"
                      src={review.src}
                      alt={review.alt}
                      title={review.title}
                      onClick={() =>
                        handleImageClick(review.src, review.alt, review.title)
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="reviews__button reviews__button--prev"
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
          >
            <span className="icon">
              <SlideLeft className="icon__svg" />
            </span>
          </button>
          <button
            type="button"
            className="reviews__button reviews__button--next"
            onClick={handleScrollRight}
            disabled={!canScrollRight}
          >
            <span className="icon">
              <SlideRight className="icon__svg" />
            </span>
          </button>
        </div>
      </div>
      {activeImage && (
      <div class="modal modal--image modal--active" onClick={handleCloseModal}>
        <div clickoutside="" class="modal__container">
          <img
            loading="lazy"
            class="modal__image"
            src="/assets/reviews/interteach.jpg"
            alt="null"
            title="null"
          />
        </div>
      </div>
      )}
    </section>
  );
};

export default Reviews;
