import c1 from "../../assets/images/ourClients/logo_msf3.png";
import c2 from "../../assets/images/ourClients/logo_brain2.png";
import c3 from "../../assets/images/ourClients/hexagon.jpg";
import c4 from "../../assets/images/ourClients/cropped-logotipo-vertical-esdb2.png";
import c5 from "../../assets/images/ourClients/cropped-docf2.png";
import c6 from "../../assets/images/ourClients/logo_conexsus.png";
import c7 from "../../assets/images/ourClients/unimed-bh2.png";
import c8 from "../../assets/images/ourClients/cropped-instaletec.jpg";
import c9 from "../../assets/images/ourClients/cropped-aipass.png";
import c10 from "../../assets/images/ourClients/cropped-g2.png";
import c11 from "../../assets/images/ourClients/cropped-prefeitura_queluzito.png";
import c12 from "../../assets/images/ourClients/cropped-asteseg.png";

interface ClientsProps {
  id?: string;
}
export default function Clients(props: ClientsProps) {
  return (
    <section
      id={props.id}
      className="flex flex-col items-center space-y-4 py-10"
    >
      <h1 className="text-3xl font-medium leading-12 md:text-4xl">
        Nossos Clientes
      </h1>
      <h4 className="text-gray-600 text-lg text-center">
        Tratamos nossos clientes de maneira ímpar.
      </h4>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 ">
              <img alt="gallery" className="w-full  h-full  block" src={c1} />
            </div>
            <div className="md:p-2 p-1 w-1/2 ">
              <img alt="gallery" className="w-full  h-full  block" src={c2} />
            </div>
            <div className="md:p-2 p-1 w-full ">
              <img alt="gallery" className="w-full h-full   block" src={c3} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full   block" src={c4} />
            </div>
            <div className="md:p-2 p-1 w-1/2 ">
              <img alt="gallery" className="w-full   h-full  block" src={c5} />
            </div>
            <div className="md:p-2 p-1 w-1/2 bg-white">
              <img alt="gallery" className="w-full  h-full  block" src={c6} />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full   block" src={c7} />
            </div>
            <div className="md:p-2 p-1 w-1/2 ">
              <img alt="gallery" className="w-full   h-full  block" src={c8} />
            </div>
            <div className="md:p-2 p-1 w-1/2 ">
              <img
                alt="gallery"
                className="w-full  h-full bg-white block"
                src={c9}
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 ">
              <img
                alt="gallery"
                className="w-full bg-white h-full  block"
                src={c10}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 ">
              <img alt="gallery" className="w-full  h-full  block" src={c11} />
            </div>
            <div className="md:p-2 p-1 w-full ">
              <img alt="gallery" className="w-full h-full   block" src={c12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
