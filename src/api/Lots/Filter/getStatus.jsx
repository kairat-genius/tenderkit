import axios from 'axios'
import {STATUS} from "../../../Fetch/settings"

export const getStatus = (setStatus) => {

    axios.get(STATUS)
    .then((response) => {
        setStatus(response.data);
    })
}