import React from "react";
// svg

const Possibilities = () => {
  return (
    <section className="content__block content__block--theme-secondary">
    <div className="container container--md">
      <div className="our-features">
        <div className="our-features__layout">
          <div className="our-features__content">
            <h2 className="our-features__title">
              Аналитика по&nbsp;поставщикам
            </h2>
            <p className="our-features__description">
              Для поставщиков&nbsp;— услуга может оказать помощь
              в&nbsp;глубоком изучении конкурентов: насколько падают
              в&nbsp;цене, в&nbsp;каких тендерах участвуют, количество
              участий и&nbsp;побед. Подобный анализ позволяет выстраивать
              ценовую стратегию исходя из&nbsp;результатов победителей
              и&nbsp;выигрывать в&nbsp;следующих тендерах.
            </p>
            <p className="our-features__description">
              Информация также полезна для компаний, которые
              не&nbsp;участвуют в&nbsp;тендерах, но&nbsp;могут предложить
              свои товары/услуги победителям.
            </p>
          </div>
          <div className="our-features__frame our-features__frame--supplier">
            <img src="assets/analytics/supplier-information.svg" className="our-features__image our-features__image--supplier-information" alt="Информация по поставщику" title="Информация по поставщику - image №17"/>
            <img src="assets/analytics/average-percentage-decrease.svg" className="our-features__image our-features__image--average-percentage-decrease" alt="Средний процент снижения от цены за единицу ТРУ" title="Средний процент снижения от цены за единицу ТРУ - image №18" />
          </div>
        </div>
        <div className="our-features__layout our-features__layout--reverse">
          <div className="our-features__content">
            <h2 className="our-features__title">
              Аналитика по&nbsp;заказчикам
            </h2>
            <p className="our-features__description">
              Проанализируйте заказчика, просмотрите его тендерную
              активность и&nbsp;динамику закупок. Аналитика по&nbsp;планам
              заказчика позволит увидеть запланированные им&nbsp;тендера
              и&nbsp;дату их&nbsp;объявлений.
            </p>
            <p className="our-features__description">
              Проверьте заказчика на&nbsp;надежность: изучите количество
              разыгрываемых тендеров, расторгнутых договоров
              и&nbsp;контингент выигрышей с&nbsp;процентами снижения.
            </p>
          </div>
          <div className="our-features__frame our-features__frame--customer">
            <img
              src="assets/analytics/customer-analytics.svg"
              className="our-features__image our-features__image--customer-analytics"
              alt="Аналитика заказчика в цифрах"
              title="Аналитика заказчика в цифрах - image №19"
            />
            <img
              src="assets/analytics/purchasing-volume.svg"
              className="our-features__image our-features__image--purchasing-volume"
              alt="Объём планируемых закупок"
              title="Объём планируемых закупок - image №20"
            />
          </div>
        </div>
        <div className="our-features__layout">
          <div className="our-features__content">
            <h2 className="our-features__title">
              Аналитика отрасли или региона
            </h2>
            <p className="our-features__description">
              Аналитика рынка поможет определить главных заказчиков
              и&nbsp;конкурентов, определить сезонность в&nbsp;вашей сфере,
              динамику объявления тендеров.
            </p>
            <p className="our-features__description">
              С&nbsp;помощью аналитики по&nbsp;планам тендеров в&nbsp;вашей
              отрасли можно спланировать работу на&nbsp;будущий период
              и&nbsp;быть готовым к&nbsp;новым победам.
            </p>
          </div>
          <div className="our-features__frame our-features__frame--industry">
            <img src="assets/analytics/regional-statistics.svg" className="our-features__image our-features__image--regional-statistics" alt="Статистика регионов" title="Статистика регионов - image №21" />
            <img src="assets/analytics/seasonality.svg" className="our-features__image our-features__image--seasonality" alt="Аналитика сезонности в вашей сфере" title="Аналитика сезонности в вашей сфере - image №22"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Possibilities;
