import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import OutsideClickHandler from "react-outside-click-handler";
import { ru } from "date-fns/locale";
import "./Calendar.css";

// svg
import { ReactComponent as IconCalendar } from "../../assets/svg/icon/calendar.svg";

const Calendar = ({ label }) => {
  const [selected, setSelected] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen); 
  };

  const handleDaySelect = (day) => {
    setSelected(day); 
    setIsCalendarOpen(false); 
  };

  const handleClear = () => {
    setSelected(null);
    setIsCalendarOpen(false); 
  };


  return (
    <div
      name="publicationDateFrom"
      hours="00:01:00"
      className="field-group__layout parent_position"
    >
      <form noValidate
        autoComplete="off"
        className="classNumber983 inputfield inputfield--suffix ng-untouched ng-pristine ng-valid"
        onClick={toggleCalendar}
      >
        <input
          className="calendar-no-class inputfield__input input classNumber983"
          placeholder={label}
          onClick={toggleCalendar}
          value={selected ? selected.toLocaleDateString('ru-RU') : ""}
        />
        <label className="inputfield__label classNumber983">{label}</label>
        <div
          className="inputfield__suffix className983"
          onClick={toggleCalendar}
        >
          <span className="inputfield__icon icon className983">
            <IconCalendar className="icon__svg className983" />
          </span>
        </div>
        {isCalendarOpen && (
          <OutsideClickHandler onOutsideClick={() => setIsCalendarOpen(false)}>
            <div className="calendar-filter">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={handleDaySelect}
                locale={ru}
                className="DayPicker"
              />
              <div class="modal__header classNumber658">
                <div class="modal__title classNumber658"></div>
                <div class="modal__close classNumber658" onClick={handleClear}></div>
              </div>
            </div>
          </OutsideClickHandler>
        )}
      </form>
    </div>
  );
};

export default Calendar;
