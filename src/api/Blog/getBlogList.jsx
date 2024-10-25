import axios from 'axios'
import {BLOG_LIST, accessToken} from "../../Fetch/settings"



export const getBlogList = ({ setData, setCount, currentPage, slug, filterType, searchText, tag }) => {
    const headers = accessToken ? { 'Authorization': `JWT ${accessToken}` } : {};

    // Создаем объект URLSearchParams
    const params = new URLSearchParams({ page: currentPage });

    // Добавляем параметры, если они не пустые
    if (searchText) params.append('search', searchText);
    if (filterType) params.append('search_by', filterType);
    if (tag) params.append('tag', typeof tag === 'string' ? tag : tag?.name);
    if (slug) params.append('author', slug);

    // Формируем URL с параметрами
    const url = `${BLOG_LIST}?${params.toString()}`;

    axios.get(url, { headers })
        .then((response) => {
            setData(response.data.results);
            setCount(response.data.count);
        })
        .catch((error) => {
            console.error("Ошибка при получении списка блогов:", error);
        });
};
