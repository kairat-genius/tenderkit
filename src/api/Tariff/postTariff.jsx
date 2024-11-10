import axios from 'axios';
import { TARIFFS_POST, accessToken } from "../../Fetch/settings";

export const postTariff = ({ phone, tariff_id, showToast}) => {
    axios.post(TARIFFS_POST, {
        phone: phone,
        tariff_id: tariff_id
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    }) 
    .then(() => {
      showToast("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.", 'success');
      })
      .catch((error) => {
        showToast("Произошла ошибка при отправке. Пожалуйста, попробуйте снова.", 'error');
      });
    };