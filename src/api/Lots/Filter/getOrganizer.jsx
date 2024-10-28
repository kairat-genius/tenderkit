import axios from 'axios'
import {ORGANIZER} from "../../../Fetch/settings"

export const getOrganizer = (setOrganizer, searchTerm) => {

    axios.get(`${ORGANIZER}?search=${searchTerm}`)
    .then((response) => {
            setOrganizer(response.data);
    })
}