import TableTitle from "./utilities/TableTitle";

export default function StepOneInputs() {
  return (
    <form className="mt-8 xs:mt-10 sm:mt-12 bg-white">
      <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6">
        {/* Строка 1 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              1
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-2 sm:gap-2 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"Марка"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 2 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              2
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"Модель"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 3 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              3
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"Год"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 4 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              4
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"Пробег до"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 5 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              5
            </span>
          </div>
          <div className="flex max-[799px]:flex-col items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"дизель (Л) | бензин (Л) | электрический (KW)"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] w-full outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 6 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              6
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"ПРИВОД"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 7 */}
        <div className="flex gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0 mt-1">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              7
            </span>
          </div>
          <div className="flex flex-col gap-3 xs:gap-4 xl:gap-3 flex-1 min-w-0">
            {/* Первая строка */}
            <div className="flex max-[1199px]:flex-col items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4">
              <TableTitle
                title={
                  "Комплектация   (МОЖЕТ ОТДЕЛЬНЫЕ ОПЦИИ, КОТОРЫЕ НЕОБХОДИМЫ)"
                }
                size={22}
                style={
                  "font-light uppercase max-[570px]:whitespace-normal whitespace-nowrap"
                }
              />
              <input
                className="border-b border-[#1E1E1E] w-full outline-none flex-1 py-0 min-w-0"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Строка 8 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              8
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"ЦВЕТ КУЗОВА"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 9 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              9
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"ЦВЕТ САЛОНА"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Строка 10 */}
        <div className="flex gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0 mt-1">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              10
            </span>
          </div>
          <div className="flex flex-col gap-3 xs:gap-4 xl:gap-3 flex-1 min-w-0">
            {/* Заголовок */}
            <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4">
              <TableTitle
                title={
                  "Допустимы ли страховые выплаты? (окрасы/замены деталей на новые)"
                }
                size={22}
                style={
                  "font-light uppercase max-[570px]:whitespace-normal whitespace-nowrap"
                }
              />
            </div>

            {/* Чекбоксы и поле ввода */}
            <div className="flex items-baseline gap-3 xs:gap-4 sm:gap-6 xl:gap-4">
              {/* Чекбоксы */}
              <div className="flex gap-4 xs:gap-6 flex-shrink-0">
                <label className="flex items-center gap-2 cursor-pointer">
                  <TableTitle size={18} style={"italic"} title={"ДА"} />
                  {/* <span className="text-sm xs:text-base sm:text-lg font-light uppercase italic">ДА</span> */}
                  <input type="checkbox" className="w-3 h-3 xs:w-4 xs:h-4" />
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <TableTitle size={18} style={"italic"} title={"НЕТ"} />
                  {/* <span className="text-sm xs:text-base sm:text-lg font-light uppercase italic">НЕТ</span> */}
                  <input type="checkbox" className="w-3 h-3 xs:w-4 xs:h-4" />
                </label>
              </div>

              {/* Поле ввода */}
              <div className="flex-1  min-w-0">
                <input
                  className="border-b border-[#1E1E1E] outline-none w-full py-0 min-w-0"
                  placeholder=""
                />
                <div className="text-center mt-2 text-[10px] xs:text-xs sm:text-sm text-gray-600">
                  если отметили "ДА" - то какие?
                </div>
              </div>
            </div>
            {/* Подпись под полем ввода */}
          </div>
        </div>

        {/* Строка 11 */}
        <div className="flex items-baseline gap-4 xs:gap-6 sm:gap-8 xl:gap-6">
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center border bg-black flex-shrink-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl text-white">
              11
            </span>
          </div>
          <div className="flex items-baseline gap-2 xs:gap-4 sm:gap-6 xl:gap-4 flex-1 min-w-0">
            <TableTitle
              title={"БЮДЖЕТ"}
              size={22}
              style={"font-light uppercase whitespace-nowrap"}
            />
            <input
              className="border-b border-[#1E1E1E] outline-none flex-1 py-0 min-w-0"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </form>
  );
}
