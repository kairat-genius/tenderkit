import axios from 'axios';
import { CREATE_DELETE_TRACKING, accessToken } from "../../../Fetch/settings";
import { toast } from 'react-toastify';

export const postCreateDeleteTracking = async ({ lotSlug }) => {
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
      toast.success(message);
    }

    if (response.status === 201) {
      const message = response.data.message || 'Успешно добавлен'; 
      toast.success(message);
    }
  } catch (error) {
    toast.error('Ошибка при обновлении отслеживаний');
    console.error('Error:', error);
  }
};
