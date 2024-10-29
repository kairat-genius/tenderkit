import axios from 'axios';
import { USER_RESET_PASSWORD_CONFIRM } from "../../../Fetch/settings";
import { toast } from 'react-toastify';
import { postLogin } from "../../../api/User/postLogin";

export const postResetPasswordConfirm = async ({ token, new_password, uuid, email, handleCloseModal }) => {
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
      toast.success("Пароль успешно сброшен!");
      await postLogin({ email, password: new_password, onClose: handleCloseModal });
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Произошла ошибка при отправке запроса.");
    }
  }
};
