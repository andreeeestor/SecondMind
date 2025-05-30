import { Icon } from "@phosphor-icons/react";

interface CardType {
  title: string;
  subtitle: string;
  Icon: Icon;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <div
      className="w-full p-4 rounded-md border-[1px] border-slate-300 relative overflow-hidden group bg-white shadow-md"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-orange-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

       <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-orange-200 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#FF9800] group-hover:text-white transition-colors relative z-10 duration-300" /> 

      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-orange-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Card;