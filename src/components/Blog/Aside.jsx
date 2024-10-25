import React, {useState} from "react";

const Aside = ({tags, setSelectedTag}) => {
  const [activeTag, setActiveTag] = useState(null);
  const handleTagClick = (tag) => {
    setSelectedTag(tag); 
    setActiveTag(tag);
  };
  return (
    <aside className="columns__b-card b-card b-card--categories b-card--shadow">
      <h3 className="b-card__title"> Рубрики </h3>
      <ul className="list-row list-row--categories">
        <li className="list-row__layout">
          <button type="button" className={`tag tag--md tag--hover ${activeTag === null ? "tag--active" : ""}`}  onClick={() => handleTagClick(null)}>
            <span className="tag__label">Все</span>
          </button>
        </li>
        {Array.isArray(tags) && tags.length > 0 && tags.map((tag, index) => (
          <li className="list-row__layout ng-star-inserted" key={index}>
            <button type="button" className={`tag tag--md tag--hover ${activeTag === tag ? "tag--active" : ""}`} onClick={() => handleTagClick(tag)}>
              <span
                className="tag__label"
                title={typeof tag === "string" ? tag : tag.name}
              >
                {typeof tag === "string" ? tag : tag.name}
              </span>
            </button>
          </li>
        ))}
        
      </ul>
    </aside>
  );
};

export default Aside;
