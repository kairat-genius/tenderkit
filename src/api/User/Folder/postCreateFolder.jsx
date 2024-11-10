import axios from 'axios';
import { CREATE_FOLDER, accessToken } from "../../../Fetch/settings";

export const postCreateFolder = async ({ title, closeModal, refreshFolders, showToast }) => {
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
      showToast('Папка создана', 'success');
      refreshFolders()
      closeModal()
    }
  } catch (error) {
    showToast('Ошибка при созданий папки', 'error');
  }
};
