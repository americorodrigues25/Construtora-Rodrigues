import { useState, useCallback } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import Button from '../button';
import favicon from '../../assets/image/favicon.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-slate-950 py-6 px-3 fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={favicon} alt="Logo" className="w-8" />
          <p className="text-slate-300 font-semibold text-lg">Construtora Rodrigues</p>
        </div>
        <ul className="hidden md:flex justify-center items-center text-slate-200 gap-8 text-lg">
          <a href="#home"><li className="hover:text-orange-600 cursor-pointer duration-300">Inicio</li></a>
          <a href="#about"><li className="hover:text-orange-600 cursor-pointer duration-300">Sobre nós</li></a>
          <a href="#services"><li className="hover:text-orange-600 cursor-pointer duration-300">Serviços</li></a>
          <a href="#projects"><li className="hover:text-orange-600 cursor-pointer duration-300">Projetos</li></a>
          <a href="#contact"><Button text="Contate-nos" /></a>
        </ul>
        <IoMdMenu
          className="text-orange-600 md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeMenu}
          />
        )}
        <div
          className={`fixed top-0 right-0 bg-slate-950 w-9/12 h-full p-6 md:hidden flex flex-col items-center justify-center z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <IoMdClose
            className="text-orange-600 text-2xl absolute top-7 right-3.5 cursor-pointer"
            onClick={closeMenu}
          />
          <ul className="flex flex-col items-center text-slate-200 gap-8 text-lg">
            <a href="#home"><li
              className="hover:text-orange-600 cursor-pointer duration-300"
              onClick={closeMenu}
            >
              Inicio
            </li></a>
            <a href="#about"><li
              className="hover:text-orange-600 cursor-pointer duration-300"
              onClick={closeMenu}
            >
              Sobre nós
            </li></a>
            <a href="#services"><li
              className="hover:text-orange-600 cursor-pointer duration-300"
              onClick={closeMenu}
            >
              Serviços
            </li></a>
            <a href="#projects"><li
              className="hover:text-orange-600 cursor-pointer duration-300"
              onClick={closeMenu}
            >
              Projetos
            </li></a>
            <a href="#contact"><button
              className="bg-orange-600 px-6 py-2 rounded-sm hover:bg-orange-700 duration-300"
              onClick={closeMenu}
            >
              Contate-nos
            </button>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
