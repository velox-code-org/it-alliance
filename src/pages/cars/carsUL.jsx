import triangle from "../../assets/images/triangle.svg";
import CarsDocSteps from "../../components/CarsDocSteps";
import StepOneInputs from "../../components/carsPagesComponents/StepOneInputs";
import BannerTitle from "../../components/carsPagesComponents/utilities/BannerTitle";
import BannerImage from "../../components/carsPagesComponents/BannerComponents/BannerImage";
import MainTitleText from "../../components/carsPagesComponents/utilities/MainTitleText";
import TableBlock from "../../components/carsPagesComponents/TableBlock";
import styles from "./carsUL.module.scss";
import SEO from "../../components/SEO";

export default function CarsULPages() {
    return (
        <>
            <SEO title="Поставка авто из Кореи для юридических лиц | Подбор автомобилей для бизнеса" description="Поставка автомобилей из Кореи для юридических лиц. Полное сопровождение: подбор, проверка, доставка, таможенное оформление. Вычет НДС, лизинг, работа с юрлицами. Стоимость подбора от 2 500 USD." keywords="поставка авто из Кореи для юридических лиц, автомобили для бизнеса из Кореи, импорт авто из Кореи для ЮЛ, таможенное оформление авто для юрлиц, вычет НДС при ввозе авто, лизинг авто из Кореи" url="https://it-alliance.ru/cars/ul"/>
            <div className="container">
                {/* ====== ШАГ 1 ====== */}
                <section className={styles.stepSection}>
                    <div className={styles.stepHeader}>
                        <CarsDocSteps title="ШАГ №1" subtitle="РАЗМЕЩЕНИЕ ЗАЯВКИ"/>
                        <div className={styles.buttonWrapper}>
                            <a href="https://asiaalliance.ru/contacts#feedback" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-dark">
                                ОСТАВИТЬ ЗАЯВКУ
                            </a>
                        </div>
                    </div>
                    {/* ====== FORM BLOCK ====== */}
                    <div className={styles.formBlock}>
                        <div className={styles.formHeader}>
                            <div className={styles.formHeaderText}>
                                ДЛЯ НАЧАЛА ПОИСКА АВТОМОБИЛЯ НЕОБХОДИМО ЗАПОЛНИТЬ ЗАЯВКУ:
                            </div>
                        </div>
                        <StepOneInputs/>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoBlockRed}>
                                <div className={styles.infoBlockText}>
                                    МЕНЕДЖЕР{" "}
                                    <span className={styles.infoBlockBlack}>
                  ПОДБЕРЕТ ВАРИАНТЫ АВТОМОБИЛЕЙ
                </span>{" "}
                                    ПОД ВАШ ЗАПРОС И ПРЕДОСТАВИТ ПОДРОБНЫЙ РАСЧЕТ ВСЕХ ПРЕДСТОЯЩИХ
                                    РАСХОДОВ
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 2 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №2" subtitle="ПОИСК И ПОДБОР"/>
                    <div className={styles.stepContent}>
                        <div className={styles.bannerBorder}>
                            <div className={styles.bannerContent}>
                                <p>
                                    <BannerTitle title={"Мы подберём Вам варианты автомобилей, которые"} size={22} style={""}/>{" "}
                                    <BannerTitle title={"соответствуют вашим параметрам."} size={22} style={"italic"}/>
                                </p>
                                <BannerTitle title={"Вы выбираете понравившийся автомобиль."} size={22} style={"font-bold ttu"}/>
                            </div>
                            <BannerImage color="red"/>
                        </div>
                        <div className={styles.mainTitleWrapper}>
                            <MainTitleText title={
                                "В рамках выставленного коммерческого предложения вы получите информацию о всех расходах, формирующих итоговую стоимость автомобиля под ключ:"
                            } size={19} style={"leading-[1.4] w-full text-gray-800 mb-4 uppercase"}/>
                        </div>
                        <TableBlock/>
                        <div className={styles.notes}>
                            <div className={styles.noteItem}>
                                <span className={styles.noteStar}>*</span>
                                <span className={styles.noteText}>
                Расчеты производятся исходя из курса ЦБ на день формирования
                расчета и могут меняться в связи с изменением курса валют.
              </span>
                            </div>
                            <div className={styles.noteItem}>
                                <span className={styles.noteStar}>*</span>
                                <span className={styles.noteText}>
                Все расходы по РФ действительны в день формирования расчета и
                могут меняться в связи с изменением курса валют, тарифов
                брокерской и логистической компаний, законодательства РФ.
              </span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 3 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №3" subtitle="ЗАКЛЮЧЕНИЕ ДОГОВОРА НА ПОДБОР АВТОМОБИЛЯ"/>
                    <div className={styles.stepContent}>
                        <div className={styles.listItem}>
                            <div className={styles.listMarker}>
                                <span className={styles.markerLine}></span>
                                <span className={styles.markerDot}></span>
                            </div>
                            <p className={styles.listText}>
                                Для возможности быстрого бронирования автомобиля и подробного
                                осмотра с видео-фиксацией необходимо{" "}
                                <span className={styles.redText}>
                заключить договор и оплатить услуги по подбору автомобиля.
              </span>
                            </p>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listMarker}>
                                <span className={styles.markerLine}></span>
                                <span className={styles.markerDot}></span>
                            </div>
                            <p className={styles.listText}>
                                Стоимость услуги по подбору автомобиля –{" "}
                                <span className={styles.redTextBold}>
                2 500 долларов США.
              </span>
                            </p>
                        </div>
                        <div className={styles.noteWithRed}>
                            <span className={styles.noteStarLarge}>*</span>
                            <span className={styles.noteTextLarge}>
              В случае успешного подбора автомобиля его стоимость будет снижена
              на стоимость оплаченной Вами услуги. В случае отказа от
              приобретения автомобиля после его осмотра стоимость услуги
              возвращается за вычетом расходов на проведенные осмотры. В случае
              отказа от выкупа автомобиля после его бронирования стоимость
              услуги НЕ возвращается.
            </span>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 4 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №4" subtitle="СОГЛАСОВАНИЕ АВТОМОБИЛЯ"/>
                    <div className={styles.bannerBorder}>
                        <div className={styles.bannerContent}>
                            <p>
                                <BannerTitle title={
                                    "Штатный сотрудник в Корее выезжает на дилерскую площадку и производит "
                                } size={22} style={""}/>{" "}
                                <BannerTitle title={"проверку ключевых параметров."} size={22} style={"italic"}/>
                            </p>
                            <p className={styles.blackText}>
                                <BannerTitle title={"По итогам проверки"} size={22} style={""}/>{" "}
                                <BannerTitle title={"предоставляется подробный фото и видео отчет"} size={22} style={"font-bold"}/>
                            </p>
                        </div>
                        <div className={styles.bannerImageDesktop}>
                            <BannerImage color="black"/>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 5 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №5" subtitle="Подписание договора на поставку автомобиля. ОПЛАТА В КОРЕЮ ЗА АВТОМОБИЛЬ"/>
                    <div className={styles.contractBlock}>
                        <div className={styles.contractHeader}>
                            <div className={styles.contractHeaderText}>
                                На данном этапе Ваша компания подписывает договор купли-продажи
                                автомобиля.
                                <br className={styles.contractHeaderBr}/>
                                В рамках подписанного договора{" "}
                                <span className={styles.contractHeaderRed}>
                необходимо совершить 2 платежа:
              </span>
                            </div>
                        </div>
                        <div className={styles.invoicesGrid}>
                            <div className={styles.invoiceCard}>
              <span className={styles.invoiceTitle}>
                <span className={styles.redText}>АВАНСОВЫЙ</span> ПЛАТЕЖ
              </span>
                                <p className={styles.invoiceText}>
                                    В размере, согласованном Сторонами, но не менее суммы
                                    расходов, понесенных до прибытия автомобиля во Владивосток –
                                    оплачивается в течение 3 дней с момента подписания договора. </p>
                            </div>
                            <div className={styles.invoiceCard}>
              <span className={styles.invoiceTitle}>
                <span className={styles.redText}>ОКОНЧАТЕЛЬНЫЙ</span> ПЛАТЕЖ
              </span>
                                <p className={styles.invoiceText}>
                                    Оплачивается в течение 3 дней с момента получения уведомления
                                    о готовности автомобиля к таможенной очистке. </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 6 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №6" subtitle="ЛОГИСТИКА, ТАМОЖЕННОЕ ОФОРМЛЕНИЕ"/>
                    <div className={styles.stagesTitle}>ЭТАПЫ:</div>
                    <div className={styles.stagesContainer}>
                        {/* Этап 1 */}
                        <div className={styles.stageItem}>
                            <div className={styles.stageNumber}>
                                <div className={styles.stageNumberCircle}>1</div>
                                <div className={styles.stageLine}>
                                    <div className={styles.lineVertical}></div>
                                    <div className={styles.lineDot}></div>
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageTextBold}>
                                    После прохождения таможенной очистки автомобиль перемещается на
                                    стоянку транспортной компании. </p>
                                <p className={styles.stageText}>
                                    Мы предлагаем следующие варианты доставки: </p>
                                <div className={styles.deliveryOptionsList}>
                                    <div className={styles.deliveryCard}>
                                        <img className={styles.triangleIcon} src={triangle} alt=""/>
                                        Автовозом
                                    </div>
                                    <div className={styles.deliveryCard}>
                                        <img className={styles.triangleIcon} src={triangle} alt=""/>
                                        Закрытым автовозом / фурой
                                    </div>
                                    <div className={styles.deliveryCard}>
                                        <img className={styles.triangleIcon} src={triangle} alt=""/>
                                        Поездом
                                    </div>
                                </div>
                                <div className={styles.noteBlock}>
                                    <span className={styles.noteStar}>*</span>
                                    <span className={styles.noteTextGray}>
                  Менеджер проконсультирует Вас по актуальным срокам и
                  стоимости разных вариантов доставки.
                </span>
                                </div>
                            </div>
                        </div>
                        {/* Этап 2 */}
                        <div className={styles.stageItem}>
                            <div className={styles.stageNumber}>
                                <div className={styles.stageNumberCircle}>2</div>
                                <div className={styles.stageLine}>
                                    <div className={styles.lineVertical}></div>
                                    <div className={styles.lineDot}></div>
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    После согласования выбранного способа доставки{" "}
                                    <b>Перевозчик принимает Ваш автомобиль.</b>
                                </p>
                                <p className={styles.stageText}>
                                    В день отправки{" "}
                                    <b>
                                        Перевозчик присылает фото/видео фиксацию процесса погрузки
                                        автомобиля.
                                    </b>
                                </p>
                            </div>
                        </div>
                        {/* Этап 3 */}
                        <div className={styles.stageItem}>
                            <div className={styles.stageNumber}>
                                <div className={styles.stageNumberCircle}>3</div>
                                <div className={styles.stageLine}>
                                    <div className={styles.lineVertical}></div>
                                    <div className={styles.lineDot}></div>
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    После прибытия автомобиля в Москву <b>оформляется ОТТС</b> —
                                    одобрение типа транспортного средства, сертификат,
                                    подтверждающий соответствие его технических характеристик
                                    требованиям безопасности и экологическим стандартам,
                                    установленным на территории Таможенного союза. </p>
                            </div>
                        </div>
                        {/* Этап 4 */}
                        <div className={styles.stageLast}>
                            <div className={styles.stageNumberLast}>4</div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    После получения ОТТС{" "}
                                    <b>выпускается ЭПТС и автомобиль готов к передаче.</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 7 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №7" subtitle="ВЫДАЧА АВТОМОБИЛЯ"/>
                    <div className={styles.deliveryText}>
                        <p className={styles.deliveryParagraph}>
                            По Вашему выбору{" "}
                            <span className={styles.deliveryBold}>
              автомобиль будет доставлен по указанному адресу
            </span>{" "}
                            или передан в один из наших партнерских детейлинг-центров. </p>
                    </div>
                    <div className={styles.totalTimeBlock}>
                        <div className={styles.totalTimeRed}>
                            <div className={styles.totalTimeText}>
                                Общее время доставки автомобиля до Москвы с учетом таможенного
                                оформления составляет{" "}
                                <span className={styles.totalTimeBlack}>30-60 дней</span> с момента
                                выкупа автомобиля
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}