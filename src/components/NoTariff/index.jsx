import React from "react";
import { Link } from "react-router-dom";

const NoTariff = () => {
  return (
    <div className="body__layout body__layout--lg ng-star-inserted">
      <div className="message message--warning">
        <p className="message__layout">
          К сожалению, доступ к лотам ограничен по причине истечения срока
          подписки. Продлите подписку, чтобы получать новые уведомления!
        </p>
        <p className="message__layout message__layout--lg">
          Рассылка со скрытым контентом будет приходить Вам в течении 30 дней,
          после Ваш аккаунт будет деактивирован.
        </p>
        <div className="message__layout">
          <Link className="message__button button button--secondary button--md" to="/tariffs">
            Перейти к тарифам
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoTariff;
