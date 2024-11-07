import React, { useState, useEffect } from "react";
import { postBlogCommentAdd } from "../../api/Blog/comment/postBlogCommentAdd";
import { useParams } from "react-router-dom";
import { getBlogComment } from "../../api/Blog/comment/getBlogComment";
import { formatTimeAgo } from "../../hooks/LotUtils";
import Pagination from "../Pagination";
import { useData } from "../../hooks/DataContext";

import Login from "../../components/LoginRegister/Login"
import Register from "../../components/LoginRegister/Register"

const BlogComment = () => {
  const { slug } = useParams();
  const [commentText, setCommentText] = useState("");
  const [comment, setComment] = useState([]);
  const [count, setCount] = useState(0);
  const [refreshComments, setRefreshComments] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { data } = useData();

  useEffect(() => {
    getBlogComment({ currentPage, setComment, slug, setCount });
  }, [currentPage, slug, refreshComments]);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (commentText.trim() === "") return;

    try {
      await postBlogCommentAdd({ slug, text: commentText });
      setCommentText("");
      setRefreshComments((prev) => !prev);
    } catch (error) {
      console.error("Ошибка при добавлении комментария:", error);
    }
  };

  const totalPages = Math.ceil(count / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };
  const switchToRegister = () => {
    setModalType("register");
  };


  return (
    <div className="content__layout content__layout--md">
      {!data ? (
        <div className="b-card b-card--default b-card--shadow">
          <div className="b-card__content b-card__content--md ng-star-inserted">
            <div className="b-card__layout b-card__layout--sm">
              <h2 className="b-card__title b-card__title--md title_login_ad">
                Авторизуйтесь,
                <br /> чтобы присоединиться к обсуждению
              </h2>
            </div>
            <div className="b-card__layout b-card__layout--ms">
              <p className="b-card__desc">
                Что вы думаете о статье, которую только что прочитали?
              </p>
            </div>
            <div className="b-card__layout">
              <div className="button-group">
                <div className="button-group__layout">
                  <button type="button" className="button button--primary button_login" onClick={() => openModal('login')}>
                    Войти
                  </button>
                </div>
                <div className="button-group__layout">
                  <button type="button" className="button button--primary-outline button_login" onClick={() => openModal('register')}>
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
        <div onClick={handleBackgroundClick}>
          {modalType === "login" ? (
            <Login
              onClose={closeModal}
              onSwitchToRegister={switchToRegister}
            />
          ) : (
            <Register
              onClose={closeModal}
            />
          )}
        </div>
      )}
        </div>
      ) : (
        <div className="b-card b-card--default b-card--shadow">
          <div className="b-card__content b-card__content--md ng-star-inserted">
            <div className="b-card__layout b-card__layout--sm">
              <h2 className="b-card__title b-card__title--md">
                Комментарии <span>{count}</span>
              </h2>
            </div>
            <div className="b-card__layout b-card__layout--ms">
              <div className="inputfield">
                <textarea
                  value={commentText}
                  onChange={handleCommentChange}
                  type="text"
                  maxLength="280"
                  rows="4"
                  placeholder="Поделитесь  мнением"
                  className="input input--textarea input--default ng-untouched ng-pristine ng-valid"
                />
                <p className="validation-message validation-message--secondary">
                  Максимум 280 символов
                </p>
              </div>
            </div>
            <div className="b-card__layout">
              <button
                type="button"
                className="button button--primary comment-button"
                onClick={handleCommentSubmit}
                disabled={commentText.trim() === ""}
              >
                Опубликовать комментарий
              </button>
            </div>
          </div>
          <div className="b-card__content b-card__content--comments">
            <div className="comments">
              <div className="ng-star-inserted">
                <ol className="comments__list comments__list--inner">
                  {comment.map((com, index) => (
                    <li className="comments__item" key={index}>
                      <article className="comment ng-star-inserted">
                        <header className="comment__header">
                          <cite className="comment__author"> {com.user} </cite>
                          <time className="comment__date">
                            {formatTimeAgo(com.created_at)}
                          </time>
                        </header>
                        <div className="comment__body">
                          <p> {com.text} </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
                {totalPages > 1 && (
                  <div style={{ padding: "20px 35px" }}>
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
      )}
    </div>
  );
};

export default BlogComment;
