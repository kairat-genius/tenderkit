import axios from 'axios';
import { USER_RESET_PASSWORD } from "../../../Fetch/settings";

export const postResetPassword = async ({ email, onClose, showToast }) => {
  try {
    const response = await axios.post(USER_RESET_PASSWORD, {
      email: email,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      showToast("Ссылка для сброса пароля успешно отправлена на почту!", 'success');
      onClose();
    } else {
      showToast("Произошла ошибка при отправке запроса.", 'error');
    }
  } catch (error) {
    showToast("Ошибка при восстановлении пароля. Проверьте правильность введенного email.", 'error');
  }
};
