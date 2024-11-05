import axios from 'axios';

export const cacheRequest = async (url, setState, cacheKey, params = {}) => {
    const cachedData = sessionStorage.getItem(cacheKey);
    const cacheExpiry = sessionStorage.getItem(`${cacheKey}_expiry`);
    const isCacheValid = cacheExpiry && Date.now() < Number(cacheExpiry);

    if (cachedData && isCacheValid) {
        const parsedData = JSON.parse(cachedData);
        setState(parsedData);
        return;
    }

    try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        sessionStorage.setItem(cacheKey, JSON.stringify(responseData));
        sessionStorage.setItem(`${cacheKey}_expiry`, Date.now() + 5 * 60 * 1000); 

        setState(responseData);
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
};