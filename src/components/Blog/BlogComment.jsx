import React, { useState, useEffect } from "react";
import { postBlogCommentAdd } from "../../api/Blog/comment/postBlogCommentAdd";
import { useParams } from "react-router-dom";
import { getBlogComment } from "../../api/Blog/comment/getBlogComment";
import { formatTimeAgo } from "../../hooks/LotUtils";
import Pagination from "../Pagination";
import { useData } from "../../hooks/DataContext";
import {Login, Register} from "../../components"

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
    <div class="content__layout content__layout--md">
      {!data ? (
        <div class="b-card b-card--default b-card--shadow">
          <div class="b-card__content b-card__content--md ng-star-inserted">
            <div class="b-card__layout b-card__layout--sm">
              <h2 class="b-card__title b-card__title--md title_login_ad">
                Авторизуйтесь,
                <br /> чтобы присоединиться к обсуждению
              </h2>
            </div>
            <div class="b-card__layout b-card__layout--ms">
              <p class="b-card__desc">
                Что вы думаете о статье, которую только что прочитали?
              </p>
            </div>
            <div class="b-card__layout">
              <div class="button-group">
                <div class="button-group__layout">
                  <button type="button" class="button button--primary button_login" onClick={() => openModal('login')}>
                    Войти
                  </button>
                </div>
                <div class="button-group__layout">
                  <button type="button" class="button button--primary-outline button_login" onClick={() => openModal('register')}>
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
        <div class="b-card b-card--default b-card--shadow">
          <div class="b-card__content b-card__content--md ng-star-inserted">
            <div class="b-card__layout b-card__layout--sm">
              <h2 class="b-card__title b-card__title--md">
                Комментарии <span>{count}</span>
              </h2>
            </div>
            <div class="b-card__layout b-card__layout--ms">
              <div class="inputfield">
                <textarea
                  value={commentText}
                  onChange={handleCommentChange}
                  type="text"
                  maxLength="280"
                  rows="4"
                  placeholder="Поделитесь  мнением"
                  class="input input--textarea input--default ng-untouched ng-pristine ng-valid"
                />
                <p class="validation-message validation-message--secondary">
                  Максимум 280 символов
                </p>
              </div>
            </div>
            <div class="b-card__layout">
              <button
                type="button"
                class="button button--primary comment-button"
                onClick={handleCommentSubmit}
                disabled={commentText.trim() === ""}
              >
                Опубликовать комментарий
              </button>
            </div>
          </div>
          <div class="b-card__content b-card__content--comments">
            <div class="comments">
              <div className="ng-star-inserted">
                <ol class="comments__list comments__list--inner">
                  {comment.map((com, index) => (
                    <li class="comments__item" key={index}>
                      <article class="comment ng-star-inserted">
                        <header class="comment__header">
                          <cite class="comment__author"> {com.user} </cite>
                          <time class="comment__date">
                            {formatTimeAgo(com.created_at)}
                          </time>
                        </header>
                        <div class="comment__body">
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
