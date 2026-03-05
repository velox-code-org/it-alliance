// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import Huawei from "../../../assets/logos/huawei_logo.png";
// import IBM from "../../../assets/logos/ibm-logo.png";
// import Brocade from "../../../assets/logos/brocade-logo.png";
// import Juniper from "../../../assets/logos/juniper-logo.png";
// import Xfusion from "../../../assets/logos/xfusion-logo.png";
// import HP from "../../../assets/logos/hp-logo.png";
// import Delta from "../../../assets/logos/delta-logo.png";
// import UNV from "../../../assets/logos/unv-logo.png";
// import DJI from "../../../assets/logos/dji-logo.png";
// import Cisco from "../../../assets/logos/cisco-logo.png";
// import Dell from "../../../assets/logos/dell-logo.png";
// import Lenovo from "../../../assets/logos/lenovo-logo.png";
// import Depo from "../../../assets/logos/depo-logo.png";
// import Qtech from "../../../assets/logos/qtech-logo.png";
// import Nebo from "../../../assets/logos/nebo-logo.png";
// import Mellanox from "../../../assets/logos/mellanox-logo.png";
// import H3C from "../../../assets/logos/h3c-logo.png";
// import NetApp from "../../../assets/logos/netapp-logo.png";
// import Supermicro from "../../../assets/logos/supermicro-logo.png";
// import Hitachi from "../../../assets/logos/hitachi-logo.png";
// import LogoCard from "../../LogoCard";

// const OurVendors = () => {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const vendors = [
//     { image: Huawei, href: "/vendors/huawei" },
//     { image: IBM, href: "/vendors/ibm" },
//     { image: Brocade, href: "/vendors/brocade" },
//     { image: Juniper, href: "/vendors/juniper" },
//     { image: Xfusion, href: "/vendors/xfusion" },
//     { image: HP, href: "/vendors/hp" },
//     { image: Delta, href: "/vendors/delta" },
//     { image: UNV, href: "/vendors/unv" },
//     { image: DJI, href: "/vendors/dji" },
//     { image: Cisco, href: "/vendors/cisco" },
//     { image: Dell, href: "/vendors/dell" },
//     { image: Lenovo, href: "/vendors/lenovo" },
//     { image: Depo, href: "/vendors/depo" },
//     { image: Qtech, href: "/vendors/qtech" },
//     { image: Nebo, href: "/vendors/nebo" },
//     { image: Mellanox, href: "/vendors/mellanox" },
//     { image: H3C, href: "/vendors/h3c" },
//     { image: NetApp, href: "/vendors/netapp" },
//     { image: Supermicro, href: "/vendors/supermicro" },
//     { image: Hitachi, href: "/vendors/hitachi" },
//   ];

//   const handleSlideChange = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   return (
//     <section className="lg:sticky lg:top-[40px] lg:min-h-dvh max-lg:py-5 z-5 bg-brand-black flex flex-col items-center justify-center">
//       <div className={`relative mx-100 px-4 py-4 mx-auto text-white`}>
//         {/* Верхний левый угол */}
//         <span
//           className={`block absolute transition-all duration-500 left-0 top-0 stroke-brand-white`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100%"
//             height="100%"
//             viewBox="0 0 25 24"
//             fill="none"
//             className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <path
//               d="M0.519531 0.5H24.4805"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//             <path
//               d="M0.5 24L0.5 -1.15019e-06"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//           </svg>
//         </span>

//         {/* Верхний правый угол */}
//         <span
//           className={`block absolute transition-all duration-500 right-0 top-0 stroke-brand-white`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100%"
//             height="100%"
//             viewBox="0 0 25 24"
//             fill="none"
//             className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <path
//               d="M23.9609 0.5H-6.48499e-05"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//             <path
//               d="M23.9805 24L23.9805 -1.15019e-06"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//           </svg>
//         </span>

//         {/* Нижний левый угол */}
//         <span
//           className={`block absolute transition-all duration-500 left-0 bottom-0 stroke-brand-white`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100%"
//             height="100%"
//             viewBox="0 0 25 24"
//             className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <path
//               d="M0.519531 23.5H24.4805"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//             <path d="M0.5 0L0.5 24" stroke="currentColor" strokeWidth="1" />
//           </svg>
//         </span>

