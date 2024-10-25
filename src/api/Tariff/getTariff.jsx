import axios from 'axios'
import {TARIFFS_GET, accessToken} from "../../Fetch/settings"

export const getTariff = ({setData }) => {
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(TARIFFS_GET, { headers })
    .then((response) => {
        setData(response.data)
    })
}
