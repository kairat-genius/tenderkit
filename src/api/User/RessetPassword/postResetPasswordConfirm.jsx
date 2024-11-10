import axios from 'axios';
import { USER_RESET_PASSWORD_CONFIRM } from "../../../Fetch/settings";
import { postLogin } from "../../../api/User/postLogin";

export const postResetPasswordConfirm = async ({ token, new_password, uuid, email, handleCloseModal, showToast }) => {
  try {
    const response = await axios.post(USER_RESET_PASSWORD_CONFIRM, {
      token: token,
      new_password: new_password,
      uid: uuid,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      showToast("Пароль успешно сброшен!", 'success');
      await postLogin({ email, password: new_password, onClose: handleCloseModal, showToast });
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      showToast(error.response.data.message);
    } else {
      showToast("Произошла ошибка при отправке запроса.", 'error');
    }
  }
};
