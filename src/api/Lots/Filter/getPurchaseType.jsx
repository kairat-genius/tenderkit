import axios from 'axios'
import {PURCHASETYPE} from "../../../Fetch/settings"

export const getPurchaseType = (setPurchaseType) => {

    axios.get(PURCHASETYPE)
    .then((response) => {
            setPurchaseType(response.data);
    })
}