import React from "react";
import ParallaxImageGallery from "../components/ParallaxImageGallery";
import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/LOGO_white.svg";
import { useSmoothScroll } from "../components/useSmoothScroll";

function Contacts() {
  const feedbackRef = useSmoothScroll("#feedback-form", 100);
  const mapRef = useSmoothScroll("#maps", 100);
  const contactRef = useSmoothScroll("#contact", 100);

  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-10 sm:py-20 md:py-30 lg:py-40 bg-white">
      <main className="bg-white text-[#0b0b0b] min-h-screen">
        <section className="relative z-50 py-6 sm:py-8 md:py-10 lg:py-12 text-center">
          <h1
            className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 font-semibold uppercase mx-4 sm:mx-5 text-[#1E1E1E] 
                        text-[22px] max-[370px]:text-[20px]
                        sm:text-[26px] 
                        md:text-[30px] 
                        lg:text-[34px] 
                        xl:text-[40px]
                        2xl:text-[45px]
                        3xl:text-[50px]
                        4xl:text-[55px]"
          >
            МЫ{" "}
            <span className="italic font-normal underline decoration-red-500">
              РАДЫ
            </span>{" "}
            ВСТРЕЧАМ В НАШЕМ <br /> ОФИСЕ В ЮЗАО МОСКВЫ!
          </h1>
        </section>

        {/* Контакты */}
        <section
          ref={contactRef}
          className="relative z-50 container mx-auto px-4 sm:px-5 py-6 sm:py-8 grid gap-8 sm:gap-10 md:gap-12 lg:gap-15 md:grid-cols-2"
        >
          <div className="bg-[#0b0b0b] text-white rounded-2xl sm:rounded-3xl lg:rounded-4xl py-6 sm:py-8 md:py-10 lg:py-12 px-6 sm:px-8 md:px-10">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-bold mb-2 sm:mb-3">
              ГОЛОВНОЙ ОФИС
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
              <b>Адрес: </b> Москва, Ленинский проспект, 14B, Tower Central Park
            </p>
            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
              <b>График работы:</b> 09:00 - 18:00
            </p>
            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
              <b>Телефон:</b> +7 (495) 123-45-67
            </p>
            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
              <b>Email:</b> info@it-alliance.ru
            </p>
          </div>

          <div className="bg-red-600 text-white rounded-2xl sm:rounded-3xl lg:rounded-4xl py-6 sm:py-8 md:py-10 lg:py-12 px-6 sm:px-8 md:px-10 mt-6 md:mt-0">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-bold mb-2 sm:mb-3">
              ТЕХПОДДЕРЖКА
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
              <b>Email:</b> support@it-alliance.ru
            </p>
            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
              <b>Телефон:</b> 8 (800) 555-00-55
            </p>
            {/* <a href="#feedback-form"> */}
            <button
              onClick={scrollToFeedback}
              className="mt-6 sm:mt-8 bg-white text-black px-8 sm:px-12 md:px-15 py-3 sm:py-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-bold hover:text-white hover:bg-black transition-all duration-500 ease-in-out"
            >
              Написать
            </button>
            {/* </a> */}
          </div>
        </section>

        {/* Карта */}
        <section
          ref={mapRef}
          className="container mx-auto mt-8 sm:mt-10 px-4 sm:px-5 py-4 relative z-50"
        >
          <div
            className="rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-red-500 bg-gray-100 w-full flex justify-center items-center
                         h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[750px] relative"
          >
            <a
              href="https://yandex.ru/maps/org/central_park_tower/1403355809/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
                zIndex: 51,
              }}
            >
              Central Park Tower
            </a>
            <a
              href="https://yandex.ru/maps/213/moscow/category/sale_and_lease_of_commercial_real_estate/184107521/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
                zIndex: 51,
              }}
            >
              Продажа и аренда коммерческой недвижимости в Москве
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/org/central_park_tower/1403355809/?ll=37.600729%2C55.720905&z=16"
              width="100%"
              height="100%"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: "relative", zIndex: 50 }}
              title="Карта расположения офиса"
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl"
            />
          </div>
        </section>

        {/* Логотип и текст - СРЕДНИЙ слой */}
        <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
          <img
            src={logo}
            className="w-10 min-[480px]:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto"
            alt="logo"
          />
          <h1
            className="text-white font-semibold 
                           ml-4 min-[480px]:ml-6 sm:ml-8 md:ml-10 lg:ml-12
                           text-[20px] min-[480px]:text-[24px] sm:text-[32px] 
                           md:text-[48px] lg:text-[60px] xl:text-[72px] 2xl:text-[80px]"
          >
            IT ALLIANCE
          </h1>
        </div>

        {/* Галерея - САМЫЙ НИЗКИЙ слой */}
        <div className="relative overflow-hidden z-30">
          <ParallaxImageGallery />
        </div>

        {/* Форма */}
        <section
          ref={feedbackRef}
          className="relative z-50 mt-16 sm:mt-20 md:mt-25 lg:mt-30 relative"
        >
          <h2
            className="text-center font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] mb-12 sm:mb-16 lg:mb-20"
            id="feedback-form"
          >
            ОБРАТНАЯ СВЯЗЬ
          </h2>

          {/* arrow left  */}
          <div className="hidden xl:block absolute w-[369px] h-[394px] left-15 top-40 transition-all duration-500 transform rotate-180">
            <span className="absolute top-0 right-16 transition-all duration-300 hover:fill-[#9e9e9e] fill-[#FFF4F4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={75}
                height={74}
                viewBox="0 0 75 74"
              >
                <path d="M21.84 73.082L74.2109 17.6271L0.000171041 4.25325e-05L21.84 73.082Z" />
              </svg>
            </span>
            <span className="absolute right-2 top-9 transition-all duration-300 hover:fill-[#FFFFFF] fill-[#FFD9D9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={135}
                height={133}
                viewBox="0 0 135 133"
              >
                <path d="M134.516 132.121L94.3257 4.12311e-06L1.3662e-06 100.866L134.516 132.121Z" />
              </svg>
            </span>
            <span className="absolute -right-2 bottom-10 transition-all duration-300 hover:fill-brand-light-black fill-[#FF0000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={192}
                height={188}
                viewBox="0 0 192 188"
              >
                <path d="M8.18238e-06 0.000434112L192.007 41.8169L59.7903 187.191L8.18238e-06 0.000434112Z" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 transition-all duration-300 hover:fill-brand-black fill-[#CC0000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={240}
                height={234}
                viewBox="0 0 240 234"
              >
                <path d="M239.653 233.598L165.042 0.00138529L0.000414282 181.108L239.653 233.598Z" />
              </svg>
            </span>
          </div>
          {/* arrow right */}
          <div className="hidden xl:block absolute w-[369px] h-[394px] right-15 bottom-0 transition-all duration-500 transform">
            <span className="absolute top-0 right-16 transition-all duration-300 hover:fill-[#9e9e9e] fill-[#FFF4F4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={75}
                height={74}
                viewBox="0 0 75 74"
              >
                <path d="M21.84 73.082L74.2109 17.6271L0.000171041 4.25325e-05L21.84 73.082Z" />
              </svg>
            </span>
            <span className="absolute right-2 top-9 transition-all duration-300 hover:fill-[#5e5e5e] fill-[#FFD9D9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={135}
                height={133}
                viewBox="0 0 135 133"
              >
                <path d="M134.516 132.121L94.3257 4.12311e-06L1.3662e-06 100.866L134.516 132.121Z" />
              </svg>
            </span>
            <span className="absolute -right-2 bottom-10 transition-all duration-300 hover:fill-brand-light-black fill-[#FF0000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={192}
                height={188}
                viewBox="0 0 192 188"
              >
                <path d="M8.18238e-06 0.000434112L192.007 41.8169L59.7903 187.191L8.18238e-06 0.000434112Z" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 transition-all duration-300 hover:fill-brand-black fill-[#CC0000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={240}
                height={234}
                viewBox="0 0 240 234"
              >
                <path d="M239.653 233.598L165.042 0.00138529L0.000414282 181.108L239.653 233.598Z" />
              </svg>
            </span>
          </div>

          <div className="flex justify-center px-4 sm:px-5">
            <div className="bg-[#1E1E1E] text-white w-full max-w-[400px] sm:max-w-[450px] p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl">
              <form className="flex flex-col">
                <label className="text-[#FBFFFE] text-[14px] sm:text-[16px]">
                  Имя
                </label>
                <input
                  type="text"
                  className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF]"
                  placeholder="Имя"
                  required
                />
                <label className="text-[#FBFFFE] mt-4 sm:mt-6 text-[14px] sm:text-[16px]">
                  E-mail
                </label>
                <input
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF]"
                  placeholder="E-mail"
                  required
                />
                <label className="text-[#FBFFFE] mt-4 sm:mt-6 text-[14px] sm:text-[16px]">
                  Тема
                </label>
                <input
                  type="text"
                  className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF]"
                  placeholder="Тема"
                  required
                />
                <label className="text-[#FBFFFE] mt-4 sm:mt-6 text-[14px] sm:text-[16px]">
                  Сообщение
                </label>
                <textarea
                  className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF] h-24 sm:h-28"
                  placeholder="Сообщение"
                  required
                />
                {/* <label className="flex items-center text-[12px] sm:text-[13px] mt-4 sm:mt-5 text-white cursor-pointer text-justify">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer" required
                  />
                  <span
                    className="relative h-4 w-4 bg-[#1e1e29] border border-white rounded transition-all duration-200 mr-2.5
                  after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2 
                  after:w-1.5 after:h-2.5 after:border-white after:border-r-2 after:border-b-2 
                  after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
                  peer-checked:after:block
                  peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]
                  peer-focus:ring-1"
                  />
                  Я согласен с{" "}
                  <a href="/personal" className="text-red-500 underline ml-2">
                    политикой обработки персональных данных
                  </a>
                </label> */}
                <label className="flex items-start text-[10px] sm:text-[13px] md:text-[14] mt-4 sm:mt-5 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    required
                  />
                  <span
                    className="relative flex-shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 bg-[#1e1e29] border border-white rounded transition-all duration-200 mr-2 mt-0.5
    after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2 
    after:w-1.5 after:h-2 sm:after:w-1.5 sm:after:h-2.5 after:border-white after:border-r-2 after:border-b-2 
    after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
    peer-checked:after:block
    peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]
    peer-focus:ring-1"
                  />
                  <span className="leading-tight mt-1">
                    Я согласен с{" "}
                    <Link
                      to="/personal"
                      className="text-red-500 underline ml-2 sm:ml-1 hover:text-red-400 transition-colors duration-200 inline-block"
                    >
                      политикой обработки персональных данных
                    </Link>
                  </span>
                </label>
                <button className="mt-4 sm:mt-5 mb-1 bg-white text-black rounded-full w-[180px] sm:w-[200px] py-2 sm:py-3 text-[14px] sm:text-[16px] font-semibold mx-auto hover:text-white hover:bg-red-500 transition-all duration-500 ease-in-out">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contacts;
