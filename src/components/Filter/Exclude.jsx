import React, { useState, useEffect } from "react";
import { ReactComponent as Trash } from "../../assets/svg/pointer/trash.svg";
import { ReactComponent as CloseCircle } from "../../assets/svg/pointer/close-circle.svg";
import { ReactComponent as EditCircle } from "../../assets/svg/pointer/edit-circle.svg";

const Exclude = ({ onClose, value, onChange, isExcludeOpen }) => {
  const [tags, setTags] = useState(value || []);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setTags(value || []);
  }, [value]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue) {
        if (editIndex !== null) {
          // Editing existing tag
          const updatedTags = [...tags];
          updatedTags[editIndex] = inputValue;
          setTags(updatedTags);
          onChange(updatedTags); // Send updated tags to parent
          setEditIndex(null); // Reset edit index
        } else if (tags.length < 5) {
          // Adding new tag
          const updatedTags = [...tags, inputValue];
          setTags(updatedTags);
          onChange(updatedTags); // Send updated tags to parent
        }
        setInputValue(""); // Clear input
      }
    }
  };

  const startEditingTag = (index) => {
    setEditIndex(index);
    setInputValue(tags[index]); // Set input value to the tag being edited
  };

  const removeTag = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
    onChange(updatedTags); // Send updated tags to parent
    if (editIndex === index) {
      setEditIndex(null); // Reset edit index if the edited tag is removed
      setInputValue(""); // Clear input if we were editing the removed tag
    }
  };

  const clearAllTags = () => {
    setTags([]);
    onChange([]); // Send empty array to parent
    setInputValue(""); // Clear input
    setEditIndex(null); // Reset edit index
  };

  return (
    <div
      className={`modal modal--lg modal--companies ${
        isExcludeOpen ? "modal--active" : ""
      }`}
    >
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title"> Исключить слова </div>
          <div className="modal__close" onClick={onClose}></div>
        </div>
        <div className="modal__body">
          <div className="modal__section">
            <div className="modal__layout">
              <div className="hero-search hero-search--secondary">
                <label
                  htmlFor="hero-exclude-words"
                  className="hero-search__container"
                >
                  <div className="hero-search__tags">
                    {tags.map((tag, index) => (
                      <div key={index} className="hero-search__tag">
                        <span className="tag tag--action">
                          {editIndex === index ? (
                            <input
                              type="text"
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyDown}
                              onBlur={() => setEditIndex(null)} // Clear edit mode on blur
                              autoFocus
                              className="tag__input"
                              style={{ width: `${Math.max(inputValue.length, 1)}ch` }}
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
                    <form
                      noValidate
                      autoComplete="off"
                      className="hero-search__tags"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <input
                        type="text"
                        id="hero-exclude-words"
                        name="without_word"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        className="hero-search__input"
                        placeholder="Введите слово"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        style={{ width: "80%" }}
                      />
                      <div className="hero-search__actions" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="hero-search__action">
                          <div className="hero-search__count">{tags.length} / 5</div>
                        </div>
                          <button
                            type="button"
                            className="hero-search__remove button button__icon icon hero-search__action hero-search__action--remove"
                            title="Очистить поле"
                            onClick={clearAllTags}
                          >
                              <Trash />
                          </button>
                      </div>
                    </form>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <div className="button-group button-group--sm">
            <div className="button-group__layout">
              <button
              type="button"
                className="button button--primary-transparent button--expand"
                onClick={onClose}
              >
                Отменить
              </button>
            </div>
            <div className="button-group__layout">
              <button type="button" className="button button--primary button--expand" onClick={onClose}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclude;
