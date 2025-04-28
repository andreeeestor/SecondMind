import {
  ChartBar,
  CloudArrowUp,
  Database,
  DeviceMobile,
  FileCode,
  Link,
} from "@phosphor-icons/react";
import ServiceCard from "../cards/ServicesCard";

interface ServicesProps {
  id?: string;
}
export default function Services(props: ServicesProps) {
  return (
    <section id={props.id}>
      <ServiceCard
        title="Big Data"
        description="Adquira insights valiosos de suas tendências de mercado,
              transformando suas informações em dados."
        Icon={Database}
        side="left"
      />
      <ServiceCard
        title="Aplicações Web"
        description="Tenha softwares sob medida para seus processos, aumentando a
              produtividade do seu negócio."
        Icon={FileCode}
        side="right"
      />
      <ServiceCard
        title="Aplicativos"
        description="Se sua empresa necessita de um aplicativo para ampliar seu mercado
              ou para tratar melhor seus processos."
        Icon={DeviceMobile}
        side="left"
      />
      <ServiceCard
        title="APIs"
        description="Leia dados de outras aplicações, disponibilize seus dados para parceiros, conecte diferentes áreas da sua empresa."
        Icon={CloudArrowUp}
        side="right"
      />
      <ServiceCard
        title="Reports"
        description="Dashboards e repots possibilitando acesso direto aos seus dados mais importantes."
        Icon={ChartBar}
        side="left"
      />
      <ServiceCard
        title="Integração de Sistemas"
        description="Integre seus sistemas e serviços de forma transparente e funcional."
        Icon={Link}
        side="right"
      />
    </section>
  );
}
