import React from 'react'

export default function CarsDocSteps({title, subtitle}) {
  return (
    <div className="relative max-w-fit w-full transition-all duration-300 text-brand-black mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-15 px-4 xs:px-5 sm:px-6 md:px-8 py-1">
      {/* Угловые элементы */}
      <span className="block absolute left-0 top-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t border-l border-brand-black transition-all duration-500" />
      <span className="block absolute right-0 top-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t border-r border-brand-black transition-all duration-500" />
      <span className="block absolute left-0 bottom-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b border-l border-brand-black transition-all duration-500" />
      <span className="block absolute right-0 bottom-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b border-r border-brand-black transition-all duration-500" />
      
      {/* Заголовок */}
      <h1 className="text-[32px] xs:text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold text-[#FF0000] uppercase">
        {title}
      </h1>
      
      {/* Подзаголовок */}
      <h2 className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold uppercase">
        {subtitle}
      </h2>
    </div>
  )
}