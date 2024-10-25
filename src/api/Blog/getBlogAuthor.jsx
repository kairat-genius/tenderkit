import axios from 'axios'
import {BLOG_AUTHOR} from "../../Fetch/settings"

export const getBlogAuthor = (setAuthor, slug) => {

    axios.get(BLOG_AUTHOR(slug))
    .then((response) => {
            setAuthor(response.data);
    })
}