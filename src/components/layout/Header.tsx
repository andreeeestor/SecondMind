import { List } from "@phosphor-icons/react";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="py-3 px-6 flex items-center justify-between">
      <div>
        <img src={Logo} width={70} alt="logo" />
      </div>
      <nav>
        <List size={32} weight="bold" className="block md:hidden" />
        <ul className="list-none uppercase md:flex hidden gap-x-6 transition-all">
          <li className="">Início</li>
          <li className="">Sobre</li>
          <li className="">Outsourcing</li>
          <li className="">Produtos</li>
          <li className="">Serviços</li>
          <li className="">Clientes</li>
          <li className="">News</li>
          <li className="">Canais</li>
        </ul>
      </nav>
    </header>
  );
}
