import { useState } from "react";
import "../styles/Navbar.css";
import { CgMenuMotion, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [menuIsOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen);
  };

  return (
    <>
    <nav className="w-full flex justify-between items-center fixed top-0 left-0  px-16 py-4 z-10 backdrop-blur-md style={{ background: 'radial-gradient(circle at 50% 50%, rgba(158, 110, 230, 0.22), rgba(158, 110, 230, 0))' }}">
      <div className="flex items-center justify-start gap-12">
        <div className="font-medium text-xl font-outfit text-left leading-[25.2px] tracking-[0.5em]">
          AI.GEN
        </div>
        <ul className="hidden md:flex gap-x-8 font-normal leading-6 text-base">
          <li>Features</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {menuIsOpen?<CgClose />:<CgMenuMotion />}
        </button>
      </div>
      
      <div className="hidden md:flex gap-3">
        <button className="rounded py-3 px-6 border-0 font-outfit font-medium backdrop-opacity-50 bg-slate-900">
          Whitepaper
        </button>
        <button className="bg-gradient-to-r from-indigo-500 to-pink-500 font-outfit font-medium rounded py-3 px-6 border-0">
          Get Started
        </button>
      </div>
      
    </nav>
    <div className={`${menuIsOpen ? "flex" : "hidden"} md:hidden fixed top-[64px] pl-4 pb-4 backdrop-blur-md w-full`} >
    <ul className="flex flex-col gap-2 font-normal leading-6 text-base">
      <li>Features</li>
      <li>Roadmap</li>
      <li>Tokenomics</li>
      <button className="rounded py-1 px-3 border-0 font-outfit font-medium backdrop-opacity-50 bg-slate-900">
      Whitepaper
    </button>
    <button className="bg-gradient-to-r from-indigo-500 to-pink-500 font-outfit font-medium rounded py-1 px-3 border-0">
      Get Started
    </button>
    </ul>
  </div>
  </>
  );
};

export { Navbar };
