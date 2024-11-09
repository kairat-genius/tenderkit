import axios from 'axios'
import {BLOG_AUTHOR_ABOUT} from "../../Fetch/settings"

export const getBlogAuthorAbout = (setAuthor, slug, author_slug) => {
    const cacheKey = `authorAbout-${slug}-${author_slug}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    const cacheExpiry = sessionStorage.getItem(`${cacheKey}_expiry`);
    const isCacheValid = cacheExpiry && Date.now() < Number(cacheExpiry);

    if (cachedData && isCacheValid) {
        setAuthor(JSON.parse(cachedData)); 
    } else {
        axios.get(BLOG_AUTHOR_ABOUT(slug, author_slug))
            .then((response) => {
                sessionStorage.setItem(cacheKey, JSON.stringify(response.data)); 
                sessionStorage.setItem(`${cacheKey}_expiry`, Date.now() + 180000); 
                setAuthor(response.data);
            })
    }
}
