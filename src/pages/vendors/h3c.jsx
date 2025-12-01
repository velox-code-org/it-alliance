import Vector370 from "../../assets/vendors/h3c-logo370.png";
import Vector480 from "../../assets/vendors/h3c-logo480.png";
import Vector576 from "../../assets/vendors/h3c-logo576.png";
import Vector768 from "../../assets/vendors/h3c-logo768.png";
import Vector992 from "../../assets/vendors/h3c-logo992.png";
import Vector1024 from "../../assets/vendors/h3c-logo1024.png";
import Vector1260 from "../../assets/vendors/h3c-logo1260.png";
import Vector1440 from "../../assets/vendors/h3c-logo1440.png";
import Vector1600 from "../../assets/vendors/h3c-logo1600.png";
import Vector1920 from "../../assets/vendors/h3c-logo1920.png";
import Vector from "../../assets/vendors/Vector.svg";
import { Link } from "react-router-dom";

export default function H3cPages() {
  return (
    <div
      className="min-h-dvh bg-white 
        pt-[140px] 
        xs:pt-[100px] 
        sm:pt-[110px] 
        md:pt-[120px] 
        lg:pt-[130px]"
    >
      <div
        className="
            px-1 xs:px-2 sm:px-3 md:px-4
            max-w-[90vw] 
            xs:max-w-[88vw] 
            sm:max-w-[85vw] 
            md:max-w-[80vw] 
            lg:max-w-[75vw] 
            xl:max-w-[70vw] 
            min-[1260px]:max-w-[809px]
            min-[1440px]:max-w-[926px]
            min-[1600px]:max-w-[1000px]
            min-[1900px]:max-w-[1050px]
            mx-auto"
      >
        <div className="flex justify-between gap-3 xs:gap-4 sm:gap-6 mb-4 xs:mb-5 sm:mb-6">
          <div className="flex flex-col justify-between min-h-[80px] xs:min-h-[90px] sm:min-h-[100px] py-1 xs:py-2">
            <div>
              <Link
                to="/vendors"
                className="
                            text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] min-[1260px]:text-[16px]
                            flex gap-1 items-center"
              >
                <img
                  src={Vector}
                  alt="mellanox"
                  className="w-2 xs:w-2.5 sm:w-3"
                />
                Назад ко всем вендорам
              </Link>
            </div>
            <div className="bottom-0">
              <div
                className="
                            text-[18px] xs:text-[22px] sm:text-[26px] md:text-[34px] lg:text-[44px] xl:text-[50px] min-[1260px]:text-[54px] min-[1440px]:text-[60px] min-[1600px]:text-[64px] min-[1900px]:text-[70px]
                            font-[600] uppercase text-[#1E1E1E]"
              >
                h3c
              </div>
              <div
                className="flex gap-1 xs:gap-1.5 sm:gap-2 
                            text-[7px] xs:text-[8px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[14px] min-[1260px]:text-[16px]"
              >
                <button className="border rounded-full py-[2px] px-3 xs:py-[3px] xs:px-3 uppercase bg-[#FF0000] text-white">
                  СЕТЬ
                </button>
                <button className="border rounded-full py-[2px] px-3 xs:py-[3px] xs:px-3 uppercase bg-[#FF0000] text-white">
                  СЕРВЕРЫ
                </button>
                <button className="border rounded-full py-[2px] px-3 xs:py-[3px] xs:px-3 uppercase bg-[#FF0000] text-white">
                  ДАННЫЕ
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative
                    w-[100px] h-[60px] 
                    xs:w-[120px] xs:h-[70px]
                    sm:w-[150px] sm:h-[90px]
                    md:w-[200px] md:h-[120px]
                    lg:w-[260px] lg:h-[155px]
                    xl:w-[300px] xl:h-[180px]
                    min-[1260px]:w-[320px] min-[1260px]:h-[190px]
                    min-[1440px]:w-[344px] min-[1440px]:h-[205px]
                    flex items-center justify-center"
          >
            <picture>
              <source media="(min-width: 1900px)" srcSet={Vector1920} />
              <source media="(min-width: 1600px)" srcSet={Vector1600} />
              <source media="(min-width: 1440px)" srcSet={Vector1440} />
              <source media="(min-width: 1260px)" srcSet={Vector1260} />
              <source media="(min-width: 1024px)" srcSet={Vector1024} />
              <source media="(min-width: 992px)" srcSet={Vector992} />
              <source media="(min-width: 768px)" srcSet={Vector768} />
              <source media="(min-width: 576px)" srcSet={Vector576} />
              <source media="(min-width: 480px)" srcSet={Vector480} />
              <img
                src={Vector370}
                alt="Huawei"
                className="w-full h-auto object-contain"
              />
            </picture>

            <div className="absolute top-0 left-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t border-l border-black-500"></div>
            <div className="absolute top-0 right-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t border-r border-black-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b border-l border-black-500"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b border-r border-black-500"></div>
          </div>
        </div>

        <div
          className="
                text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] min-[1260px]:text-[16px]
                px-1 xs:px-2"
        >
          <p className="text-justify">
            <b>H3C</b> является лидером отрасли в области предоставления
            цифровых решений и стремится стать самым надежным партнером для
            клиентов в их стремлении к бизнес-инновациям и цифровым
            преобразованиям. H3C предлагает полный портфель продуктов цифровой
            инфраструктуры, охватывающих вычислительные ресурсы, хранилища,
            сети, безопасность и связанные с ними домены, и обеспечивает
            комплексную универсальную цифровую платформу, которая включает
            облачные вычисления, большие данные, информационную
            коммуникабельность, информационную безопасность, новую безопасность,
            технологию «интернет вещей» (IoT), пограничные вычисления,
            искусственный интеллект (AI) и решения 5G, а также комплексные
            технические услуги. H3C также является эксклюзивным поставщиком
            серверов HPE®, систем хранения данных и сопутствующих технических
            услуг в Китае.
          </p>
        </div>

        <div className="mb-20 flex items-center gap-1.5 xs:gap-2 sm:gap-3 my-4 xs:my-5 sm:my-6 px-1 xs:px-2">
          <a href="/contacts/#feedback-form">
            <button
              className="hover:bg-[#FF0000] hover:border-[#FF0000]  cursor-pointer hover:text-white border rounded-full py-4 xs:py-5 px-6 xs:px-8 uppercase 
                    text-[8px] xs:text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] min-[1260px]:text-[19px] min-[1440px]:text-[21px]
                    bg-[#1E1E1E] text-white transition-colors duration-300"
            >
              СВЯЗАТЬСЯ С НАМИ
            </button>
          </a>
          <a href="https://www.h3c.com/ru/" target="_blank">
            <button
              className="transition-colors duration-300 hover:bg-[#000000] hover:border-[#000000] cursor-pointer hover:text-white border rounded-full py-4 xs:py-5 px-6 xs:px-8 uppercase 
                    text-[8px] xs:text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] min-[1260px]:text-[19px] min-[1440px]:text-[21px]"
            >
              САЙТ ВЕНДОРА
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
