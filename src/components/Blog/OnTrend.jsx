import React, { useState, useEffect } from "react";
import { getBlogListPopular } from "../../api/Blog/getBlogListPopular";
import { ReactComponent as Eye } from "../../assets/svg/pointer/eye.svg";
import { ReactComponent as Message } from "../../assets/svg/icon/message.svg";
import { Link } from "react-router-dom";
import { formatDateMonth, formatMinutes } from "../../hooks/LotUtils";
const OnTrend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBlogListPopular({ setData });
  }, []);

  return (
    <section className="content__layout">
      <h1 className="visually-hidden"> Блог</h1>
      <h2 className="content__title"> В тренде </h2>
      <div className="horizontal-scroll horizontal-scroll--box">
        <div className="horizontal-scroll__wrap">
          <div className="grid grid--articles">
          {data.length > 0 && data.map((popular, index) => (
              <article className="article-card ng-star-inserted" key={index}>
                <img
                  width="350"
                  height="198"
                  loading="lazy"
                  className="article-card__image"
                  alt={popular.title}
                  src={popular.img}
                  title={`${popular.title} - image`}
                />
                <div className="article-card__content">
                  <h3 className="article-card__title">
                    <Link className="article-card__title-link" to={`/blog/${popular.author.slug}/${popular.slug}`}>
                      {popular.title}
                    </Link>
                  </h3>
                  <ul className="article-card__meta">
                    <li className="article-card__meta-item">
                      <time> {formatDateMonth(popular.created_at)} </time>
                    </li>
                    <li className="article-card__meta-item"> {formatMinutes(popular.created_at)} Минут </li>
                    <li className="article-card__meta-item article-card__meta-item--tag ng-star-inserted">
                      <button  type="button" className="article-card__tag tag tag--hover">
                        <span className="tag__label" title={popular.tags}>
                          {popular.tags}
                        </span>
                      </button>
                    </li>
                  </ul>
                  <div className="article-card__footer">
                    <Link className="article-card__tag tag tag--author"  to={`/blog/${popular.author.slug}`} >
                      <span className="tag__avatar avatar">
                        <img
                          loading="lazy"
                          className="avatar__image"
                          src={popular.author.img}
                          alt={popular.author.fullname}
                          title={`${popular.author.fullname}  - image`}
                        />
                      </span>
                      <span className="tag__label">{popular.author.fullname}</span>
                    </Link>
                    <ul className="article-card__list list-row">
                      <li className="list-row__item">
                        <span className="article-card__icon article-card__icon--message icon">
                          <Message className="icon__svg" />
                        </span>
                        {popular.comment_count}
                      </li>
                      <li className="list-row__item">
                        <span className="article-card__icon icon">
                          <Eye className="icon__svg" />
                        </span>
                        {popular.views}
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnTrend;
