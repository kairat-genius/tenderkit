import React from "react";
// svg
import { ReactComponent as Speedometer } from "../../../assets/svg/analytics/speedometer.svg";
import { ReactComponent as PresentationBoard } from "../../../assets/svg/analytics/presentation-board.svg";
import { ReactComponent as TimeClockCheckmark } from "../../../assets/svg/analytics/time-clock-checkmark.svg";
import { ReactComponent as AudioController } from "../../../assets/svg/analytics/audio-controller.svg";


const Advantages = () => {
  return (
    <section className="content__block">
    <div className="container container--md">
      <h2 className="content__title"> Преимущества нашей аналитики </h2>
      <ul className="grid grid--benefits">
        <li className="grid__layout">
          <div className="tile tile--benefits">
            <div className="tile__layout tile__layout--icon">
              <span className="tile__icon icon">
                <Speedometer className="icon__svg"/>
              </span>
            </div>
            <div className="tile__layout">
              <h3 className="tile__title"> Мгновенный доступ к данным </h3>
              <p className="tile__description">
                Просматривайте актуальные визуализации по всем тендерам,
                договорам и планам закупок
              </p>
            </div>
          </div>
        </li>
        <li className="grid__layout">
          <div className="tile tile--benefits">
            <div className="tile__layout tile__layout--icon">
              <span className="tile__icon icon">
                <PresentationBoard className="icon__svg"/>
              </span>
            </div>
            <div className="tile__layout">
              <h3 className="tile__title"> Продвинутые визуализации </h3>
              <p className="tile__description">
                Исследуйте современные и яркие графические представления
                данных, делающие аналитику наглядной и простой
              </p>
            </div>
          </div>
        </li>
        <li className="grid__layout">
          <div className="tile tile--benefits">
            <div className="tile__layout tile__layout--icon">
              <span className="tile__icon icon">
                <TimeClockCheckmark className="icon__svg"/>
              </span>
            </div>
            <div className="tile__layout">
              <h3 className="tile__title"> Максимальная экономия времени </h3>
              <p className="tile__description">
                Минуйте долгие процессы поиска, сбора и анализа данных.
                Собирайте полную информацию о тендерах, планах и договорах в
                кратчайшие сроки
              </p>
            </div>
          </div>
        </li>
        <li className="grid__layout">
          <div className="tile tile--benefits">
            <div className="tile__layout tile__layout--icon">
              <span className="tile__icon icon">
                <AudioController className="icon__svg"/>
              </span>
            </div>
            <div className="tile__layout">
              <h3 className="tile__title"> Автономность и контроль </h3>
              <p className="tile__description">
                Получите полную свободу действий, работая с данными в
                удобное время без задержек
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};

export default Advantages;
