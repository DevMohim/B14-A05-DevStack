import Logo from "../assets/logo-text.png";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const navLinks: string[] = [
  "Home",
  "Technologies",
  "Projects",
  "About",
  "Contact",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto mb-10 lg:mb-24">
      <nav className="flex justify-between items-center gap-4 px-6 lg:px-8 py-2 font-jakarta">
        <div className="lg:hidden cursor-pointer" onClick={handleMenuClick}>
          {isMenuOpen ? (
            <RxCross2 className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </div>
        <img src={Logo} alt="Dev Stack Logo" />

        <ul className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="/"
                className="text-[#475569] hover:text-[#DB2777] transition-all delay-75 font-medium text-sm hover:font-semibold"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center  gap-2 lg:gap-5">
          <button className="text-[#334155] text-sm font-medium cursor-pointer">
            Sign In
          </button>
          <button className="text-sm font-semibold bg-[#D91B7E] text-white px-5 py-2.5 rounded-full cursor-pointer border border-[#D91B7E] transition-all delay-150 hover:bg-white hover:text-[#D91B7E]">
            Sign Up
          </button>
        </div>
      </nav>

      {/* This div create for responsive menu open and off . */}
      <div
        className={`lg:hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-2 items-start uppercase px-6 py-2 font-jakarta">
          {navLinks.map((link) => (
            <li
              key={link}
              className="shadow-sm text-center w-full py-2 shadow-[#475569] rounded-lg"
            >
              <a
                href="/"
                className="text-[#475569] hover:text-[#DB2777] transition-all delay-75 font-medium text-sm hover:font-semibold"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
