import axios from 'axios'
import {BLOG_LIST_POPULAR, accessToken} from "../../Fetch/settings"

export const getBlogListPopular = ({setData}) => {
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(BLOG_LIST_POPULAR,{ headers })
    .then((response) => {
        setData(response.data)
    })
}
