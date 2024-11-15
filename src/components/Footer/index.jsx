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
                      <a className="footer__link" href="/result" aria-label="Просмотр тендеров по ключевым словам">
                        По&nbsp;ключевым словам
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link"  href="/regions" aria-label="Просмотр тендеров по областям и регионам" >
                      По&nbsp;областям/регионам
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/areas" aria-label="Просмотр тендеров по площадкам">
                        По&nbsp;площадкам
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/plans" aria-label="Просмотр планов закупок">
                    Планы закупок
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/contracts" aria-label="Просмотр договоров закупок">
                    Договоры закупок
                  </a>
                </li>
              </ul>
             
            </div>
            <div className="footer__section">
              <h3 className="footer__title"> Тарифы и&nbsp;услуги </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="/tariffs" aria-label="Просмотр тарифов">
                    Тарифы
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/education" aria-label="Просмотр услуг обучения">
                    Обучение
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/analytics" aria-label="Просмотр аналитических услуг">
                    Аналитика
                  </a>
                </li>
              </ul>
              
            </div>
            <div className="footer__section">
              <h3 className="footer__title"> Другое </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a routerlink="/blog" className="footer__link" href="/blog" aria-label="Чтение блога">
                    Блог
                  </a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="/user-agreement" aria-label="Пользовательское соглашение">
                    Пользовательское соглашение
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/privacy-policy" aria-label="Политика конфиденциальности">
                    Политика конфиденциальности
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/Публичная%20оферта%20тариф%20Стандарт.pdf" className="footer__link" aria-label="Публичная оферта">
                    Публичная оферта
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__title"> Контакты </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="tel:+77057638953" className="footer__link" aria-label="Позвоните нам по номеру +7 (705)-763-89-53">
                  +7 (705)-763-89-53
                  </a>
                </li>
                <li className="footer__item">
                  <a href="https://wa.me/+77057638953" className="footer__link"  aria-label="Свяжитесь с нами через WhatsApp по номеру +7 (705)-763-89-53">
                    +7 (705)-763-89-53 - WhatsApp
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
