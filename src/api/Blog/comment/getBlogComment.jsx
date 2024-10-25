import axios from 'axios';
import { BLOG_COMMENTS_GET } from "../../../Fetch/settings";

export const getBlogComment = ({currentPage, setComment, slug, setCount}) => {
    axios.get(`${BLOG_COMMENTS_GET(slug)}?page=${currentPage}`, {
        headers: {
            'Content-Type': 'application/json', 
        }
    })
    .then((response) => {
        setComment(response.data.results);
        setCount(response.data.count);
    })
}