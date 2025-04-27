import { Envelope, Phone } from "@phosphor-icons/react";
import Badge from "../shared/Badge";

interface ContactProps {
  id?: string;
}

export default function Contact(props: ContactProps) {
  return (
    <section id={props.id} className="text-gray-600 relative">
      <div className="absolute inset-0 bg-gray-300 rounded-3xl">
        <iframe
          width="100%"
          height="100%"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            borderRadius: "24px",
          }}
          frameBorder="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0047320388417!2d-43.7997593237627!3d-20.66938648089156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1602cee93b8ed%3A0x6c2662e2dc185064!2sR.%20Catagu%C3%A1ses%2C%20323%20-%20Carij%C3%B3s%2C%20Conselheiro%20Lafaiete%20-%20MG%2C%2036406-109!5e0!3m2!1spt-BR!2sbr!4v1745795342864!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-2/5 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Entre em contato com nossa equipe
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Contate-nos para ter um software na medida para sua empresa.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(__) _____-____"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 h-32 text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">
            Enviar
          </button>
          <div className="flex md:flex-row flex-col items-center gap-4 mt-4">
            <Badge Icon={Envelope} text="contato@secondmind.com.br" />
            <Badge Icon={Phone} text="+55 31 98396-6061" />
          </div>
        </div>
      </div>
    </section>
  );
}
