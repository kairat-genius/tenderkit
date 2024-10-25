import React, { useState, useEffect } from "react";

// Вспомогательная функция для форматирования оставшегося времени
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="countdown__time">
        {formatTime(timeLeft.days)}
        <span className="countdown__unit countdown__unit--day">дня</span>
      </div>
      <div>:</div>
      <div className="countdown__time">
        {formatTime(timeLeft.hours)}
        <span className="countdown__unit countdown__unit--hour">часа</span>
      </div>
      <div>:</div>
      <div className="countdown__time">
        {formatTime(timeLeft.minutes)}
        <span className="countdown__unit countdown__unit--minute">минут</span>
      </div>
      <div>:</div>
      <div className="countdown__time">
        {formatTime(timeLeft.seconds)}
        <span className="countdown__unit countdown__unit--second">секунд</span>
      </div>
    </div>
  );
};

export default Countdown;
