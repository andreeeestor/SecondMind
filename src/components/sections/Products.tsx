import { ArrowUpRight, ChartPieSlice, Kanban } from "@phosphor-icons/react";
import Button from "../shared/Button";
import p1 from "../../assets/images/products/cropped-pc.png";
import p2 from "../../assets/images/products/tela-geral.png";

interface ProductsProps {
  id?: string;
}

export default function Products(props: ProductsProps) {
  return (
    <section
      id={props.id}
      className="py-12 md:py-20 bg-sky-100 rounded-3xl shadow-sm overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="md:hidden text-center mb-8">
          <span className="inline-block px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium mb-3">
            Sistema de Gestão Ágil
          </span>
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            SCManager
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-5/12 space-y-5 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="hidden md:block">
              <span className="inline-block px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium">
                Sistema de Gestão Ágil
              </span>
              <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-3">
                SCManager
              </h2>
            </div>

            <p className="text-lg font-semibold tracking-wide text-gray-600 leading-relaxed">
              Um sistema de gerenciamento de projetos com foco em aumentar a
              agilidade e produtividade.
            </p>

            <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
              <p>
                Crie projetos, atribua tarefas, gerencie sprints e lançamentos
                de horas de todo o time.
              </p>
              <p>
                Conecte os membros de sua equipe para que todos saibam
                exatamente o que precisa ser feito e por quais responsáveis.
              </p>
            </div>

            <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
              <Button
                withIcon={<ArrowUpRight weight="bold" />}
                text="Acessar SCManager"
                className="bg-[#03a9f4] before:bg-sky-700 hover:bg-sky-800 text-white border-[#03a9f4] hover:border-sky-700 shadow-md hover:shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-7/12 relative w-full order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative h-64 sm:h-80 md:h-96 mx-auto max-w-sm md:max-w-none">
              <div className="absolute -left-4 -top-6 w-16 md:w-24 h-16 md:h-24 bg-sky-200 rounded-full opacity-50"></div>
              <div className="absolute -right-2 bottom-2/3 w-12 md:w-16 h-12 md:h-16 bg-sky-300 rounded-full opacity-40 flex justify-center items-center">
                <ChartPieSlice size={28} className="md:hidden" weight="fill" />
                <ChartPieSlice
                  size={40}
                  className="hidden md:block"
                  weight="fill"
                />
              </div>
              <div className="absolute left-1/4 -bottom-12 md:-bottom-20 w-16 md:w-20 h-16 md:h-20 bg-sky-400 rounded-full opacity-35 flex justify-center items-center">
                <Kanban size={28} className="md:hidden" weight="fill" />
                <Kanban size={40} className="hidden md:block" weight="fill" />
              </div>

              <img
                src={p1}
                alt="Interface do SCManager"
                className="absolute z-10 top-0 left-0 md:left-0 w-4/5 rounded-lg shadow-xl"
              />
              <img
                src={p2}
                alt="Dashboard do SCManager"
                className="absolute z-20 bottom-0 right-0 w-3/5 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
