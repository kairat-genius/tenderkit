import axios from 'axios'
import {LOT_LIST, accessToken} from "../../Fetch/settings"

export const getListLots = ({setData, setCount, currentPage }) => {
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(`${LOT_LIST}?page=${currentPage}`,{ headers })
    .then((response) => {
        setData(response.data.results)
        setCount(response.data.count)
    })
}
