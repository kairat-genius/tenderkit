import axios from 'axios';
import { USER_RESET_PASSWORD } from "../../../Fetch/settings";
import { toast } from 'react-toastify';

export const postResetPassword = async ({ email, onClose }) => {
  try {
    const response = await axios.post(USER_RESET_PASSWORD, {
      email: email,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      toast.success("Ссылка для сброса пароля успешно отправлена на почту!");
      onClose();
    } else {
      toast.error("Произошла ошибка при отправке запроса.");
    }
  } catch (error) {
    console.error("Ошибка при восстановлении пароля:", error);
    toast.error("Ошибка при восстановлении пароля. Проверьте правильность введенного email.");
  }
};
