import axios from 'axios';
import { CREATE_FOLDER, accessToken } from "../../../Fetch/settings";
import { toast } from 'react-toastify';

export const postCreateFolder = async ({ title, closeModal, refreshFolders }) => {
  try {
    const response = await axios.post(CREATE_FOLDER, {
        title: title,
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 201) {
      toast.success('Папка создана');
      refreshFolders()
      closeModal()
    }
  } catch (error) {
    toast.error('Ошибка при созданий папки');
    console.error('Error:', error);
  }
};
