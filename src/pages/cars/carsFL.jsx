import triangle from "../../assets/images/triangle.svg";
import CarsDocSteps from "../../components/CarsDocSteps";
import StepOneInputs from "../../components/carsPagesComponents/StepOneInputs";
import BannerImage from "../../components/carsPagesComponents/BannerComponents/BannerImage";
import BannerTitle from "../../components/carsPagesComponents/utilities/BannerTitle";
import styles from "./carsFL.module.scss";
import SEO from "../../components/SEO";

export default function CarsFLPages() {
    return (
        <>
            <SEO title="Подбор авто из Кореи для физических лиц | Поставка автомобилей под заказ" description="Подбор автомобилей из Кореи для физических лиц. Полное сопровождение: поиск, проверка, доставка, таможенное оформление. Депозит от 100 000₽. Помощь в оформлении документов." keywords="подбор авто из Кореи для физических лиц, купить авто из Кореи физическому лицу, поставка авто из Кореи для ФЛ, таможенное оформление авто для физических лиц, автомобиль из Кореи под заказ" url="https://it-alliance.ru/cars/fl"/>
            <div className="container">
                {/* ====== ШАГ 1 ====== */}
                <section className={styles.stepSection}>
                    <div className={styles.stepHeader}>
                        <CarsDocSteps title="ШАГ №1" subtitle="РАЗМЕЩЕНИЕ ЗАЯВКИ"/>
                        <div className={styles.buttonWrapper}>
                            <a href="https://asiaalliance.ru/contacts#feedback" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-dark ">
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
                    <CarsDocSteps title="ШАГ №3" subtitle="Заключение Агентского договора на приобретение и оплату автомобиля. Внесение Депозита"/>
                    <div className={styles.stepContent}>
                        <div className={styles.listItem}>
                            <div className={styles.listMarker}>
                                <span className={styles.markerLine}></span>
                                <span className={styles.markerDot}></span>
                            </div>
                            <p className={styles.listText}>
                                Для возможности быстрого бронирования автомобиля и подробного
                                осмотра с видеофиксацией необходимо внести{" "}
                                <span className={styles.redText}>ДЕПОЗИТ</span>. </p>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listMarker}>
                                <span className={styles.markerLine}></span>
                                <span className={styles.markerDot}></span>
                            </div>
                            <p className={styles.listText}>
                                На данном этапе ИТ Альянс заключает с Вами{" "}
                                <b>Агентский договор на подбор автомобиля.</b> Для подписания
                                договора мы пригласим Вас в наш офис или направим курьера. В
                                рамках заключенного и подписанного договора выставляется счет,
                                который можно оплатить с помощью мобильного приложения или в
                                отделении Вашего банка. </p>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listMarker}>
                                <span className={styles.markerLine}></span>
                                <span className={styles.markerDot}></span>
                            </div>
                            <p className={styles.listText}>
                                Размер депозита – <b>100 000 рублей</b>. </p>
                        </div>
                        <div className={styles.noteWithRed}>
                            <span className={styles.noteStarLarge}>*</span>
                            <span className={styles.noteTextLarge}>
              Депозит может быть возвращен или учтен в стоимость автомобиля. В
              случае отказа от приобретения автомобиля после осмотра депозит
              возвращается за вычетом расходов на проведенные осмотры. В случае
              отказа от выкупа автомобиля после его бронирования депозит НЕ
              возвращается.
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
                    <CarsDocSteps title="ШАГ №5" subtitle="Подписание договора на поставку автомобиля с корейской компанией"/>
                    <div className={styles.contractBlock}>
                        <div className={styles.contractHeader}>
                            <div className={styles.contractHeaderText}>
                                На данном этапе Вы подписываете договор с корейской
                                компанией-поставщиком и Вам
                                <span className={styles.contractHeaderRed}>
                {" "}
                                    выставляется 2 счета на оплату:
              </span>
                            </div>
                        </div>
                        <div className={styles.invoicesGrid}>
                            <div className={styles.invoiceCard}>
              <span className={styles.invoiceTitle}>
                <span className={styles.redText}>Счет</span> на вознаграждение
                агента
              </span>
                                <p className={styles.invoiceText}>
                                    Сумма оплаченного ранее депозита идет в зачет оплаты за
                                    автомобиль. Сумма депозита конвертируется в у.е. по курсу на
                                    день оплаты счета на стоимость автомобиля. Агент переводит
                                    полученный аванс на расчетный счет поставщика в Корее, после
                                    чего Автомобиль выкупается. </p>
                            </div>
                            <div className={styles.invoiceCard}>
              <span className={styles.invoiceTitle}>
                <span className={styles.redText}>Счет</span> на стоимость
                автомобиля
              </span>
                                <p className={styles.invoiceText}>
                                    Счет выставляется в у.е. (USD) с учетом стоимости доставки
                                    Корея-Владивосток и услуг дилера (по предварительной
                                    договоренности возможна фиксация в рублях на день оплаты, в
                                    данном случае счет на оплату действителен 1 день) </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== ШАГ 6 ====== */}
                <section className={styles.stepSection}>
                    <CarsDocSteps title="ШАГ №6" subtitle="ЛОГИСТИКА, ТАМОЖЕННОЕ ОФОРМЛЕНИЕ"/>
                    <div className={styles.bannerBorder}>
                        <div className={styles.bannerContent}>
                            <p>
                                <BannerTitle title={"Все платежи в РФ оплачиваются Вами лично"} size={22} style={""}/>{" "}
                                <BannerTitle title={"в российских рублях."} size={22} style={"font-bold"}/>
                            </p>
                            <BannerTitle title={
                                "Сумма окончательных платежей может меняться в зависимости от колебания курса валют."
                            } size={22} style={""}/>
                        </div>
                        <BannerImage color="red"/>
                    </div>
                    <div className={styles.noteWithMargin}>
                        <span className={styles.noteStar}>*</span>
                        <span className={styles.noteTextGray}>
            По законодательству РФ для таможенного оформления автомобиля на
            физическое лицо, у Вас должна быть прописка или временная
            регистрация в месте нахождения таможенного пункта. Брокер подготовит
            все необходимые документы и сделает Вам временную регистрацию. Для
            этого необходимо направить в адрес брокера заверенную нотариусом
            копию двух страниц паспорта (разворот) лицевая сторона и прописка.
            Это возможно сделать напрямую у Вашего нотариуса нотариусу во
            Владивосток, либо СДЭК/Почтой России в адрес брокера.
          </span>
                    </div>
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
                                <p className={styles.stageText}>
                                    Таможенный брокер{" "}
                                    <b>
                                        встречает автомобиль во Владивостоке и запускает процесс
                                        таможенного оформления
                                    </b>
                                </p>
                                <div className={styles.stageRow}>
                                    <p className={styles.stageSubtext}>
                                        Мы предлагаем следующие варианты доставки: </p>
                                    <p className={styles.stageSublink}>
                                        <b>Срок:</b> 3-7 рабочих дней. </p>
                                </div>
                                <div className={styles.documentsGrid}>
                                    <div className={styles.documentCard}>
                                        Фото разворота паспорта: лицевая сторона и прописка
                                    </div>
                                    <div className={styles.documentCard}>
                                        Фото водительского удостоверения
                                    </div>
                                    <div className={styles.documentCard}>ИНН</div>
                                    <div className={styles.documentCard}>СНИЛС</div>
                                    <div className={`${styles.documentCard} ${styles.documentCardFull}`}>
                                        Заверенная нотариусом копия 2 страниц паспорта: лицевая
                                        сторона и прописка.
                                    </div>
                                </div>
                                <div className={styles.noteWithMargin}>
                                    <span className={styles.noteStarLarge}>*</span>
                                    <span className={styles.noteTextLarge}>
                  Инициировать процесс таможенной очистки можно только в случае
                  наличия всех перечисленных документов у брокера, в противном
                  случае сроки увеличиваются и возникают дополнительные расходы
                  на содержание автомобиля на таможенном складе (СВХ). Данные
                  расходы будут перевыставлены в рамках заключенного Агентского
                  договора. В случае нарушения сроков поставки по причине
                  несвоевременного предоставления брокеру запрошенных документов
                  Агент не несет ответственность за увеличение сроков поставки
                  автомобиля.
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
                                    <b>
                                        Казначейство РФ выставляет счета на Ваше имя на оплаты
                                        таможенных платежей и сборов.
                                    </b>{" "}
                                    Данный счет оплачивается в отделении банка. </p>
                                <div className={styles.noteWithMargin}>
                                    <span className={styles.noteStarLarge}>*</span>
                                    <span className={styles.noteTextLarge}>
                  Оплата таможенных платежей должна быть произведена лицом, на
                  которого данный автомобиль был растаможен. В случае нарушения
                  сроков поставки по причине несвоевременной оплаты данных
                  счетов и/или оплаты на ошибочные реквизиты и/или оплаты от
                  неверного физического лица Агент не несет ответственность за
                  увеличение сроков поставки автомобиля.
                </span>
                                </div>
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
                                    После зачисления оплаты{" "}
                                    <b>брокер забирает автомобиль и перевозит его в Лабораторию</b>{" "}
                                    для получения сертификата безопасности. Документы готовятся{" "}
                                    <span className={styles.redTextBold}>3-7 рабочих дней</span>,
                                    после чего на Ваше имя <b>выпускается ЭПТС</b>. </p>
                            </div>
                        </div>
                        {/* Этап 4 */}
                        <div className={styles.stageItem}>
                            <div className={styles.stageNumber}>
                                <div className={styles.stageNumberCircle}>4</div>
                                <div className={styles.stageLine}>
                                    <div className={styles.lineVertical}></div>
                                    <div className={styles.lineDot}></div>
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    <b>
                                        Для получения ЭПТС необходимо заблаговременно пройти
                                        регистрацию в системе электронных паспортов.
                                    </b>{" "}
                                    По Вашему желанию мы предоставим Вам инструкцию. </p>
                            </div>
                        </div>
                        {/* Этап 5 */}
                        <div className={styles.stageItem}>
                            <div className={styles.stageNumber}>
                                <div className={styles.stageNumberCircle}>5</div>
                                <div className={styles.stageLine}>
                                    <div className={styles.lineVertical}></div>
                                    <div className={styles.lineDot}></div>
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    После получения ЭПТС{" "}
                                    <b>необходимо оплатить брокерские услуги и лабораторию</b> на
                                    основании выставленных счетов. Данные счета Вы оплачиваете
                                    самостоятельно <b>без участия Агента.</b>
                                </p>
                            </div>
                        </div>
                        {/* Этап 6 */}
                        <div className={styles.stageItem}>
                            <div className={styles.stageNumber}>
                                <div className={styles.stageNumberCircle}>6</div>
                                <div className={styles.stageLine}>
                                    <div className={styles.lineVertical}></div>
                                    <div className={styles.lineDot}></div>
                                </div>
                            </div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    После оплаты брокерских услуг{" "}
                                    <b>автомобиль перемещается на стоянку транспортной компании.</b>{" "}
                                    Мы предлагаем следующие варианты доставки: </p>
                                <div className={styles.deliveryOptions}>
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
                        </div>
                        {/* Этап 7 */}
                        <div className={styles.stageItemCompact}>
                            <div className={styles.stageNumberCompact}>
                                <div className={styles.stageNumberCircle}>7</div>
                                <div className={styles.stageLineCompact}>
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
                        {/* Этап 8 */}
                        <div className={styles.stageLast}>
                            <div className={styles.stageNumberLast}>8</div>
                            <div className={styles.stageContent}>
                                <p className={styles.stageText}>
                                    После отправки необходимо <b>оплатить услуги Перевозчика</b> на
                                    основании выставленных счетов. </p>
                            </div>
                        </div>
                        <div className={styles.totalTimeBlock}>
                            <div className={styles.totalTimeRed}>
                                <div className={styles.totalTimeText}>
                                    Общее время доставки автомобиля до Москвы с момента выкупа
                                    автомобиля - <span className={styles.totalTimeBlack}>30-60 дней</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.finalBorder}>
                            <div className={styles.finalText}>
                                Мы доставим Ваш автомобиль по указанному Вами адресу или
                                передадим в одном из партнерских детейлинг-центров.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}