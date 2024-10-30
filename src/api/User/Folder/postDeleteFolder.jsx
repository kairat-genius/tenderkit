import axios from 'axios';
import { DELETE_FOLDER, accessToken } from "../../../Fetch/settings";
import { toast } from 'react-toastify';

export const postDeleteFolder = async ({ folder_id, closeModal, onRemove }) => {
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
      toast.success('Папка удалена');
      onRemove(folder_id)
      closeModal()
    }
  } catch (error) {
    toast.error('Ошибка при удалений папки');
    console.error('Error:', error);
  }
};
