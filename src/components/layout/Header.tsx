import { useState, useEffect } from "react";
import { List, CaretDown } from "@phosphor-icons/react";
import Logo from "../../assets/images/logo.png";
import NavDropdown from "./NavDropdown";
import MobileDropdown from "./MobileDropdown";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sobreItems = ["Missão", "Recursos"];
  const servicosItems = ["APIs", "Aplicações Web", "Integração", "Consultoria"];
  const canaisItems = ["Contato", "Trabalhe Conosco"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`py-4 px-20 mx-auto flex items-center justify-between w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "fixed top-0 bg-white shadow-md" 
          : "relative bg-transparent"
      }`}
    >
      <div>
        <img src={Logo} width={70} alt="logo" />
      </div>
      
      <div 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        className="cursor-pointer md:hidden"
      >
        <List size={32} weight="bold" />
      </div>
      
      <nav className="w-full md:w-auto">
        <ul className="list-none uppercase hidden md:flex gap-x-6 transition-all items-center">
          <li className="cursor-pointer hover:text-sky-600 transition-colors py-1">
            Início
          </li>
          <NavDropdown 
            title="Sobre" 
            items={sobreItems} 
            icon={<CaretDown className="text-xs" />} 
          />
          <li className="cursor-pointer hover:text-sky-600 transition-colors py-1">
            Outsourcing
          </li>
          <li className="cursor-pointer hover:text-sky-600 transition-colors py-1">
            Produtos
          </li>
          <NavDropdown 
            title="Serviços" 
            items={servicosItems} 
            icon={<CaretDown className="text-xs" />} 
          />
          <li className="cursor-pointer hover:text-sky-600 transition-colors py-1">
            Clientes
          </li>
          <li className="cursor-pointer hover:text-sky-600 transition-colors py-1">
            News
          </li>
          <NavDropdown 
            title="Canais" 
            items={canaisItems} 
            icon={<CaretDown className="text-xs" />} 
          />
        </ul>
        
        <div 
          className={`absolute top-full left-0 right-0 bg-white shadow-md z-20 md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="list-none uppercase w-full">
            <li className="py-2 px-4 border-b border-gray-100">Início</li>
            <MobileDropdown title="Sobre" items={sobreItems} />
            <li className="py-2 px-4 border-b border-gray-100">Outsourcing</li>
            <li className="py-2 px-4 border-b border-gray-100">Produtos</li>
            <MobileDropdown title="Serviços" items={servicosItems} />
            <li className="py-2 px-4 border-b border-gray-100">Clientes</li>
            <li className="py-2 px-4 border-b border-gray-100">News</li>
            <MobileDropdown title="Canais" items={canaisItems} />
          </ul>
        </div>
      </nav>
    </header>
  );
}