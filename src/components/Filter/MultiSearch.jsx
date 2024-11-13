import React, { useState, useEffect } from "react";
import { ReactComponent as Trash } from "../../assets/svg/pointer/trash.svg";
import { ReactComponent as Search } from "../../assets/svg/pointer/search.svg";
import { ReactComponent as SettingsBold } from "../../assets/svg/settings/settings-bold.svg";
import { ReactComponent as CloseCircle } from "../../assets/svg/pointer/close-circle.svg";
import { ReactComponent as EditCircle } from "../../assets/svg/pointer/edit-circle.svg";

const MultiSearch = ({ value = [], onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [tags, setTags] = useState(value);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setTags(value);
  }, [value]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue && tags.length < 5) {
        const updatedTags = [...tags, inputValue];
        setTags(updatedTags);
        onChange(updatedTags); // Send updated tags to parent
        setInputValue(""); // Clear input
      }
    }
  };

  const removeTag = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
    onChange(updatedTags); // Send updated tags to parent
    if (updatedTags.length === 0) {
      setIsActive(false); // Deactivate if no tags remain
    }
  };

  const clearAllTags = () => {
    setTags([]);
    onChange([]); // Send empty array to parent
    setIsActive(false);
  };

  const startEditingTag = (index) => {
    setEditIndex(index);
    setEditValue(tags[index]);
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const saveEditedTag = () => {
    if (editValue) {
      const updatedTags = [...tags];
      updatedTags[editIndex] = editValue;
      setTags(updatedTags);
      onChange(updatedTags); // Send updated tags to parent
    }
    setEditIndex(null);
    setEditValue("");
  };

  const handleEditKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveEditedTag();
    }
  };

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => {
    if (tags.length === 0) {
      setIsActive(false);
    }
  };

  return (
    <div className="filter__layout filter__layout--searchbar">
      <div className={`hero-search ${isActive ? "hero-search--active" : ""}`}>
        <div className="hero-search__icon icon">
          <Search className="icon__svg" />
        </div>
        <label htmlFor="hero-search" className="hero-search__container">
          <span
            className={`hero-search__placeholder ${
              isActive ? "hero-search__placeholder--active" : ""
            }`}
          >
            Введите ключевые слова или ТРУ и нажмите Enter
          </span>
          <div className={`hero-search__tags ${isActive ? "" : "my-hide"}`}>
            {tags.map((tag, index) => (
              <div key={index} className="hero-search__tag">
                <span className="tag tag--action">
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={handleEditChange}
                      onKeyDown={handleEditKeyDown}
                      onBlur={saveEditedTag}
                      autoFocus
                      className="tag__input ng-pristine ng-valid ng-touched"
                      style={{ width: `${Math.max(editValue.length, 1)}ch` }}
                    />
                  ) : (
                    <span className="tag__label">{tag}</span>
                  )}
                  <button
                    type="button"
                    className="tag__button button"
                    title="Редактировать"
                    onClick={() => startEditingTag(index)}
                  >
                    <span className="icon">
                      <EditCircle />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="tag__button button"
                    title="Удалить"
                    onClick={() => removeTag(index)}
                  >
                    <span className="icon">
                      <CloseCircle />
                    </span>
                  </button>
                </span>
              </div>
            ))}
            <form noValidate autoComplete="off" className="hero-search__tags">
              <input
                type="text"
                id="hero-search"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off" 
                spellCheck="false"
                name="search_query_result"
                className="hero-search__input"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </form>
          </div>
        </label>
        <div className="hero-search__actions">
          {isActive && (
            <div className="hero-search__action">
              <div className="hero-search__count">{tags.length} / 5</div>
            </div>
          )}
          {tags.length > 0 && (
              <button
                type="button"
                className="hero-search__remove button button__icon icon hero-search__action hero-search__action--remove"
                title="Очистить поле"
                onClick={clearAllTags}
              > 
                  <Trash />
              </button>
          )}
          <div className="hero-search__action">
            <a
              routerlink="/result"
              className="hero-search__add button"
              title="Расширенный поиск"
              href="/result"
            >
              <span className="button__icon icon">
                <SettingsBold className="icon__svg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSearch;
