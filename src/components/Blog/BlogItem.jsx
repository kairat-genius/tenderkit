import React from "react";
import { ReactComponent as Eye } from "../../assets/svg/pointer/eye.svg";
import { ReactComponent as Message } from "../../assets/svg/icon/message.svg";
import { Link } from "react-router-dom";
import { formatDateMonth, formatMinutes } from "../../hooks/LotUtils";
import parse from "html-react-parser";

const BlogItem = ({ data }) => {
  return (
    <div className="searchresults__layout ng-star-inserted">
      <ul className="searchresults__list">
        {data.length > 0 &&
          data.map((blog, index) => (
            <li className="searchresults__item ng-star-inserted" key={index}>
              <article className="article-card article-card--row">
                <img
                  width="350"
                  height="198"
                  loading="lazy"
                  className="article-card__image"
                  src={blog.img}
                  alt={blog.title}
                  title={`${blog.title} - image`}
                />
                <div className="article-card__content">
                  <Link
                    className="article-card__author article-card__tag tag tag--author"
                    to={`/blog/${blog.author.slug}`}
                  >
                    <span className="tag__avatar avatar">
                      <img
                        loading="lazy"
                        className="avatar__image"
                        src={blog.author.img}
                        alt={blog.author.fullname}
                        title={`${blog.author.fullname} - image`}
                      />
                    </span>
                    <span className="tag__label">{blog.author.fullname}</span>
                  </Link>
                  <h3 className="article-card__title">
                    <a
                      className="article-card__title-link highlight"
                      href={`/blog/${blog.author.slug}/${blog.slug}`}
                    >
                      {blog.title}
                    </a>
                  </h3>
                  <p className="article-card__desc highlight">
                    {parse(blog.content)}...
                  </p>
                  <div className="article-card__footer">
                    <ul className="article-card__meta">
                      <li className="article-card__meta-item">
                        <time> {formatDateMonth(blog.created_at)} </time>
                      </li>
                      <li className="article-card__meta-item"> {formatMinutes(blog.created_at)} Минут </li>
                    </ul>
                    <ul className="article-card__meta">
                      {blog.tags &&
                        blog.tags.length > 0 &&
                        blog.tags.slice(0, 3).map((tag, index) => (
                          <li className="article-card__meta-item article-card__meta-item--tag ng-star-inserted" key={index}>
                            <button type="button" className="article-card__tag tag tag--hover">
                              <span className="tag__label"> {tag} </span>
                            </button>
                          </li>
                        ))}
                    </ul>
                    <ul className="article-card__list list-row">
                      <li className="list-row__item">
                        <span className="article-card__icon article-card__icon--message icon">
                          <Message className="icon__svg" />
                        </span>
                        {blog.comment_count}
                      </li>
                      <li className="list-row__item">
                        <span className="article-card__icon icon">
                          <Eye className="icon__svg" />
                        </span>
                        {blog.views}
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogItem;
