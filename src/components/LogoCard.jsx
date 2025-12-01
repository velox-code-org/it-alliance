const LogoCard = ({ Image }) => {
  return (
    <div
      className="relative group overflow-hidden flex items-center justify-center 
                    h-[90px] xs:h-[140px] sm:h-[160px] md:h-[170px] lg:h-[205px] 
                    w-[90%] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] bg-white"
    >
      <img
        className={` ${
          Image.includes("huaw") ||
          Image.includes("hp-l") ||
          Image.includes("dji-") ||
          Image.includes("dell")
            ? "w-[35%]"
            : "w-[60%]"
        } xs:w-[47%] sm:w-[48%] md:w-[49%] lg:w-[50%] max-w-[150px]`}
        src={Image}
        alt="vendor logo"
      />

      <span className="absolute right-2 top-2 xs:right-3 xs:top-3 sm:right-4 sm:top-4 stroke-[#FF0000] group-hover:stroke-brand-black">
        <svg
          width={20}
          height={20}
          className="xs:w-[18px] xs:h-[18px] sm:w-[25px] sm:h-[25px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px]"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4688 1.38281H28.4565V19.3706M27.0728 2.76649L1.95703 27.8828"
            strokeWidth="2.76735"
            strokeLinecap="square"
          />
        </svg>
      </span>

      <div className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 left-0 top-0 z-20 size-full bg-black/50">
        <span
          className="flex items-center justify-center absolute bottom-0 bg-brand-normal text-brand-white font-bold 
                        text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                        h-[40px] xs:h-[45px] sm:h-[50px] md:h-[55px] lg:h-[60px] w-full"
        >
          Подробнее
        </span>
      </div>
    </div>
  );
};

export default LogoCard;
