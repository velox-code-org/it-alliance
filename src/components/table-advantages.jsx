const TableItem = ({ title, individuals, entities }) => {
  return (
    <tr className="text-[6px] md:text-[10px] lg:text-[13px] xl:text-[16px] even:bg-[#FFE8E8] odd:bg-[#FFF4F4]">
      {/* Широкая колонка для заголовка */}
      <td className="p-2 xs:p-3 sm:p-4 md:p-5 align-middle whitespace-pre-line w-[40%]">
        {title}
      </td>

      {/* Узкие центрированные колонки для галочек */}
      <td className="p-1 xs:p-2 sm:p-3 md:p-4 lg:p-5 align-middle w-[30%]">
        <div className="flex justify-center items-center">
          {individuals == true ? (
            <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-red-600 rounded"></div>
          ) : (
            <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-none rounded border border-gray-500"></div>
          )}
        </div>
      </td>

      <td className="p-1 xs:p-2 sm:p-3 md:p-4 lg:p-5 align-middle w-[30%]">
        <div className="flex justify-center items-center">
          {entities == true ? (
            <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-red-600 rounded"></div>
          ) : (
            <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-none rounded border border-gray-500"></div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
