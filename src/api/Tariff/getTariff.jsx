import axios from 'axios'
import {TARIFFS_GET, accessToken} from "../../Fetch/settings"

export const getTariff = ({setData, data }) => {
    const headers = data && Object.keys(data).length > 0 && accessToken
    ? { 'Authorization': `JWT ${accessToken}` } : {};

    const cacheKey = 'tariffData'; // Ключ для кэша
    const cachedData = sessionStorage.getItem(cacheKey);
    const cacheExpiry = sessionStorage.getItem(`${cacheKey}_expiry`);
    const isCacheValid = cacheExpiry && Date.now() < Number(cacheExpiry);

    if (cachedData && isCacheValid) {
        // Если кэш действителен, используем его
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        return;
    }

    axios.get(TARIFFS_GET, { headers })
    .then((response) => {
        sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
        sessionStorage.setItem(`${cacheKey}_expiry`, Date.now() + 300000);
        setData(response.data)
    })
}
