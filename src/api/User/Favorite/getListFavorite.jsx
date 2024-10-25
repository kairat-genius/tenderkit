import axios from 'axios'
import {USER_LIST_FAVORITE, accessToken} from "../../../Fetch/settings"

export const getListFavorite = ({setData, setCount, currentPage }) => {
    axios.get(`${USER_LIST_FAVORITE}?page=${currentPage}`, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setData(response.data.results)
        setCount(response.data.count)
    })
}
