import React, { useState, useEffect, useRef } from "react";
import { getBlogListTag } from "../../../api/Blog/getBlogListTag";
import { getBlogList } from "../../../api/Blog/getBlogList";
import Breadcrumb from "../../../components/Breadcrumb";
import MetaTags from "../../../components/MetaTags";
import Aside from "../../../components/Blog/Aside";
import OnTrend from "../../../components/blog/OnTrend";
import Pagination from "../../../components/Pagination";
import FilterBlog from "../../../components/Blog/FilterBlog";
import BlogItem from "../../../components/Blog/BlogItem";


const BlogList = () => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [filterType, setFilterType] = useState("title");
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const blogListRef = useRef(null);
  useEffect(() => {
    getBlogListTag({ setTags });
  }, []);

  useEffect(() => {
    getBlogList({ setData, setCount, currentPage, filterType, searchText, tag: selectedTag, setLoading  });
  }, [currentPage, selectedTag]);

  const handleSearch = () => {
    getBlogList({ setData, setCount, currentPage, filterType, searchText, tag: selectedTag, setLoading });
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
    <div className="container">
      <MetaTags page="blog"/>
    <Breadcrumb />
      <OnTrend />
      <section id="articles-layout" className="content__layout" ref={blogListRef}>
        <h2 className="content__title"> Все статьи </h2>
        <div className="columns">
          <Aside tags={tags} setSelectedTag={setSelectedTag}/>
          <div className="columns__content">
            <div className="content__layout content__layout--md">
              <div className="b-card b-card--shadow">
                <div className="searchresults searchresults--articles" >
                  <FilterBlog setFilterType={setFilterType} setSearchText={setSearchText} handleSearch={handleSearch}/>
                  <BlogItem data={data} loading={loading} itemsPerPage={itemsPerPage}/>
                  {totalPages > 1 && (
                  <div className="searchresults__layout">   
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
