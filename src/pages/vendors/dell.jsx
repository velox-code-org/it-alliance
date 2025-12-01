import TableItem from "./table-component";
import Vector370 from "../../assets/vendors/dell-logo370.png";
import Vector480 from "../../assets/vendors/dell-logo480.png";
import Vector576 from "../../assets/vendors/dell-logo576.png";
import Vector768 from "../../assets/vendors/dell-logo768.png";
import Vector992 from "../../assets/vendors/dell-logo992.png";
import Vector1024 from "../../assets/vendors/dell-logo1024.png";
import Vector1260 from "../../assets/vendors/dell-logo1260.png";
import Vector1440 from "../../assets/vendors/dell-logo1440.png";
import Vector1600 from "../../assets/vendors/dell-logo1600.png";
import Vector1920 from "../../assets/vendors/dell-logo1920.png";
import Vector from "../../assets/vendors/Vector.svg";
import Scroll_down from "../../components/icons/scroll_down.svg";
import { Link } from "react-router-dom";

export default function DellPages() {
  const table_ = [
    {
      title: "Rack Servers",
      text: "Для максимальной и универсальной производительности. Получите безопасную, масштабируемую инфраструктуру с высокоплотными одно-, двух- или четырехсокетными стоечными серверами, оптимизированными для работы ваших систем совместно или независимо. Идеально подходит для традиционных приложений, виртуализации и облачных рабочих нагрузок.",
    },
    {
      title: "Tower Servers",
      text: "Для малого бизнеса и удаленных офисов. Используйте серию компактных и тихих серверов Tower, включая конфигурации с одним сокетом, которые идеально подходят для повседневных бизнес-приложений, а также варианты с двумя сокетами для более сложных вычислений, виртуализации и энергоемких рабочих нагрузок.",
    },
    {
      title: "AI Servers",
      text: "Для сложных и ресурсоемких рабочих нагрузок. Используйте надежные и безопасные высокопроизводительные приложения и ускоряйте ресурсоемкие рабочие нагрузки в ЦОД или в экстремальных условиях на периферии.",
    },
    {
      title: "Modular Infrastructure",
      text: "Для гибких и масштабируемых сред. Легко настраивайте, развертывайте и управляйте своей инфраструктурой, снижая при этом эксплуатационные расходы. Создайте свой центр обработки данных, готовый к будущему, с вычислительными, сетевыми и модулями хранения, которые можно точно настроить под ваши потребности и расширить со временем.",
    },
    {
      title: "Edge Servers",
      text: "Для экстремальных условий. Обеспечивают высокопроизводительные вычисления с помощью Edge-серверов уровня Enterprise, сертифицированных для использования в телекоммуникационных и военных целях и созданных для работы в условиях экстремальной жары, пыли, ударов и вибрации.",
    },
    {
      title: "Cloud Scale Servers",
      text: "Серверные технологии оптимизированные для поставщиков облачных услуг. Ускорьте бизнес с помощью передовых серверов, предназначенных для цифровых услуг и хостинга. Наши специально разработанные серверы PowerEdge оптимизированы для провайдеров облачных услуг.",
    },
  ];
  const table_2 = [
    {
      title: "PowerScale",
      text: "Безопасный и эффективный горизонтально масштабируемый NAS-сервер, специально созданный для задач ИИ",
    },
    {
      title: "PowerStore",
      text: "Интеллектуальное флэш-хранилище для цифрового бизнеса",
    },
    {
      title: "PowerFlex",
      text: "Неограниченная программно-определяемая инфраструктура, созданная для многооблачных сред",
    },
    {
      title: "PowerVault",
      text: "Доступное блочное хранилище",
    },
    {
      title: "PowerMax",
      text: "Самое безопасное в мире хранилище для критически важных данных",
    },
    {
      title: "Unity XT",
      text: "Гибкое гибридное хранилище для требовательных к расходам предприятий",
    },
    {
      title: "ECS",
      text: "Самое безопасное в мире объектное хранилище уровня enterprise",
    },
  ];
  const table_3 = [
    {
      title: "Коммутаторы уровня доступа и агрегации",
      text: "PowerSwitch Data Center Switches PowerSwitch Edge Switches",
    },
    {
      title: "Модульные коммутаторы",
      text: "PowerEdge MX I/O Modules",
    },
  ];
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
            px-3 xs:px-4 sm:px-5 md:px-6
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
                <img src={Vector} alt="hp" className="w-2 xs:w-2.5 sm:w-3" />
                Назад ко всем вендорам
              </Link>
            </div>
            <div className="bottom-0">
              <div
                className="
                            text-[18px] xs:text-[22px] sm:text-[26px] md:text-[34px] lg:text-[44px] xl:text-[50px] min-[1260px]:text-[54px] min-[1440px]:text-[60px] min-[1600px]:text-[64px] min-[1900px]:text-[70px]
                            font-[600] uppercase text-[#1E1E1E]"
              >
                dell
              </div>
              <div
                className="flex gap-1 xs:gap-1.5 sm:gap-2 
                            text-[7px] xs:text-[8px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[14px] min-[1260px]:text-[16px]"
              >
                <button className="border rounded-full py-[2px] px-3 xs:py-[3px] xs:px-3 uppercase bg-[#FF0000] text-white">
                  СЕТЬ
                </button>
                <button className="border rounded-full py-[2px] px-3 xs:py-[3px] xs:px-3 uppercase bg-[#FF0000] text-white">
                  СХД
                </button>
                <button className="border rounded-full py-[2px] px-3 xs:py-[3px] xs:px-3 uppercase bg-[#FF0000] text-white">
                  СЕРВЕРЫ
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
                alt="hp"
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
            <b>Dell Inc.</b> — американская компания, один из крупнейших в мире
            производителей вычислительной техники. Штаб-квартира находится в
            Раунд-Роке в штате Техас в США. <br />
            <br />
            Основана Майклом Деллом в 1984 году, по состоянию на 2020-е годы
            Делл остаётся основным владельцем и председателем совета директоров
            и генеральным директором компании. В первые два десятилетия компания
            фокусировалась в основном на производстве и сбыте персональных
            компьютеров и ноутбуков, с 1990-х годов освоила производство
            серверного оборудования. В 1988 году осуществила первичное
            размещение; к 1992 году вошла в список 500 крупнейших компаний. В
            2013 году Делл выкупил акции компании, сделав её частной. С
            поглощением в 2015 году производителя систем хранения данных для
            организаций — корпорации EMC — сформировано два крупных направления:
            серверных систем (Dell EMC, впоследствии Infrastructure Solutions) и
            персональных систем (Client Solutions), объединённые структурой под
            наименованием Dell Technologies, акции которой в 2018 году выведены
            на Нью-Йоркскую фондовую биржу
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
          <a href="https://www.dell.com/" target="_blank">
            <button
              className="transition-colors duration-300 hover:bg-[#000000] hover:border-[#000000] cursor-pointer hover:text-white border rounded-full py-4 xs:py-5 px-6 xs:px-8 uppercase 
                    text-[8px] xs:text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] min-[1260px]:text-[19px] min-[1440px]:text-[21px]"
            >
              САЙТ ВЕНДОРА
            </button>
          </a>
        </div>
        <div className="w-full hidden md:flex justify-center h-auto">
          <img
            src={Scroll_down}
            alt="Scroll_down"
            className="w-5 h-auto object-contain text-center"
          />
        </div>
      </div>

      <div
        className=" text-red-500 text-center font-[700] mt-18 xs:mt-19 sm:mt-20 mb-5
            text-[18px] xs:text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] xl:text-[48px] min-[1260px]:text-[52px] min-[1440px]:text-[58px] min-[1600px]:text-[62px] min-[1900px]:text-[68px]"
      >
        СЕРВЕРЫ
      </div>

      <div className="border-b border-[#D3D3D3]">
        <div
          className="px-2 xs:px-3 sm:px-4
                max-w-[92vw] 
                xs:max-w-[90vw] 
                sm:max-w-[88vw] 
                md:max-w-[85vw] 
                lg:max-w-[80vw] 
                xl:max-w-[75vw] 
                min-[1260px]:max-w-[1017px]
                min-[1440px]:max-w-[1164px]
                min-[1600px]:max-w-[1250px]
                min-[1900px]:max-w-[1350px]
                mx-auto"
        >
          <table className="w-full border-separate border-spacing-[2px] xs:border-spacing-[3px] sm:border-spacing-[4px]">
            <thead>
              <tr
                className="bg-[#1E1E1E] text-white uppercase 
                            text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] min-[1260px]:text-[16px] min-[1440px]:text-[18px] min-[1600px]:text-[20px]
                            font-[700] text-center"
              >
                <th className="rounded-tl-[30px] xs:rounded-tl-[25px] w-[30%] p-2 xs:p-3 sm:p-5">
                  НАИМЕНОВАНИЕ
                </th>
                <th className="rounded-tr-[35px] xs:rounded-tr-[25px] p-1 xs:p-1.5 sm:p-4">
                  ПРЕДНАЗНАЧЕНИЕ
                </th>
              </tr>
            </thead>
            <tbody>
              {table_.map((card, index) => (
                <TableItem key={index} name={card.title} text={card.text} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center my-4 xs:my-5 sm:my-6">
          <a href="https://www.dell.com/" target="_blank">
            <button
              className="my-10 hover:bg-[#FF0000] hover:border-[#FF0000] cursor-pointer hover:text-white
                    text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px] min-[1260px]:text-[17px] min-[1440px]:text-[19px] min-[1600px]:text-[21px]
                    font-[700] py-4 xs:py-5 px-6 xs:px-8 rounded-full border uppercase "
            >
              перейти на сайт производителя
            </button>
          </a>
        </div>
      </div>

      <div
        className="text-red-500 text-center font-[700] mt-18 xs:mt-19 sm:mt-20 mb-5
            text-[18px] xs:text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] xl:text-[48px] min-[1260px]:text-[52px] min-[1440px]:text-[58px] min-[1600px]:text-[62px] min-[1900px]:text-[68px]"
      >
        СХД
      </div>

      <div className="border-b border-[#D3D3D3]">
        <div
          className="px-2 xs:px-3 sm:px-4
                max-w-[92vw] 
                xs:max-w-[90vw] 
                sm:max-w-[88vw] 
                md:max-w-[85vw] 
                lg:max-w-[80vw] 
                xl:max-w-[75vw] 
                min-[1260px]:max-w-[1017px]
                min-[1440px]:max-w-[1164px]
                min-[1600px]:max-w-[1250px]
                min-[1900px]:max-w-[1350px]
                mx-auto"
        >
          <table className="w-full border-separate border-spacing-[2px] xs:border-spacing-[3px] sm:border-spacing-[4px]">
            <thead>
              <tr
                className="bg-[#1E1E1E] text-white uppercase 
                            text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] min-[1260px]:text-[16px] min-[1440px]:text-[18px] min-[1600px]:text-[20px]
                            font-[700] text-center"
              >
                <th className="rounded-tl-[30px] xs:rounded-tl-[25px] w-[30%] p-2 xs:p-3 sm:p-5">
                  НАИМЕНОВАНИЕ
                </th>
                <th className="rounded-tr-[35px] xs:rounded-tr-[25px] p-1 xs:p-1.5 sm:p-4">
                  ПРЕДНАЗНАЧЕНИЕ
                </th>
              </tr>
            </thead>
            <tbody>
              {table_2.map((card, index) => (
                <TableItem key={index} name={card.title} text={card.text} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center my-4 xs:my-5 sm:my-6">
          <a href="https://www.dell.com/" target="_blank">
            <button
              className="my-10 hover:bg-[#FF0000] hover:border-[#FF0000] cursor-pointer hover:text-white
                    text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px] min-[1260px]:text-[17px] min-[1440px]:text-[19px] min-[1600px]:text-[21px]
                    font-[700] py-4 xs:py-5 px-6 xs:px-8 rounded-full border uppercase "
            >
              перейти на сайт производителя
            </button>
          </a>
        </div>
      </div>

      <div
        className="text-red-500 text-center font-[700] mt-18 xs:mt-19 sm:mt-20 mb-5
            text-[18px] xs:text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] xl:text-[48px] min-[1260px]:text-[52px] min-[1440px]:text-[58px] min-[1600px]:text-[62px] min-[1900px]:text-[68px]"
      >
        СЕТЕВОЕ ОБОРУДОВАНИЕ
      </div>

      <div className="">
        <div
          className="px-2 xs:px-3 sm:px-4
                max-w-[92vw] 
                xs:max-w-[90vw] 
                sm:max-w-[88vw] 
                md:max-w-[85vw] 
                lg:max-w-[80vw] 
                xl:max-w-[75vw] 
                min-[1260px]:max-w-[1017px]
                min-[1440px]:max-w-[1164px]
                min-[1600px]:max-w-[1250px]
                min-[1900px]:max-w-[1350px]
                mx-auto"
        >
          <table className="w-full border-separate border-spacing-[2px] xs:border-spacing-[3px] sm:border-spacing-[4px]">
            <thead>
              <tr
                className="bg-[#1E1E1E] text-white uppercase 
                            text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] min-[1260px]:text-[16px] min-[1440px]:text-[18px] min-[1600px]:text-[20px]
                            font-[700] text-center"
              >
                <th className="rounded-tl-[30px] xs:rounded-tl-[25px] w-[30%] p-2 xs:p-3 sm:p-5">
                  НАИМЕНОВАНИЕ
                </th>
                <th className="rounded-tr-[35px] xs:rounded-tr-[25px] p-1 xs:p-1.5 sm:p-4">
                  ПРЕДНАЗНАЧЕНИЕ
                </th>
              </tr>
            </thead>
            <tbody>
              {table_3.map((card, index) => (
                <TableItem key={index} name={card.title} text={card.text} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center my-4 xs:my-5 sm:my-6">
          <a href="https://www.dell.com/" target="_blank">
            <button
              className="my-10 hover:bg-[#FF0000] hover:border-[#FF0000] cursor-pointer hover:text-white
                    text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px] min-[1260px]:text-[17px] min-[1440px]:text-[19px] min-[1600px]:text-[21px]
                    font-[700] py-4 xs:py-5 px-6 xs:px-8 rounded-full border uppercase "
            >
              перейти на сайт производителя
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
