import axios from 'axios';
import { CREATE_DELETE_TRACKING, accessToken } from "../../../Fetch/settings";

export const postCreateDeleteTracking = async ({ lotSlug, showToast }) => {
  try {
    const response = await axios.post(CREATE_DELETE_TRACKING, {
      lot_slug: lotSlug,
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      const message = response.data.message || 'Успешно обновлено'; 
      showToast(message, 'success');
    }

    if (response.status === 201) {
      const message = response.data.message || 'Успешно добавлен'; 
      showToast(message, 'success');
    }
  } catch (error) {
    showToast('Ошибка при обновлении отслеживаний', 'error');
  }
};
