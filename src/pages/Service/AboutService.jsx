import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Helmet } from 'react-helmet';
import './AboutServise.css';

import kz_flag from "../../assets/kz-flag.png";
import icon1 from "../../assets/1.svg";
import icon2 from "../../assets/2.svg";
import icon3 from "../../assets/3.svg";
import icon4 from "../../assets/4.svg";
import icon5 from "../../assets/5.svg";
import icon6 from "../../assets/6.svg";
import icon7 from "../../assets/7.svg";
import icon8 from "../../assets/8.svg";
import o1 from "../../assets/o1.svg";
import o2 from "../../assets/o2.svg";
import o3 from "../../assets/o3.svg";
import o4 from "../../assets/o4.svg";
import o5 from "../../assets/o5.svg";
import o6 from "../../assets/o6.svg";

import gaszakup from "../../assets/gaszakup.png";
import samruk from "../../assets/samruk.png";
import nadloc from "../../assets/nadloc.png";
import background from "../../assets/background.svg";

import arrow from "../../assets/arrow.svg";
import step1 from "../../assets/mailing-settings/settings.png";
import step2 from "../../assets/mailing-settings/mailing.jpg";

import advantages1 from "../../assets/advantages/1.svg";
import advantages2 from "../../assets/advantages/2.svg";
import advantages3 from "../../assets/advantages/3.svg";
import advantages4 from "../../assets/advantages/4.svg";
import advantages5 from "../../assets/advantages/5.svg";
import advantages6 from "../../assets/advantages/6.svg";

import shield from "../../assets/business-protection/shield.png";

import phone from "../../assets/online-service/phone.svg";
import reward from "../../assets/online-service/reward.png";

import team1 from "../../assets/team/1.png";
import partner1 from "../../assets/partner/1.png";


import React, { useState, useCallback, memo } from 'react';

const FAQItem = memo(({ question, answer, isActive, onClick }) => {
    return (
        <li className="questions__item">
            <button
                className={`questions__item-title ${isActive ? 'active' : ''}`}
                onClick={onClick}
            >
                {question}
                <div className="questions__item-icon">
                    <div className="questions__item-icon-inner"></div>
                </div>
            </button>
            <p
                className="questions__item-text"
                style={{ display: isActive ? 'block' : 'none' }}
            >
                {answer}
            </p>
        </li>
    );
});

