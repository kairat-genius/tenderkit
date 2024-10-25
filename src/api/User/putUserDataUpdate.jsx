import axios from 'axios';
import { USER_DATA_UPDATE, accessToken } from "../../Fetch/settings";
import { toast } from 'react-toastify';

export const putUserDataUpdate = ({ phone, fio, companyName }) => {
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
    .then((response) => {
        toast.success('Успешно изменен');
    })
    .catch((error) => {
        toast.error('Произошла ошибка при изменении данных');
        console.error(error);
    });
};
