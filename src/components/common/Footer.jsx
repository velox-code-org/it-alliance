import { Link } from "react-router-dom"
import LogoRed from "../../assets/logo-red.svg"
const Footer = () => {
  return (
    <footer className="relative z-90 border-gray-200 bg-[#1E1E1E] p-6 sm:p-8 md:p-11">
    <div className="max-w-[90%] mx-auto xl:flex md:flex justify-around gap-4 items-start text-white text-[14px]">
        
        {/* Логотип и контакты */}
        <div>
            <div className="flex gap-2 items-center">
                <img src={LogoRed} alt="logo" loading="lazy" />
                <div className="text-[20px] font-[600]">IT ALLIANCE</div>
            </div>
            <br/>
            <div>
                <div>
                    <span className="font-[700]">Адрес:&nbsp;</span>
                    <span className="font-[300]">Москва, Ленинский проспект, 15А, 119071, Central Park Tower</span>
                </div>
                <div>
                    <span className="font-[700]">График работы:&nbsp;</span>
                    <span className="font-[300]">09:00 - 19:00</span>
                </div>
            </div>
            <br/>
            <div>
                <div>
                    <span className="font-[700]">Телефон:&nbsp;</span>
                    <span className="font-[300]">8 (499) 322-25-03</span>
                </div>
                <div>
                    <span className="font-[700]">Email:&nbsp;</span>
                    <span className="font-[300]">Info@itacomp.ru</span>
                </div>
            </div>
        </div>

        {/* О компании */}
        <div>
            <div className="font-[700]">О КОМПАНИИ</div>
            <br/>
            <div>
                <div className="font-[300] hover:text-[#FF0000]">
                    <Link className="h-12" to="/about">
                        Описание
                    </Link>
                </div>
            </div>
            <div>
                <div className="font-[300]">
                    <Link className="h-12 hover:text-[#FF0000]" to="/personal">
                        Политика обработки персональных данных
                    </Link>
                </div>
            </div>
        </div>

        {/* Вендоры */}
        <div>
            <div className="font-[700]">ВЕНДОРЫ</div>
            <br/>
            <div className="font-[300] hover:text-[#FF0000]">
                <Link className="h-12" to="/vendors">
                    Наши вендоры
                </Link>
            </div>
        </div>

        {/* Контакты */}
        <div>
            <div className="font-[700]">КОНТАКТЫ</div>
            <br/>
            <div className="font-[300] hover:text-[#FF0000]">
                <Link className="h-12" to="/contacts/#maps">
                    Карта
                </Link>
            </div>
            <div className="font-[300] hover:text-[#FF0000]">
                <Link className="h-12" to="/contacts/#contact">
                    Адрес
                </Link>
            </div>
            <div className="font-[300] hover:text-[#FF0000]">
                <Link className="h-12" to="/contacts/#contact">
                    График работы
                </Link>
            </div>
        </div>
    </div>
    
    {/* Копирайт - такая же ширина как у верхнего блока */}
    <div className="max-w-[90%] mx-auto mt-6 font-[300] text-[#5E5E5E] text-end">
        © Все права защищены ООО "ИТ Альянс"
    </div>
</footer>
  )
}

export default Footer
