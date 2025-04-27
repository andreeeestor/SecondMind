import {
  ArrowUpRight,
  ChartBar,
  CloudArrowUp,
  Database,
  DeviceMobile,
  FileCode,
  Link,
} from "@phosphor-icons/react";

interface ServicesProps {
  id?: string;
}
export default function Services(props: ServicesProps) {
  return (
    <section id={props.id}>
        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <Database className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">Big Data</h2>
            <p className="leading-relaxed text-gray-400">
              Adquira insights valiosos de suas tendências de mercado,
              transformando suas informações em dados.
            </p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">
              Aplicações Web
            </h2>
            <p className="leading-relaxed text-gray-400">
              Tenha softwares sob medida para seus processos, aumentando a
              produtividade do seu negócio.
            </p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <FileCode className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
        </div>

        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <DeviceMobile className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">
              Aplicativos
            </h2>
            <p className="leading-relaxed text-gray-400">
              Se sua empresa necessita de um aplicativo para ampliar seu mercado
              ou para tratar melhor seus processos.
            </p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">
              APIs
            </h2>
            <p className="leading-relaxed text-gray-400">
            Leia dados de outras aplicações, disponibilize seus dados para parceiros, conecte diferentes áreas da sua empresa.
            </p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <CloudArrowUp className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
        </div>

        <div className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <ChartBar className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">
              Reports
            </h2>
            <p className="leading-relaxed text-gray-400">
            Dashboards e repots possibilitando acesso direto aos seus dados mais importantes.
            </p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="flex items-center border-b pb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className=" text-lg title-font font-semibold mb-2">
            Integração de Sistemas
            </h2>
            <p className="leading-relaxed text-gray-400">
            Integre seus sistemas e serviços de forma transparente e funcional.
            </p>
            <a className="mt-3 text-sky-500 inline-flex items-center transition-all hover:opacity-90 hover:underline cursor-pointer">
              Leia Mais
              <ArrowUpRight className="size-4 ml-2" />
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#03a9f4] flex-shrink-0">
            <Link className="sm:w-16 sm:h-16 w-10 h-10" color="white" />
          </div>
        </div>
    </section>
  );
}
