import React from "react";
const Footer = () => {
  return (
    <div class="layout__footer">
        <footer class="footer">
          <div class="footer__container container container--lg">
            <div class="footer__section">
              <h3 class="footer__title"> Тендеры </h3>
              <ul class="footer__list">
                <li class="footer__item">
                  Актуальные
                  <ul class="footer__list footer__list--lvl-2">
                    <li class="footer__item">
                      <a
                        routerlink="/result"
                        class="footer__link"
                        href="/result"
                      >
                        По&nbsp;ключевым словам
                      </a>
                    </li>
                    <li class="footer__item">
                      <a
                        routerlink="/regions"
                        class="footer__link"
                        href="/regions"
                      >

                        По&nbsp;областям/регионам
                      </a>
                    </li>
                    <li class="footer__item">
                      <a routerlink="/areas" class="footer__link" href="/areas">
                        По&nbsp;площадкам
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer__item">
                  <a routerlink="/plans" class="footer__link" href="/plans">
                    Планы закупок
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/contracts"
                    class="footer__link"
                    href="/contracts"
                  >
                    Договоры закупок
                  </a>
                </li>
              </ul>
              <h3 class="footer__title"> Сервисы </h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a routerlink="/kompra" class="footer__link" href="/kompra">
                    Проверка контрагента
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/kompra-monitoring"
                    class="footer__link"
                    href="/kompra-monitoring"
                  >
                    Мониторинг конкурентов
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__section">
              <h3 class="footer__title"> Тарифы и&nbsp;услуги </h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a routerlink="/tariffs" class="footer__link" href="/tariffs">

                    Тарифы
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/education"
                    class="footer__link"
                    href="/education"
                  >
                    Обучение
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/analytics"
                    class="footer__link"
                    href="/analytics"
                  >
                    Аналитика
                  </a>
                </li>
              </ul>
              <h3 class="footer__title"> Реестры </h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a
                    routerlink="/register-suppliers-manufacturers"
                    class="footer__link"
                    href="/register-suppliers-manufacturers"
                  >
                    Реестр поставщиков и производителей
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/register-qualified-employees"
                    class="footer__link"
                    href="/register-qualified-employees"
                  >
                    Реестр квалифицированных сотрудников
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__section">
              <h3 class="footer__title"> Другое </h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a routerlink="/blog" class="footer__link" href="/blog">
                    Блог
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/popular-tender-categories"
                    class="footer__link"
                    href="/popular-tender-categories"
                  >
                    Самые популярные категории тендеров
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/about-us"
                    class="footer__link"
                    href="/about-us"
                  >
                    О нас
                  </a>
                </li>
                <li class="footer__item">
                  <a routerlink="/sitemap" class="footer__link" href="/sitemap">
                    Карта сайта
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    routerlink="/instruction"
                    class="footer__link"
                    href="/instruction"
                  >
                    Инструкция
                  </a>
                </li>
                <li class="footer__item">
                  <a routerlink="/faq" class="footer__link" href="/faq">
                    FAQ
                  </a>
                </li>
              </ul>
              <ul class="footer__list">
                <li class="footer__item">
                  <a
                    class="footer__link"
                    href="/user-agreement"
                  >
                    Пользовательское соглашение
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link"
                    href="/privacy-policy"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    href="/Публичная%20оферта%20тариф%20Стандарт.pdf"
                    class="footer__link"
                  >
                    Публичная оферта
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__section">
              <h3 class="footer__title"> Контакты </h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="tel:+77057638953" class="footer__link">
                  +7 (705)-763-89-53
                  </a>
                </li>
                <li class="footer__item">
                  <a href="tel:+79585815790" class="footer__link">
                  </a>
                </li>
                <li class="footer__item">
                  <a href="https://wa.me/+77057638953" class="footer__link">
                    +7 (705)-763-89-53 - WhatsApp
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    href="tg://resolve?domain=Portalzakupki"
                    class="footer__link"
                  >
                    +7 (705)-763-89-53 - Telegram
                  </a>
                </li>
                <li class="footer__item">
                  <a href="mailto:info@tenderkit.kz" class="footer__link">
                    info@tenderkit.kz
                  </a>
                </li>
                <li class="footer__item">
                  <a href="https://tenderkit.kz/contacts" class="footer__link">
                    Проспект Бауыржан Момышулы 2/1, 10&nbsp;этаж;
                    1006&nbsp;офис, г.&nbsp;Астана
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Footer;
