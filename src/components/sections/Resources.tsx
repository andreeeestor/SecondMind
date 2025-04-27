import { Headset, MagicWand, Cube, UsersThree } from "@phosphor-icons/react";
import Card from "../animations/Card";

interface ResourcesProps {
  id?: string;
}
export default function Resources(props: ResourcesProps) {
  return (
    <section
      id={props.id}
      className="flex flex-col items-center space-y-4 py-10"
    >
      <h1 className="text-3xl font-medium leading-12 md:text-4xl">Recursos</h1>
      <h4 className="text-gray-600 text-lg text-center">
        Nossa empresa possui uma gama de recursos que auxiliam no
        desenvolvimento de nossos projetos de maneira ímpar, garantindo uma
        maior segurança para cliente.
      </h4>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 lg:grid-rows-2 lg:grid-cols-2 w-full">
        <Card
          title="Consultoria"
          subtitle="Ajudamos a nossos clientes a atingir seus objetivos e aumentar sua produtividade  de forma eficaz e eficiente através de soluções que garantam uma maior segurança na tomada de decisão."
          Icon={UsersThree}
        />
        <Card
          title="Suporte"
          subtitle="Suporte corporativo com atendimento técnico remoto, central help-desk, visitas in-loco emergenciais e planos de suporte específicos para cada demanda."
          Icon={Headset}
        />
        <Card
          title="Código Flexível"
          subtitle="Trabalhamos com grande variedade de linguagens de forma organizada e refatorável garantindo um código mais limpo e reutilizável através de boas práticas de desenvolvimento."
          Icon={Cube}
        />
        <Card
          title="New & Old School"
          subtitle="Nossos projetos podem ser criados tanto utilizando a metodologia tradicional, atendendo  um escopo específico ou utilizando  metodologias ágeis."
          Icon={MagicWand}
        />
      </div>
    </section>
  );
}
