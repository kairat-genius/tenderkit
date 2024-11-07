import React, {useState, useEffect, useRef } from "react";
import { getBlogAuthor } from "../../../api/Blog/getBlogAuthor";
import { useParams } from "react-router-dom";
import { getBlogList } from "../../../api/Blog/getBlogList";

import NotFound404 from "../../../components/NotFound404";
import Breadcrumb from "../../../components/Breadcrumb";
import MetaTags from "../../../components/MetaTags";
import Aside from "../../../components/blog/Aside";
import Pagination from "../../../components/Pagination";
import FilterBlog from "../../../components/blog/FilterBlog";
import BlogItem from "../../../components/blog/BlogItem";

const Author = () => {
  const { author_slug } = useParams();
  const [author, setAuthor] = useState([]);
  const [data, setData] = useState([])
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [filterType, setFilterType] = useState("title");
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const blogListRef = useRef(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (author_slug) {
    getBlogList({ setData, author_slug, setCount, currentPage, filterType, searchText, tag: selectedTag  });
  }
  }, [currentPage, selectedTag, author_slug]);

  const handleSearch = () => {
    getBlogList({ setData, author_slug, setCount, currentPage, filterType, searchText, tag: selectedTag });
  };

  useEffect(() => {
    if (author_slug) {
      getBlogAuthor(setAuthor, author_slug, setError); 
    }
  }, [author_slug]); 

  if (error) {
    if (error.response && error.response.status === 404) {
      return <NotFound404 />;
    }
    return <div>Error: {error.message}</div>;
  }


  if (!author) {
    return  <div className="loader-container">
    <div className="loader"></div>
  </div>; 
  }


  const totalPages = Math.ceil(count / itemsPerPage); 

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

    if (blogListRef.current) {
      blogListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <div class="container">
      <MetaTags page="blogAuthor" title={author.fullname} slug={author_slug}/>
    <Breadcrumb urls={author.fullname}/>
      <div class="content__layout content__layout--md" ref={blogListRef}>
        <div class="b-card b-card--shadow">
          <div class="profile profile--index">
            <div class="profile__avatar avatar">
              <img
                width="60"
                height="60"
                class="avatar__image"
                src={author.img}
                alt={author.fullname}
                title={`${author.fullname}  - image`}
              />
            </div>
            <div class="profile__details">
              <h1 class="profile__name"> {author.fullname} </h1>
              <p class="profile__desc">
                {author.description}
              </p>
              <ul class="profile__list-row list-row list-row--categories">
                <li class="list-row__layout ng-star-inserted">
                  <div class="tag tag--md">
                    <span class="tag__label"> {author.articles_count} статей </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id="articles-layout" class="content__layout">
        <div class="columns">
          <Aside tags={author.tags} setSelectedTag={setSelectedTag}/>
          <div class="columns__content">
            <div class="content__layout content__layout--md">
              <div class="b-card b-card--shadow">
                <div class="searchresults searchresults--articles">
                  <FilterBlog setFilterType={setFilterType} setSearchText={setSearchText} handleSearch={handleSearch}/>
                  <BlogItem data={data}/>
                  {totalPages > 1 && (
                  <div class="searchresults__layout">
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
