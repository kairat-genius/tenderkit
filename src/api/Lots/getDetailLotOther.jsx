import axios from 'axios'
import {LOT_DETAIL_OTHER, accessToken} from "../../Fetch/settings"

export const getDetailLotOther = (setOther, slug) => {
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};
    axios.get(LOT_DETAIL_OTHER(slug),{ headers })
    .then((response) => {
        setOther(response.data);
    })
}

