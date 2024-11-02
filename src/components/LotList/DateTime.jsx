import React from "react";
import { formatDate, formatTime } from "../../hooks/LotUtils";

// svg
import { ReactComponent as Calendar } from "../../assets/svg/icon/calendar.svg";
import { ReactComponent as Clock } from "../../assets/svg/icon/clock.svg";

const DateTime = ({ lot }) => {
  const now = new Date(); // Текущая дата и время
  const endingDate = new Date(lot.endingDate);

  const isExpired = now > endingDate;
  const timeDiff = endingDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Переводим миллисекунды в дни

  return (
    <div className="sr-item__layout">
      <div className="sr-item__date-info">
      {lot.startingDate && (
        <>
        <div className="sr-item__date-info-section sr-item__date-info-section--sm ng-star-inserted">
          <span className="sr-item__date-info-icon icon">
            <Calendar className="icon__svg" />
          </span>
          {formatDate(lot.startingDate)}
        </div>
        <div className="sr-item__date-info-section sr-item__date-info-section--md ng-star-inserted">
          <span className="sr-item__date-info-icon icon">
            <Clock className="icon__svg" />
          </span>
          {formatTime(lot.startingDate)}
        </div>
        </>
       )}
        {lot.endingDate && (
        <>
        <div className="sr-item__date-info-section sr-item__date-info-section--md ng-star-inserted">
          —
        </div>
        <div className="sr-item__date-info-section sr-item__date-info-section--sm ng-star-inserted">
          <span className="sr-item__date-info-icon icon">
            <Calendar className="icon__svg" />
          </span>
          {formatDate(lot.endingDate)}
        </div>
        <div className="sr-item__date-info-section sr-item__date-info-section--md ng-star-inserted">
          <span className="sr-item__date-info-icon icon">
            <Clock className="icon__svg" />
          </span>
          {formatTime(lot.endingDate)}
        </div>
         </>
        )}

        {isExpired ? (
          <div className="sr-item__badge sr-item__badge--neutral ng-star-inserted">
            <div className="sr-item__badge sr-item__badge--neutral">
              Время истекло
            </div>
          </div>
        ) : daysLeft <= 1 ? (
          <div className="sr-item__badge sr-item__badge--warning">
            Осталось {daysLeft} {daysLeft === 1 ? "День" : "Дней"}
          </div>
        ) : daysLeft <= 20 ? (
          <div className="sr-item__badge sr-item__badge--warning">
            Осталось {daysLeft} Дней
          </div>
        ) : (
          <div className="sr-item__badge">Осталось {daysLeft} Дней</div>
        )}
      </div>
    </div>
  );
};

export default DateTime;
