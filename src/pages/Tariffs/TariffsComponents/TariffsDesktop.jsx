import React from "react";

// svg
import { ReactComponent as Check } from "../../../assets/svg/icon/check.svg";



const TariffsDesktop = ({ tariffs }) => {
  const renderAccessIcons = (accessKey) => {
    return tariffs.map((tariff) =>
      tariff[accessKey] ? (
        <div className="tariff-abtest__cell ng-star-inserted" style={{ width: "17.5%" }} key={tariff.id}>
          <span className="icon tariff-abtest__icon-yes ng-star-inserted">
            <Check className="icon__svg" />
          </span>
        </div>
      ) : 
      <div className="tariff-abtest__cell ng-star-inserted" style={{ width: "17.5%" }} key={tariff.id}>
    </div>
    );
  };
  return (
    <div class="tariff-abtest ng-star-inserted">
      <div class="tariff-abtest__table">
        <div id="sticky_layout" class="tariff-abtest__row tariff-abtest__row--header tariff-abtest__row--sticky" >
          <div class="tariff-abtest__cell tariff-abtest__cell--title"  style={{ width: "30%" }}>
            <span class="tariff-abtest__title">Наименование</span>
          </div>
          {tariffs.map((tariff) => (
            <div class="tariff-abtest__cell ng-star-inserted"  style={{ width: "17.5%" }} key={tariff.id} >
              <div class="tariff-abtest__title"> {tariff.name} </div>
              <div class="tariff-abtest__price">
                {tariff.price} ₸ /в {tariff.duration}
              </div>
              <button class="tariff-abtest__buy" id="tarify_baza_vybrat">
                Купить
              </button>
            </div>
          ))}
        </div>

        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }} >
            <div class="tariff-abtest__feat">
              Доступ ко всем государственным и коммерческих тендерам
            </div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Без регистрации на первоисточниках
              </span>
            </div>
          </div>
          {renderAccessIcons("tender_access")}
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__feat">Рассылка тендеров на E-mail</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Ежедневно, 2 раза в день
              </span>
            </div>
          </div>
          {renderAccessIcons("email_access")}
        </div>

        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__badge tariff-abtest__badge--only ng-star-inserted">
              Только у нас
            </div>
            <div class="tariff-abtest__feat">Поиск внутри документов</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                По ключевым словам в технической спецификации
              </span>
            </div>
          </div>
          {renderAccessIcons("documents_search_access")}
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__feat">Лоты в формате Excel</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Скачивайте лоты в формате Excel
              </span>
            </div>
          </div>
          {renderAccessIcons("lots_excel")}
        </div>
       
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__feat">Доступ к договорам</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Изучайте рынок и получите возможность предложить свои
                товары/работы/услуги победителю тендера
              </span>
            </div>
          </div>
          {renderAccessIcons("contracts_access")}
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__feat">Доступ к закупкам</div>
            <div>
              <span class="tariff-abtest__feat-desc">
              Просмотр полной информации
              </span>
            </div>
          </div>
          {renderAccessIcons("procurement_access")}
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__feat">
              Индивидуальные консультации и сопровождение от менеджера
            </div>
            <div>
              <span class="tariff-abtest__feat-desc">
                На всех этапах работы на портале Zakupki.kz
              </span>
            </div>
          </div>
          {renderAccessIcons("consultation_access")}
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__feat">Доступ к реестру поставщиков</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Справочник поставщиков и производителей
              </span>
            </div>
          </div>
          {renderAccessIcons("customer_access")} 
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }}>
            <div class="tariff-abtest__badge tariff-abtest__badge--only ng-star-inserted">
              Только у нас
            </div>
            <div class="tariff-abtest__feat">Мониторинг конкурентов</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Отслеживайте участия своих конкурентов в тендерах
              </span>
            </div>
          </div>
          {renderAccessIcons("monitoring_access")}
          
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div
            class="tariff-abtest__cell tariff-abtest__cell--title"
            style={{ width: "30%" }}
          >
            <div class="tariff-abtest__feat">Отслеживание тендеров</div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Получайте уведомления о статусе тендера в личный кабинет или на
                E-mail
              </span>
            </div>
          </div>
          {renderAccessIcons("tracking_tenders_access")}
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }} >
            <div class="tariff-abtest__feat">
              Проверка контрагентов — более 90 показателей
            </div>
            <div>
              <span class="tariff-abtest__feat-desc">
                Убедитесь в благонадежности ваших партнеров и заказчиков.
              </span>
              <button
                type="button"
                class="tariff-abtest__feat-more ng-star-inserted"
              >
                Подробнее
              </button>
            </div>
          </div>
      {renderAccessIcons("contraagent_access")}
         
        </div>
        <div class="tariff-abtest__row ng-star-inserted">
          <div class="tariff-abtest__cell tariff-abtest__cell--title" style={{ width: "30%" }} >
            <div class="tariff-abtest__badge tariff-abtest__badge--only ng-star-inserted">
              Только у нас
            </div>
            <div class="tariff-abtest__feat">
            Доступ к добавлению в избранное
            </div>
            <div>
              <span class="tariff-abtest__feat-desc">
              Сохраняйте интересующие вас тендеры для быстрого доступа в будущем.
              </span>
            </div>
          </div>
          {renderAccessIcons("favorite_access")}
        
        </div>

      </div>
    </div>
  );
};

export default TariffsDesktop;
