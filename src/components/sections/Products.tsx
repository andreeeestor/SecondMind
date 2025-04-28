import { ArrowUpRight, ChartPieSlice, Kanban } from "@phosphor-icons/react";
import Button from "../shared/Button";
import p1 from "../../assets/images/products/cropped-pc.png";
import p2 from "../../assets/images/products/tela-geral.png";

interface ProductsProps {
  id?: string;
}
export default function Products(props: ProductsProps) {
  return (
    <section id={props.id} className="py-20 bg-sky-100 rounded-3xl shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-5/12 space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium">
              Sistema de Gestão Ágil
            </span>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              SCManager
            </h2>
            <p className="text-lg font-semibold tracking-wide text-gray-600 leading-relaxed">
              Um sistema de gerenciamento de projetos com foco em aumentar a
              agilidade e produtividade.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                Crie projetos, atribua tarefas, gerencie sprints e lançamentos
                de horas de todo o time.
              </p>
              <p>
                Conecte os membros de sua equipe para que todos saibam
                exatamente o que precisa ser feito e por quais responsáveis.
              </p>
            </div>
            <div className="pt-4">
              <Button
                withIcon={<ArrowUpRight weight="bold" />}
                text="Acessar SCManager"
                className="bg-[#03a9f4] before:bg-sky-700 hover:bg-sky-800 text-white border-[#03a9f4] hover:border-sky-700 shadow-md hover:shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-7/12 relative">
            <div className="relative h-96">
              <img
                src={p1}
                alt="Interface do SCManager"
                className="absolute z-10 top-0 left-0 w-4/5 rounded-lg shadow-xl"
              />
              <img
                src={p2}
                alt="Dashboard do SCManager"
                className="absolute z-20 bottom-0 right-0 w-3/5 rounded-lg"
              />

              <div className="absolute -left-5 -top-10 w-24 h-24 bg-sky-200 rounded-full opacity-50"></div>
              <div className="absolute -right-2 bottom-2/3 w-16 h-16 bg-sky-300 rounded-full opacity-40 flex justify-center items-center">
                <ChartPieSlice size={40} weight="fill" />
              </div>
              <div className="absolute left-1/4 -bottom-20 w-20 h-20 bg-sky-400 rounded-full opacity-35 flex justify-center items-center">
              <Kanban size={40} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
