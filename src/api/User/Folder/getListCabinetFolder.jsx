import axios from 'axios'
import {LIST_CABINET_FOLDER, accessToken} from "../../../Fetch/settings"

export const getListCabinetFolder = ({setData, setCount, currentPage=1 }) => {
    axios.get(`${LIST_CABINET_FOLDER}?page=${currentPage}`, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setData(response.data.results)
        setCount(response.data.count)
    })
}
