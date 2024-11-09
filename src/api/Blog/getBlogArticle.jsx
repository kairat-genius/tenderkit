import axios from 'axios';
import { BLOG_ARTICLE } from "../../Fetch/settings";

export const getBlogArticle = (setData, slug, setError) => {
    const cacheKey = `article-${slug}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    const cacheExpiry = sessionStorage.getItem(`${cacheKey}_expiry`);
    const isCacheValid = cacheExpiry && Date.now() < Number(cacheExpiry);

    if (cachedData && isCacheValid) {
        setData(JSON.parse(cachedData));
    } else {
        axios.get(BLOG_ARTICLE(slug))
            .then((response) => {
                sessionStorage.setItem(cacheKey, JSON.stringify(response.data)); 
                sessionStorage.setItem(`${cacheKey}_expiry`, Date.now() + 180000);
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }
};