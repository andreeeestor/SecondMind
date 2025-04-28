import { ArrowUpRight, Icon } from "@phosphor-icons/react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: Icon;
  side: "right" | "left";
}
export default function ServiceCard({
  title,
  description,
  Icon,
  side,
}: ServiceCardProps) {
  return (
    <>
      {side == "left" ? (
        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <Icon className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">{title}</h2>
            <p className="leading-relaxed text-gray-400">{description}</p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 sm:hidden inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <Icon className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">{title}</h2>
            <p className="leading-relaxed text-gray-400">{description}</p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 hidden sm:inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0 ">
            <Icon className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
        </div>
      )}
    </>
  );
}
