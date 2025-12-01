// import { Link, NavLink } from "react-router-dom";
// import { LogoIcon } from "../icons";
// import { useState } from "react";
// import MenuIcon from "../icons/burger.svg";
// import CloseIcon from "../icons/close.svg";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { path: "/about", label: "О КОМПАНИИ" },
//     { path: "/cars", label: "ПОДБОР АВТО" },
//     { path: "/vendors", label: "НАШИ ВЕНДОРЫ" },
//     { path: "/contacts", label: "КОНТАКТЫ" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 bg-brand-black h-[70px] sm:h-[80px] md:h-[90px]">
//       <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
//         {/* Logo */}
//         <Link className="h-8 sm:h-10 md:h-12 outline-none" to="/">
//           <LogoIcon />
//         </Link>

//         {/* Desktop Navigation */}
//         {/* <div className="hidden md:flex items-center h-[40px] lg:h-[45px] xl:h-[50px] gap-4 lg:gap-6 xl:gap-8">
//           <nav className="h-full flex items-center bg-brand-light-black rounded-full text-brand-white text-[8] lg:text-[15px] font-semibold uppercase gap-8 lg:gap-10 xl:gap-14 px-4 lg:px-5 xl:px-6">
//             {links.map(({ path, label }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-brand-normal"
//                     : "hover:text-brand-normal transition-colors duration-300"
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </nav>

//           <a href="/contacts/#feedback-form" className="p-0 m-0 h-full">
//             <button className="flex items-center justify-center bg-brand-white rounded-full cursor-pointer h-full px-4 lg:px-5 xl:px-6 hover:bg-brand-normal transition-colors duration-300 group">
//               <span className="block text-brand-black text-xs lg:text-sm font-bold uppercase group-hover:text-brand-white transition-colors duration-300">
//                 СТАТЬ ПАРТНЕРОМ
//               </span>
//             </button>
//           </a>
//         </div> */}
//         <div className="hidden md:flex items-center h-8 lg:h-9 xl:h-10 gap-3 lg:gap-4 xl:gap-6">
//   <nav className="h-full flex items-center bg-brand-light-black rounded-full text-brand-white text-xs lg:text-sm xl:text-base font-semibold uppercase gap-4 lg:gap-6 xl:gap-8 px-3 lg:px-4 xl:px-5">
//     {links.map(({ path, label }) => (
//       <NavLink
//         key={path}
//         to={path}
//         className={({ isActive }) =>
//           isActive
//             ? "text-brand-normal"
//             : "hover:text-brand-normal transition-colors duration-300"
//         }
//       >
//         {label}
//       </NavLink>
//     ))}
//   </nav>

//   {/* Button */}
//   <a href="/contacts/#feedback-form" className="p-0 m-0 h-full">
//     <button className="flex items-center justify-center bg-brand-white rounded-full cursor-pointer h-full px-3 lg:px-4 xl:px-5 hover:bg-brand-normal transition-colors duration-300 group">
//       <span className="block text-brand-black text-xs font-semibold uppercase group-hover:text-brand-white transition-colors duration-300">
//         СТАТЬ ПАРТНЕРОМ
//       </span>
//     </button>
//   </a>
// </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white focus:outline-none w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center"
//           >
//             {menuOpen ? (
//               <span className="absolute transition-transform duration-300 rotate-90">
//                 <img
//                   src={CloseIcon}
//                   alt="close"
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//               </span>
//             ) : (
//               <span className="absolute transition-transform duration-300 rotate-0">
//                 <img
//                   src={MenuIcon}
//                   alt="menu"
//                   className="w-5 h-5 sm:w-6 sm:h-6"
//                 />
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`md:hidden bg-brand-black absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
//           menuOpen ? "max-h-[400px] sm:max-h-[450px]" : "max-h-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center gap-4 sm:gap-5 py-4 sm:py-5 text-xs sm:text-[13px] text-white uppercase font-bold">
//           {links.map(({ path, label }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-brand-normal py-2"
//                   : "hover:text-brand-normal transition-colors duration-300 py-2"
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               {label}
//             </NavLink>
//           ))}
//           <a href="/contacts/#feedback-form">
//             <button
//               className="bg-brand-white text-brand-black px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-brand-normal hover:text-white transition-colors duration-300 mt-2 text-xs sm:text-[13px] font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               СТАТЬ ПАРТНЕРОМ
//             </button>
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }
import { Link, NavLink } from "react-router-dom";
import { LogoIcon } from "../icons";
import { useState } from "react";
import MenuIcon from "../icons/burger.svg";
import CloseIcon from "../icons/close.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/about", label: "О КОМПАНИИ" },
    { path: "/cars", label: "ПОДБОР АВТО" },
    { path: "/vendors", label: "НАШИ ВЕНДОРЫ" },
    { path: "/contacts", label: "КОНТАКТЫ" },
  ];

  return (
    <header className="z-100 fixed inset-x-0 top-0 z-50 bg-brand-black h-[70px] sm:h-[80px] md:h-[90px]">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
        {/* Logo */}
        <Link className="h-8 sm:h-10 md:h-12 outline-none" to="/">
          <LogoIcon />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center h-8 lg:h-9 xl:h-10 gap-3 lg:gap-4 xl:gap-6">
          <nav className="h-full flex items-center bg-brand-light-black rounded-full text-brand-white text-xs lg:text-sm xl:text-base font-semibold uppercase whitespace-nowrap px-3 lg:px-4 xl:px-5">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-2 lg:px-3 xl:px-4 ${
                    isActive
                      ? "text-brand-normal"
                      : "hover:text-brand-normal transition-colors duration-300"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Button */}
          <a href="/contacts/#feedback-form" className="p-0 m-0 h-full">
            <button className="flex items-center justify-center bg-brand-white rounded-full cursor-pointer h-full px-3 lg:px-4 xl:px-5 hover:bg-brand-normal transition-colors duration-300 group whitespace-nowrap">
              <span className="font-bold block text-brand-black text-xs uppercase group-hover:text-brand-white transition-colors duration-300">
                СТАТЬ ПАРТНЕРОМ
              </span>
            </button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? (
              <img
                src={CloseIcon}
                alt="close"
                className="w-4 h-4 sm:w-5 sm:h-5 transition-opacity duration-300"
              />
            ) : (
              <img
                src={MenuIcon}
                alt="menu"
                className="w-5 h-5 sm:w-6 sm:h-6 transition-opacity duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-brand-black absolute top-full left-0 w-full transition-all duration-300 overflow-hidden border-t border-brand-light-black ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-5 px-4">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `w-full text-center py-3 sm:py-4 text-sm sm:text-base text-white uppercase font-semibold border-b border-brand-light-black last:border-b-0 ${
                  isActive
                    ? "text-brand-normal"
                    : "hover:text-brand-normal transition-colors duration-300"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          {/* <a
            href="/contacts/#feedback-form"
            className="w-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
             <button
              className="bg-brand-white text-brand-black px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-brand-normal hover:text-white transition-colors duration-300 mt-2 text-xs sm:text-[13px] font-bold"
              onClick={() => setMenuOpen(false)}
            >
              СТАТЬ ПАРТНЕРОМ
            </button>
          </a> */}
        </nav>
      </div>
    </header>
  );
}
