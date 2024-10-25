import axios from 'axios'
import {BLOG_ARTICLE} from "../../Fetch/settings"

export const getBlogArticle = (setData, slug) => {

    axios.get(BLOG_ARTICLE(slug))
    .then((response) => {
            setData(response.data);
    })
}