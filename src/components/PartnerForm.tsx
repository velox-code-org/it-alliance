import { Link } from "react-router-dom";

export default function PartnerForm() {
  return (
    <form className="flex flex-col">
      <label className="text-[#FBFFFE] text-[14px] sm:text-[16px]">
        Имя
      </label>
      <input
        type="text"
        className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF]"
        placeholder="Имя"
        required
      />

      <label className="text-[#FBFFFE] mt-4 sm:mt-6 text-[14px] sm:text-[16px]">
        E-mail
      </label>
      <input
        type="email"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF]"
        placeholder="E-mail"
        required
      />

      <label className="text-[#FBFFFE] mt-4 sm:mt-6 text-[14px] sm:text-[16px]">
        Тема
      </label>
      <input
        type="text"
        className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF]"
        placeholder="Тема"
        required
      />

      <label className="text-[#FBFFFE] mt-4 sm:mt-6 text-[14px] sm:text-[16px]">
        Сообщение
      </label>
      <textarea
        className="outline-none bg-[#282828] mt-2 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm text-[#FFFFFF] h-24 sm:h-28"
        placeholder="Сообщение"
        required
      />

      <label className="flex items-start text-[12px] sm:text-[13px] mt-4 text-white cursor-pointer">
        <input
          type="checkbox"
          className="absolute opacity-0 peer"
          required
        />
        <span className="relative h-4 w-4 bg-[#1e1e29] border border-white rounded mr-2 mt-1
          after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2
          after:w-1.5 after:h-2.5 after:border-white after:border-r-2 after:border-b-2
          after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
          peer-checked:after:block
          peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]"
        />
        <span>
          Я согласен с
          <Link to="/personal" className="text-red-500 underline ml-1">
            политикой обработки персональных данных
          </Link>
        </span>
      </label>

      <button className="mt-5 bg-white text-black rounded-full py-3 text-[14px] font-semibold hover:bg-red-500 hover:text-white transition">
        Отправить
      </button>
    </form>
  );
}
