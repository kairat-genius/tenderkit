import axios from 'axios';
import { USER_LIST_TRACKING, accessToken } from "../../../Fetch/settings";

export const getListTracking = ({ setData, setCount, currentPage, history }) => {
    const isDeleted = history; 
    
    axios.get(`${USER_LIST_TRACKING}?is_deleted=${isDeleted}&page=${currentPage}`, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setData(response.data.results);
        setCount(response.data.count);
    })
}
