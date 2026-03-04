import { Link, NavLink } from "react-router-dom";
import { LogoIcon } from "../icons";
import { useState } from "react";
import MenuIcon from "../icons/burger.svg";
import CloseIcon from "../icons/close.svg";
import Modal from "../Modal";
import PartnerForm from "../PartnerForm";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  const links = [
    { path: "/vendors", label: "НАШИ ВЕНДОРЫ" },
    { path: "/about", label: "О КОМПАНИИ" },
    { path: "/contacts", label: "КОНТАКТЫ" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[1000] bg-brand-black h-[80px]">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 h-full">

          <Link to="/" className="h-10">
            <LogoIcon />
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center bg-brand-light-black rounded-full text-white text-sm font-semibold uppercase px-4 h-10">
              {links.map(l => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  className={({ isActive }) =>
                    `px-4 ${isActive ? "text-brand-normal" : "hover:text-brand-normal"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              <button
                onClick={() => setPartnerOpen(true)}
                className="px-4 hover:text-brand-normal"
              >
                СТАТЬ ПАРТНЁРОМ
              </button>
            </nav>

            <Link to="/cars">
              <button
                className="
      flex items-center justify-center
      bg-brand-white
      rounded-full
      cursor-pointer
      h-10
      px-4
      hover:bg-brand-normal
      transition-colors
      duration-300
      group
      whitespace-nowrap
    "
              >
                <span
                  className="
        block
        text-brand-black
        text-sm
        font-semibold
        uppercase
        group-hover:text-brand-white
        transition-colors
        duration-300
      "
                >
                  ПОДБОР АВТО
                </span>
              </button>
            </Link>

          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuOpen ? CloseIcon : MenuIcon} alt="menu" />
          </button>
        </div>

        <div className={`md:hidden bg-brand-black transition-all overflow-hidden ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}>
          <nav className="flex flex-col text-white uppercase font-semibold">
            {links.map(l => (
              <NavLink
                key={l.path}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-center border-b border-brand-light-black"
              >
                {l.label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setPartnerOpen(true);
                setMenuOpen(false);
              }}
              className="py-4"
            >
              СТАТЬ ПАРТНЁРОМ
            </button>

            <Link
              to="/cars"
              className="py-4 text-center bg-brand-normal py-4"
              onClick={() => setMenuOpen(false)} 
            >
              <span className="font-bold block text-brand-black text-xs uppercase group-hover:text-brand-white transition-colors duration-300">
                 ПОДБОР АВТО
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <Modal open={partnerOpen} onClose={() => setPartnerOpen(false)}>
        <h3 className="text-white text-center text-xl font-bold mb-6">
          Заявка на партнёрство
        </h3>
        <PartnerForm />
      </Modal>
    </>
  );
}

