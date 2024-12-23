import React from "react";

const Opportunities = () => {
  return (
    <section className="content__layout">
      <h2 className="content__title content__title--lg"> Наши возможности </h2>
      <div className="content__layout content__layout--md">
        <div className="grid grid--possibility">
          <section className="possibility possibility--newsletter">
            <div className="possibility__content">
              <h3 className="possibility__title">
              Ежедневная рассылка на Email
              </h3>
              <p className="possibility__desc">
              Подпишитесь на нашу ежедневную рассылку, чтобы 
                <span className="bold">
                &nbsp;значительно упростить процесс поиска требуемых закупок.&nbsp;
                </span>
                Вы сможете настроить фильтры в рассылке, чтобы получать только ту информацию, которая соответствует вашим потребностям.
              </p>
            </div>
          </section>
          <section className="possibility possibility--AI">
            <div className="possibility__content">
              <h3 className="possibility__title">
              Помощь ИИ
              </h3>
              <p className="possibility__desc">
              Автоматический расчет маржинальности с помощью ИИ, оценивающего реальную рентабельность
              </p>
            </div>
          </section>
          <section className="possibility possibility--search">
            <div className="possibility__content">
              <h3 className="possibility__title">
              Поиск по планам,закупкам и договорам
              </h3>
              <p className="possibility__desc">
              Мы следим не только за текущими закупками, но и за планами и контрактами на закупки. Основываясь на этих планах, у вас появится возможность
                <span className="bold">&nbsp;заранее организовать свое участие,&nbsp;</span>
                а анализируя договоры, можно будет оценить информацию
                <span className="bold">
                &nbsp;о ценах, заказчиках и конкурентах.
                </span>
              </p>
            </div>
          </section>
          <section className="possibility possibility--tracking">
            <div className="possibility__content">
              <h3 className="possibility__title">Отслеживание тендеров</h3>
              <p className="possibility__desc">
              <span className="bold">
              Как не упустить важные сроки и выиграть тендер ?</span>
              <br />
          
              Система отслеживания тендеров предоставляет актуальную информацию о каждом шаге, что позволяет   
                <span className="bold">
                &nbsp;заранее подготовить и подать необходимые документы.&nbsp;
                </span>
                Это помогает минимизировать риски пропуска важных сроков и обеспечивает контроль над всеми этапами, чтобы избежать задержек и выполнить все обязательства в установленные дедлайны.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
