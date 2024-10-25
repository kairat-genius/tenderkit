import axios from 'axios';
import { CREATE_DELETE_FAVORITE, accessToken } from "../../../Fetch/settings";
import { toast } from 'react-toastify';

export const postCreateDeleteFavorite = async ({ lotSlug }) => {
  try {
    const response = await axios.post(CREATE_DELETE_FAVORITE, {
      lot_slug: lotSlug,
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      toast.success('Лот удален из избранного');
    } else if (response.status === 201) {
      toast.success('Лот добавлен в избранное');
    }
  } catch (error) {
    toast.error('Ошибка при обновлении избранного');
    console.error('Error:', error);
  }
};
