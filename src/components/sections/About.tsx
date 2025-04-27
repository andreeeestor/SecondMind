import Button from "../shared/Button";
import ImageCarousel from "../animations/AboutCarousel";

interface AboutProps {
  id?: string;
}
export default function About(props: AboutProps) {
  return (
    <section
      id={props.id}
      className="flex flex-col items-center text-center space-y-4"
    >
      <h6 className="uppercase text-xs tracking-widest font-bold">
        second mind
      </h6>
      <h1 className="text-3xl font-medium leading-12 md:text-4xl">
        Nossa missão é buscar tecnologias que garantam a qualidade e
        produtividade dos produtos desenvolvidos para nossos clientes.
      </h1>
      <p className="text-gray-600">
        A Second Mind se destaca como uma renomada fábrica de software e empresa
        de tecnologia, especializada na customização de sistemas e
        desenvolvimento de soluções inovadoras, visando aprimorar e modernizar
        os processos administrativos de seus clientes, proporcionando-lhes um
        ambiente empresarial mais eficiente e competitivo.
      </p>
      <h6 className="text-gray-400 font-medium">
        Atuamos com a responsabilidade de levar as melhores soluções
        tecnológicas para nossos clientes.
      </h6>
      <Button
        text="Comece agora"
        className="border-[#03a9f4] bg-[#03a9f4] hover:text-white before:bg-[#03a9f4]"
      />
      <div className="w-full mt-4">
        <ImageCarousel
          height={500}
          autoplay={true}
          autoplayDelay={5000}
          pauseOnHover={true}
          loop={true}
        />
      </div>
    </section>
  );
}
