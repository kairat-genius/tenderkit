
import React, {useState, useEffect} from "react";

// svg 
import { ReactComponent as Search } from "../../assets/svg/pointer/search.svg";
import { ReactComponent as SettingsBold } from "../../assets/svg/settings/settings-bold.svg";

const MultiSearch = ({value, onChange}) => {
  const [isActive, setIsActive] = useState(false);
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue); // Передаем новое значение в родительский компонент
  };
  return (
    <div class="filter__layout filter__layout--searchbar">
       <div className={`hero-search ${isActive ? 'hero-search--active' : ''}`}>
        <div class="hero-search__icon icon">
          <Search class="icon__svg"/>
        </div>
        <label
          htmlFor="hero-search"
          clickoutside=""
          class="hero-search__container"
        >
          <span class={`hero-search__placeholder ${isActive ? 'hero-search__placeholder--active' : ''}`}>
            Введите ключевые слова или ТРУ и нажмите Enter
          </span>
          <div class={`hero-search__tags ${isActive ? '' : 'my-hide'}`}>
            
            <form
        noValidate=""
              autoComplete="off"
              class="hero-search__tags ng-untouched ng-pristine ng-valid"
            >
              <input
                type="text"
                id="hero-search"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                name="search_query_result"
                class="hero-search__input"
                value={value} // Устанавливаем текущее значение поиска
                onChange={handleInputChange} // Обрабатываем изменения
                onFocus={() => setIsActive(true)} // Активируем поиск
                onBlur={() => setIsActive(false)} // Деактивируем поиск
              />
            </form>
          </div>
        </label>
        <div class="hero-search__actions">
        <div class="hero-search__action ng-star-inserted">
          <div class="hero-search__count"> 0 / 15 </div>
        </div>
          <div class="hero-search__action">
            <a
              routerlink="/result"
              class="hero-search__add button ng-star-inserted"
              title="Расширенный поиск"
              href="/result"
            >
              <span class="button__icon icon">
                <SettingsBold class="icon__svg"/>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSearch;
