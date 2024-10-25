import Cookies from 'js-cookie';

const API_DOMAIN = 'http://217.12.38.253';
const API_PREFIX = '/api/v1/';
const CONCATE = API_DOMAIN + API_PREFIX;

export const accessToken = Cookies.get('access');
// const CONCATE = API_PREFIX;
// API METHODS URLS
// пользователь
export const USER_REGISTER = CONCATE + 'user/create/';
export const USER_LOGIN = CONCATE + 'user/login/';
export const USER_REFRESH_TOKEN = CONCATE + 'user/refresh/token/';
export const USER_DATA = CONCATE + 'user/get-me/';
export const USER_DATA_UPDATE = CONCATE + 'user/update/';

export const USER_RESET_PASSWORD = CONCATE + 'user/reset-password/';
export const USER_RESET_PASSWORD_CONFIRM = CONCATE + 'user/reset-password/confirm/';

// избранные
export const USER_LIST_FAVORITE = CONCATE + 'user/list/favorite/';
export const CREATE_DELETE_FAVORITE = CONCATE + 'create-delete/favorite/';

// отслеживание
export const CREATE_DELETE_TRACKING = CONCATE + 'create-delete/tracking/';
export const USER_LIST_TRACKING = CONCATE + 'user/list/tracking/';

// блог
export const BLOG_ARTICLE = (slug) => CONCATE + `blog/article/${slug}/`;
export const BLOG_ARTICLE_INTERES = (slug) => CONCATE + `blog/list/interesting/article/${slug}/`;
export const BLOG_LIST = CONCATE + 'blog/list/article/';
export const BLOG_LIST_POPULAR = CONCATE + 'blog/list/popular/article/';
export const BLOG_LIST_TAG = CONCATE + 'blog/article/list/tag/';
      // коммент
      export const BLOG_COMMENTS_ADD = CONCATE + 'blog/create/comment/'; 
      export const BLOG_COMMENTS_GET = (slug) => CONCATE + `blog/list/comment/${slug}/`;

export const BLOG_AUTHOR = (slug) => CONCATE + `blog/author/${slug}/`;

export const BLOG_AUTHOR_ABOUT = (slug, author_slug) => CONCATE + `blog/about/author/${author_slug}/article/${slug}/`;
// // настройки рассылки
// export const SETTINGS_GET = USER_PROFILE  + 'settings/';
// export const SETTINGS_POST = USER_PROFILE  + 'settings/add/keywords/';
// export const SETTINGS_DELETE = USER_PROFILE  + 'settings/delete/keywords/';
// export const SETTINGS_ENABLE_DISABLE = USER_PROFILE  + 'settings/distribution/';

// тариф
export const TARIFFS_GET = CONCATE + 'tariff/list/';
// export const TARIFFS_POST = CONCATE + 'tariff/add/application/';

// export const LOT_LIST_GET = CONCATE + 'GetLots';
// export const LOT_DETAIL = (slug) => 
//     CONCATE + `GetDetailLot/${slug}/`;

export const LOT_LIST = CONCATE + 'list/lots/';
// export const LOT_FAVORITES_DELETE_ADD = CONCATE + 'lot/favorite/add-delete/';

// export const LOT_COMMENTS = (slug) => 
//    CONCATE + `lot/${slug}/comments/`;




 

