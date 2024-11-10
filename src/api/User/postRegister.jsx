import axios from 'axios';
import { USER_REGISTER } from '../../Fetch/settings.js';
import Cookies from 'js-cookie';

export const postRegister = async ({ email, password, fio, companyName, phone, onClose, showToast }) => {
    const formattedPhone = `+${phone}`;

    try {
        const response = await axios.post(USER_REGISTER, {
            email,
            password,
            fio,
            companyName,
            phone: formattedPhone
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const { refresh, access } = response.data;

        const refreshExpiry = 7; // days
        const accessExpiry = 30 / 1440; // minutes

        Cookies.set('refresh', refresh, { expires: refreshExpiry });
        Cookies.set('access', access, { expires: accessExpiry });
        console.log('Пользователь успешно создан!');
        showToast('Пользователь успешно создан!', 'success');
  
        setTimeout(() => {
            onClose();
            window.location.href = '/cabinet/profile';
        }, 1000);
    } catch (error) {
        const errors = {};

        if (error.response && error.response.data) {
            const errorData = error.response.data;

            if (errorData.email) {
                errors.email = errorData.email.join(' '); 
            }
            if (errorData.password) {
                errors.password = errorData.password.join(' '); 
            }
            if (errorData.phone) {
                errors.phone = errorData.phone.join(' '); 
            }

            if (errorData.detail) {
                showToast(errorData.detail, 'error');
            }
        } else if (error.request) {
            showToast('Произошла ошибка. Пожалуйста, попробуйте еще раз.', 'error');
        } else {
            showToast('Произошла неизвестная ошибка.', 'error');
        }

        return errors; 
    }
}
