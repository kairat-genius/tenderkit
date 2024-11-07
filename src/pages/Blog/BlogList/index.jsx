import React, { useState, useEffect, useRef } from "react";
import { getBlogListTag } from "../../../api/Blog/getBlogListTag";
import { getBlogList } from "../../../api/Blog/getBlogList";
import Breadcrumb from "../../../components/Breadcrumb";
import MetaTags from "../../../components/MetaTags";
import Aside from "../../../components/blog/Aside";
import OnTrend from "../../../components/blog/OnTrend";
import Pagination from "../../../components/Pagination";
import FilterBlog from "../../../components/blog/FilterBlog";
import BlogItem from "../../../components/blog/BlogItem";


const BlogList = () => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [filterType, setFilterType] = useState("title");
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const blogListRef = useRef(null);
  useEffect(() => {
    getBlogListTag({ setTags });
  }, []);

  useEffect(() => {
    getBlogList({ setData, setCount, currentPage, filterType, searchText, tag: selectedTag  });
  }, [currentPage, selectedTag]);

  const handleSearch = () => {
    getBlogList({ setData, setCount, currentPage, filterType, searchText, tag: selectedTag });
  };

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
      <MetaTags page="blog"/>
    <Breadcrumb />
      <OnTrend />
      <section id="articles-layout" className="content__layout" ref={blogListRef}>
        <h2 class="content__title"> Все статьи </h2>
        <div class="columns">
          <Aside tags={tags} setSelectedTag={setSelectedTag}/>
          <div class="columns__content">
            <div class="content__layout content__layout--md">
              <div class="b-card b-card--shadow">
                <div class="searchresults searchresults--articles" >
                  <FilterBlog setFilterType={setFilterType} setSearchText={setSearchText} handleSearch={handleSearch}/>
                  <BlogItem data={data} />
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

export default BlogList;
