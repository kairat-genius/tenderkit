import axios from 'axios';
import { USER_DATA_UPDATE, accessToken } from "../../Fetch/settings";

export const putUserDataUpdate = ({ phone, fio, companyName, showToast }) => {
    axios.put(USER_DATA_UPDATE, {
        phone: phone,
        fio: fio,
        companyName: companyName
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    })
    .then(() => {
      showToast('Успешно изменен', 'success');
    })
    .catch(() => {
      showToast('Произошла ошибка при изменении данных', 'error');
    });
};
