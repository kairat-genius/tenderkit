import axios from 'axios';
import { CREATE_DELETE_FAVORITE, accessToken } from "../../../Fetch/settings";

export const postCreateDeleteFavorite = async ({ lotSlug, showToast }) => {
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
      showToast('Лот удален из избранного', 'success');
    } else if (response.status === 201) {
      showToast('Лот добавлен в избранное', 'success');
    }
  } catch (error) {
    showToast('Ошибка при обновлении избранного', 'error');
  }
};
