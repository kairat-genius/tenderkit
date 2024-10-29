
import axios from 'axios';
import Cookies from 'js-cookie';
import { USER_REFRESH_TOKEN, refreshToken } from '../Fetch/settings.js';
import { toast } from 'react-toastify';

export const useTokenRefresh = async () => {
  try {
    if (refreshToken) {
      const response = await axios.post(USER_REFRESH_TOKEN, { refresh: refreshToken });
      if (response.status === 200) {
        const { access } = response.data;
        Cookies.set('access', access, { expires: 30 / 1440 }); // Обновляем access токен
        return access;
      } else {
        console.error('Ошибка при обновлении токена');
      }
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Уведомляем пользователя и удаляем токены при ошибке 401
      toast.error('Ваша сессия истекла. Пожалуйста, авторизуйтесь снова.');
      Cookies.remove('refresh');
      Cookies.remove('access');
    } else {
      console.error('Ошибка при обновлении токена:', error);
    }
  }
  return null;
};