//         {/* Нижний правый угол */}
//         <span
//           className={`block absolute transition-all duration-500 right-0 bottom-0 stroke-brand-white`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100%"
//             height="100%"
//             viewBox="0 0 25 24"
//             fill="none"
//             className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <path
//               d="M23.9609 23.5H-6.48499e-05"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//             <path
//               d="M23.9805 0L23.9805 24"
//               stroke="currentColor"
//               strokeWidth="1"
//             />
//           </svg>
//         </span>

//         {/* Заголовок с адаптивным размером текста */}
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[77px] font-bold uppercase text-center leading-tight">
//           НАШИ <span className="text-brand-normal">ВЕНДОРЫ</span>
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto mt-[111px] w-full px-10 relative">
//         {/* Кнопка "Назад" */}
//         <button
//           ref={prevButtonRef}
//           className={` rounded-lg
//     absolute left-0 top-1/2 -translate-y-1/2 z-10 
//     flex items-center justify-center 
//     transition-all duration-300 group cursor-pointer
//     /* Мобильные (до 768px) - прозрачный фон */
//     w-6 h-full bg-transparent hover:bg-transparent
//     /* Планшеты (768px-1259px) - скрываем */
//     md:hidden
//     /* Десктоп (1260px+) - обычный фон */
//     xl:flex xl:w-9 xl:bg-brand-light-black xl:hover:bg-brand-normal
//     ${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}
//   `}
//           aria-label="Previous slide"
//         >
//           <svg
//             className="rotate-180 w-4 h-4 xl:w-6 xl:h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 19 14"
//             fill="none"
//           >
//             <path
//               d="M11.388 1.57262L16.6679 6.85246L11.388 12.1323M15.8556 6.85246L1.11125 6.85261"
//               stroke="#FBFFFE"
//               strokeWidth="2.22222"
//               strokeLinecap="square"
//             />
//           </svg>
//         </button>

//         {/* Кнопка "Вперед" */}
//         <button
//           ref={nextButtonRef}
//           className={` rounded-lg
//     absolute right-0 top-1/2 -translate-y-1/2 z-10 
//     flex items-center justify-center 
//     transition-all duration-300 group cursor-pointer
//     /* Мобильные (до 768px) - прозрачный фон */
//     w-6 h-full bg-transparent hover:bg-transparent
//     /* Планшеты (768px-1259px) - скрываем */
//     md:hidden
//     /* Десктоп (1260px+) - обычный фон */
//     xl:flex xl:w-9 xl:bg-brand-light-black xl:hover:bg-brand-normal
//     ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}
//   `}
//           aria-label="Next slide"
//         >
//           <svg
//             className="w-4 h-4 xl:w-6 xl:h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 19 14"
//             fill="none"
//           >
//             <path
//               d="M11.388 1.57262L16.6679 6.85246L11.388 12.1323M15.8556 6.85246L1.11125 6.85261"
//               stroke="#FBFFFE"
//               strokeWidth="2.22222"
//               strokeLinecap="square"
//             />
//           </svg>
//         </button>

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             // 370px - 767px: 2 карточки с кнопками
//             370: {
//               slidesPerView: 2,
//               spaceBetween: 15,
//               navigation: {
//                 enabled: true, // Включаем навигацию для кнопок
//               },
//             },
//             // 768px - 1259px: 3 карточки без кнопок (только свайп)
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//               navigation: {
//                 enabled: false, // Отключаем навигацию для свайпа
//               },
//             },
//             // 1260px - 2560px: 3 карточки с кнопками
//             1260: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//               navigation: {
//                 enabled: true, // Включаем навигацию для кнопок
//               },
//             },
//           }}
//           navigation={{
//             prevEl: prevButtonRef.current,
//             nextEl: nextButtonRef.current,
//           }}
//           onSwiper={(swiper) => {
//             // Добавляем задержку для инициализации навигации
//             setTimeout(() => {
//               if (prevButtonRef.current && nextButtonRef.current) {
//                 const navigation = swiper.params.navigation;

//                 navigation.prevEl = prevButtonRef.current;
//                 navigation.nextEl = nextButtonRef.current;

//                 swiper.navigation.init();
//                 swiper.navigation.update();
//               }
//             }, 100);

