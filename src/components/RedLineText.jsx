const RedLineText = ({ children }) => {
  return (
    <div className="flex my-[25px] align-center">
      <div className="w-[1px] my-[10px] h-auto bg-red-500 flex-shrink-0"></div>
      
      <div className="pl-4 text-justify">
        {children}
      </div>
    </div>
  );
};

export default RedLineText;