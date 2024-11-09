import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getBlogArticle } from "../../../api/Blog/getBlogArticle";
import { getBlogAuthorAbout } from "../../../api/Blog/getBlogAuthorAbout";
import { getBlogArticleInteres } from "../../../api/Blog/getBlogArticleInteres";
import parse from "html-react-parser";
import { formatDateMonth } from "../../../hooks/LotUtils";



import NotFound404 from "../../../components/NotFound404";
import Breadcrumb from "../../../components/Breadcrumb";
import MetaTags from "../../../components/MetaTags";

import BlogComment  from "../../../components/Blog/BlogComment";
import BlogItem from "../../../components/Blog/BlogItem";

// svg
import { ReactComponent as Twitter } from "../../../assets/svg/social/twitter.svg";
import { ReactComponent as Vk } from "../../../assets/svg/social/vk.svg";
import { ReactComponent as IconLink } from "../../../assets/svg/pointer/link/link.svg";

const Article = () => {
  const { slug, author_slug } = useParams();
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState({ author_articles: [] });
  const [interes, setInteres] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (slug) {
      getBlogArticle(setData, slug, setError);
      getBlogAuthorAbout(setAuthor, slug, author_slug);
      getBlogArticleInteres(setInteres, slug);
    }
  }, [slug, author_slug]);

  if (error) {
    if (error.response && error.response.status === 404) {
      return <NotFound404 />;
    }
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  

  const content = data?.content?.replace(/\r?\n|\r/g, "") || "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `https://tenderkit.kz/blog/${author_slug}/${slug}`
    );
    setIsCopied(true);
  };

  return (
    <div className="container">
       <MetaTags page="blogArticle" title={data.title} slug={author_slug} article={slug}/>
      <Breadcrumb urls={author.fullname} title={data.title} />
      <div className="content__layout content__layout--md columns ng-star-inserted">
        <div className="columns__content">
          <article className="article">
            <img
              width="825"
              height="464"
              className="article__cover"
              src={data.img}
              alt={data.title}
              title={`${data.title} - image`}
            />
            <div className="article__content">
              <header className="article__header">
                {data.tags &&
                  data.tags.length > 0 &&
                  data.tags.slice(0, 3).map((tag, index) => (
                    <div
                      className="article__tag tag tag--md ng-star-inserted"
                      key={index}
                    >
                      <span className="tag__label"> {tag} </span>
                    </div>
                  ))}
                <h1 className="article__title">{data.title}</h1>
                <div className="panel row_panel_social">
                  <div className="panel__layout">
                    <time className="article__date">
                      {formatDateMonth(data.created_at)}
                    </time>
                  </div>
                  <div className="panel__layout panel__layout--rtl">
                    <ul className="list-row">
                      <li className="list-row__layout">
                        <a
                          target="_blank"
                          title="Поделиться в Twitter"
                          className="button button--share"
                          href={`https://twitter.com/intent/tweet?text=${data.title} - Блог Tenderkit.kz&amp;url=https://tenderkit.kz/blog/${author_slug}/${slug}`}
                        >
                          <span className="button__icon icon">
                            <Twitter className="icon__svg" />
                          </span>
                        </a>
                      </li>
                      <li className="list-row__layout">
                        <a
                          target="_blank"
                          title="Поделиться ВКонтакте"
                          className="button button--share"
                          href={`http://vk.com/share.php?url=https://tenderkit.kz/blog/${author_slug}/${slug}&amp;title=${data.title} - Блог Tenderkit.kz`}
                        >
                          <span className="button__icon icon">
                            <Vk className="icon__svg" />
                          </span>
                        </a>
                      </li>
                      <li className="list-row__layout">
                        <button
                          type="button"
                          className="button button--share"
                          onClick={handleCopyLink}
                        >
                          <span className="button__icon button__icon--before icon">
                            <IconLink className="icon__svg" />
                          </span>
                          <span className="ng-star-inserted copy_link">
                            {isCopied ? "Скопировано" : "Копировать ссылку"}
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              <div className="article__body">
                <div className="ckeditor-container">
                {!content ? (
                    <div className="ckeditor-skeleton"></div>
                  ) : (
                    parse(content)
                  )}
                </div>
              </div>
            </div>
            <div className="article__footer">
              <div className="article__panel panel">
                <div className="panel__layout">
                  <span>
                    <strong className="txt txt--primary">{data.views}</strong>{" "}
                    просмотра
                  </span>
                </div>
                <div className="panel__layout panel__layout--rtl">
                  <span className="article__share"> Поделиться в соцсетях: </span>
                  <ul className="list-row">
                    <li className="list-row__layout">
                      <a
                        target="_blank"
                        title="Поделиться в Twitter"
                        className="button button--share"
                        href={`https://twitter.com/intent/tweet?text=${data.title} - Блог Tenderkit.kz&amp;url=https://tenderkit.kz/blog/${author_slug}/${slug}`}
                      >
                        <span className="button__icon icon">
                          <Twitter className="icon__svg" />
                        </span>
                      </a>
                    </li>
                    <li className="list-row__layout">
                      <a
                        target="_blank"
                        title="Поделиться ВКонтакте"
                        className="button button--share"
                        href={`http://vk.com/share.php?url=https://tenderkit.kz/blog/${author_slug}/${slug}&amp;title=${data.title} - Блог Tenderkit.kz`}
                      >
                        <span className="button__icon icon">
                          <Vk className="icon__svg" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
        <aside className="columns__b-card adaptive">
          <div className="b-card b-card--default b-card--shadow">
            <div className="b-card__content">
              <h3 className="b-card__title b-card__title--sm b-card__title--mb b-card__title--secondary">
                Об авторе
              </h3>
              <div className="profile">
                <Link
                  className="profile__avatar avatar"
                  to={`/blog/${author.slug}`}
                >
                  <img
                    width="60"
                    height="60"
                    className="avatar__image"
                    src={author.img}
                    alt={author.fullname}
                    title={`${author.fullname}  - image`}
                  />
                </Link>
                <div className="profile__details">
                  <h3 className="profile__name">
                    <Link
                      className="profile__name-link"
                      to={`/blog/${author.slug}`}
                    >
                      {author.fullname}
                    </Link>
                  </h3>
                  <p className="profile__desc">{author.description}</p>
                  <Link
                    className="tag tag--md tag--hover"
                    to={`/blog/${author.slug}`}
                  >
                    <span className="tag__label">
                      {author.articles_count} статей
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {author.author_articles.length > 0 && (
              <div className="b-card__content ng-star-inserted">
                <h2 className="b-card__title b-card__title--sm b-card__title--mb">
                  Другие статьи автора
                </h2>
                <ul className="list list--other-articles">
                  {author.author_articles.map((article, index) => (
                    <li className="list__layout ng-star-inserted" key={index}>
                      <article className="article article--other not_article">
                        <h3 className="article__title article__title--h3">
                          <a
                            className="article__title-link article_a"
                            href={`/blog/${author.slug}/${article.slug}`}
                          >
                            {article.title}
                          </a>
                        </h3>
                        <time className="article__date">
                          {formatDateMonth(article.created_at)}
                        </time>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
        <div className="content__layout columns">
          <div className="columns__content">
            <BlogComment />
            {interes.length > 0 && (
            <div className="content__layout content__layout--md">
              <div className="b-card b-card--shadow">
                <h2 className="content__title interesting_title">
                  Может показаться интересным
                </h2>
                <BlogItem data={interes} />
              </div>
            </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Article;
