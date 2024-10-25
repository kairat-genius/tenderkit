import React from "react";

// svg
import { ReactComponent as SettingsBoldAlt } from "../../../assets/svg/settings/settings-bold-alt.svg";
import { ReactComponent as Excel } from "../../../assets/svg/document/excel.svg";
import { ReactComponent as Manager } from "../../../assets/svg/document/manager.svg";
import { ReactComponent as Arrowright } from "../../../assets/svg/mobile/arrowright.svg";
import { ReactComponent as First } from "../../../assets/svg/document/first.svg";
import { ReactComponent as FileSearch } from "../../../assets/svg/document/file-search.svg";
import { ReactComponent as Folders } from "../../../assets/svg/document/folders.svg";
import { ReactComponent as IconCopy } from "../../../assets/svg/icon/icon-copy.svg";
import { ReactComponent as IconFileArrow } from "../../../assets/svg/icon/icon-file-arrow.svg";
import { ReactComponent as Wpatsup } from "../../../assets/svg/social/whatsup.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/social/telegram.svg";
import { ReactComponent as SettingApi } from "../../../assets/svg/api/setting-api.svg";
import { ReactComponent as DashedApi } from "../../../assets/svg/api/dashed-api.svg";
import { ReactComponent as IconUsers } from "../../../assets/svg/icon/icon-users.svg";

import { Clients, Reviews, WhyCard } from "./index";

