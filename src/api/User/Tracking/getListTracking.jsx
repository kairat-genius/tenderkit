import axios from 'axios';
import { USER_LIST_TRACKING, accessToken } from "../../../Fetch/settings";

export const getListTracking = ({ setData, setCount, currentPage, history }) => {
    // Устанавливаем значение is_deleted в зависимости от таба
    const isDeleted = history; // history будет true для "История" и false для "Активные"
    
    axios.get(`${USER_LIST_TRACKING}?is_deleted=${isDeleted}&page=${currentPage}`, {
        headers: {
            'Authorization': `JWT ${accessToken}`
        }
    })
    .then((response) => {
        setData(response.data.results);
        setCount(response.data.count);
    })
    .catch((error) => {
        console.error("Ошибка при получении списка отслеживания:", error);
    });
}