//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           onSlideChange={handleSlideChange}
//           onReachBeginning={() => setIsBeginning(true)}
//           onReachEnd={() => setIsEnd(true)}
//           onFromEdge={() => {
//             setIsBeginning(false);
//             setIsEnd(false);
//           }}
//           className="vendor-swiper"
//         >
//           {vendors.map((vendor, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex flex-col items-center">
//                 <a href={vendor.href} className="block w-full">
//                   <div className="flex justify-center">
//                     <LogoCard Image={vendor.image} />
//                   </div>
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="mt-20 pt-2">
//         <p className="xl:text-lg text-[9px] text-brand-white font-light text-center">
//           Мы стремимся предлагать своим клиентам лучшие решения и технологии,
//           поэтому мы сотрудничаем{" "}
//           <span className="font-bold">
//             с ведущими вендорами в своей области.
//           </span>
//           <br />
//           Наши партнеры - это компании, которые делят наши ценности и{" "}
//           <span className="text-brand-normal">
//             стремятся к безупречному качеству.
//           </span>
//         </p>
//         <p className="xl:text-sm text-[7px] font-light text-brand-dark-gray text-center mt-5">
//           * Список представлен не исчерпывающим образом. Мы открыты для
//           сотрудничества с новыми вендорами и всегда готовы рассмотреть ваши
//           предложения.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default OurVendors;
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Huawei from "../../../assets/logos/huawei_logo.png";
import IBM from "../../../assets/logos/ibm-logo.png";
import Brocade from "../../../assets/logos/brocade-logo.png";
import Juniper from "../../../assets/logos/juniper-logo.png";
import Xfusion from "../../../assets/logos/xfusion-logo.png";
import HP from "../../../assets/logos/hp-logo.png";
import Delta from "../../../assets/logos/delta-logo.png";
import UNV from "../../../assets/logos/unv-logo.png";
import DJI from "../../../assets/logos/dji-logo.png";
import Cisco from "../../../assets/logos/cisco-logo.png";
import Dell from "../../../assets/logos/dell-logo.png";
import Lenovo from "../../../assets/logos/lenovo-logo.png";
import Depo from "../../../assets/logos/depo-logo.png";
import Qtech from "../../../assets/logos/qtech-logo.png";
import Nebo from "../../../assets/logos/nebo-logo.png";
import Mellanox from "../../../assets/logos/mellanox-logo.png";
import H3C from "../../../assets/logos/h3c-logo.png";
import NetApp from "../../../assets/logos/netapp-logo.png";
import Supermicro from "../../../assets/logos/supermicro-logo.png";
import Hitachi from "../../../assets/logos/hitachi-logo.png";
import LogoCard from "../../LogoCard";
import Astra from '../../../assets/vendors/astra.svg';
import Aquarius from '../../../assets/vendors/aquarius.svg';

