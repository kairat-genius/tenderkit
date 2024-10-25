import axios from 'axios'
import {BLOG_LIST_TAG, accessToken} from "../../Fetch/settings"

export const getBlogListTag = ({setTags}) => {
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(BLOG_LIST_TAG,{ headers })
    .then((response) => {
        setTags(response.data)
    })
}
