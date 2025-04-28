import t1 from "../../assets/images/testimonials/cropped-logo_brain.png";
import t2 from "../../assets/images/testimonials/cropped-eloy.png";
import t3 from "../../assets/images/testimonials/cropped-daniela-mara.png";
import TestimonialCard from "../cards/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-medium leading-12 md:text-4xl">
        Depoimentos
      </h1>
      <h4 className="text-gray-600 text-lg text-center">
        Não acredite apenas na nossa palavra – aqui está o que nossos clientes
        dizem:
      </h4>
      <div className="flex flex-wrap -m-4">
        <TestimonialCard
          text="A Second Mind foi uma excelente parceria da Brain no processo de
              transformar uma idéia em uma solução integrada. Nossa jornada
              envolveu integrar uma série de atividades individuais e pouco
              engrenadas em um software de gestão dos nossos processos
              operacionais, garantindo mais velocidade, controle, precisão e
              escala na prestação dos nossos serviços. O Deyvison é um
              profissional comprometido e engajado, preocupado em entender as
              necessidades do usuário e encontrar a melhor solução de
              desenvolvimento, mantendo uma visão holística do problema e uma
              excelente capacidade técnica."
          image={t1}
          author="Flávia Lage"
          occupation="Brain BrandStrategy – CEO "
        />
        <TestimonialCard
          text="Mais que uma fábrica de Software a Second Mind é uma parceira de
              tecnologia. Por dois anos contratei os serviços da Second Mind e
              posso destacar três grandes qualidades: compromisso com os prazos,
              preocupação com a entrega de valor, e cuidado com as pessoas,
              clientes e colaboradores. Espero voltar a trabalhar com eles.
              Super recomendo."
          image={t2}
          author="André Eloy"
          occupation="Conexsus – Catalisador de Conexões Criativas"
        />
        <TestimonialCard
          text="Equipe nota 10, elaborou o sistema de gestão conforme a
              necessidade de nossa empresa. Super indico.Equipe nota 10,
              elaborou o sistema de gestão conforme a necessidade de nossa
              empresa. Super indico."
          image={t3}
          author="Daniela Mara de Oliveira"
          occupation="Asteseg – Assistente Comercial"
        />
      </div>
    </section>
  );
}
