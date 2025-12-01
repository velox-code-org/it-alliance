import RedLineText from "../components/RedLineText";
import TableAdvantages from "../components/table-advantages";

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
    "<b>Размещение заявки.</b> Наши специалисты свяжутся с вами в кратчайшие сроки.",
    "<b>Поиск и подбор.</b> Подбираем несколько вариантов, подходящих под ваш запрос, предоставляя подробную информацию по каждому автомобилю.",
    "<b>Заключение договора</b> на подбор автомобиля. Осмотр и предоставление фото- и видео-отчетов по выбранным автомобилям.",
    "<b>Согласование</b> выбранного автомобиля. Контрольная <b>проверка.</b>",
    "<b>Подписание договора</b> на поставку. <b>Оплата в Корею</b> за автомобиль.",
    "<b>Логистика,</b> таможенное оформление",
    "<b>Выдача автомобиля.</b> Дополнительные услуги детейлинга и персонализации автомобиля.",
  ];

  return (
    <div className="mt-10 min-h-dvh bg-white pt-[140px] xs:pt-[100px] sm:pt-[110px] md:pt-[120px] lg:pt-[130px]">
      <div className="px-1 xs:px-2 sm:px-3 md:px-4 max-w-[90vw] xs:max-w-[88vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] xl:max-w-[70vw] min-[1260px]:max-w-[809px] min-[1440px]:max-w-[926px] min-[1600px]:max-w-[1000px] min-[1900px]:max-w-[1050px] mx-auto">
        <section className="w-full text-center">
          <div
            className={`relative max-w-[70%] w-full mx-auto py-6 md:py-8 lg:py-12 transition-all duration-300 text-brand-black px-4 sm:px-6 md:px-8`}
          >
            <span
              className={`block absolute transition-all duration-500 left-0 top-0 stroke-brand-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 25 24"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M0.519531 0.5H24.4805" />
                <path d="M0.5 24L0.5 -1.15019e-06" />
              </svg>
            </span>
            <span
              className={`block absolute transition-all duration-500 right-0 top-0 stroke-brand-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 25 24"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M23.9609 0.5H-6.48499e-05" />
                <path d="M23.9805 24L23.9805 -1.15019e-06" />
              </svg>
            </span>
            <span
              className={`block absolute transition-all duration-500 left-0 bottom-0 stroke-brand-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 25 24"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M0.519531 23.5H24.4805" />
                <path d="M0.5 0L0.5 24" />
              </svg>
            </span>
            <span
              className={`block absolute transition-all duration-500 right-0 bottom-0 stroke-brand-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 25 24"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M23.9609 23.5H-6.48499e-05" />
                <path d="M23.9805 0L23.9805 24" />
              </svg>
            </span>

            {/* Текст с одинаковой шириной на всех экранах */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center font-bold uppercase w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                <span className="text-brand-normal font-[500] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight block">
                  АВТО ИЗ КОРЕИ
                </span>
                <span className="font-[600] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-2 sm:mt-3 md:mt-4">
                  НОВЫЕ И С ПРОБЕГОМ
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section className="mt-12 text-[16px] leading-relaxed max-w-[900px] mx-auto">
          <RedLineText>
            <p>
              Опираясь на этот успешный опыт, мы официально представляем{" "}
              <b>услуги персонального агента по подбору и доставке</b>{" "}
              автомобилей из Кореи для физических и юридических лиц.
            </p>
          </RedLineText>
          <RedLineText>
            <p>
              Направление по поставкам автомобилей из Кореи было запущено в 2022
              году. За 3 года существования корейского офиса мы помогли
              приобрести и доставить <b>более 2500 автомобилей</b> для частных
              клиентов.
            </p>
          </RedLineText>
          <RedLineText>
            <p>
              Мы приняли решение о развитии этого направления на базе ИТ Альянса
              как <b>финансового и юридического гаранта чистоты сделки.</b> Мы
              рассчитываем, что экспертиза специалистов ИТ Альянс в области
              финансов и логистики поможет нам масштабировать и вывести это
              направление на новый уровень.
            </p>
          </RedLineText>
        </section>

        <section className="mt-15 flex justify-center">
          <a href="https://asiaalliance.ru/" target="_balck" className="flex-shrink-0">
            <button
              className="font-semibold whitespace-nowrap px-7 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-black text-white rounded-[50px] 
                      text-xs sm:text-sm md:text-base lg:text-lg 
                      hover:bg-brand-normal hover:text-white transition-colors duration-300"
            >
              НАШ САЙТ
            </button>
          </a>
        </section>

        <section className="mt-16 overflow-x-auto lg:overflow-visible">
          <div className="flex justify-center px-4 lg:px-0">
            <table className="max-w-[1300px] w-full border-separate border-spacing-[2px] xs:border-spacing-[3px] sm:border-spacing-[4px] mx-auto">
              <thead>
                <tr
                  className="bg-[#1E1E1E] text-white uppercase 
                      text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] min-[1260px]:text-[16px] min-[1440px]:text-[18px] min-[1600px]:text-[20px]
                      font-[700] text-center"
                >
                  <th className="rounded-tl-[30px] xs:rounded-tl-[25px] w-[30%] p-2 xs:p-3 sm:p-5">
                    НАШЕ ПРЕИМУЩЕСТВО
                  </th>
                  <th className="p-1 xs:p-1.5 sm:p-4">ФИЗИЧЕСКИЕ ЛИЦА</th>
                  <th className="rounded-tr-[35px] xs:rounded-tr-[25px] p-1 xs:p-1.5 sm:p-4">
                    ЮРИДИЧЕСКИЕ ЛИЦА
                  </th>
                </tr>
              </thead>
              <tbody>
                {advantagesData.map((card, index) => (
                  <TableAdvantages
                    key={index}
                    title={card.category}
                    individuals={card.individuals}
                    entities={card.entities}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* === WORK PROCESS === */}
        <section className="mt-24">
          <h2 className="text-center">
            <span className="text-brand-normal font-[500] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight block">
              КАК МЫ РАБОТАЕМ?
            </span>
          </h2>

          <div className="grid gap-6 mt-12 max-w-[900px] mx-auto">
            {stepsData.map((text, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-brand-normal text-white flex items-center justify-center text-lg font-bold">
                  {i + 1}
                </div>
                <div
                  className="text-[16px] leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 flex flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-20 sm:mb-30 md:mb-40 px-4">
          <a href="/cars/fl" className="flex-shrink-0">
            <button
              className="font-semibold whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-black text-white rounded-[50px] 
                      text-xs sm:text-sm md:text-base lg:text-lg 
                      hover:bg-brand-normal hover:text-white transition-colors duration-300"
            >
              ПОДБОР ДЛЯ <span className="italic">ФЛ</span>
            </button>
          </a>
          <a href="/cars/ul" className="flex-shrink-0">
            <button
              className="font-semibold whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-black text-white rounded-[50px] 
                      text-xs sm:text-sm md:text-base lg:text-lg 
                      hover:bg-brand-normal hover:text-white transition-colors duration-300"
            >
              ПОДБОР ДЛЯ <span className="italic">ЮЛ</span>
            </button>
          </a>
        </section>
      </div>
    </div>
  );
}
