import triangle from "../../assets/images/triangle.svg";
import CarsDocSteps from "../../components/CarsDocSteps";
import StepOneInputs from "../../components/carsPagesComponents/StepOneInputs";
import BannerTitle from "../../components/carsPagesComponents/utilities/BannerTitle";
import BannerImage from "../../components/carsPagesComponents/BannerComponents/BannerImage";
import MainTitleText from "../../components/carsPagesComponents/utilities/MainTitleText";
import TableBlock from "../../components/carsPagesComponents/TableBlock";

export default function CarsULPages() {
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

          <div className="w-full mx-auto mt-3">
            <MainTitleText
              title={
                "В рамках выставленного коммерческого предложения вы получите информацию о всех расходах, формирующих итоговую стоимость автомобиля под ключ:"
              }
              size={19}
              style={"leading-[1.4] w-full text-gray-800 mb-4 uppercase"}
            />

            {/* Сетка */}
            <TableBlock />
          </div>

          <div className="mt-4 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-4 xl:mt-5 2xl:mt-5 3xl:mt-5 4xl:mt-6 5xl:mt-6 6xl:mt-6">
            <div>
              <div className="flex items-start">
                <span className="text-[#E40000] text-sm sm:text-base lg:text-[18px] mt-0.5 sm:mt-1">
                  *
                </span>
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm lg:text-base leading-tight sm:leading-normal">
                  Расчеты производятся исходя из курса ЦБ на день формирования
                  расчета и могут меняться в связи с изменением курса валют.
                </span>
              </div>

              <div className="flex items-start">
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
            subtitle="ЗАКЛЮЧЕНИЕ ДОГОВОРА НА ПОДБОР АВТОМОБИЛЯ "
          />
        </section>

        <div className="flex items-start mb-4 sm:mb-5 lg:mb-8 group">
          <div className="flex items-center mt-1 sm:mt-1.5 lg:mt-2 mr-2 sm:mr-3 lg:mr-4">
            <span className="block h-px w-4 sm:w-6 lg:w-8 bg-[#2D2D2D] group-hover:w-6 sm:group-hover:w-8 lg:group-hover:w-10 transition-all duration-300"></span>
            <span className="block size-1 sm:size-1.5 rounded-full bg-[#2D2D2D]"></span>
          </div>

          <div>
            <p className="text-sm sm:text-base lg:text-[22px] leading-relaxed sm:leading-normal lg:leading-[26px] font-light">
              Для возможности быстрого бронирования автомобиля и подробного
              осмотра с видео-фиксацией необходимо внести{" "}
              <span className="font-semibold">
                заключить договор и оплатить услуги по подбору автомобиля.
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-start mb-4 sm:mb-5 lg:mb-8 group">
          <div className="flex items-center mt-1 sm:mt-1.5 lg:mt-2 mr-2 sm:mr-3 lg:mr-4">
            <span className="block h-px w-4 sm:w-6 lg:w-8 bg-[#2D2D2D] group-hover:w-6 sm:group-hover:w-8 lg:group-hover:w-10 transition-all duration-300"></span>
            <span className="block size-1 sm:size-1.5 rounded-full bg-[#2D2D2D]"></span>
          </div>

          <div>
            <p className="text-sm sm:text-base lg:text-[22px] leading-relaxed sm:leading-normal lg:leading-[26px] font-light">
              Стоимость услуги по подбору автомобиля –{" "}
              <span className="font-semibold text-[#FF0000]">
                2 500 долларов США.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6 text-[#9E9E9E]">
          <div className="flex items-start">
            <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">
              *
            </span>
            <span className="ml-1 sm:ml-1.5 lg:ml-2 text-justify text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
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
        <section className="mt-6 sm:mt-8 lg:mt-10">
          <CarsDocSteps
            title="ШАГ №5"
            subtitle="Подписание договора на поставку автомобиля. ОПЛАТА В КОРЕЮ ЗА АВТОМОБИЛЬ"
          />
        </section>

        <div>
          <div className="mx-auto">
            <div className="w-full mt-4 sm:mt-5 lg:mt-4 ">
              <div className="bg-black px-2 uppercase text-white font-bold text-sm sm:text-base lg:text-[20px] text-center py-3 sm:py-4 lg:py-3 leading-tight sm:leading-normal">
                На данном этапе Ваша компания подписывает договор купли-продажи
                автомобиля.
                <br className="hidden sm:block" />В рамках подписанного договора{" "}
                <span className="text-[#E40000]">
                  необходимо совершить 2 платежа:
                </span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
              <div className="w-full xl:w-1/2">
                <span className="font-bold text-xl sm:text-2xl lg:text-2xl xl:text-[31px] leading-tight">
                  <span className="text-[#E40000]">АВАНСОВЫЙ</span> ПЛАТЕЖ
                </span>
                <p className="mt-3 sm:mt-4 lg:mt-4 text-base sm:text-lg lg:text-lg xl:text-[23px] w-full text-justify leading-relaxed">
                  В размере, согласованном Сторонами, но не менее суммы
                  расходов, понесенных до прибытия автомобиля во Владивосток –
                  оплачивается в течение 3 дней с момента подписания договора.
                </p>
              </div>

              <div className="w-full xl:w-1/2">
                <span className="font-bold text-xl sm:text-2xl lg:text-2xl xl:text-[31px] leading-tight">
                  <span className="text-[#E40000]">ОКОНЧАТЕЛЬНЫЙ</span> ПЛАТЕЖ
                </span>
                <p className="mt-3 sm:mt-4 lg:mt-4 text-base sm:text-lg lg:text-lg xl:text-[23px] w-full text-justify leading-relaxed">
                  Оплачивается в течение 3 дней с момента получения уведомления
                  о готовности автомобиля к таможенной очистке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ШАГ 6 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-6 sm:mt-8 lg:mt-10">
          <CarsDocSteps
            title="ШАГ №6"
            subtitle="ЛОГИСТИКА, ТАМОЖЕННОЕ ОФОРМЛЕНИЕ"
          />
        </section>

        <div className="bg-black text-white text-xl sm:text-2xl lg:text-[32px] font-bold text-center py-3 sm:py-4 lg:py-4 mb-8 sm:mb-10 lg:mb-12">
          ЭТАПЫ:
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0">
          {/* Этап 1 */}
          <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
            {/* Колонка с цифрой и линией */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mt-2 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-black text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px] mb-3">
                1
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[190px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-bold text-base sm:text-lg lg:text-[21px] leading-relaxed mb-2">
                После прохождения таможенной очистки автомобиль перемещается на
                стоянку транспортной компании.
              </p>
              <p className="mb-4 sm:mb-5 lg:mb-6 text-base sm:text-lg lg:text-[21px]">
                Мы предлагаем следующие варианты доставки:
              </p>

              {/* Варианты доставки */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 mb-4">
                <div className="border relative border-[#1E1E1E] py-3 sm:py-4 lg:py-5 text-center text-sm sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-8">
                  <img
                    className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4"
                    src={triangle}
                    alt=""
                  />
                  Автовозом
                </div>
                <div className="border relative border-[#1E1E1E] py-3 sm:py-4 lg:py-5 text-center text-sm sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-10">
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

              <div className="mt-4 sm:mt-5 lg:mt-6 text-[#9E9E9E]">
                <div className="flex items-start">
                  <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">
                    *
                  </span>
                  <span className="ml-1 sm:ml-1.5 lg:ml-2 text-justify text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                    Менеджер проконсультирует Вас по актуальным срокам и
                    стоимости разных вариантов доставки.
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
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[60px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] mb-2 leading-relaxed">
                После согласования выбранного способа доставки{" "}
                <span className="font-bold text-base sm:text-lg lg:text-[21px]">
                  Перевозчик принимает Ваш автомобиль.
                </span>
              </p>
              <p className="text-base sm:text-lg lg:text-[21px] leading-relaxed mb-2">
                В день отправки{" "}
                <span className="font-bold text-base sm:text-lg lg:text-[21px]">
                  Перевозчик присылает фото/видео фиксацию процесса погрузки
                  автомобиля.
                </span>
              </p>
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
                <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-black flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[70px]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] mb-2 w-full lg:w-[92%] leading-relaxed">
                После прибытия автомобиля в Москву <b>оформляется ОТТС</b> —
                одобрение типа транспортного средства, сертификат,
                подтверждающий соответствие его технических характеристик
                требованиям безопасности и экологическим стандартам,
                установленным на территории Таможенного союза.
              </p>
            </div>
          </div>

          {/* Этап 4 */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
            <div className="w-8 mt-2 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-[#FF0000] text-white flex items-center justify-center text-lg sm:text-xl lg:text-[35px]">
              4
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg lg:text-[21px] w-full lg:w-[92%] my-auto leading-relaxed">
                После получения ОТТС{" "}
                <b>выпускается ЭПТС и автомобиль готов к передаче.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ШАГ 7 ====== */}
      <section
        className="mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
      mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
      >
        <section className="mt-6 sm:mt-8 lg:mt-10">
          <CarsDocSteps title="ШАГ №7" subtitle="ВЫДАЧА АВТОМОБИЛЯ" />
        </section>

        <div className="w-full lg:w-[95%] px-4 sm:px-6 lg:px-0">
          <p className="text-base sm:text-lg lg:text-[22px] py-3 sm:py-4 lg:py-3 leading-relaxed text-center sm:text-left">
            По Вашему выбору{" "}
            <span className="text-black font-bold">
              автомобиль будет доставлен по указанному адресу
            </span>{" "}
            или передан в один из наших партнерских детейлинг-центров.
          </p>
        </div>

        <div className="flex-1 mt-6 sm:mt-7 lg:mt-8 mb-20 sm:mb-25 lg:mb-30">
          <div className="bg-[#FF0000] py-3 sm:py-4 lg:py-4">
            <div className="text-white text-sm sm:text-base lg:text-[21px] font-bold text-center uppercase w-full sm:w-[95%] lg:w-[96%] mx-auto px-4 sm:px-6 lg:px-0 leading-tight sm:leading-normal">
              Общее время доставки автомобиля до Москвы с учетом таможенного
              оформления составляет{" "}
              <span className="text-black">30-60 дней</span> с момента выкупа
              автомобиля
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
