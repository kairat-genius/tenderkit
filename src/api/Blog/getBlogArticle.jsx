import axios from 'axios'
import {BLOG_ARTICLE} from "../../Fetch/settings"

export const getBlogArticle = (setData, slug, setError) => {

    axios.get(BLOG_ARTICLE(slug))
    .then((response) => {
            setData(response.data);
    })
    .catch((error) => {
        setError(error);
    });
}