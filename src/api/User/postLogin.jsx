import axios from 'axios';
import { USER_LOGIN } from '../../Fetch/settings.js';
import Cookies from 'js-cookie';

export const postLogin = ({ email, password, onClose, showToast }) => {
    axios.post(USER_LOGIN, {
        email: email,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        const { refresh, access } = response.data;

        const refreshExpiry = 7;
        const accessExpiry = 30 / 1440; 

        Cookies.set('refresh', refresh, { expires: refreshExpiry });
        Cookies.set('access', access, { expires: accessExpiry });

        showToast('Вы успешно авторизовались!', 'success');

        setTimeout(() => {
            onClose();
            window.location.href = '/cabinet/profile';
        }, 1000);

    })
    .catch(error => {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.detail;
            if (errorMessage === "No active account found with the given credentials") {
                showToast("Аккаунт с указанными данными не найден.", 'error');
            } else {
                showToast(errorMessage, 'error');  
            }
        } else if (error.request) {
            showToast('Произошла ошибка. Пожалуйста, попробуйте еще раз.', 'error');
        } else {
            showToast('Произошла неизвестная ошибка.', 'error');
        }
    });
}

