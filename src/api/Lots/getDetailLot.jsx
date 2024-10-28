import axios from 'axios'
import {LOT_DETAIL, accessToken} from "../../Fetch/settings"

export const getDetailLot = (setDetail, slug) => {
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(LOT_DETAIL(slug),{ headers })
    .then((response) => {
        setDetail(response.data);
    })
}

