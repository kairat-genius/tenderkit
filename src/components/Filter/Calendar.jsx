import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import OutsideClickHandler from "react-outside-click-handler";
import { ru } from "date-fns/locale";
import "./Calendar.css";
import { format } from "date-fns";
// svg
import { ReactComponent as IconCalendar } from "../../assets/svg/icon/calendar.svg";

const Calendar = ({ label, value, onChange }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState(value ? format(new Date(value), "dd.MM.yyyy") : ""); // Отображаемая дата

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev); // Переключаем состояние календаря
  };

  const handleDaySelect = (day) => {
    if (day) {
      const formattedDateForDisplay = format(day, "dd.MM.yyyy"); // Формат для отображения
      const formattedDateForRequest = format(day, "yyyy-MM-dd"); // Формат для отправки
      setDisplayValue(formattedDateForDisplay); // Устанавливаем дату для отображения
      onChange(formattedDateForRequest); // Отправляем дату в нужном формате
      setIsCalendarOpen(false); // Закрываем календарь после выбора даты
    } else {
      setDisplayValue(""); // Очищаем дату для отображения
      onChange(null); // Очищаем значение для отправки
    }
  };

  const handleClear = () => {
    setDisplayValue("");
    onChange(null);
    setIsCalendarOpen(false); 
  };

  return (
    <div
      name="publicationDateFrom"
      hours="00:01:00"
      className="field-group__layout parent_position"
    >
      <form noValidate autoComplete="off" className="classNumber983 inputfield inputfield--suffix ng-untouched ng-pristine ng-valid">
        <input
          className="calendar-no-class inputfield__input input classNumber983"
          placeholder={label}
          value={displayValue}
          readOnly // Делаем поле только для чтения
          onClick={toggleCalendar} // Открываем календарь при клике
        />
        <label className="inputfield__label className983">{label}</label>
        <div className="inputfield__suffix className983" onClick={toggleCalendar}>
          <span className="inputfield__icon icon className983">
            <IconCalendar className="icon__svg className983" />
          </span>
        </div>
        {isCalendarOpen && (
          <OutsideClickHandler onOutsideClick={() => setIsCalendarOpen(false)}>
            <div className="calendar-filter">
              <DayPicker
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={handleDaySelect} // Обработчик выбора дня
                locale={ru}
                className="DayPicker"
              />
              <div className="modal__header classNumber658">
                <div className="modal__title classNumber658"></div>
                <div className="modal__close classNumber658" onClick={handleClear}></div>
              </div>
            </div>
          </OutsideClickHandler>
        )}
      </form>
    </div>
  );
};

export default Calendar;
