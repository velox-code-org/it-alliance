import CompanyImg from "../../../assets/images/it-alliance-company.png"

export default function AboutCompany() {
  return (
    <div className="lg:pt-5 lg:min-h-dvh lg:py-10 z-10 bg-white relative">
      <div className="w-full max-w-300 mx-auto px-5 flex flex-wrap justify-center">
        <div className="xl:text-[78px] text-[23px] text-center font-bold mb-8">IT ALLIANCE COMPANY</div>
        <div className="max-w-[1016px]">
          <p className="text-[9px] md:text-[16px] text-justify">
            <span className="font-bold">IT Alliance – Ваш надежный партнер в мире IT.&nbsp;</span>
            Мы поможем построить
            современную и эффективную IT-инфраструктуру, которая будет
            обеспечивать бесперебойную работу Вашего бизнеса. IT Alliance – это
            команда высококвалифицированных специалистов, предоставляющих
            комплексные решения в сфере информационных технологий, призванные
            решить IT-задачи любой сложности. Мы не просто поставщики оборудования
            – мы предлагаем комплексный подход, в которых включены:
              <span className="italic">
                поставка
                высококачественного оборудования от ведущих мировых производителей,
                профессиональная техническая поддержка, выездная диагностика, а также
                помощь в разработке и внедрении эффективных IT-стратегий.
              </span>
            Наша команда
            специалистов всегда в курсе новейших технологий и готова предложить
            инновационные решения, которые <span className="text-[#FF0000] font-[700]">позволят Вашему бизнесу выйти на новый уровень.</span>
          </p>
          <div className="flex gap-4 justify-between items-center mt-1">
            <div className="relative w-full max-w-[365px] h-[71px] mb-16">
              <div className="border-l border-b w-full max-w-[361px] h-[68px] mb-16"></div>
              <span className="absolute right-0 bottom-0 w-2 h-2 bg-black rounded-full"></span>
            </div>
            <a href="/about">
            <button className="cursor-pointer hover:bg-[#FF0000] duration-300 text-[18px] font-[700] bg-[#1E1E1E] text-white rounded-full px-5 py-3 whitespace-nowrap">
              ПОДРОБНЕЕ
            </button>
            </a>
            <div className="relative w-full max-w-[365px] h-[71px] mb-16">
              <span className="absolute left-0 bottom-0 w-2 h-2 bg-black rounded-full"></span>
              <div className="border-r border-b w-full max-w-[361px] h-[68px] mb-16"></div>
            </div>
          </div>
          <div className=" flex justify-center">
            <img src={CompanyImg} alt="Company" className="w-[50%] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}