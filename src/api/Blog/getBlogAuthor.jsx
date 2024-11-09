import axios from 'axios';
import { BLOG_AUTHOR } from "../../Fetch/settings";

export const getBlogAuthor = (setAuthor, slug, setError) => {
    const cacheKey = `author-${slug}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    const cacheExpiry = sessionStorage.getItem(`${cacheKey}_expiry`);
    const isCacheValid = cacheExpiry && Date.now() < Number(cacheExpiry);

    if (cachedData && isCacheValid) {
        setAuthor(JSON.parse(cachedData));
    } else {
        axios.get(BLOG_AUTHOR(slug))
            .then((response) => {
                sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
                sessionStorage.setItem(`${cacheKey}_expiry`, Date.now() + 180000);
                setAuthor(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }
};
