import axios from 'axios';
import { USER_DATA, accessToken } from "../../Fetch/settings";
import { useTokenRefresh } from "../../hooks/useTokenRefresh";


export const getUserData = async (setData) => {
  try {
    const response = await axios.get(USER_DATA, {
      headers: {
        'Authorization': `JWT ${accessToken}`
      }
    });
    setData(response.data);
    
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Обновляем токен и пробуем снова
      const newAccessToken = await useTokenRefresh();
      if (newAccessToken) {
        // Повторяем запрос с новым токеном
        const retryResponse = await axios.get(USER_DATA, {
          headers: {
            'Authorization': `JWT ${newAccessToken}`
          }
        });
        setData(retryResponse.data);
      }
    }
  }
};
