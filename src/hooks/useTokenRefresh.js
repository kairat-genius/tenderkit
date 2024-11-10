
import axios from 'axios';
import Cookies from 'js-cookie';
import { USER_REFRESH_TOKEN, refreshToken } from '../Fetch/settings.js';

export const useTokenRefresh = async () => {
  try {
    if (refreshToken) {
      const response = await axios.post(USER_REFRESH_TOKEN, { refresh: refreshToken });
      if (response.status === 200) {
        const { access } = response.data;
        Cookies.set('access', access, { expires: 30 / 1440 }); // Обновляем access токен
        return access;
      } 
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Уведомляем пользователя и удаляем токены при ошибке 401
      Cookies.remove('refresh');
      Cookies.remove('access');
    }
  }
  return null;
};
