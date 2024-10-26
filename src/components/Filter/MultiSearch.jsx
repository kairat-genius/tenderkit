
import React from "react";

// svg 
import { ReactComponent as Search } from "../../assets/svg/pointer/search.svg";


const MultiSearch = () => {
  return (
    <multi-search-box class="filter__layout filter__layout--searchbar">
      <div class="hero-search">
        <div class="hero-search__icon icon">
          <Search class="icon__svg"/>
        </div>
        <label
          htmlFor="hero-search"
          clickoutside=""
          class="hero-search__container"
        >
          <span class="hero-search__placeholder">
            Введите ключевые слова или ТРУ и нажмите Enter
          </span>
          <div class="hero-search__tags my-hide">
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
              />
            </form>
          </div>
        </label>
        <div class="hero-search__actions">
          <div class="hero-search__action">
            <a
              routerlink="/result"
              class="hero-search__add button ng-star-inserted"
              title="Расширенный поиск"
              href="/result"
            >
              <span class="button__icon icon">
                <svg-settings-bold
                  _nghost-serverapp-c210=""
                  class="icon__svg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="5"
                    ></rect>
                    <path
                      d="M16.668 19.165a.504.504 0 0 1-.5-.5v-7.333c0-.273.227-.5.5-.5s.5.227.5.5v7.333c0 .274-.227.5-.5.5ZM16.668 9.167a.504.504 0 0 1-.5-.5V5.334c0-.273.227-.5.5-.5s.5.227.5.5v3.333c0 .274-.227.5-.5.5ZM12 19.167a.504.504 0 0 1-.5-.5v-3.333c0-.273.227-.5.5-.5s.5.227.5.5v3.333c0 .274-.227.5-.5.5ZM12 13.167a.504.504 0 0 1-.5-.5V5.334c0-.273.227-.5.5-.5s.5.227.5.5v7.333c0 .274-.227.5-.5.5ZM7.332 19.165a.504.504 0 0 1-.5-.5v-7.333c0-.273.227-.5.5-.5s.5.227.5.5v7.333c0 .274-.227.5-.5.5ZM7.332 9.167a.504.504 0 0 1-.5-.5V5.334c0-.273.227-.5.5-.5s.5.227.5.5v3.333c0 .274-.227.5-.5.5Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M8.667 11.832H6a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5s-.227.5-.5.5ZM18 11.832h-2.666a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5s-.227.5-.5.5ZM13.333 13.168h-2.667a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5s-.227.5-.5.5Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </svg-settings-bold>
              </span>
            </a>
          </div>
        </div>
      </div>
    </multi-search-box>
  );
};

export default MultiSearch;
