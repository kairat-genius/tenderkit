import axios from 'axios'
import {BLOG_LIST, accessToken} from "../../Fetch/settings"



export const getBlogList = ({ setData, setCount, currentPage, author_slug, filterType, searchText, tag, setLoading }) => {
    const headers = accessToken ? { 'Authorization': `JWT ${accessToken}` } : {};

    const params = new URLSearchParams({ page: currentPage });

    // Добавляем параметры, если они не пустые
    if (searchText) params.append('search', searchText);
    if (filterType) params.append('search_by', filterType);
    if (tag) params.append('tag', typeof tag === 'string' ? tag : tag?.name);
    if (author_slug) params.append('author', author_slug);

    // Формируем URL с параметрами
    const url = `${BLOG_LIST}?${params.toString()}`;

    const cacheKey = `blogList_${url}`;

  // Попробуем получить кэшированные данные
  const cachedData = sessionStorage.getItem(cacheKey);
  const cacheExpiry = sessionStorage.getItem(`${cacheKey}_expiry`);
  const isCacheValid = cacheExpiry && Date.now() < Number(cacheExpiry);

  if (cachedData && isCacheValid) {
    // Если кэш действителен, используем его
    const parsedData = JSON.parse(cachedData);
    setData(parsedData.results);
    setCount(parsedData.count);
    if (setLoading) setLoading(false);
    return;
  }

    axios.get(url, { headers })
        .then((response) => {
            const { results, count } = response.data;
            sessionStorage.setItem(cacheKey, JSON.stringify({ results, count }));
            sessionStorage.setItem(`${cacheKey}_expiry`, Date.now() + 180000); 
            setData(response.data.results);
            setCount(response.data.count);
            if (setLoading) setLoading(false);
        })
        .catch((error) => {
            console.error("Ошибка при получении списка блогов:", error);
        });
};
