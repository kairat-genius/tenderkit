import axios from 'axios'
import {SUBJECTTYPE} from "../../../Fetch/settings"

export const getSubjectType = (setSubjectType) => {

    axios.get(SUBJECTTYPE)
    .then((response) => {
            setSubjectType(response.data);
    })
}