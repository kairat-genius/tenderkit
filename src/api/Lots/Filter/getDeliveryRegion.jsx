import axios from 'axios'
import {DELIVERY_REGION} from "../../../Fetch/settings"

export const getDeliveryRegion = (setRegion) => {

    axios.get(DELIVERY_REGION)
    .then((response) => {
            setRegion(response.data);
    })
}