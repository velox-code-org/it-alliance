const TableItem = ({name, text}) => {
  return (
    <tr className="text-[6px] md:text-[10px] lg:text-[13px] xl:text-[16px] even:bg-[#FFE8E8] odd:bg-[#FFF4F4]">
      <td className="font-[600] p-2 xs:p-3 sm:p-4 md:p-5 align-middle">
        {name}
      </td>
      <td className="p-2 xs:p-3 sm:p-4 md:p-5 whitespace-pre-line text-justify leading-relaxed">
        {text.replace(/\|/g, ' | ')}
      </td>
    </tr>
  )
}

export default TableItem