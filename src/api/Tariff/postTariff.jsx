import axios from 'axios';
import { TARIFFS_POST, accessToken } from "../../Fetch/settings";
import { toast } from 'react-toastify';

export const postTariff = ({ phone, tariff_id}) => {
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
        toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
      })
      .catch((error) => {
        console.error("Ошибка отправки запроса:", error);
        toast.error("Произошла ошибка при отправке. Пожалуйста, попробуйте снова.");
      });
    };