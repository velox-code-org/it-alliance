import BenefitCard from "../BenefitCard";

const OurAdvantures = () => {
  return (
    <section className="lg:sticky lg:top-[40px] lg:min-h-dvh max-lg:py-5  z-6 bg-brand-black flex flex-col items-center justify-center">
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

        {/* Верхний правый угол */}
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
            fill="none"
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
          НАШИ <span className="text-brand-normal">ПРЕИМУЩЕСТВА</span>
        </h2>
      </div>

      <p className="xl:text-[26px] text-[9px] font-medium text-center text-brand-white uppercase mt-3">
        ИТ-Альянс имеет прямые контракты поставки
      </p>

      {/* img cards */}
      <div className="max-w-7xl mx-auto mt-[89px] w-full relative px-10 mb-10">
        <div className="flex flex-wrap justify-around items-start gap-4 sm:gap-8 lg:gap-12 xl:gap-16">
          <BenefitCard id={1} title="Профессиональная команда" />
          <BenefitCard id={2} title="Проверенные решения" />
          <BenefitCard id={3} title="Надежные поставщики и производители" />
        </div>
      </div>
    </section>
  );
};

export default OurAdvantures;
