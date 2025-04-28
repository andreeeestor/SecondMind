import { ArrowUpRight } from "@phosphor-icons/react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
}
export default function NewsCard(props: NewsCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border-[1px] border-slate-300 bg-white shadow-xs p-2 transition-all hover:shadow-lg h-auto lg:h-[600px] xl:h-auto">
      <div className="relative">
        <img
          alt=""
          src={props.image}
          className="h-60 w-full object-cover rounded-2xl shadow-sm border-[1px] border-slate-300"
        />
        <button className="absolute bottom-0 right-0 p-4 bg-sky-500 text-white rounded-tl-2xl rounded-br-xl hover:pb-5 transition-all flex items-center gap-2 cursor-pointer">
          <h6 className="text-sm">Acessar</h6>
          <ArrowUpRight weight="bold" />
        </button>
      </div>

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">{props.title}</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-gray-500">
          {props.description}
        </p>
      </div>
    </article>
  );
}
