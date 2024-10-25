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
      toast.success('Лот добавлен');
    }
  } catch (error) {
    toast.error('Ошибка при обновлении отслеживаний');
    console.error('Error:', error);
  }
};
