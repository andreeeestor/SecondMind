import t1 from "../../assets/images/testimonials/cropped-logo_brain.png";
import t2 from "../../assets/images/testimonials/cropped-eloy.png";
import t3 from "../../assets/images/testimonials/cropped-daniela-mara.png";
import { Quotes } from "@phosphor-icons/react";

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-medium leading-12 md:text-4xl">
        Depoimentos
      </h1>
      <h4 className="text-gray-600 text-lg text-center">
      Não acredite apenas na nossa palavra – aqui está o que nossos clientes dizem:
      </h4>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-white border-[1px] border-slate-300 p-8 rounded-md shadow-md">
            <Quotes color="#03a9f4" weight="fill" size={32} className="mb-4" />
            <p className="leading-relaxed mb-6">
              A Second Mind foi uma excelente parceria da Brain no processo de
              transformar uma idéia em uma solução integrada. Nossa jornada
              envolveu integrar uma série de atividades individuais e pouco
              engrenadas em um software de gestão dos nossos processos
              operacionais, garantindo mais velocidade, controle, precisão e
              escala na prestação dos nossos serviços. O Deyvison é um
              profissional comprometido e engajado, preocupado em entender as
              necessidades do usuário e encontrar a melhor solução de
              desenvolvimento, mantendo uma visão holística do problema e uma
              excelente capacidade técnica.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src={t1}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                Flávia Lage
                </span>
                <span className="text-gray-500 text-sm">Brain BrandStrategy – CEO </span>
              </span>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-white border-[1px] border-slate-300 p-8 rounded-md shadow-md">
          <Quotes color="#03a9f4" weight="fill" size={32} className="mb-4" />
            <p className="leading-relaxed mb-6">
              Mais que uma fábrica de Software a Second Mind é uma parceira de
              tecnologia. Por dois anos contratei os serviços da Second Mind e
              posso destacar três grandes qualidades: compromisso com os prazos,
              preocupação com a entrega de valor, e cuidado com as pessoas,
              clientes e colaboradores. Espero voltar a trabalhar com eles.
              Super recomendo.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src={t2}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  André Eloy
                </span>
                <span className="text-gray-500 text-sm">
                  Conexsus – Catalisador de Conexões Criativas
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-white border-[1px] border-slate-300 p-8 rounded-md shadow-md">
          <Quotes color="#03a9f4" weight="fill" size={32} className="mb-4" />
            <p className="leading-relaxed mb-6">
              Equipe nota 10, elaborou o sistema de gestão conforme a
              necessidade de nossa empresa. Super indico.Equipe nota 10,
              elaborou o sistema de gestão conforme a necessidade de nossa
              empresa. Super indico.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src={t3}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Daniela Mara de Oliveira
                </span>
                <span className="text-gray-500 text-sm">
                  Asteseg – Assistente Comercial
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
