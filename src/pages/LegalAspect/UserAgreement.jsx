import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Helmet } from 'react-helmet';
import React from 'react';
import './PrivacyPolicy.css';

const UserAgreement = () => {


    return (
        <div className='main'>
            <Helmet>
                <title>Пользовательское соглашение</title>
                <meta name="description" content="Пользовательское соглашение" />
                <meta property="og:title" content="Пользовательское соглашение" />
                <meta property="og:description" content="Пользовательское соглашение" />
            </Helmet>
            
            <div className='main-content'>
            <Header />
                <div className="contents">

                    <h1>Пользовательское соглашение</h1>
                    <p>ТОО "ZAKUPKI.KZ" предлагает Вам воспользоваться информационно-поисковой системой «Zakupki», размещенной на сайте <a href="http://www.zakupki.kz" target="_blank">http://www.zakupki.kz</a>, с целью поиска информации о государственных и коммерческих тендерах Казахстана, на указанных ниже условиях.</p>

                    <p>Правообладателем информационно-поисковой системы «Zakupki» является ТОО "ZAKUPKI.KZ", в соответствии со Свидетельством о государственной регистрации прав на объект авторского права № 0857 от 02 апреля 2018 года. Все права ТОО "ZAKUPKI.KZ" на программное обеспечение защищены законодательством Республики Казахстан и международными соглашениями об авторских правах, а также другими законами и соглашениями, регулирующими отношения, которые могут возникнуть в отношении прав на интеллектуальную собственность.</p>

                    <p>Информационные материалы сайта, авторские права на которые принадлежат ТОО "ZAKUPKI.KZ", могут быть воспроизведены Пользователем в любых средствах массовой информации, на серверах сети Интернет при условии наличия ссылки на Сервис, при размещении в сети Интернет обязательной является активная гиперссылка на Сайт Сервиса.</p>

                    <p>Пользователь Информационно-поисковой системы «Zakupki» (далее – Сервис или ИПС «Zakupki») получает информационно-коммуникационную услугу по схеме «запрос-ответ» в виде предоставления ему права пользования программным обеспечением ИПС «Zakupki», с помощью которого Пользователь самостоятельно, в соответствии с действующим законодательством Республики Казахстан, осуществляет сбор данных о государственных и коммерческих тендерах из открытых источников государственных органов и/или общедоступных электронных информационных ресурсов.</p>

                    <p>Подписка на Сервис оформляется по факту оплаты Пользователем денежных средств за услуги Сервиса, в соответствии с выбранным им тарифом. Информация о стоимости и функционале Сервиса размещена на Сайте в разделе «Тарифы и услуги».</p>

                    <p>Изменение стоимости и/или функционала Сервиса для Пользователей, оформивших Подписку, вступает в силу с момента внесения ими оплаты за следующий период Подписки.</p>

                    <p>В случае ограничения или прекращения предоставления Сервиса по техническим или иным причинам, не зависящим от ТОО "ZAKUPKI.KZ", сумма оплаты не подлежит возврату Пользователю.</p>

                    <p>Для всех действий, совершаемых Пользователем при использовании Сервиса, время их совершения устанавливается по времени города Астана.</p>

                    <p>Доступ к Сервису предоставляется 24 (двадцать четыре) часа в сутки, ежедневно, без перерывов, за исключением необходимости проведения технических работ, при недоступности источников или случаев, не зависящих от ТОО "ZAKUPKI.KZ".</p>

                    <p>По всем возникающим вопросам Пользователь может обращаться к менеджерам Поставщика Сервиса по телефону: +7-7172-57-90-00 и по электронной почте: <a href="mailto:info@zakupki.kz">info@zakupki.kz</a>.</p>

                    <p>Дальнейшее использование Сервиса означает полное и безоговорочное согласие Пользователя со следующими условиями:</p>


                    <p><strong>1 Пользователь гарантирует, что ни он сам, ни иные лица при его содействии, не будут:</strong></p>
                    <ul>

                        <li>1.1. создавать программы, производные от программного обеспечения ИПС «Zakupki»;</li>
                        <li>1.2. осуществлять разбор, декомпилирование, обратный инжиниринг, или иным способом пытаться или модифицировать, копировать или изменять, проникать в программное обеспечение и/или получить доступ к исходным кодам программного обеспечения или любой его части, а также к связанной с ним инфраструктуре;</li>
                        <li>1.3. совершать иные действия, без согласия ТОО "ZAKUPKI.KZ" и/или направленные на нарушение законных прав и интересов ТОО "ZAKUPKI.KZ" и/или третьих лиц;</li>
                        <li>1.4. использовать Сервис в целях мониторинга их доступности, производительности или функциональности, или для любых других сравнительных или конкурентных целей, в том числе не будут использоваться автоматическими и иными средствами и инструментами анализа данных;</li>

                     </ul>
                    <p><strong>2 Пользователь гарантирует, что:</strong></p>
                    <ul>

                        <li>2.1. указал достоверные идентификационные данные при регистрации;</li>
                        <li>2.2. обладает дееспособностью, правоспособностью, а также всеми правами и полномочиями, необходимыми для использования Сервиса в соответствии с настоящими условиями;</li>
                        <li>2.3. пользуется Сервисом добровольно, в своих интересах, связанных с осуществлением предпринимательской деятельности и/или для совершения разовой личной сделки;</li>
                        <li>2.4. ознакомлен со всеми условиями оказания услуг по Сервису, полностью их понимает и принимает;</li>
                        <li>2.5. полностью понимает значение и последствия своих действий в отношении использования Сервиса на указанных в нем условиях;</li>
                        <li>2.6. используя Сервис, не имеет противоправный умысел, направленный на нарушение прав, свобод и законных интересов третьих лиц, включая Объекты заинтересованности, не намерен использовать информацию, полученную с использованием Сервиса, в корыстных целях;</li>
                        <li>2.7. в полном объеме выполняет требования законодательства о персональных данных, включая, но не ограничиваясь, получение согласия Объекта заинтересованности-физического лица на сбор и обработку персональных данных из открытых источников государственных органов и/или общедоступных электронных информационных ресурсов, а также их защиту, и несет полную ответственность за свои действия (бездействие);</li>
                        <li>2.8. понимает и признает, что ТОО "ZAKUPKI.KZ" не является собственником или оператором баз, содержащих персональные данные;</li>
                        <li>2.9. осведомлен, осознает и принимает на себя обязательство нести риски реализации угроз информационной безопасности, включая, но не ограничиваясь, риски использования сервиса привязки банковской карты, возможного использования третьими лицами логина, пароля, номера карты, автоматической авторизации, в том числе при пересылке сообщения, полученного на электронную почту, и иной информации, а также, за несанкционированное использование регистрационных данных Пользователя третьими лицами;</li>
                        <li>2.10. оплата за использование Сервиса производится им лично либо с его согласия уполномоченным им лицом с личного расчетного счета (платежной карты) или уполномоченного им лица;</li>
                        <li>2.11. немедленно уведомить ТОО "ZAKUPKI.KZ" о любом случае несанкционированного доступа к личному кабинету Пользователя и/или о любом нарушении/подозрениях о нарушении конфиденциальности. В целях безопасности, самостоятельно осуществлять безопасное завершение работы по окончании каждой сессии работы в личном кабинете.</li>

                        </ul>
                    <p><strong>3 ТОО "ZAKUPKI.KZ" вправе без уведомления Пользователя:</strong></p>
                    <ul>

                        <li>3.1. заблокировать доступ Пользователя к Сервису по требованию государственных органов, а также в случае выявления факта нарушения Пользователем законодательства Республики Казахстан и настоящего Пользовательского соглашения при использовании Сервиса;</li>
                        <li>3.2. в одностороннем порядке изменять условия настоящего Пользовательского соглашения, дополнять, изменять, ограничивать, расширять функциональные возможности Сервиса и сайта, в том числе условия доступа Пользователя к Сайту/Сервису или их отдельным функциональным возможностям;</li>
                        <li>3.3. использовать информацию по «запросам-ответам» (обращениям) Пользователя для обеспечения полноты информации, предоставляемой через Сервис, а также для проведения анкетирования.</li>
                        <li>3.4. Осуществлять техническую поддержку и контроль функциональности Сервиса.</li>
                    </ul>
                    <p><strong>4 Пользователь соглашается, что:</strong></p>
                        <ul>

                        <li>Сервис и сайт ИПС «Zakupki» предоставляются "как есть" и в соответствии с его доступными функциональными возможностями;</li>
                        <li>ТОО "ZAKUPKI.KZ" не несет ответственности за точность и полноту данных, получаемых Пользователем через Сервис. В случае выявления факта нарушения прав и законных интересов третьих лиц, возникших в результате использования Сервиса, Пользователь несет ответственность в полном объеме;</li>
                        <ul>ТОО "ZAKUPKI.KZ" не несет ответственности за возможные убытки Пользователя, связанные с нарушением и/или прекращением доступа к Сервису в результате:

                            <li>технических неполадок, сбоя работы оборудования или программного обеспечения, произошедших по причинам, не зависящим от ТОО "ZAKUPKI.KZ";</li>
                            <li>неправильного или несанкционированного использования Пользователем информации, полученной в результате использования Сервиса;</li>
                            <li>отказа Пользователя от использования Сервиса;</li>
                            <li>других обстоятельств, не зависящих от ТОО "ZAKUPKI.KZ".</li>
 
                            </ul>
                        <li>Реализация условий настоящего Пользовательского соглашения осуществляется в соответствии с законодательством Республики Казахстан. Все споры и разногласия, возникающие в связи с настоящим Пользовательским соглашением, подлежат разрешению в судебном порядке в соответствии с законодательством Республики Казахстан.</li>

                        </ul>


                    <p>С последней редакцией настоящего Пользовательского соглашения можно ознакомиться на Сайте по адресу <a href="http://www.zakupki.kz" target="_blank">http://www.zakupki.kz</a>.</p>

                </div>
                <Footer />
            </div>
        </div>
    );
};


export default UserAgreement;