const BenefitCard = ({ id, title }) => {
  return (
    <div
      className={`
        relative group transition-all duration-300 
        ${id == 1 ? 'hover:-rotate-[5deg]' : ''}
        ${id == 2 ? 'hover:scale-105' : ''}
        ${id == 3 ? 'hover:rotate-[5deg]' : ''}
        origin-center
      `}
    >
      {/* ID raqami */}
      <span
        className={`
          absolute z-20 font-bold text-brand-white 
          md:text-[65px] text-[42px]
          md:-left-3 -left-2 md:-top-[45px] -top-[30px]
          transition-all duration-300 group-hover:text-brand-normal
          group-hover:-translate-y-2
        `}
      >
        {id}
      </span>

      <div
        className="relative flex items-center justify-center w-[130px] h-[180px] md:w-[284px] md:h-[392px] rounded-xl overflow-hidden"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`/images/advantages-${id}.png`}
          alt=""
        />

        <div
          className="absolute flex items-center justify-center h-fit bg-brand-black/80 z-10
                     px-4 md:px-6 py-2 md:py-5 text-center"
        >
          <p className="text-[9px] md:text-[22px] text-brand-white font-light transition-all duration-300 group-hover:text-brand-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BenefitCard