const OurVendors = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const vendors = [
    { image: Huawei, href: "/vendors/huawei" },
    { image: Depo, href: "/vendors/depo" },
    { image: IBM, href: "/vendors/ibm" },
    { image: Brocade, href: "/vendors/brocade" },
    { image: Astra, href: "/vendors/astra" },
    { image: Juniper, href: "/vendors/juniper" },
    { image: Xfusion, href: "/vendors/xfusion" },
    { image: Aquarius, href: "/vendors/Aquarius" },
    { image: HP, href: "/vendors/hp" },
    { image: Delta, href: "/vendors/delta" },
    { image: UNV, href: "/vendors/unv" },
    { image: DJI, href: "/vendors/dji" },
    { image: Cisco, href: "/vendors/cisco" },
    { image: Dell, href: "/vendors/dell" },
    { image: Lenovo, href: "/vendors/lenovo" },
    { image: Depo, href: "/vendors/depo" },
    { image: Qtech, href: "/vendors/qtech" },
    { image: Nebo, href: "/vendors/nebo" },
    { image: Mellanox, href: "/vendors/mellanox" },
    { image: H3C, href: "/vendors/h3c" },
    { image: NetApp, href: "/vendors/netapp" },
    { image: Supermicro, href: "/vendors/supermicro" },
    { image: Hitachi, href: "/vendors/hitachi" },
  ];

  // Обновляем навигацию при изменении refs
  useEffect(() => {
    if (swiperInstance && prevButtonRef.current && nextButtonRef.current) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, prevButtonRef.current, nextButtonRef.current]);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="lg:sticky lg:top-[40px] lg:min-h-dvh max-lg:py-5 z-5 bg-brand-black flex flex-col items-center justify-center">
      <div className={`relative mx-100 px-4 py-4 mx-auto text-white`}>
        {/* Верхний левый угол */}
        <span
          className={`block absolute transition-all duration-500 left-0 top-0 stroke-brand-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 25 24"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0.519531 0.5H24.4805"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M0.5 24L0.5 -1.15019e-06"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </span>

        <span
          className={`block absolute transition-all duration-500 right-0 top-0 stroke-brand-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 25 24"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M23.9609 0.5H-6.48499e-05"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M23.9805 24L23.9805 -1.15019e-06"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </span>

        {/* Нижний левый угол */}
        <span
          className={`block absolute transition-all duration-500 left-0 bottom-0 stroke-brand-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 25 24"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0.519531 23.5H24.4805"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="M0.5 0L0.5 24" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>

        {/* Нижний правый угол */}
        <span
          className={`block absolute transition-all duration-500 right-0 bottom-0 stroke-brand-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 25 24"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M23.9609 23.5H-6.48499e-05"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M23.9805 0L23.9805 24"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </span>

        {/* Заголовок с адаптивным размером текста */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[77px] font-bold uppercase text-center leading-tight">
          НАШИ <span className="text-brand-normal">ВЕНДОРЫ</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto mt-[111px] w-full px-10 relative">
        {/* Кнопка "Назад" */}
        <button
          ref={prevButtonRef}
          className={`rounded-lg
            absolute left-0 top-1/2 -translate-y-1/2 z-10 
            flex items-center justify-center mx-3 
            transition-all duration-300 group cursor-pointer
            /* Мобильные (до 768px) - прозрачный фон */
            w-6 h-full bg-transparent hover:bg-transparent
            /* Планшеты (768px-1259px) - скрываем */
            md:hidden
            md:mx-0
            /* Десктоп (1260px+) - обычный фон */
            xl:flex xl:w-9 xl:bg-brand-light-black xl:hover:bg-brand-normal
            ${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
          aria-label="Previous slide"
        >
          <svg
            className="rotate-180 w-4 h-4 xl:w-6 xl:h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 14"
            fill="none"
          >
            <path
              d="M11.388 1.57262L16.6679 6.85246L11.388 12.1323M15.8556 6.85246L1.11125 6.85261"
              stroke="#FBFFFE"
              strokeWidth="2.22222"
              strokeLinecap="square"
            />
          </svg>
        </button>

        {/* Кнопка "Вперед" */}
        <button
          ref={nextButtonRef}
          className={`rounded-lg
            absolute right-0 top-1/2 -translate-y-1/2 z-10 
            flex items-center justify-center 
            transition-all duration-300 mx-3 group cursor-pointer
            /* Мобильные (до 768px) - прозрачный фон */
            w-6 h-full bg-transparent hover:bg-transparent
            /* Планшеты (768px-1259px) - скрываем */
            md:mx-0
            md:hidden
            /* Десктоп (1260px+) - обычный фон */
            xl:flex xl:w-9 xl:bg-brand-light-black xl:hover:bg-brand-normal
            ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 xl:w-6 xl:h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 14"
            fill="none"
          >
            <path
              d="M11.388 1.57262L16.6679 6.85246L11.388 12.1323M15.8556 6.85246L1.11125 6.85261"
              stroke="#FBFFFE"
              strokeWidth="2.22222"
              strokeLinecap="square"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            370: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1260: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
          className="vendor-swiper"
        >
          {vendors.map((vendor, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <a href={vendor.href} className="block w-full">
                  <div className="flex justify-center">
                    <LogoCard Image={vendor.image} />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-20 pt-2">
        <p className="xl:text-lg text-[9px] text-brand-white font-light text-center">
          Мы стремимся предлагать своим клиентам лучшие решения и технологии,
          поэтому мы сотрудничаем{" "}
          <span className="font-bold">
            с ведущими вендорами в своей области.
          </span>
          <br />
          Наши партнеры - это компании, которые делят наши ценности и{" "}
          <span className="text-brand-normal">
            стремятся к безупречному качеству.
          </span>
        </p>
        <p className="xl:text-sm text-[7px] font-light text-brand-dark-gray text-center mt-5">
          * Список представлен не исчерпывающим образом. Мы открыты для
          сотрудничества с новыми вендорами и всегда готовы рассмотреть ваши
          предложения.
        </p>
      </div>
    </section>
  );
};

export default OurVendors;