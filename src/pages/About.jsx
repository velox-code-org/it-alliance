import pattern from "../assets/images/PATTERN.svg";
import pattern2 from "../assets/images/PATTERN2.svg";
import PATTERNRight from "../assets/images/PATTERN-Right.svg";
import PATTERNLeft from "../assets/images/PATTERN-Left.svg";
import Line from "../assets/images/Line.svg";

const About = () => {
  return (
    <div className="px-10 space-y-2 pt-10 pb-16 md:pt-20 md:pb-[216px] w-full flex flex-col items-center justify-center ">
      {/* Заголовок "О КОМПАНИИ" */}
      <h2 className="mt-16 md:mt-[176px] text-4xl sm:text-5xl md:text-6xl lg:text-[111.11px] font-semibold text-[#1E1E1E] text-center">
        О КОМПАНИИ
      </h2>

      {/* Основной текст */}
      <p className="text-justify mt-8 md:mt-[88px] text-sm sm:text-base md:text-[17px] w-full max-w-4xl xl:max-w-[1293px] font-light">
        <span className="font-semibold">Добро пожаловать в IT Alliance</span> —
        вашего надежного партнера в мире передовых технологий. С момента нашего
        основания, мы стремимся стоять в авангарде инноваций и технологического
        развития. Наша миссия — предоставлять решения, которые не просто
        соответствуют текущим требованиям рынка, но и опережают их, открывая
        новые возможности для бизнеса наших клиентов. В IT Alliance мы верим,
        что{" "}
        <span className="font-semibold text-[#E40000]">
          успех наших клиентов — это наш успех.
        </span>{" "}
        Это убеждение формирует основу нашей работы. Мы объединили команду
        высококвалифицированных специалистов, готовых предложить инновационные и
        эффективные решения в области IT. Наш подход индивидуален к каждому
        клиенту, и мы стремимся предоставлять не просто услуги, но и настоящие
        IT-решения, которые помогут вашему бизнесу расти и развиваться. В нашем
        портфолио — множество успешно реализованных проектов, от малых
        предприятий до крупных корпораций. Мы гордимся тем, что можем предложить
        нашим клиентам не только продукты, но и полный спектр услуг: от
        консультаций и планирования до внедрения и поддержки.
      </p>

      {/* Блок с красной линией */}
      <div className="flex align-middle pt-8 md:pt-[66px] w-full max-w-4xl xl:max-w-[1293px]">
        <div className="w-[1px] h-auto bg-[#FF0000]"></div>
        <div className="text-justify ml-4 md:ml-[22px] text-sm sm:text-base md:text-[17px] font-light">
          IT Alliance — ваш надежный партнер в мире сетевых технологий. Мы
          предлагаем комплексные решения для бизнеса, от поставки
          высококачественного оборудования от ведущих мировых производителей
          (Cisco, Juniper, HP, Huawei, Broadcom и др.) до его профессиональной
          настройки и технической поддержки. Наша команда
          высококвалифицированных специалистов с богатым опытом работы реализует
          проекты любой сложности. Мы предлагаем широкий спектр услуг, включая
          поставку оборудования, техническое обслуживание и настройку, а также
          круглосуточную техническую поддержку. Мы прилагаем максимум усилий,
          чтобы подобрать оптимальное решение для ваших нужд, предлагая
          конкурентоспособные цены и гибкие условия поставки
        </div>
      </div>

      <div className="hidden w-[100%] mt-20 lg:flex icons w-full max-w-7xl justify-between items-center">
        <img className="w-[20%]" src={PATTERNLeft} alt="Pattern" />
        <div className="flex items-center mt-14">
          <span className="w-2 h-2 rounded-[50px] bg-[#FF0000]"></span>
          <span className="w-150 h-0.5 bg-[#FF0000]"></span>
          <span className="w-2 h-2 rounded-[50px] bg-[#FF0000]"></span>
        </div>
        <img className="w-[20%]" src={PATTERNRight} alt="Pattern" />
      </div>

      {/* Заголовок "СЕРВИС" */}
      <h2 className="mt-10 md:mt-15 text-4xl sm:text-5xl md:text-6xl lg:text-[111.11px] font-semibold text-[#1E1E1E] text-center">
        СЕРВИС
      </h2>

      {/* Текст о сервисе */}
      <p className="text-justify mt-8 md:mt-[88px] text-sm sm:text-base md:text-[17px] w-full max-w-4xl xl:max-w-[1293px] font-light">
        Оборудование лидирующих мировых производителей имеет заводскую гарантию,
        однако она ограничена, в силу того, что вендоры ушли с рынка РФ. Здесь
        требуется участие поставщика - посредник заводит сервисную заявку у
        вендора и ведет сервисный кейс от имени заказчика. Основная проблема в
        этой схеме - сроки замены комплектующих. Ранее на территории РФ были
        склады с запчастями, теперь доставка осуществляется со складов в Азии и
        СНГ. Партнеры ИТ-Альянс могут воспользоваться дополнительным сервисными
        услугами компании:
      </p>

      {/* Список сервисов */}
      <div className="service__items mt-8 md:mt-[61px] w-full max-w-4xl xl:max-w-[1293px] flex flex-col">
        {/* Сервис 1 */}
        <div className="service__item flex items-start justify-start">
          <div className="leading-[1] pt-1.5 pb-1.5 text-lg sm:text-xl md:text-[26.67px] text-center text-[#FBFFFE] w-6 h-6 sm:w-7 sm:h-7 md:w-[33.33px] md:h-[33.33px] bg-[#FF0000] flex items-center justify-center service_number">
            1
          </div>

          <div className="service__text ml-4 sm:ml-6 md:ml-[27px] flex-1">
            <p className="text-sm sm:text-base md:text-[17px] font-light">
              <strong className="font-medium">
                Расширенная техническая поддержка
              </strong>{" "}
              с различным уровенем SLA для оборудования Lenovo. Договором услуг
              или сервисными пакетами <br className="hidden sm:block" />{" "}
              (Service Packs).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-[60px] sm:gap-y-3 md:gap-y-[12px] mt-4 sm:mt-6 md:mt-[29.86px]">
              {[
                "Осуществляется силами сервисного партнёра Lenovo",
                "Высококвалифицированный штат инженеров",
                "Собственный склад запчастей в РФ",
                "Широкая география в т.ч. самого строгого уровня SLA",
                "Пакетные и/или индивидуальное предложение",
                "Скидки от объёма",
                "Продажа сервиса товарной позицией с НДС или договором услуг",
                "Доступно для нового и для существующего оборудования",
              ].map((text, index) => (
                <div key={index} className="flex items-center group/card">
                  <div className="flex align-middle items-center">
                    <span className="block size-1.5 rounded-full group-hover/card:bg-[#FF0000] bg-black"></span>
                    <span className="block h-px w-3 pb-px group-hover/card:bg-[#FF0000] group-hover/card:w-5 transition-all duration-300 bg-brand-black"></span>
                  </div>
                  <p className="ml-3 sm:ml-4 text-sm sm:text-base md:text-[17.78px] leading-relaxed font-light">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Остальные сервисы (2-4) */}
        {[
          "Расширенная техническая поддержка с различным уровенем SLA для оборудования Huawei.",
          "Проектная поставка новых комплектующих и refurb по каналам, проверенных временем.",
          "Проектная поставка сервисных комплектующих: Lenovo, Dell/EMC, Cisco, IBM, HPE, NetApp, Hitachi",
        ].map((text, index) => (
          <div
            key={index}
            className="service__item mt-4 sm:mt-6 md:mt-[33.34px] flex items-start justify-start"
          >
            <div className="leading-[1] pt-1.5 pb-1.5 text-lg sm:text-xl md:text-[26.67px] text-center text-[#FBFFFE] w-6 h-6 sm:w-7 sm:h-7 md:w-[33.33px] md:h-[33.33px] bg-[#FF0000] flex items-center justify-center service_number flex-shrink-0">
              {index + 2}
            </div>
            <div className="service__text min-h-[24px] sm:min-h-[28px] md:min-h-[33.33px] flex items-center">
              <p className="ml-4 sm:ml-6 md:ml-[27px] text-sm sm:text-base md:text-[17px] font-light">
                <strong className="font-bold">{text.split(":")[0]}:</strong>
                {text.includes(":") ? text.split(":")[1] : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
