import axios from 'axios'
import {BLOG_AUTHOR_ABOUT} from "../../Fetch/settings"

export const getBlogAuthorAbout = (setAuthor, slug, author_slug) => {

    axios.get(BLOG_AUTHOR_ABOUT(slug, author_slug))
    .then((response) => {
            setAuthor(response.data);
    })
}