const ContentHome = () => {
  return (
    <other-information>
      <div class="content content--main">
        <div class="content__block">
          <div class="container container--lg">
            <section class="content__layout">
              <div class="content__layout">
                <a
                  target="_blank"
                  class="promo"
                  href="https://zakupki.kz/education"
                >
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
                      class="promo__image"
                      src="https://zakupki-banners.object.pscloud.io/mainBanner.png?AWSAccessKeyId=HXXI0EQO15M03T8GAD5G&amp;Expires=1781051361&amp;Signature=V8v3ulSp5pWagGZLRng%2FRy3NJ94%3D"
                    />
                  </picture>
                </a>
              </div>
              <h2 class="content__title content__title--lg"> Возможности </h2>
              <div class="content__layout content__layout--md">
                <div class="grid grid--possibility">
                  <section class="possibility possibility--newsletter possibility--row">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Ежедневная рассылка на&nbsp;Email и&nbsp;в&nbsp;Telegram{" "}
                      </h3>
                      <p class="possibility__desc">
                        Подписывайтесь на&nbsp;ежедневную Email рассылку или
                        получайте моментальные уведомления в&nbsp;Telegram,
                        чтобы максимально{" "}
                        <span class="bold">
                          сэкономить время на&nbsp;поиске закупок
                        </span>
                        .
                      </p>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/possibility/new-message.png"
                        class="possibility__image possibility__image--new-message"
                      />
                      <img
                        src="/src/assets/possibility/email.png"
                        class="possibility__image possibility__image--email"
                      />
                    </div>
                  </section>
                  <section class="possibility possibility--documentation">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Поиск внутри документации{" "}
                      </h3>
                      <p class="possibility__desc">
                        Уникальная функция, которая поможет{" "}
                        <span class="bold">
                          не&nbsp;упустить ни&nbsp;один тендер
                        </span>
                        . Находим закупки не&nbsp;только по&nbsp;названию лота,
                        но&nbsp;также внутри технической документации.
                      </p>
                      <div class="possibility__actions">
                        <a
                          routerlink="/result"
                          class="possibility__button button"
                          id="main_poisk_vnutri_dokov_poprobovat"
                          href="/result"
                        >
                          {" "}
                          Попробовать{" "}
                          <span class="button__icon button__icon--after icon">
                            <Arrowright class="icon__svg" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/possibility/search.png"
                        loading="lazy"
                        class="possibility__image possibility__image--search"
                      />
                      <img
                        src="/src/assets/possibility/lot.png"
                        loading="lazy"
                        class="possibility__image possibility__image--lot"
                      />
                    </div>
                  </section>
                  <section class="possibility possibility--search">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Поиск по&nbsp;планам, закупкам и&nbsp;договорам{" "}
                      </h3>
                      <p class="possibility__desc">
                        Мониторим не&nbsp;только актуальные закупки,
                        но&nbsp;также планы и&nbsp;договоры закупок.
                        На&nbsp;основе планов закупок вы&nbsp;сможете{" "}
                        <span class="bold">наперёд спланировать участие</span>,
                        с помощью договоров провести{" "}
                        <span class="bold">
                          анализ информации по&nbsp;ценам, заказчикам
                          и&nbsp;конкурентам
                        </span>
                        .
                      </p>
                      <div class="possibility__actions">
                        <div class="possibility__button-group">
                          <a
                            routerlink="/plans"
                            class="possibility__button button"
                            id="main_plany"
                            href="/plans"
                          >
                            {" "}
                            Планы{" "}
                          </a>
                          <a
                            routerlink="/result"
                            class="possibility__button button"
                            id="main_zakupki"
                            href="/result"
                          >
                            {" "}
                            Закупки{" "}
                          </a>
                          <a
                            routerlink="/contracts"
                            class="possibility__button button"
                            id="main_dogovory"
                            href="/contracts"
                          >
                            {" "}
                            Договоры{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/possibility/search1.png"
                        loading="lazy"
                        class="possibility__image"
                      />
                    </div>
                  </section>
                  <section class="possibility possibility--tracking">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Отслеживание статусов{" "}
                      </h3>
                      <p class="possibility__desc">
                        Уведомляем об{" "}
                        <span class="bold">
                          изменении статусов лотов от&nbsp;предварительного
                          обсуждения до&nbsp;подведения итогов
                        </span>
                        . Отслеживание статусов поможет подавать необходимые
                        документы в срок без риска пропуска важных дедлайнов.
                      </p>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/possibility/tracking4.png"
                        loading="lazy"
                        class="possibility__image possibility__image--4"
                      />
                      <img
                        src="/src/assets/possibility/tracking3.png"
                        loading="lazy"
                        class="possibility__image possibility__image--3"
                      />
                      <img
                        src="/src/assets/possibility/tracking2.png"
                        loading="lazy"
                        class="possibility__image possibility__image--2"
                      />
                      <img
                        src="/src/assets/possibility/tracking1.png"
                        loading="lazy"
                        class="possibility__image possibility__image--1"
                      />
                    </div>
                  </section>
                  <section class="possibility possibility--counterparty">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Проверка контрагентов по&nbsp;90+&nbsp;показателям{" "}
                      </h3>
                      <p class="possibility__desc">
                        Используйте наш сервис{" "}
                        <span class="bold">
                          для проверки всех юридических лиц
                          на&nbsp;благонадежность
                        </span>
                        . Диагностика позволяет избежать проблем
                        с&nbsp;мошенничеством и&nbsp;налоговыми рисками при
                        взаимодействии с&nbsp;контрагентами.
                      </p>
                      <div class="possibility__actions">
                        <a
                          routerlink="/kompra"
                          class="possibility__button button"
                          id="main_kontragenty_poprobovat"
                          href="/kompra"
                        >
                          {" "}
                          Попробовать{" "}
                          <span class="button__icon button__icon--after icon">
                            <Arrowright class="icon__svg" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/svg/document/pdf.svg"
                        loading="lazy"
                        class="possibility__image possibility__image--pdf"
                      />
                      <picture class="possibility__picture">
                        <img
                          src="/src/assets/possibility/summary.png"
                          loading="lazy"
                          class="possibility__image possibility__image--summary"
                        />
                      </picture>
                    </div>
                  </section>
                  <section class="possibility possibility--monitoring possibility--row">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Мониторинг конкурентов{" "}
                      </h3>
                      <p class="possibility__desc">
                        {" "}
                        Добавьте компанию в&nbsp;список конкурентов
                        и&nbsp;получайте информацию о&nbsp;закупках,
                        в&nbsp;которых она принимает участие для построения
                        своей ценовой политики и&nbsp;стратегии победы.{" "}
                      </p>
                      <div class="possibility__actions">
                        <a
                          routerlink="/kompra-monitoring"
                          class="possibility__button button"
                          id="main_konkurenty_poprobovat"
                          href="/kompra-monitoring"
                        >
                          {" "}
                          Попробовать{" "}
                          <span class="button__icon button__icon--after icon">
                            <Arrowright class="icon__svg" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/possibility/monitoring1.png"
                        loading="lazy"
                        class="possibility__image possibility__image--1"
                      />
                      <img
                        src="/src/assets/possibility/monitoring2.png"
                        loading="lazy"
                        class="possibility__image possibility__image--2"
                      />
                      <img
                        src="/src/assets/possibility/monitoring3.png"
                        loading="lazy"
                        class="possibility__image possibility__image--3"
                      />
                    </div>
                  </section>
                  <section class="possibility possibility--employees">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Поиск квалифицированных сотрудников{" "}
                      </h3>
                      <p class="possibility__desc">
                        Наш реестр «Сотрудники с&nbsp;сертификатами» поможет вам{" "}
                        <span class="bold">
                          найти требуемых квалифицированных специалистов для
                          участия в&nbsp;закупках
                        </span>
                        .
                      </p>
                      <div class="possibility__actions">
                        <a
                          routerlink="/qualified-employees"
                          class="possibility__button button"
                          id="main_poisk_sotrudnikov_poprobovat"
                          href="/qualified-employees"
                        >
                          {" "}
                          Попробовать{" "}
                          <span class="button__icon button__icon--after icon">
                            <Arrowright class="icon__svg" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="possibility__frame">
                      <img
                        src="/src/assets/possibility/employees.png"
                        loading="lazy"
                        class="possibility__image"
                      />
                    </div>
                  </section>
                  <section class="possibility possibility--suppliers">
                    <div class="possibility__content">
                      <h3 class="possibility__title">
                        {" "}
                        Доступ к&nbsp;поставщикам и&nbsp;производителям{" "}
                      </h3>
                      <p class="possibility__desc">
                        В&nbsp;реестре{" "}
                        <span class="bold">
                          вы&nbsp;сможете найти ТОП 50&nbsp;поставщиков
                          по&nbsp;каждому товару
                        </span>
                        . Выгружайте информацию в&nbsp;удобном для&nbsp;вас
                        формате и&nbsp;используйте для своего бизнеса.
                      </p>
                      <div class="possibility__actions">
                        <a
                          routerlink="/suppliers-manufacturers"
                          class="possibility__button button"
                          id="main_dostup_postavshiki_poprobovat"
                          href="/suppliers-manufacturers"
                        >
                          {" "}
                          Попробовать{" "}
                          <span class="button__icon button__icon--after icon">
                            <Arrowright class="icon__svg" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="possibility__frame">
                      <picture class="possibility__picture">
                        <img
                          src="/src/assets/possibility/search3.png"
                          loading="lazy"
                          class="possibility__image possibility__image--search"
                        />
                      </picture>
                      <picture class="possibility__picture">
                        <img
                          src="/src/assets/possibility/search4.png"
                          loading="lazy"
                          class="possibility__image possibility__image--table"
                        />
                      </picture>
                    </div>
                  </section>
                </div>
              </div>
              <div class="content__layout">
                <section class="api">
                  <div class="api__content">
                    <h3 class="api__title">
                      {" "}
                      API для любой информационной системы{" "}
                    </h3>
                    <p class="api__desc">
                      Интеграция API позволяет{" "}
                      <span class="bold">
                        автоматизировать процессы и&nbsp;получать информацию
                        о&nbsp;закупках в&nbsp;удобном формате
                      </span>{" "}
                      в&nbsp;вашей CRM системе.
                    </p>
                    <button
                      type="button"
                      class="api__button button button--primary"
                      id="main_api_zakazat"
                    >
                      {" "}
                      Заказать услугу{" "}
                    </button>
                  </div>
                  <div class="api__frame">
                    <DashedApi class="api__dashed" />
                    <SettingApi class="api__setting" />
                    <img
                      src="/src/assets/svg/api/logo.svg"
                      loading="lazy"
                      class="api__image api__image--logo"
                    />
                    <img
                      src="/src/assets/svg/api/crm.svg"
                      loading="lazy"
                      class="api__image api__image--crm"
                    />
                  </div>
                </section>
              </div>
            </section>
            <section class="content__layout">
              <div class="grid grid--contact">
                <article class="feedback-card feedback-card--main feedback-card--call">
                  <h3 class="feedback-card__title"> Позвоните нам </h3>
                  <p class="feedback-card__desc">
                    {" "}
                    и&nbsp;мы&nbsp;расскажем все условия{" "}
                  </p>
                  <div class="feedback-card__actions">
                    <a
                      href="tel:+77075790000"
                      class="button button--primary"
                      id="main_pozvonite_pozvonit"
                    >
                      {" "}
                      Позвонить{" "}
                    </a>
                    <button
                      type="button"
                      class="button button--primary-outline"
                      id="main_pozvonite_zakazat_zvonok"
                    >
                      {" "}
                      Заказать звонок{" "}
                    </button>
                  </div>
                </article>
                <article class="feedback-card feedback-card--main feedback-card--write">
                  <h3 class="feedback-card__title"> Напишите нам </h3>
                  <p class="feedback-card__desc">
                    {" "}
                    мы&nbsp;подробно ответим на&nbsp;все вопросы{" "}
                  </p>
                  <div class="feedback-card__actions">
                    <a
                      href="tg://resolve?domain=Portalzakupki"
                      target="_blank"
                      class="button button--tertiary"
                      id="main_napishite_telegram"
                    >
                      <span class="button__icon button__icon--before icon">
                        <Telegram class="icon__svg" />
                      </span>{" "}
                      Telegram{" "}
                    </a>
                    <a
                      href="https://wa.me/+77005790001"
                      target="_blank"
                      class="button button--tertiary"
                      id="main_napishite_whatsapp"
                    >
                      <span class="button__icon button__icon--before icon">
                        <Wpatsup class="icon__svg" />
                      </span>{" "}
                      WhatsApp{" "}
                    </a>
                  </div>
                </article>
              </div>
            </section>
            <div class="content__layout">
              <dl class="statistics">
                <div class="statistics__layout">
                  <div class="statistics__icon icon">
                    <IconFileArrow />
                  </div>
                  <div class="statistics__text">
                    <dt class="statistics__title"> 82 811 </dt>
                    <dd class="statistics__desc">
                      тендеров
                      <br />
                      <span>проводится</span> сегодня
                    </dd>
                  </div>
                </div>
                <div class="statistics__layout">
                  <div class="statistics__icon icon">
                    <IconCopy />
                  </div>
                  <div class="statistics__text">
                    <dt class="statistics__title"> 15+&nbsp;лет </dt>
                    <dd class="statistics__desc">
                      на рынке
                      <br />
                      Казахстана
                    </dd>
                  </div>
                </div>
                <div class="statistics__layout">
                  <div class="statistics__icon icon">
                    <IconUsers />
                  </div>
                  <div class="statistics__text">
                    <dt class="statistics__title"> 200 000+ </dt>
                    <dd class="statistics__desc">
                      пользователей
                      <br />
                      сервиса
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <section class="why">
              <h2 class="why__title content__title">
                Почему <span>zakupki.kz</span>?
              </h2>
              <div class="grid grid--why">
              <WhyCard title="Более 100+ тендерных площадок" description="Предоставляем нашим клиентам полную базу всех закупок Казахстана." IconComponent={Folders} />
              <WhyCard title="Изучайте документацию без&nbsp;регистрации на&nbsp;первоисточниках" description="Нет необходимости регистрироваться на&nbsp;первоисточниках, смотрите все в&nbsp;одном сервисе." IconComponent={FileSearch} />
              <WhyCard title="Узнавайте о&nbsp;закупках первым" description="Отправляем ежедневную рассылку на&nbsp;почту с&nbsp;новыми тендерами два раза в&nbsp;день и&nbsp;моментальные уведомления в&nbsp;Telegram сразу после публикации закупки." IconComponent={First} />
              <WhyCard title="Персональный менеджер и&nbsp;индивидуальные консультации" description="Сопровождение персонального менеджера на&nbsp;всех этапах работы с&nbsp;zakupki.kz." IconComponent={Manager} />
              <WhyCard title="Удобные выгрузки в&nbsp;Excel" description="Скачивайте информацию о&nbsp;закупках в&nbsp;формате Excel таблиц для дальнейшей работы." IconComponent={Excel} />
              <WhyCard title="Фильтры для любого запроса" description="Удобные параметры поиска мгновенно найдут&nbsp;то, что требуется именно вам." IconComponent={SettingsBoldAlt} />
              </div>
            </section>
          </div>
        </div>
        <section class="content__block content__block--tariffs content__block--theme-secondary">
          <div class="container container--lg">
            <h2 class="content__title content__title--promo">
              {" "}
              Начните выигрывать с&nbsp;нами!{" "}
            </h2>
            <p class="content__paragraph">
              Узнайте подробнее о&nbsp;наших тарифах и&nbsp;выберите
              <br />
              подходящий для себя
            </p>
            <div class="content__actions">
              <a
                routerlink="tariffs"
                class="button button--primary"
                id="main_smotret_tarify"
                href="/tariffs"
              >
                {" "}
                Смотреть тарифы{" "}
              </a>
            </div>
          </div>
        </section>
        <Clients />
        <Reviews />
      </div>
    </other-information>
  );
};

export default ContentHome;
