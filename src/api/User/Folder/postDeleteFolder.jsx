import axios from 'axios';
import { DELETE_FOLDER, accessToken } from "../../../Fetch/settings";

export const postDeleteFolder = async ({ folder_id, closeModal, onRemove, showToast }) => {
  try {
    const response = await axios.post(DELETE_FOLDER, {
        folder_id,
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      showToast('Папка удалена', 'success');
      onRemove(folder_id)
      closeModal()
    }
  } catch (error) {
    showToast('Ошибка при удалений папки', 'error');
  }
};
