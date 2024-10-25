import axios from 'axios'
import {BLOG_ARTICLE_INTERES} from "../../Fetch/settings"

export const getBlogArticleInteres= (setInteres, slug) => {

    axios.get(BLOG_ARTICLE_INTERES(slug))
    .then((response) => {
        setInteres(response.data);
    })
}