import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogItem, BlogComment } from "../../../components";
import { getBlogArticle } from "../../../api/Blog/getBlogArticle";
import { getBlogAuthorAbout } from "../../../api/Blog/getBlogAuthorAbout";
import { getBlogArticleInteres } from "../../../api/Blog/getBlogArticleInteres";
import parse from "html-react-parser";
import { formatDateMonth } from "../../../hooks/LotUtils";
import { Breadcrumb, MetaTags, NotFound404 } from "../../../components";
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
    <div class="container">
       <MetaTags page="blogArticle" title={data.title} slug={author_slug} article={slug}/>
      <Breadcrumb urls={author.fullname} title={data.title} />
      <div class="content__layout content__layout--md columns ng-star-inserted">
        <div class="columns__content">
          <article class="article">
            <img
              width="825"
              height="464"
              class="article__cover"
              src={data.img}
              alt={data.title}
              title={`${data.title} - image`}
            />
            <div class="article__content">
              <header class="article__header">
                {data.tags &&
                  data.tags.length > 0 &&
                  data.tags.slice(0, 3).map((tag, index) => (
                    <div
                      class="article__tag tag tag--md ng-star-inserted"
                      key={index}
                    >
                      <span class="tag__label"> {tag} </span>
                    </div>
                  ))}
                <h1 class="article__title">{data.title}</h1>
                <div class="panel row_panel_social">
                  <div class="panel__layout">
                    <time class="article__date">
                      {formatDateMonth(data.created_at)}
                    </time>
                  </div>
                  <div class="panel__layout panel__layout--rtl">
                    <ul class="list-row">
                      <li class="list-row__layout">
                        <a
                          target="_blank"
                          title="Поделиться в Twitter"
                          class="button button--share"
                          href={`https://twitter.com/intent/tweet?text=${data.title} - Блог Tenderkit.kz&amp;url=https://tenderkit.kz/blog/${author_slug}/${slug}`}
                        >
                          <span class="button__icon icon">
                            <Twitter class="icon__svg" />
                          </span>
                        </a>
                      </li>
                      <li class="list-row__layout">
                        <a
                          target="_blank"
                          title="Поделиться ВКонтакте"
                          class="button button--share"
                          href={`http://vk.com/share.php?url=https://tenderkit.kz/blog/${author_slug}/${slug}&amp;title=${data.title} - Блог Tenderkit.kz`}
                        >
                          <span class="button__icon icon">
                            <Vk class="icon__svg" />
                          </span>
                        </a>
                      </li>
                      <li class="list-row__layout">
                        <button
                          type="button"
                          class="button button--share"
                          onClick={handleCopyLink}
                        >
                          <span class="button__icon button__icon--before icon">
                            <IconLink class="icon__svg" />
                          </span>
                          <span class="ng-star-inserted copy_link">
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
                  {typeof content === "string" ? parse(content) : ""}
                </div>
              </div>
            </div>
            <div class="article__footer">
              <div class="article__panel panel">
                <div class="panel__layout">
                  <span>
                    <strong class="txt txt--primary">{data.views}</strong>{" "}
                    просмотра
                  </span>
                </div>
                <div class="panel__layout panel__layout--rtl">
                  <span class="article__share"> Поделиться в соцсетях: </span>
                  <ul class="list-row">
                    <li class="list-row__layout">
                      <a
                        target="_blank"
                        title="Поделиться в Twitter"
                        class="button button--share"
                        href={`https://twitter.com/intent/tweet?text=${data.title} - Блог Tenderkit.kz&amp;url=https://tenderkit.kz/blog/${author_slug}/${slug}`}
                      >
                        <span class="button__icon icon">
                          <Twitter class="icon__svg" />
                        </span>
                      </a>
                    </li>
                    <li class="list-row__layout">
                      <a
                        target="_blank"
                        title="Поделиться ВКонтакте"
                        class="button button--share"
                        href={`http://vk.com/share.php?url=https://tenderkit.kz/blog/${author_slug}/${slug}&amp;title=${data.title} - Блог Tenderkit.kz`}
                      >
                        <span class="button__icon icon">
                          <Vk class="icon__svg" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
        <aside class="columns__b-card adaptive">
          <div class="b-card b-card--default b-card--shadow">
            <div class="b-card__content">
              <h3 class="b-card__title b-card__title--sm b-card__title--mb b-card__title--secondary">
                Об авторе
              </h3>
              <div class="profile">
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
                <div class="profile__details">
                  <h3 class="profile__name">
                    <Link
                      className="profile__name-link"
                      to={`/blog/${author.slug}`}
                    >
                      {author.fullname}
                    </Link>
                  </h3>
                  <p class="profile__desc">{author.description}</p>
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
              <div class="b-card__content ng-star-inserted">
                <h2 class="b-card__title b-card__title--sm b-card__title--mb">
                  Другие статьи автора
                </h2>
                <ul class="list list--other-articles">
                  {author.author_articles.map((article, index) => (
                    <li class="list__layout ng-star-inserted" key={index}>
                      <article class="article article--other not_article">
                        <h3 class="article__title article__title--h3">
                          <a
                            class="article__title-link article_a"
                            href={`/blog/${author.slug}/${article.slug}`}
                          >
                            {article.title}
                          </a>
                        </h3>
                        <time class="article__date">
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
   
        <div class="content__layout columns">
          <div class="columns__content">
            <BlogComment />
            {interes.length > 0 && (
            <div class="content__layout content__layout--md">
              <div class="b-card b-card--shadow">
                <h2 class="content__title interesting_title">
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
