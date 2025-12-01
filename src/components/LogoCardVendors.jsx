import { Link } from "react-router-dom"

const LogoCardVendors = ({ Image, href }) => {
  return (
    <Link 
      to={href}
      className="
        relative group overflow-hidden flex items-center justify-center
        bg-white rounded-[30px]
        h-[205px] w-[347px]
        max-[1600px]:h-[195px] max-[1600px]:w-[335px]
        max-[1440px]:h-[185px] max-[1440px]:w-[320px]
        max-[1259px]:h-[160px] max-[1260px]:w-[300px]
        max-[1024px]:h-[130px] max-[1024px]:w-[280px]
        max-[992px]:h-[130px] max-[992px]:w-[260px]
        max-[768px]:h-[110px] max-[768px]:w-[240px]
        max-[576px]:h-[135px] max-[576px]:w-[250px]
        max-[480px]:h-[120px] max-[480px]:w-[220px]
        max-[370px]:h-[105px] max-[370px]:w-[200px]
        block cursor-pointer
      "
    >
      <Image />
      <span className="
        absolute right-4 top-4 stroke-[#ff0000] group-hover:stroke-brand-black
        [&>svg]:w-[25px] [&>svg]:h-[25px]
        max-[992px]:[&>svg]:w-[22px] max-[992px]:[&>svg]:h-[22px]
        max-[768px]:[&>svg]:w-[20px] max-[768px]:[&>svg]:h-[20px]
        max-[576px]:[&>svg]:w-[18px] max-[576px]:[&>svg]:h-[18px]
        max-[480px]:[&>svg]:w-[16px] max-[480px]:[&>svg]:h-[16px]
        max-[370px]:[&>svg]:w-[14px] max-[370px]:[&>svg]:h-[14px]
      ">
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4688 1.38281H28.4565V19.3706M27.0728 2.76649L1.95703 27.8828"
            strokeWidth="2.76735" strokeLinecap="square" />
        </svg>
      </span>

      <div className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 left-0 top-0 z-20 size-full bg-black/50">
        <div className="flex items-center justify-center absolute bottom-0 bg-brand-normal text-brand-white font-bold 
          h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] xl:h-[60px] 
          text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
          w-full"
        >
          Подробнее
        </div>
      </div>
    </Link>
  )
}

export default LogoCardVendors