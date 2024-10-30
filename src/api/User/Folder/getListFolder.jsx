import axios from 'axios'
import {LIST_FOLDER, accessToken} from "../../../Fetch/settings"

export const getListFolder = ({setFolder}) => {
    axios.get(LIST_FOLDER, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setFolder(response.data)
    })
}
