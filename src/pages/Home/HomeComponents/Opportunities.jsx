import React from "react";
import { Link } from "react-router-dom";

// svg
import { ReactComponent as Arrowright } from "../../../assets/svg/mobile/arrowright.svg";
import { ReactComponent as SettingApi } from "../../../assets/svg/api/setting-api.svg";
import { ReactComponent as DashedApi } from "../../../assets/svg/api/dashed-api.svg";

const Opportunities = () => {
  return (
          <section className="content__layout">
            <div className="content__layout">
              <Link className="promo" to="/education">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcset="https://zakupki-banners.object.pscloud.io/mainBannerMobile.png?AWSAccessKeyId=HXXI0EQO15M03T8GAD5G&amp;Expires=1781051361&amp;Signature=7Kd6RA96NNfTnyO37kBoWyCrBAU%3D"
                  />
                  <img
                    width="2200"
                    height="300"
                    alt=""
                    loading="lazy"
                    className="promo__image"
                    src="https://zakupki-banners.object.pscloud.io/mainBanner.png?AWSAccessKeyId=HXXI0EQO15M03T8GAD5G&amp;Expires=1781051361&amp;Signature=V8v3ulSp5pWagGZLRng%2FRy3NJ94%3D"
                  />
                </picture>
              </Link>
            </div>
            <h2 className="content__title content__title--lg"> Возможности </h2>
            <div className="content__layout content__layout--md">
              <div className="grid grid--possibility">
                <section className="possibility possibility--newsletter possibility--row">
                    
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Ежедневная рассылка на&nbsp;Email и&nbsp;в&nbsp;Telegram
                    </h3>
                    <p className="possibility__desc">
                      Подписывайтесь на&nbsp;ежедневную Email рассылку или
                      получайте моментальные уведомления в&nbsp;Telegram, чтобы
                      максимально
                      <span className="bold">
                        сэкономить время на&nbsp;поиске закупок
                      </span>
                      .
                    </p>
                  </div>
                  <div class="possibility__frame">
                    <picture>
                      <source srcset="/assets/possibility/new-message.png 1x, /src/assets/possibility/new-message@2x.png 2x" />
                      <img
                        src="/assets/possibility/new-message.png"
                        class="possibility__image possibility__image--new-message"
                      />
                    </picture>
                    <picture>
                      <source
                        media="(max-width: 1023px)"
                        srcset="/assets/possibility/phone.png 1x, /src/assets/possibility/phone@2x.png 2x"
                      />
                      <source srcset="/assets/possibility/email.png 1x, assets/img/possibility/newsletter/email@2x.png 2x" />
                      <img
                        src="/assets/possibility/email.png"
                        class="possibility__image possibility__image--email"
                      />
                    </picture>
                  </div>
                </section>
                <section className="possibility possibility--documentation">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Поиск внутри документации
                    </h3>
                    <p className="possibility__desc">
                      Уникальная функция, которая поможет
                      <span className="bold">
                        не&nbsp;упустить ни&nbsp;один тендер
                      </span>
                      . Находим закупки не&nbsp;только по&nbsp;названию лота,
                      но&nbsp;также внутри технической документации.
                    </p>
                    <div className="possibility__actions">
                      <Link className="possibility__button button" to="/result">
                        Попробовать
                        <span className="button__icon button__icon--after icon">
                          <Arrowright className="icon__svg" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="possibility__frame">
                    <img
                      src="/assets/possibility/search.png"
                      loading="lazy"
                      className="possibility__image possibility__image--search"
                    />
                    <img
                      src="/assets/possibility/lot.png"
                      loading="lazy"
                      className="possibility__image possibility__image--lot"
                    />
                  </div>
                </section>
                <section className="possibility possibility--search">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Поиск по&nbsp;планам, закупкам и&nbsp;договорам
                    </h3>
                    <p className="possibility__desc">
                      Мониторим не&nbsp;только актуальные закупки, но&nbsp;также
                      планы и&nbsp;договоры закупок. На&nbsp;основе планов
                      закупок вы&nbsp;сможете
                      <span className="bold">наперёд спланировать участие</span>
                      , с помощью договоров провести
                      <span className="bold">
                        анализ информации по&nbsp;ценам, заказчикам
                        и&nbsp;конкурентам
                      </span>
                      .
                    </p>
                    <div className="possibility__actions">
                      <div className="possibility__button-group">
                        <Link className="possibility__button button" to="/plans"> Планы</Link>
                        <Link className="possibility__button button" to="/result"> Закупки</Link>
                        <Link className="possibility__button button" to="/contracts" > Договоры</Link>
                      </div>
                    </div>
                  </div>
                  <div className="possibility__frame">
                    <img
                      src="/assets/possibility/search1.png"
                      loading="lazy"
                      className="possibility__image"
                    />
                  </div>
                </section>
                <section className="possibility possibility--tracking">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Отслеживание статусов
                    </h3>
                    <p className="possibility__desc">
                      Уведомляем об
                      <span className="bold">
                        изменении статусов лотов от&nbsp;предварительного
                        обсуждения до&nbsp;подведения итогов
                      </span>
                      . Отслеживание статусов поможет подавать необходимые
                      документы в срок без риска пропуска важных дедлайнов.
                    </p>
                  </div>
                  <div className="possibility__frame">
                    <img
                      src="/assets/possibility/tracking4.png"
                      loading="lazy"
                      className="possibility__image possibility__image--4"
                    />
                    <img
                      src="/assets/possibility/tracking3.png"
                      loading="lazy"
                      className="possibility__image possibility__image--3"
                    />
                    <img
                      src="/assets/possibility/tracking2.png"
                      loading="lazy"
                      className="possibility__image possibility__image--2"
                    />
                    <img
                      src="/assets/possibility/tracking1.png"
                      loading="lazy"
                      className="possibility__image possibility__image--1"
                    />
                  </div>
                </section>
                <section className="possibility possibility--counterparty">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Проверка контрагентов по&nbsp;90+&nbsp;показателям
                    </h3>
                    <p className="possibility__desc">
                      Используйте наш сервис
                      <span className="bold">
                        для проверки всех юридических лиц
                        на&nbsp;благонадежность
                      </span>
                      . Диагностика позволяет избежать проблем
                      с&nbsp;мошенничеством и&nbsp;налоговыми рисками при
                      взаимодействии с&nbsp;контрагентами.
                    </p>
                    <div className="possibility__actions">
                      <Link className="possibility__button button" to="/kompra">
                        Попробовать
                        <span className="button__icon button__icon--after icon">
                          <Arrowright className="icon__svg" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="possibility__frame">
                    <img
                      src="/assets/svg/document/pdf.svg"
                      loading="lazy"
                      className="possibility__image possibility__image--pdf"
                    />
                    <picture className="possibility__picture">
                      <img
                        src="/assets/possibility/summary.png"
                        loading="lazy"
                        className="possibility__image possibility__image--summary"
                      />
                    </picture>
                  </div>
                </section>
                <section className="possibility possibility--monitoring possibility--row">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Мониторинг конкурентов
                    </h3>
                    <p className="possibility__desc">
                      Добавьте компанию в&nbsp;список конкурентов
                      и&nbsp;получайте информацию о&nbsp;закупках,
                      в&nbsp;которых она принимает участие для построения своей
                      ценовой политики и&nbsp;стратегии победы.
                    </p>
                    <div className="possibility__actions">
                      <Link
                        className="possibility__button button"
                        to="/kompra-monitoring"
                      >
                        Попробовать
                        <span className="button__icon button__icon--after icon">
                          <Arrowright className="icon__svg" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="possibility__frame">
                    <img
                      src="/assets/possibility/monitoring1.png"
                      loading="lazy"
                      className="possibility__image possibility__image--1"
                    />
                    <img
                      src="/assets/possibility/monitoring2.png"
                      loading="lazy"
                      className="possibility__image possibility__image--2"
                    />
                    <img
                      src="/assets/possibility/monitoring3.png"
                      loading="lazy"
                      className="possibility__image possibility__image--3"
                    />
                  </div>
                </section>
                <section className="possibility possibility--employees">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Поиск квалифицированных сотрудников
                    </h3>
                    <p className="possibility__desc">
                      Наш реестр «Сотрудники с&nbsp;сертификатами» поможет вам
                      <span className="bold">
                        найти требуемых квалифицированных специалистов для
                        участия в&nbsp;закупках
                      </span>
                      .
                    </p>
                    <div className="possibility__actions">
                      <Link
                        to="/qualified-employees"
                        className="possibility__button button"
                      >
                        Попробовать
                        <span className="button__icon button__icon--after icon">
                          <Arrowright className="icon__svg" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="possibility__frame">
                    <img
                      src="/assets/possibility/employees.png"
                      loading="lazy"
                      className="possibility__image"
                    />
                  </div>
                </section>
                <section className="possibility possibility--suppliers">
                  <div className="possibility__content">
                    <h3 className="possibility__title">
                      Доступ к&nbsp;поставщикам и&nbsp;производителям
                    </h3>
                    <p className="possibility__desc">
                      В&nbsp;реестре
                      <span className="bold">
                        вы&nbsp;сможете найти ТОП 50&nbsp;поставщиков
                        по&nbsp;каждому товару
                      </span>
                      . Выгружайте информацию в&nbsp;удобном для&nbsp;вас
                      формате и&nbsp;используйте для своего бизнеса.
                    </p>
                    <div className="possibility__actions">
                      <Link
                        className="possibility__button button"
                        to="/suppliers-manufacturers"
                      >
                        Попробовать
                        <span className="button__icon button__icon--after icon">
                          <Arrowright className="icon__svg" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="possibility__frame">
                    <picture className="possibility__picture">
                      <img
                        src="/assets/possibility/search3.png"
                        loading="lazy"
                        className="possibility__image possibility__image--search"
                      />
                    </picture>
                    <picture className="possibility__picture">
                      <img
                        src="/assets/possibility/search4.png"
                        loading="lazy"
                        className="possibility__image possibility__image--table"
                      />
                    </picture>
                  </div>
                </section>
              </div>
            </div>
            <div className="content__layout">
              <section className="api">
                <div className="api__content">
                  <h3 className="api__title">
                    API для любой информационной системы
                  </h3>
                  <p className="api__desc">
                    Интеграция API позволяет
                    <span className="bold">
                      автоматизировать процессы и&nbsp;получать информацию
                      о&nbsp;закупках в&nbsp;удобном формате
                    </span>
                    в&nbsp;вашей CRM системе.
                  </p>
                  <button
                    type="button"
                    className="api__button button button--primary"
                    id="main_api_zakazat"
                  >
                    Заказать услугу
                  </button>
                </div>
                <div className="api__frame">
                  <DashedApi className="api__dashed" />
                  <SettingApi className="api__setting" />
                  <img
                    src="/assets/svg/api/logo.svg"
                    loading="lazy"
                    className="api__image api__image--logo"
                  />
                  <img
                    src="/assets/svg/api/crm.svg"
                    loading="lazy"
                    className="api__image api__image--crm"
                  />
                </div>
              </section>
            </div>
          </section>   
  );
};

export default Opportunities;
