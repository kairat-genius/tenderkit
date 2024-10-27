import axios from 'axios'
import {SOURCE} from "../../../Fetch/settings"

export const getSource = (setSource) => {

    axios.get(SOURCE)
    .then((response) => {
        setSource(response.data);
    })
}