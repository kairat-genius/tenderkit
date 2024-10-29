import axios from 'axios';
import { USER_LOGIN } from '../../Fetch/settings.js';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const postLogin = ({ email, password, onClose }) => {
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

        toast.success('Вы успешно авторизовались!'); 

        setTimeout(() => {
            onClose();
            window.location.href = '/cabinet/profile';
        }, 1000);

    })
    .catch(error => {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.detail;
            if (errorMessage) {
                toast.error(errorMessage);  
            }
        } else if (error.request) {
            toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
        } else {
            toast.error('Произошла неизвестная ошибка.');
        }
    });
}

