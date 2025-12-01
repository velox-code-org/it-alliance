import triangle from "../../assets/images/triangle.svg";
import CarsDocSteps from "../../components/CarsDocSteps";
import StepOneInputs from "../../components/carsPagesComponents/StepOneInputs";
import BannerImage from "../../components/carsPagesComponents/BannerComponents/BannerImage";
import BannerTitle from "../../components/carsPagesComponents/utilities/BannerTitle";

export default function CarsFLPages() {
  return (
    <div className="mt-20 px-1 xs:px-2 sm:px-3 md:px-4 mx-auto max-w-[96vw] xs:max-w-[96vw] sm:max-w-[96vw] md:max-w-[96vw] lg:max-w-[96vw] xl:max-w-[75vw] min-[1260px]:max-w-[85%] min-[1440px]:max-w-[80%] min-[1600px]:max-w-[80%] min-[1920px]:max-w-[75%]">
      {/* ====== ШАГ 1 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-10 flex justify-between items-center align-middle h-full">
          <CarsDocSteps title="ШАГ №1" subtitle="РАЗМЕЩЕНИЕ ЗАЯВКИ" />
          <div className="flex justify-center h-full align-middle items-center mb-8">
            <a
              href="https://asiaalliance.ru/contacts#feedback"
              target="_balck"
              className="flex-shrink-0"
            >
              <button
                className="font-semibold whitespace-nowrap px-2 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-black text-white rounded-[50px] 
                      text-xs sm:text-sm md:text-base lg:text-lg 
                      hover:bg-brand-normal hover:text-white transition-colors duration-300"
              >
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </a>
          </div>
        </section>

        {/* ====== FORM BLOCK ====== */}
        <section className="mt-6">
          <div className="bg-black text-white px-4 py-3 text-center">
            <div className="font-bold text-sm sm:text-base lg:text-[25px] leading-tight sm:leading-normal">
              ДЛЯ НАЧАЛА ПОИСКА АВТОМОБИЛЯ НЕОБХОДИМО ЗАПОЛНИТЬ ЗАЯВКУ:
            </div>
          </div>
          <StepOneInputs />

          <div className="flex-1 mt-6 sm:mt-7 lg:mt-8">
            <div className="bg-[#FF0000] py-3 sm:py-4 lg:py-4">
              <div className="text-white font-bold text-center w-[90%] sm:w-[88%] lg:w-[85%] mx-auto text-sm sm:text-base lg:text-[25px] leading-tight sm:leading-normal">
                МЕНЕДЖЕР{" "}
                <span className="text-black">
                  ПОДБЕРЕТ ВАРИАНТЫ АВТОМОБИЛЕЙ
                </span>{" "}
                ПОД ВАШ ЗАПРОС И ПРЕДОСТАВИТ ПОДРОБНЫЙ РАСЧЕТ ВСЕХ ПРЕДСТОЯЩИХ
                РАСХОДОВ
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ====== ШАГ 2 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section>
          <CarsDocSteps title="ШАГ №2" subtitle="ПОИСК И ПОДБОР" />
        </section>

        <div>
          <div className="text-sm">
            <div className="border border-[#b3b3b3] flex justify-between">
              <div className="py-3 ml-4">
                <p>
                  <BannerTitle
                    title={"Мы подберём Вам варианты автомобилей, которые"}
                    size={22}
                    style={""}
                  />{" "}
                  <BannerTitle
                    title={"соответствуют вашим параметрам."}
                    size={22}
                    style={"italic"}
                  />
                  {""}
                </p>
                <BannerTitle
                  title={"Вы выбираете понравившийся автомобиль."}
                  size={22}
                  style={"text-black font-bold uppercase"}
                />
              </div>
              <BannerImage color="red" />
            </div>
            <div className="mt-4">
              <div className="flex items-start">
                <span className="text-[#E40000] text-sm sm:text-base lg:text-[18px] mt-0.5 sm:mt-1">
                  *
                </span>
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm lg:text-base leading-tight sm:leading-normal">
                  Расчеты производятся исходя из курса ЦБ на день формирования
                  расчета и могут меняться в связи с изменением курса валют.
                </span>
              </div>

              <div className="flex items-start mt-2">
                <span className="text-[#E40000] text-sm sm:text-base lg:text-[18px] mt-0.5 sm:mt-1">
                  *
                </span>
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm lg:text-base leading-tight sm:leading-normal">
                  Все расходы по РФ действительны в день формирования расчета и
                  могут меняться в связи с изменением курса валют, тарифов
                  брокерской и логистической компаний, законодательства РФ.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ШАГ 3 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-10">
          <CarsDocSteps
            title="ШАГ №3"
            subtitle="Заключение Агентского договора на приобретение и оплату автомобиля. Внесение Депозита"
          />
        </section>

        <div className="mt-4 sm:mt-5 lg:mt-6">
          <div className="flex items-start mb-3 sm:mb-4 lg:mb-5 group">
            <div className="flex items-center mt-1 sm:mt-1.5 lg:mt-2 mr-2 sm:mr-3 lg:mr-4">
              <span className="block h-px w-4 sm:w-6 lg:w-8 bg-[#2D2D2D] group-hover:w-6 sm:group-hover:w-8 lg:group-hover:w-10 transition-all duration-300"></span>
              <span className="block size-1 sm:size-1.5 rounded-full bg-[#2D2D2D]"></span>
            </div>

            <div>
              <p className="text-sm sm:text-base lg:text-[20px] leading-relaxed sm:leading-normal lg:leading-[22.22px]">
                Для возможности быстрого бронирования автомобиля и подробного
                осмотра с видеофиксацией необходимо внести{" "}
                <span className="font-semibold text-[#FF0000]">ДЕПОЗИТ</span>.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-3 sm:mb-4 lg:mb-5 group">
            <div className="flex items-center mt-1 sm:mt-1.5 lg:mt-2 mr-2 sm:mr-3 lg:mr-4">
              <span className="block h-px w-4 sm:w-6 lg:w-8 bg-[#2D2D2D] group-hover:w-6 sm:group-hover:w-8 lg:group-hover:w-10 transition-all duration-300"></span>
              <span className="block size-1 sm:size-1.5 rounded-full bg-[#2D2D2D]"></span>
            </div>

            <div>
              <p className="text-sm sm:text-base lg:text-[20px] leading-relaxed sm:leading-normal lg:leading-[22.22px]">
                На данном этапе ИТ Альянс заключает с Вами{" "}
                <b>Агентский договор на подбор автомобиля.</b> Для подписания
                договора мы пригласим Вас в наш офис или направим курьера. В
                рамках заключенного и подписанного договора выставляется счет,
                который можно оплатить с помощью мобильного приложения или в
                отделении Вашего банка.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-3 sm:mb-4 lg:mb-5 group">
            <div className="flex items-center mt-1 sm:mt-1.5 lg:mt-2 mr-2 sm:mr-3 lg:mr-4">
              <span className="block h-px w-4 sm:w-6 lg:w-8 bg-[#2D2D2D] group-hover:w-6 sm:group-hover:w-8 lg:group-hover:w-10 transition-all duration-300"></span>
              <span className="block size-1 sm:size-1.5 rounded-full bg-[#2D2D2D]"></span>
            </div>

            <div>
              <p className="text-sm sm:text-base lg:text-[20px] leading-relaxed sm:leading-normal lg:leading-[22.22px]">
                Размер депозита – <b>100 000 рублей</b>.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 lg:mt-6 text-[#9E9E9E]">
            <div className="flex items-start">
              <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">
                *
              </span>
              <span className="ml-1 sm:ml-1.5 lg:ml-2 text-justify text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                Депозит может быть возвращен или учтен в стоимость автомобиля. В
                случае отказа от приобретения автомобиля после осмотра депозит
                возвращается за вычетом расходов на проведенные осмотры. В
                случае отказа от выкупа автомобиля после его бронирования
                депозит НЕ возвращается.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ШАГ 4 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-10">
          <CarsDocSteps title="ШАГ №4" subtitle="СОГЛАСОВАНИЕ АВТОМОБИЛЯ" />
        </section>
        <div className="border mt-6 border-[#b3b3b3] flex justify-between">
          <p className="text-[22px] py-3 ml-4">
            <BannerTitle
              title={
                "Штатный сотрудник в Корее выезжает на дилерскую площадку и производит "
              }
              size={22}
              style={""}
            />{" "}
            <BannerTitle
              title={"проверку ключевых параметров."}
              size={22}
              style={"italic"}
            />
            <span className="text-black block">
              <BannerTitle title={"По итогам проверки"} size={22} style={""} />{" "}
              <BannerTitle
                title={"предоставляется подробный фото и видео отчет"}
                size={22}
                style={"font-bold"}
              />{" "}
            </span>
          </p>
          <div className="max-[779px]:hidden min-[780px]:block">
            <BannerImage color="black" />
          </div>
        </div>
      </section>

      {/* ====== ШАГ 5 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-10">
          <CarsDocSteps
            title="ШАГ №5"
            subtitle="Подписание договора на поставку автомобиля с корейской компанией"
          />
        </section>
        <div className="mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full mt-4 sm:mt-5 lg:mt-4">
            <div className="bg-black px-3 sm:px-4 lg:px-2 uppercase text-white font-bold text-sm sm:text-base lg:text-[20px] text-center py-3 sm:py-4 lg:py-3 leading-tight sm:leading-normal">
              На данном этапе Вы подписываете договор с корейской
              компанией-поставщиком и Вам
              <span className="text-[#E40000] block sm:inline">
                {" "}
                выставляется 2 счета на оплату:
              </span>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
            <div className="w-full xl:w-1/2">
              <span className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-[31px] leading-tight sm:leading-tight uppercase">
                <span className="text-[#E40000]">Счет</span> на вознаграждение
                агента
              </span>
              <p className="mt-3 sm:mt-4 lg:mt-4 text-sm sm:text-base lg:text-lg xl:text-[23px] w-full text-justify leading-relaxed">
                Сумма оплаченного ранее депозита идет в зачет оплаты за
                автомобиль. Сумма депозита конвертируется в у.е. по курсу на
                день оплаты счета на стоимость автомобиля. Агент переводит
                полученный аванс на расчетный счет поставщика в Корее, после
                чего Автомобиль выкупается.
              </p>
            </div>

            <div className="w-full xl:w-1/2">
              <span className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-[31px] leading-tight sm:leading-tight uppercase">
                <span className="text-[#E40000]">Счет</span> на стоимость
                автомобиля
              </span>
              <p className="mt-3 sm:mt-4 lg:mt-4 text-sm sm:text-base lg:text-lg xl:text-[23px] w-full text-justify leading-relaxed">
                Счет выставляется в у.е. (USD) с учетом стоимости доставки
                Корея-Владивосток и услуг дилера (по предварительной
                договоренности возможна фиксация в рублях на день оплаты, в
                данном случае счет на оплату действителен 1 день)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ШАГ 6 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-10">
          <CarsDocSteps
            title="ШАГ №6"
            subtitle="ЛОГИСТИКА, ТАМОЖЕННОЕ ОФОРМЛЕНИЕ"
          />
        </section>

        <div className="border border-[#b3b3b3] flex justify-between">
          <div className="py-3 ml-4">
            <p>
              <BannerTitle
                title={"Все платежи в РФ оплачиваются Вами лично"}
                size={22}
                style={""}
              />{" "}
              <BannerTitle
                title={"в российских рублях."}
                size={22}
                style={"font-bold"}
              />
              {""}
            </p>
            <BannerTitle
              title={
                "Сумма окончательных платежей может меняться в зависимости от колебания курса валют."
              }
              size={22}
              style={""}
            />
          </div>
          <BannerImage color="red" />
        </div>

        <div className="mt-2 sm:mt-3 lg:mt-2">
          <div className="flex items-start">
            <span className="text-[#E40000] text-base sm:text-lg lg:text-[18px] mt-0.5">
              *
            </span>
            <span className="ml-1 sm:ml-1.5 lg:ml-1 text-sm sm:text-[15px] lg:text-[16px] text-[#9E9E9E] leading-relaxed">
              По законодательству РФ для таможенного оформления автомобиля на
              физическое лицо, у Вас должна быть прописка или временная
              регистрация в месте нахождения таможенного пункта. Брокер
              подготовит все необходимые документы и сделает Вам временную
              регистрацию. Для этого необходимо направить в адрес брокера
              заверенную нотариусом копию двух страниц паспорта (разворот)
              лицевая сторона и прописка. Это возможно сделать напрямую у Вашего
              нотариуса нотариусу во Владивосток, либо СДЭК/Почтой России в
              адрес брокера.
            </span>
          </div>
        </div>

        <div className="bg-black mt-12 text-white text-xl sm:text-2xl lg:text-[32px] font-bold text-center py-3 sm:py-4 lg:py-4 mb-8 sm:mb-10 lg:mb-12">
          ЭТАПЫ:
        </div>

        <div className="max-w-[1400px] mx-auto mt-2 sm:mt-2 lg:mt-4 px-4 sm:px-6 lg:px-0">
          {/* Этап 1 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mt-2 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                1
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[280px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            {/* Колонка с контентом */}
            <div className="pt-2">
              <p className="text-base sm:text-lg lg:text-[21px] leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                Таможенный брокер{" "}
                <b>
                  встречает автомобиль во Владивостоке и запускает процесс
                  таможенного оформления
                </b>
              </p>

              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                <p className="text-sm sm:text-[15px] lg:text-[16.2px]">
                  Мы предлагаем следующие варианты доставки:
                </p>
                <p className="text-[#FF0000] text-sm sm:text-[15px] lg:text-[16.2px]">
                  <b>Срок:</b> 3-7 рабочих дней.
                </p>
              </div>

              {/* Документы */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-3 sm:gap-4 lg:gap-8 mb-4">
                <div className="border border-[#1E1E1E] py-2 sm:py-3 lg:py-3 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                  Фото разворота паспорта: лицевая сторона и прописка
                </div>
                <div className="border border-[#1E1E1E] py-2 sm:py-3 lg:py-3 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                  Фото водительского удостоверения
                </div>
                <div className="border border-[#1E1E1E] py-2 sm:py-3 lg:py-3 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                  ИНН
                </div>
                <div className="border border-[#1E1E1E] py-2 sm:py-3 lg:py-3 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                  СНИЛС
                </div>
                <div className="border border-[#1E1E1E] py-2 sm:py-3 lg:py-3 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px] col-span-2 sm:col-span-2 lg:col-auto">
                  Заверенная нотариусом копия 2 страниц паспорта: лицевая
                  сторона и прописка.
                </div>
              </div>

              <div className="mt-4 sm:mt-5 lg:mt-6 text-[#9E9E9E]">
                <div className="flex items-start">
                  <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">
                    *
                  </span>
                  <span className="ml-1 sm:ml-1.5 lg:ml-2 text-justify text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                    Инициировать процесс таможенной очистки можно только в
                    случае наличия всех перечисленных документов у брокера, в
                    противном случае сроки увеличиваются и возникают
                    дополнительные расходы на содержание автомобиля на
                    таможенном складе (СВХ). Данные расходы будут перевыставлены
                    в рамках заключенного Агентского договора. В случае
                    нарушения сроков поставки по причине несвоевременного
                    предоставления брокеру запрошенных документов Агент не несет
                    ответственность за увеличение сроков поставки автомобиля.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Этап 2 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mt-2 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                2
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[125px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex-1">
              <div>
                <p className="text-base sm:text-lg lg:text-[22px] mb-2 leading-relaxed">
                  <b>
                    Казначейство РФ выставляет счета на Ваше имя на оплаты
                    таможенных платежей и сборов.
                  </b>{" "}
                  Данный счет оплачивается в отделении банка.
                </p>
              </div>

              <div className="mt-3 sm:mt-4 lg:mt-4 text-[#9E9E9E]">
                <div className="flex items-start">
                  <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">
                    *
                  </span>
                  <span className="ml-1 sm:ml-1.5 lg:ml-2 text-justify text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                    Оплата таможенных платежей должна быть произведена лицом, на
                    которого данный автомобиль был растаможен. В случае
                    нарушения сроков поставки по причине несвоевременной оплаты
                    данных счетов и/или оплаты на ошибочные реквизиты и/или
                    оплаты от неверного физического лица Агент не несет
                    ответственность за увеличение сроков поставки автомобиля.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Этап 3 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mt-2 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                3
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[50px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] mb-2 w-full lg:w-[92%] leading-relaxed">
                После зачисления оплаты{" "}
                <b>брокер забирает автомобиль и перевозит его в Лабораторию</b>{" "}
                для получения сертификата безопасности. Документы готовятся{" "}
                <span className="text-[#ff0000] font-bold">
                  3-7 рабочих дней
                </span>
                , после чего на Ваше имя <b>выпускается ЭПТС</b>.
              </p>
            </div>
          </div>

          {/* Этап 4 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 mt-2 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                4
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-50px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] mb-2 w-full lg:w-[92%] leading-relaxed">
                <b>
                  Для получения ЭПТС необходимо заблаговременно пройти
                  регистрацию в системе электронных паспортов.
                </b>{" "}
                По Вашему желанию мы предоставим Вам инструкцию.
              </p>
            </div>
          </div>

          {/* Этап 5 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 mt-2 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                5
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[50px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] mb-2 w-full lg:w-[92%] leading-relaxed">
                После получения ЭПТС{" "}
                <b>необходимо оплатить брокерские услуги и лабораторию</b> на
                основании выставленных счетов. Данные счета Вы оплачиваете
                самостоятельно <b>без участия Агента.</b>
              </p>
            </div>
          </div>

          {/* Этап 6 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-9 mt-2 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                6
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[130px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[22px] leading-relaxed mb-2">
                После оплаты брокерских услуг{" "}
                <b>автомобиль перемещается на стоянку транспортной компании.</b>{" "}
                Мы предлагаем следующие варианты доставки:
              </p>

              {/* Варианты доставки */}
              <div className="flex flex-col lg:flex-row items-start mt-4 sm:mt-5 lg:mt-6 gap-4 sm:gap-5 lg:gap-8 mb-4 sm:mb-5 lg:mb-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 flex-1">
                  <div className="border relative border-[#1E1E1E] py-3 sm:py-4 lg:py-5 text-center text-sm sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-10">
                    <img
                      className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4"
                      src={triangle}
                      alt=""
                    />
                    Автовозом
                  </div>
                  <div className="border relative border-[#1E1E1E] py-3 sm:py-4 lg:py-5 text-center text-sm sm:text-[15px] lg:text-[16px] px-4 sm:px-8 lg:px-14">
                    <img
                      className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4"
                      src={triangle}
                      alt=""
                    />
                    Закрытым автовозом / фурой
                  </div>
                  <div className="border relative border-[#1E1E1E] py-3 sm:py-4 lg:py-5 text-center text-sm sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-10">
                    <img
                      className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4"
                      src={triangle}
                      alt=""
                    />
                    Поездом
                  </div>
                </div>

                <div className="text-[#9E9E9E] flex-shrink-0 w-full lg:w-[470px]">
                  <div className="flex items-start">
                    <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">
                      *
                    </span>
                    <span className="ml-1 sm:ml-1.5 lg:ml-2 text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                      Менеджер проконсультирует Вас по актуальным срокам и
                      стоимости разных вариантов доставки.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Этап 7 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6 mb-2">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mt-2 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                7
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[40px] sm:min-h-[80px] lg:min-h-[50px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="text-base sm:text-lg lg:text-[22px] mb-2 flex-1">
              <p className="leading-relaxed mb-2">
                После согласования выбранного способа доставки{" "}
                <b>Перевозчик принимает Ваш автомобиль.</b>
              </p>
              <p className="leading-relaxed">
                В день отправки{" "}
                <b>
                  Перевозчик присылает фото/видео фиксацию процесса погрузки
                  автомобиля.
                </b>
              </p>
            </div>
          </div>

          {/* Этап 8 */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-[#FF0000] text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px]">
              8
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] w-full lg:w-[92%] leading-relaxed">
                После отправки необходимо <b>оплатить услуги Перевозчика</b> на
                основании выставленных счетов.
              </p>
            </div>
          </div>

          <div className="flex-1 mt-6 sm:mt-7 lg:mt-8">
            <div className="bg-[#FF0000] py-3 sm:py-4 lg:py-4">
              <div className="text-white text-sm sm:text-base lg:text-[22px] font-semibold text-center uppercase w-full sm:w-[95%] lg:w-[96%] mx-auto px-4 sm:px-6 lg:px-0 leading-tight sm:leading-normal">
                Общее время доставки автомобиля до Москвы с момента выкупа
                автомобиля - <span className="text-black">30-60 дней</span>
              </div>
            </div>
          </div>

          <div className="border mt-3 sm:mt-4 lg:mt-2 mb-20 sm:mb-25 lg:mb-30 border-[#b3b3b3]">
            <div className="py-3 ml-3 sm:ml-4 lg:ml-5 text-center">
              <p className="text-sm sm:text-base lg:text-[19.8px] leading-relaxed">
                Мы доставим Ваш автомобиль по указанному Вами адресу или
                передадим в одном из партнерских детейлинг-центров.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
