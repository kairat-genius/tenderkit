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


// тариф
export const TARIFFS_GET = CONCATE + 'tariff/list/';
export const TARIFFS_POST = CONCATE + 'create/application/';

// Лоты
export const LOT_LIST = CONCATE + 'list/lots/';
export const LOT_DETAIL = (slug) => CONCATE + `detail/lot/${slug}/`;
export const LOT_DETAIL_OTHER = (slug) => CONCATE + `list/other/lot/${slug}/`;
      // фильтр
      export const DELIVERY_REGION = CONCATE + 'list/deliveryRegion/';
      export const SOURCE = CONCATE + 'list/source/';
      export const PURCHASETYPE = CONCATE + 'list/purchaseType/';
      export const SUBJECTTYPE = CONCATE + 'list/tenderSubjectType/';
      export const STATUS = CONCATE + 'list/status/';
      export const ORGANIZER = CONCATE + 'list/organizer/';
      









 

