import axios from 'axios'
import {TARIFFS_GET, accessToken} from "../../Fetch/settings"

export const getTariff = ({setData, data }) => {
    const headers = data && Object.keys(data).length > 0 && accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(TARIFFS_GET, { headers })
    .then((response) => {
        setData(response.data)
    })
}
