import React from "react";
const Footer = () => {
  return (
    <div className="layout__footer">
        <footer className="footer">
          <div className="footer__container container container--lg">
            <div className="footer__section">
              <h3 className="footer__title"> Тендеры </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  Актуальные
                  <ul className="footer__list footer__list--lvl-2">
                    <li className="footer__item">
                      <a
                        routerlink="/result"
                        className="footer__link"
                        href="/result"
                      >
                        По&nbsp;ключевым словам
                      </a>
                    </li>
                    <li className="footer__item">
                      <a
                        routerlink="/regions"
                        className="footer__link"
                        href="/regions"
                      >

                        По&nbsp;областям/регионам
                      </a>
                    </li>
                    <li className="footer__item">
                      <a routerlink="/areas" className="footer__link" href="/areas">
                        По&nbsp;площадкам
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer__item">
                  <a routerlink="/plans" className="footer__link" href="/plans">
                    Планы закупок
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    routerlink="/contracts"
                    className="footer__link"
                    href="/contracts"
                  >
                    Договоры закупок
                  </a>
                </li>
              </ul>
             
            </div>
            <div className="footer__section">
              <h3 className="footer__title"> Тарифы и&nbsp;услуги </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a routerlink="/tariffs" className="footer__link" href="/tariffs">

                    Тарифы
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    routerlink="/education"
                    className="footer__link"
                    href="/education"
                  >
                    Обучение
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    routerlink="/analytics"
                    className="footer__link"
                    href="/analytics"
                  >
                    Аналитика
                  </a>
                </li>
              </ul>
              
            </div>
            <div className="footer__section">
              <h3 className="footer__title"> Другое </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a routerlink="/blog" className="footer__link" href="/blog">
                    Блог
                  </a>
                </li>
                <li className="footer__item">
                  <a routerlink="/sitemap" className="footer__link" href="/sitemap">
                    Карта сайта
                  </a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    className="footer__link"
                    href="/user-agreement"
                  >
                    Пользовательское соглашение
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link"
                    href="/privacy-policy"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="/Публичная%20оферта%20тариф%20Стандарт.pdf"
                    className="footer__link"
                  >
                    Публичная оферта
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__title"> Контакты </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="tel:+77057638953" className="footer__link">
                  +7 (705)-763-89-53
                  </a>
                </li>
                <li className="footer__item">
                  <a href="tel:+79585815790" className="footer__link">
                  </a>
                </li>
                <li className="footer__item">
                  <a href="https://wa.me/+77057638953" className="footer__link">
                    +7 (705)-763-89-53 - WhatsApp
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="tg://resolve?domain=Portalzakupki"
                    className="footer__link"
                  >
                    +7 (705)-763-89-53 - Telegram
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
