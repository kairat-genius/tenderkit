import React, { useState } from "react";
import { postTariff } from "../../api/Tariff/postTariff";
import { useData } from "../../hooks/DataContext";

const OrderTariff = ({ closeModal, tariffId, tariffName }) => {
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { data } = useData();
    
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleSubmit = () => {
        if (!phone || !tariffId || !data) return;

        setIsSubmitting(true);
        try {
            postTariff({ phone, tariff_id: tariffId });
            closeModal();
        } catch (error) {
            console.error("Ошибка отправки запроса:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div  className="layout ng-star-inserted" style={{ position: "absolute", top: "0", left: "0" }}>
            <div className="modal modal--active">
                <div className="modal__container">
                    <div className="modal__header">
                        <div className="modal__title"> Заказать </div>
                        <div className="modal__close" onClick={closeModal}></div>
                    </div>
                    <div className="modal__body ng-untouched ng-pristine ng-invalid">
                        <div className="modal__section">
                            <div className="modal__subtitle"> Тариф «{tariffName}» </div>
                        </div>
                        <div className="modal__section">
                            <div className="modal__layout">
                                <div className="inputfield">
                                    <input
                                        name="phone"
                                        type="text"
                                        placeholder="+7(000)-000-00-00"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        formcontrolname="phone"
                                        className="inputfield__input input ng-untouched ng-pristine ng-invalid"
                                    />
                                    <label className="inputfield__label"> Телефон </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal__section">
                            {!data ? ( 
                                <span style={{ color: "red" }}>Пожалуйста, авторизуйтесь перед отправкой запроса.</span>
                            ) : (
                                <>«{data.fio}» оставьте ваш номер телефона и мы свяжемся с вами!</>
                            )}
                        </div>
                        <div className="modal__section modal__section--footer">
                            <div className="modal__layout modal__layout--sm">
                                <button className="button button--primary button--expand" disabled={!phone || isSubmitting} onClick={handleSubmit}>
                                    {isSubmitting ? "Отправка..." : "Отправить"}
                                </button>
                            </div>
                            <div className="modal__layout modal__layout--sm">
                                <button className="button button--secondary-transparent button--expand" onClick={closeModal}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTariff;
