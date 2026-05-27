import RedLineText from "../components/RedLineText";
import TableAdvantages from "../components/table-advantages";
import SEO from "../components/SEO";

export default function CarsPages() {
    const advantagesData = [
        {
            category: "Прямые платежи из РФ",
            individuals: true,
            entities: true,
        },
        {
            category: "Прозрачное ценообразование",
            individuals: true,
            entities: true,
        },
        {
            category: "Гарантия юридической чистоты сделки",
            individuals: true,
            entities: true,
        },
        {
            category:
                "Собственный офис в Южной Корее, прямая закупка на корейском внутреннем рынке",
            individuals: true,
            entities: true,
        },
        {
            category: "Осмотр автомобиля штатными экспертами в Корее",
            individuals: true,
            entities: true,
        },
        {
            category:
                "Фото/Видео отчёт проверки авто/компьютерная диагностика, профессиональное оборудование",
            individuals: true,
            entities: true,
        },
        {
            category:
                "Гарантом сделки выступает агент ИТ Альянс с уставным капиталом 0,5 млрд рублей",
            individuals: true,
            entities: true,
        },
        {
            category: "Обширный выбор автомобилей разных ценовых категорий",
            individuals: true,
            entities: true,
        },
        {
            category:
                "Профессиональная подготовка автомобиля перед выдачей (детейлинг)",
            individuals: true,
            entities: true,
        },
        {
            category: "Сотрудничество с лизинговыми компаниями",
            individuals: true,
            entities: true,
        },
        {
            category: "Ввоз и таможенное оформление в соответствии с законами РФ",
            individuals: true,
            entities: true,
        },
        {
            category: "Информирование на всех этапах поставки",
            individuals: true,
            entities: true,
        },
        {
            category:
                "Оказание услуг «под ключ» с момента обращения до постановки авто на учет в РФ",
            individuals: true,
            entities: true,
        },
        {
            category:
                "Надежная доставка в любую точку России и стран СНГ (автовозы/ закрытые фуры/ эвакуаторы/ ЖД)",
            individuals: true,
            entities: true,
        },
        {
            category: "Возможность предъявления НДС к вычету в полном объёме",
            individuals: false,
            entities: true,
        },
        {
            category: "Страхование груза",
            individuals: true,
            entities: true,
        },
    ];

    const stepsData = [
        "<h4>Размещение заявки.</h4> Наши специалисты свяжутся с вами в кратчайшие сроки.",
        "<h4>Поиск и подбор.</h4> Подбираем несколько вариантов, подходящих под ваш запрос, предоставляя подробную информацию по каждому автомобилю.",
        "<h4>Заключение договора</h4> на подбор автомобиля. Осмотр и предоставление фото- и видео-отчетов по выбранным автомобилям.",
        "<h4>Согласование</h4> выбранного автомобиля. Контрольная <strong>проверка.</strong>",
        "<h4>Подписание договора</h4> на поставку. <strong>Оплата в Корею</strong> за автомобиль.",
        "<h4>Логистика</h4> таможенное оформление",
        "<h4>Выдача автомобиля.</h4> Дополнительные услуги детейлинга и персонализации автомобиля.",
    ];

    return (
        <>
            <SEO title="Авто из Кореи | Поставка автомобилей под заказ | IT Alliance" description="Поставка автомобилей из Кореи под заказ. Новые и с пробегом. Полное сопровождение: подбор, проверка, доставка, таможенное оформление. Более 2500 довольных клиентов. Гарантия чистоты сделки." keywords="авто из Кореи, поставка автомобилей из Кореи, подбор авто из Кореи, купить авто из Кореи, автовоз из Кореи, таможенное оформление авто, Korea car import" url="https://it-alliance.ru/cars"/>
            <div className="container">
                <div className="cars-container">
                    <div className="py-9">
                        <div className="page-header mx-auto">
                            <span className="corner-tl"></span>
                            <span className="corner-tr"></span>
                            <span className="corner-br"></span>
                            <span className="corner-bl"></span>
                            <h1 className="h2">АВТО ИЗ КОРЕИ </h1>
                            <div className="sub-heading">НОВЫЕ И С ПРОБЕГОМ</div>
                        </div>
                    </div>
                    {/* Текст с красной линией */}
                    <div className="mx-auto mb-7" style={{maxWidth: '100rem'}}>
                        <RedLineText>
                            <p>
                                Опираясь на этот успешный опыт, мы официально представляем{" "}
                                <strong>услуги персонального агента по подбору и доставке</strong>{" "}
                                автомобилей из Кореи для физических и юридических лиц. </p>
                        </RedLineText>
                        <RedLineText>
                            <p>
                                Направление по поставкам автомобилей из Кореи было запущено в 2022
                                году. За 3 года существования корейского офиса мы помогли
                                приобрести и доставить <strong>более 2500 автомобилей</strong> для частных
                                клиентов. </p>
                        </RedLineText>
                        <RedLineText>
                            <p>
                                Мы приняли решение о развитии этого направления на базе ИТ Альянса
                                как <strong>финансового и юридического гаранта чистоты сделки.</strong> Мы
                                рассчитываем, что экспертиза специалистов ИТ Альянс в области
                                финансов и логистики поможет нам масштабировать и вывести это
                                направление на новый уровень. </p>
                        </RedLineText>
                    </div>
                    {/* Кнопка */}
                    <div className="text-center mb-13">
                        <a href="https://asiaalliance.ru/" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-primary">
                            Оставить заявку на подбор авто
                        </a>
                    </div>
                    {/* Таблица преимуществ */}
                    <div className="table-section mb-13">
                        <div className="table-wrapper">
                            <table className="advantages-table">
                                <thead>
                                <tr>
                                    <th className="th text-left">Наше преимущество</th>
                                    <th className="th">Физические лица</th>
                                    <th className="th">Юридические лица</th>
                                </tr>
                                </thead>
                                <tbody>
                                {advantagesData.map((card, index) => (
                                    <TableAdvantages key={index} title={card.category} individuals={card.individuals} entities={card.entities}/>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Процесс работы */}
                    <section className="work-process-section mb-8">
                        <h2 className="h2 text-center color-primary mb-7">КАК МЫ РАБОТАЕМ?</h2>
                        <div className="grid-md-2">
                            {stepsData.map((text, i) => (
                                <div key={i} className="num-block">
                                    <div className="num">{i + 1}</div>
                                    <div dangerouslySetInnerHTML={{__html: text}}/>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* Кнопки подбора */}
                    <div className="text-center mb-5">
                        <a href="/cars/fl" className="btn btn-lg btn-primary mb-2 mx-2">
                            ПОДБОР АВТО ДЛЯ <strong>ФИЗЛИЦ</strong>
                        </a>
                        <a href="/cars/ul" className="btn btn-lg btn-primary mx-2">
                            ПОДБОР АВТО ДЛЯ <strong>ЮРЛИЦ</strong>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}