const AboutService = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = useCallback((index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }, []);

    const questions = [
        {
            question: 'У нас в штате уже есть специалист по закупкам, зачем нам услуги вашего сервиса?',
            answer: 'Помимо персональной рассылки тендеров, наши специалисты помогут вам решить все неоднозначные вопросы, возникающие в процессе работы. Это исключит ошибки, из-за которых вашу компанию могут отстранить от участия в тендерах на 2 года. Своего рода – это ваша "страховка" от финансовых и других рисков.'
        },
        {
            question: 'Сколько стоит подписка на ваш сервис?',
            answer: 'В зависимости от выбранного тарифа, стоимость подписки на сервис с консультациями и бонусными подачами заявок составляет от 10 000 тенге в месяц (от 120 000 тенге в год).'
        },
        {
            question: 'Как часто мне будет приходить рассылка тендеров?',
            answer: 'При подписке на сервис Tenderkit рассылка будет приходить на вашу почту раз в сутки, в зависимости от ваших настроек.'
        },
        {
            question: 'Сколько тендеров будет в персональной подборке?',
            answer: 'Количество тендеров зависит от заданных критериев поиска – чем их больше и "точнее" фильтрация тендеров, тем меньше релевантных предложений будет содержать подборка тендеров.'
        },
        {
            question: 'В каком виде я буду получать рассылку и куда она будет приходить?',
            answer: 'Вы можете получать рассылку списком, как на скриншоте, а также выгружать все тендеры в Excel таблицу. Рассылка приходит на сайте в личном кабинете, а также на электронную почту, при этом вы сможете выбрать для этого до 2-х почтовых ящиков.'
        },
        {
            question: 'В чем разница между платной и демо-версией подписки?',
            answer: 'В рамках демо-версии вы получаете все функции сервиса, но без консультаций и бонусной подачи заявок. А при заказе платной версии, напротив, получаете от 3 до 10 подач заявок в зависимости от выбранного тарифа, а также консультации наших специалистов по тендерам и юристов.'
        },
        {
            question: 'Сколько консультаций в рамках подписки я получу?',
            answer: 'При подписке на сервис Tenderkit вы получаете консультации и поддержку наших специалистов без ограничений по времени и количеству обращений.'
        },
        {
            question: 'При каких условиях вы даёте гарантию допуска к тендеру?',
            answer: 'Главное условие – подготовкой к тендеру должны заниматься наши специалисты. Только в этом случае мы можем давать гарантию 100% допуска к тендеру.'
        },
        {
            question: 'Можно ли задать вам вопрос по тендерам без подписки на сервис?',
            answer: 'Да, вы можете позвонить нам и проконсультироваться по участию в тендерам, но при этом вы получите ответы общего характера. Чтобы получить более подробную консультацию – необходимо будет приобрести подписку.'
        }
    ];

    return (
        <div className='main'>
            <Helmet>
                <title>О сервисе</title>
                <meta name="description" content="О сервисе" />
                <meta property="og:title" content="О сервисе" />
                <meta property="og:description" content="О сервисе" />
            </Helmet>
            <div className='main-content'>
                <Header />
                <div className='service-header'>
                    <div className="mini-header">
                        <ul>
                            <li>
                                <a href="#features">Основные возможности</a>
                            </li>
                            <li>
                                <a href="#how-it-works">Как это работает?</a>
                            </li>
                            <li>
                                <a href="#subscribtion-options">Что дает подписка?</a>
                            </li>
                            <li>
                                <a href="#advantages">Преимущества</a>
                            </li>
                            <li>
                                <a href="#reviews">Отзывы</a>
                            </li>
                            <li>
                                <a href="#team">Наша команда</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="service-content">

                    <section className="hero-container-section">
                        <div className="hero-container-header">
                            <h1 className="hero-container-title">
                                Участвуйте в тендерах
                                <div className="hero-container-flag-text">
                                    <div className="hero-container-flag-image-container">
                                        <img className="hero-container-flag-image" src={kz_flag} alt="Flag of Kazakhstan" />
                                    </div>
                                    Казахстана
                                </div>
                            </h1>
                            <div className="hero-container-subheader">
                                <h2 className="hero-container-subheader-title">Подключите сервис <strong>Tenderkit</strong> и получите:</h2>
                                <ul className="hero-container-services-list">
                                    <li>
                                        <span>
                                            <strong>Консультации на всех этапах</strong> участия в закупках
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Бонусные подачи заявок</strong> специалистами Tenderkit
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <strong>Персональную рассылку тендеров</strong> – ежедневно!
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="hero-container-button-container">
                                <button className="ui-btn">
                                    Бесплатный демо-доступ
                                </button>
                                <button className="ui-btn-light">
                                    Купить подписку на сервис
                                </button>
                            </div>

                            <div className="hero-container-info-text">
                                все функции сервиса, но без подачи заявок и консультаций
                            </div>
                        </div>
                    </section>


                    <section className="problems-resolve-section">
                        <div className="container">
                            <h3 className="ui-section-title">
                                Какие проблемы решает наш сервис
                                <mark className="problems-resolve-highlight">Tenderkit?</mark>
                            </h3>
                            <div className="problems-resolve-list-container">
                                <ul className="problems-resolve-list">
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon1} alt="Icon 1" />
                                        </div>
                                        <p><b>Сложно правильно трактовать законы,</b><br />а также правила тендерных площадок</p>
                                    </li>
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon2} alt="Icon 2" />
                                        </div>
                                        <p><b>Боитесь попасть в реестр недобросовестных</b><br />поставщиков с отстранением от закупок на 2 года</p>
                                    </li>
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon3} alt="Icon 3" />
                                        </div>
                                        <p><b>Непонятно, какие документы нужно собрать</b><br />и как их правильно подать для участия в тендере</p>
                                    </li>
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon4} alt="Icon 4" />
                                        </div>
                                        <p><b>Заметили нарушения со стороны других</b><br />участников и хотите обжаловать итоги тендера</p>
                                    </li>
                                </ul>
                                <ul className="problems-resolve-list">
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon5} alt="Icon 5" />
                                        </div>
                                        <p><b>Возникли споры с заказчиками</b><br />по исполнению договорных обязательств</p>
                                    </li>
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon6} alt="Icon 6" />
                                        </div>
                                        <p><b>На поиск тендеров уходит уйма времени,</b><br />при этом срок на подачу заявок ограничен</p>
                                    </li>
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon7} alt="Icon 7" />
                                        </div>
                                        <p><b>Заявку на участие в тендере отклоняют</b><br />и приходится подавать ее заново</p>
                                    </li>
                                    <li className="problems-resolve-list-item">
                                        <div className="problems-resolve-icon-container">
                                            <img className="problems-resolve-icon" src={icon8} alt="Icon 8" />
                                        </div>
                                        <p><b>Возникла другая проблема или вопрос</b><br />по тендерам и вы не знаете, как их решить...</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="consulting-banner-section">
                        <div className="container">
                            <div className="consulting-banner-title-container">
                                <h3 className="ui-section-title">Tenderkit</h3>
                            </div>
                            <p className="consulting-banner-description">
                                <b className="consulting-banner-description-bold">Подключитесь и консультируйтесь с опытными юристами и тендерными специалистами&nbsp;</b>
                                без ограничений по времени и количеству обращений!
                            </p>
                            <button className="ui-btn-light">Получить доступ к сервису</button>
                        </div>
                    </section>

                    <section id="features" className="features-section">
                        <div className="features-container">
                            <h3 className="ui-section-title">
                                Основные возможности <mark>Tenderkit</mark>
                            </h3>
                            <ul className="features-list">
                                <li className="features-list-item">
                                    <div className="features-item-img">
                                        <img src={o1} alt="Автоматический поиск тендеров" />
                                    </div>
                                    <div className="features-item-text">
                                        <b className="features-item-title">Автоматический поиск тендеров</b>
                                        <p className="features-item-description">
                                            Настройте персональную рассылку на 2 почтовых ящика со всех тендерных площадок по 1000 ключевых слов и другим параметрам
                                        </p>
                                    </div>
                                </li>
                                <li className="features-list-item features-list-item-reverse">
                                    <div className="features-item-img">
                                        <img src={o2} alt="Консультационная поддержка" />
                                    </div>
                                    <div className="features-item-text">
                                        <b className="features-item-title">Консультационная поддержка</b>
                                        <p className="features-item-description">
                                            Наши юристы и тендерные специалисты ответят на все ваши вопросы касательно участия в закупках и выполнения договорных обязательств
                                        </p>
                                    </div>
                                </li>
                                <li className="features-list-item">
                                    <div className="features-item-img">
                                        <img src={o3} alt="Бонусные подачи заявок" />
                                    </div>
                                    <div className="features-item-text">
                                        <b className="features-item-title">Бонусные подачи заявок</b>
                                        <p className="features-item-description">
                                            Поможем собрать все документы и правильно подать заявки на интересующие вас тендеры, соблюдая законы и правила площадок
                                        </p>
                                    </div>
                                </li>
                                <li className="features-list-item features-list-item-reverse">
                                    <div className="features-item-img">
                                        <img src={o4} alt="Просчитанные тендеры. Публикуем около 5 ежедневно!" />
                                    </div>
                                    <div className="features-item-text">
                                        <b className="features-item-title">Просчитанные тендеры. Публикуем около 5 ежедневно!</b>
                                        <p className="features-item-description">
                                            Участвуйте в тендерах, в которых мы подобрали поставщиков, просчитали возможную прибыль и затраты на логистику
                                        </p>
                                    </div>
                                </li>
                                <li className="features-list-item">
                                    <div className="features-item-img">
                                        <img src={o5} alt="Проверка потенциальных контрагентов" />
                                    </div>
                                    <div className="features-item-text">
                                        <b className="features-item-title">Проверка потенциальных контрагентов</b>
                                        <p className="features-item-description">
                                            Узнаем, не были ли ваши контрагенты в реестре недобросовестных поставщиков, отсутствует ли у них налоговая задолженность и не участвуют ли они в судебных тяжбах
                                        </p>
                                    </div>
                                </li>
                                <li className="features-list-item features-list-item-reverse">
                                    <div className="features-item-img">
                                        <img src={o6} alt="Аналитика" />
                                    </div>
                                    <div className="features-item-text">
                                        <b className="features-item-title">Аналитика</b>
                                        <p className="features-item-description">
                                            Выгружайте тендеры по нужным вам критериям, смотрите победителей и участников предыдущих закупок, их цены, а также план закупок ещё до момента объявления тендера!
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <p className="features-more-info">
                                ...и многие другие функции, подробнее смотрите в разделе <a href="/tariffs">Тарифы</a>
                            </p>
                        </div>
                    </section>

                    <section className="sites-selection-section" style={{ background: `url(${background}) no-repeat 50%/cover` }}>
                        <div className="container">
                            <div className="sites-selection-text">
                                При подключении сервиса вы сможете ежедневно
                                <span className="sites-selection-highlight">
                                    получать подборку тендеров со 149 площадок
                                </span>
                                или выбранных вами индивидуально
                            </div>
                            <ul className="sites-selection-list">
                                <li className="sites-selection-list-item">
                                    <a href="#" className="sites-selection-list-item-link">
                                        <div style={{ marginBottom: '20px' }}>
                                            <img src={gaszakup} alt="Goszakup.gov.kz" />
                                        </div>
                                        <span>Goszakup.gov.kz</span>
                                    </a>
                                </li>
                                <li className="sites-selection-list-item">
                                    <a href="#" className="sites-selection-list-item-link">
                                        <div style={{ marginBottom: '20px' }}>
                                            <img src={samruk} alt="Zakup.sk.kz" />
                                        </div>
                                        <span>Zakup.sk.kz</span>
                                    </a>
                                </li>
                                <li className="sites-selection-list-item">
                                    <a href="#" className="sites-selection-list-item-link">
                                        <div style={{ marginBottom: '20px' }}>
                                            <img src={nadloc} alt="reestr.nadloc.kz" />
                                        </div>
                                        <span>reestr.nadloc.kz</span>
                                    </a>
                                </li>
                            </ul>
                            <span className="sites-selection-more-info">
                                и других!...
                            </span>
                            <div className="sites-selection-button-container">
                                <button className="ui-btn">
                                    Получить доступ к сервису
                                </button>
                                <i className="sites-selection-button-description">с безлимитными консультациями</i>
                            </div>
                        </div>
                    </section>

                    <section className="mailing-setup-section">
                        <div className="container">
                            <h3 className="ui-section-title">
                                Как выглядит настройка рассылки?
                            </h3>
                            <div className="mailing-setup-steps">
                                <figure className="mailing-setup-figure">
                                    <div>
                                        <img className="mailing-setup-image" src={step1} alt="Шаг 1" />
                                    </div>
                                    <figcaption className="mailing-setup-caption">
                                        <span className="mailing-setup-caption-title">
                                            Задавайте до 1000 ключевых слов,
                                        </span>
                                        выбирайте площадки, регион поиска, сумму тендера и другие параметры
                                    </figcaption>
                                </figure>
                                <div className="mailing-setup-arrow-container">
                                    <img className="mailing-setup-arrow" src={arrow} alt="Стрелка" />
                                </div>
                                <figure className="mailing-setup-figure">
                                    <div>
                                        <img className="mailing-setup-image" src={step2} alt="Шаг 2" />
                                    </div>
                                    <figcaption className="mailing-setup-caption">
                                        <span className="mailing-setup-caption-title">
                                            В результате вы ежедневно будете получать подборку тендеров
                                        </span>
                                        с нужными вам параметрами и ключевыми словами
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>

                    <section className='consultation'>
                        <div className='container'>
                            <div className='consultation_info'>
                                <div className='consultation_info_logo'>

                                </div>
                                <h4 className='consultation_info_title'>
                                    <span>Сэкономьте время на поиске подходящих тендеров</span>
                                    и увеличьте ваши шансы на победу!

                                </h4>
                                <div className='consultation_info_actions'>
                                    <div className='consultation_info_actions-item'>
                                        <button className='ui-btn'>
                                            Попробовать бесплатно
                                        </button>
                                        <i>без консультаций и подачи заявок</i>
                                    </div>
                                    <div className='consultation_info_actions-item'>
                                        <button className='ui-btn-light'>
                                            Получить доступ к сервису
                                        </button>
                                        <i>с консультациями и подачей заявок</i>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </section>
                    <section id='subscribtion-options' className='subscription'>
                        <div className='container'>
                            <h3 className='ui-section-title'>
                                Что дает подписка на сервис
                                <mark>Tenderkit?</mark>
                            </h3>
                            <div className='subscription_banner'>
                                <p>
                                    <em>Даже если у вас в штате есть профильные специалисты,</em>
                                    наши консультации позволят сделать их работу эффективнее и избежать
                                    досадных ошибок при участии в закупках!

                                </p>

                            </div>
                            <div className='subscription_lists'>
                                <ul>
                                    <li><p>
                                        <em>Снижение финансовых рисков</em>
                                        и затрат, а также возможность
                                        найти инвесторов
                                    </p></li>
                                    <li><p>
                                        <em>Снижение финансовых рисков</em>
                                        и затрат, а также возможность
                                        найти инвесторов
                                    </p></li>
                                    <li><p>
                                        <em>Снижение финансовых рисков</em>
                                        и затрат, а также возможность
                                        найти инвесторов
                                    </p></li>
                                </ul>
                                <ul>
                                    <li><p>
                                        <em>Снижение финансовых рисков</em>
                                        и затрат, а также возможность
                                        найти инвесторов
                                    </p></li>
                                    <li><p>
                                        <em>Снижение финансовых рисков</em>
                                        и затрат, а также возможность
                                        найти инвесторов
                                    </p></li>
                                    <li><p>
                                        <em>Снижение финансовых рисков</em>
                                        и затрат, а также возможность
                                        найти инвесторов
                                    </p></li>
                                </ul>


                            </div>

                        </div>

                    </section>
                    <section className='how-it-works'>
                        <div id='how-it-works' className='container'>
                            <h3 className='ui-section-title'>Как это работает?</h3>
                            <ol className='how-it-works__list'>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Заявка</b>
                                        <p>
                                            Оставьте заявку на нашем сайте или позвоните по указанному на
                                            сайте номеру
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Заявка</b>
                                        <p>
                                            Оставьте заявку на нашем сайте или позвоните по указанному на
                                            сайте номеру
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Согласование</b>
                                        <p>
                                            С вами свяжется менеджер, чтобы обсудить детали и ваши потребности
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Демо-доступ</b>
                                        <p>
                                            Заключаем с вами договор и получаем оплату за подписку на сервис Tenderkit
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Подключение сервиса</b>
                                        <p>
                                            Вы получаете доступ ко всем функциям сервиса и безлимитным консультациям
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Настройка рассылки</b>
                                        <p>
                                            Вы задаёте параметры, по которым программа будет отбирать для вас тендеры
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Участие в тендерах</b>
                                        <p>
                                            Подавайте заявки, проходите квалификационный отбор и участвуйте в тендерах
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Заявка</b>
                                        <p>
                                            Оставьте заявку на нашем сайте или позвоните по указанному на
                                            сайте номеру
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='how-it-works__item-inner'>
                                        <b>Сопровождение и консультации</b>
                                        <p>
                                            Мы будем консультировать на всех этапах участия в тендере и даже после победы
                                        </p>
                                    </div>
                                </li>


                            </ol>

                        </div>

                    </section>
                    <section className='risk'>
                        <div className='container'>

                            <h3 className='ui-section-title'>Tenderkit</h3>
                            <p className="risk__description"><b>Исключите риск отклонения заявок на участие в тендерах</b> <span>
                                Обращаясь к нам за помощью в подготовке документов и подаче
                                <br />заявки –вы получаете 100% гарантию допуска к тендеру!
                            </span></p>
                            <button className="risk__btn ui-btn-light">
                                Оставить заявку
                            </button>
                        </div>

                    </section>
                    <section id="advantages" className="advantages">
                        <div className="container">
                            <h3 className="ui-section-title">
                                Преимущества сервиса
                                <mark>TenderKit</mark>
                            </h3>
                            <div className="advantages__options">
                                <ul>
                                    <li className="advantages__option">
                                        <div className="advantages__option-icon">
                                            <img src={advantages1} />
                                        </div>
                                        <b> Безлимитные консультации </b>
                                        <p>
                                            Вы сможете задавать вопросы нашим юристам и специалистам по
                                            закупкам без ограничений по времени и количеству обращений
                                        </p>
                                    </li>
                                    <li className="advantages__option">
                                        <div className="advantages__option-icon">
                                            <img src={advantages2} />
                                        </div>
                                        <b> До 2 почтовых ящиков </b>
                                        <p>
                                            Вы сможете указать для рассылки 2 почтовых ящика, например, чтобы
                                            подборка тендеров приходила и вам, и вашему сотруднику
                                        </p>
                                    </li>
                                    <li className="advantages__option">
                                        <div className="advantages__option-icon">
                                            <img src={advantages3} />
                                        </div>
                                        <b> Бонусные подачи заявок </b>
                                        <p>
                                            При оплате подписки вы получаете от 3 до 10 подач заявок на
                                            порталах goszakup.gov.kz и zakup.sk.kz бесплатно!
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="advantages__option">
                                        <div className="advantages__option-icon">
                                            <img src={advantages4} />
                                        </div>
                                        <b> Возможность выгрузки в Excel </b>
                                        <p>
                                            Воспользуйтесь этой функцией, если вам удобнее просматривать
                                            выбранные тендеры в виде таблицы, чем письма на почте
                                        </p>
                                    </li>
                                    <li className="advantages__option">
                                        <div className="advantages__option-icon">
                                            <img src={advantages5} />
                                        </div>
                                        <b> Наличие базы инвесторов </b>
                                        <p>
                                            Если вам потребуется финансирование, мы покажем ваше предложение
                                            потенциальным инвесторам и свяжем вас с теми, кого оно
                                            заинтересует
                                        </p>
                                    </li>
                                    <li className="advantages__option">
                                        <div className="advantages__option-icon">
                                            <img src={advantages6} />
                                        </div>
                                        <b> Гарантия 100% допуска к тендеру </b>
                                        <p>
                                            Если подготовкой займутся наши специалисты, мы гарантируем, что вы
                                            пройдете квалификационный отбор для участия в тендере!
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="business-protection">
                        <div className="container">
                            <div className="business-protection__info">
                                <h3>
                                    Мы защитим вас от попадания в реестр недобросовестных поставщиков!
                                </h3>
                                <p>
                                    Отстранение от участия в тендерах на 2 года может стать причиной
                                    финансовых потерь для компании. Консультации наших юристов и
                                    специалистов по тендерам помогут этого избежать!
                                </p>
                                <div className="business-protection__action">
                                    <button className="ui-btn">
                                        Получить доступ к сервису
                                    </button>
                                    <i> с подачей заявок и безлимитными консультациями </i>
                                </div>
                            </div>
                            <div className="business-protection__shield">
                                <img src={shield} alt="На защите вашего бизнеса" />
                                <span className="business-protection__text">Tenderkit</span>
                            </div>
                        </div>
                    </section>
                    <section className="online-service">
                        <div className="container">
                            <h3 className="ui-section-title">
                                Онлайн-сервис
                                <mark>Tenderkit</mark>
                            </h3>
                            <div className="online-service__info">
                                <div className="online-service__img">
                                    <img src={phone} alt="Онлайн-сервис" />
                                </div>
                                <p className="online-service__description">
                                    <em>
                                        Tenderkit
                                        – это
                                        консультационно-информационная платформа
                                    </em>
                                    <span>
                                        по государственным и коммерческим закупкам в Казахстане. У нас в
                                        команде – квалифицированные специалисты по тендерам и юристы с
                                        опытом до 10 лет.
                                    </span>
                                </p>
                            </div>
                            <div className="online-service__banner">
                                <q>
                                    Наша главная цель – помочь клиентам принять участие в тендерах с
                                    минимальными рисками и максимальными шансами на победу!
                                </q>
                                <figure className="online-service__reward">
                                    <div className="online-service__reward-inner">
                                        <img src={reward} alt="«Выбор страны 2022»" />
                                        <figcaption>
                                            Лауреат премии
                                            <b>«Выбор страны 2022»</b>
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </section>

                    <section className="numbers">
                        <div className="container">
                            <h3 className="ui-section-title">О нас в цифрах</h3>
                            <ul className="numbers__grid">
                                <li>
                                    <b>2016</b>
                                    <span>начали работу в сфере тендеров</span>
                                </li>
                                <li>
                                    <b>2017</b>
                                    <span>год открытия компании</span>
                                </li>
                                <li>
                                    <b>&gt; 3000</b>
                                    <span>действующих клиентов</span>
                                </li>
                                <li>
                                    <b>35 – 50</b>
                                    <span>запросов в день обрабатываем</span>
                                </li>
                                <li>
                                    <b>4,8</b>
                                    <span>средняя оценка в Google</span>
                                </li>
                                <li>
                                    <b>98%</b>
                                    <span>довольных клиентов</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="procurement-banner">
                        <div className="container">

                            <h3 className='ui-section-title'>Tenderkit</h3>

                            <p>
                                <em>Tenderkit найдет для вас подходящие закупки</em>
                                , а наши специалисты
                                помогут избежать проблем при подаче заявок и участии в тендерах
                            </p>
                            <div className="procurement-banner__action">
                                <button className="ui-btn-light">
                                    Получить доступ к сервису
                                </button>
                                <i>с консультациями и подачей заявок</i>
                            </div>
                        </div>
                    </section>
                    <section id="team" className="team">
                        <div className="container">
                            <h3 className="ui-section-title">Наша команда</h3>
                            <ul className="team__gallery">
                                <li className="team__gallery-item">
                                    <div className="team__gallery-item-photo">
                                        <img src={team1} alt="Дастан Аушахимов" />
                                    </div>
                                    <b>Дастан Аушахимов</b>
                                    <span>коммерческий директор</span>
                                </li>
                                <li className="team__gallery-item">
                                    <div className="team__gallery-item-photo">
                                        <img src={team1} alt="Ермек Ержан" />
                                    </div>
                                    <b>Ермек Ержан</b>
                                    <span>руководитель исходящего отдела</span>
                                </li>
                                <li className="team__gallery-item">
                                    <div className="team__gallery-item-photo">
                                        <img src={team1} alt="Данияр Канафиев" />
                                    </div>
                                    <b>Данияр Канафиев</b>
                                    <span>руководитель исходящего отдела</span>
                                </li>
                                <li className="team__gallery-item">
                                    <div className="team__gallery-item-photo">
                                        <img src={team1} alt="Дана Гончарук" />
                                    </div>
                                    <b>Дана Гончарук</b>
                                    <span>руководитель отдела техподдержки</span>
                                </li>
                                <li className="team__gallery-item">
                                    <div className="team__gallery-item-photo">
                                        <img src={team1} alt="Искакова Арай" />
                                    </div>
                                    <b>Арай Салтанат</b>
                                    <span>руководитель отдела закупок</span>
                                </li>
                                <li className="team__gallery-item">
                                    <div className="team__gallery-item-photo">
                                        <img src={team1} alt="Адильхан Рогов" />
                                    </div>
                                    <b>Адильхан Рогов</b>
                                    <span>руководитель входящего отдела</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="reviews" className="reviews">
                        <div className="container">
                            <h3 className="reviews__title ui-section-title">
                                Отзывы пользователей
                                <mark>Tenderkit</mark>
                            </h3>
                            <div className="reviews__carousel-wrapper">
                                <div className="VueCarousel reviews__carousel">
                                    <div className="VueCarousel-wrapper">
                                        <div className="VueCarousel-inner">
                                            <div tabIndex="-1" role="tabpanel" className="VueCarousel-slide reviews__slide" aria-hidden="true">
                                                <p className="reviews__slide-description">
                                                    «На протяжении 3-х лет Ваша компания зарекомендовала себя, как ответственная команда профессионалов».
                                                </p>
                                                <div className="reviews__slide-img-wrapper">
                                                    <img src="https://tenderbot.kz/images/review/1619689834.png?s=1000&amp;d=wavatar&amp;r=g" alt="ООО &quot;Купер&quot;"
                                                        className="reviews__slide-img" />
                                                </div>
                                            </div>
                                            <div tabIndex="-1" role="tabpanel" className="VueCarousel-slide reviews__slide" aria-hidden="true">
                                                <p className="reviews__slide-description">
                                                    «Ваши менеджеры всегда оперативно отвечают на все вопросы.
                                                    Пользоваться площадкой очень удобно»
                                                </p>
                                                <div className="reviews__slide-img-wrapper">
                                                    <img src="https://tenderbot.kz/images/review/1619689957.png?s=1000&amp;d=wavatar&amp;r=g"
                                                        alt="TOO &quot;Connect Energy&quot;" className="reviews__slide-img" />
                                                </div>
                                            </div>
                                            <div tabIndex="-1" role="tabpanel" className="VueCarousel-slide reviews__slide" aria-hidden="true">
                                                <p className="reviews__slide-description">
                                                    «Благодаря вашим усилиям наша компания приобрела новых клиентов
                                                    и расширила спектр своей деятельности»
                                                </p>
                                                <div className="reviews__slide-img-wrapper">
                                                    <img src="https://tenderbot.kz/images/review/1619694221.png?s=1000&amp;d=wavatar&amp;r=g"
                                                        alt="ТОО &quot;FAM.ALLIANCE&quot;" className="reviews__slide-img" />

                                                </div>
                                            </div>
                                            <div tabIndex="-1" role="tabpanel" className="VueCarousel-slide reviews__slide" aria-hidden="true">
                                                <p className="reviews__slide-description">
                                                    «Под вашим руководством нам удалось выиграть и подписать тендер на закупку борцовских матов»
                                                </p>
                                                <div className="reviews__slide-img-wrapper">
                                                    <img src="https://tenderbot.kz/images/review/1619694982.png?s=1000&amp;d=wavatar&amp;r=g"
                                                        alt="ТОО &quot;Diamond Corp&quot;" className="reviews__slide-img" />
                                                </div>
                                            </div>
                                            <div tabIndex="-1" role="tabpanel" className="VueCarousel-slide reviews__slide" aria-hidden="true">
                                                <p className="reviews__slide-description">
                                                    «Выиграли тендер на общую сумму 1 622 830.90 тенге»
                                                </p>
                                                <div className="reviews__slide-img-wrapper">
                                                    <img src="https://tenderbot.kz/images/review/1619694966.png?s=1000&amp;d=wavatar&amp;r=g"
                                                        alt="ТОО &quot;CASPIAN SUPPLY PARTNERS&quot;" className="reviews__slide-img" />
                                                </div>
                                            </div>
                                            <div tabIndex="-1" role="tabpanel" className="VueCarousel-slide reviews__slide" aria-hidden="true">
                                                <p className="reviews__slide-description">
                                                    «Выиграл крупный тендер и не мог найти финансирование. Благодарю портал Tenderkit.kz за нахождение инвестора
                                                    в кратчайшие сроки».
                                                </p>
                                                <div className="reviews__slide-img-wrapper">
                                                    <img src="https://tenderbot.kz/images/review/1619694806.png?s=1000&amp;d=wavatar&amp;r=g"
                                                        alt="ТОО &quot;АТЛАНТИДА LTD&quot;" className="reviews__slide-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__actions">
                                <div className="reviews__action">
                                    <button className="ui-btn">
                                        Попробовать бесплатно
                                    </button>
                                    <i>без консультаций и подачи заявок</i>
                                </div>
                                <div className="reviews__action">
                                    <button className="ui-btn-light">
                                        Получить доступ к сервису
                                    </button>
                                    <i>с консультациями и подачей заявок</i>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="trust-us">
                        <div className="container">
                            <h3 className="ui-section-title">Нам доверяют</h3>
                            <ul className="trust-us__partners">
                                <li>
                                    <ul>
                                        <li>
                                            <img src={partner1} alt="Halyk Bank" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Tranco" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="CAT" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Forte Bank" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Ordamed" />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <img src={partner1} alt="Eurasian Bank" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Sinooil" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="КАЗТЕМIРТРАНС" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Chevron" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Битрикс 24" />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <img src={partner1} alt="NLS KAZAKHSTAN" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Jet Logistic" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Freedom finance" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="TELE2" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Кумтор Голд Компани" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="KSP Steel" />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <img src={partner1} alt="KZT Express" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Махина-ТСТ" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="DPS" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Карат" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="Alina" />
                                        </li>
                                        <li>
                                            <img src={partner1} alt="KPMG" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="questions">
                        <div className="container">
                            <h3 className="ui-section-title">Вопросы – ответы</h3>
                            <div className="questions__subtitle">Нажмите, чтобы развернуть</div>
                            <ul className="questions__list">
                                {questions.map((item, index) => (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                        isActive={activeIndex === index}
                                        onClick={() => handleToggle(index)}
                                    />
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};


export default AboutService;