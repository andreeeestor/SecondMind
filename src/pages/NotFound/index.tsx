import { Link } from "react-router-dom";
import FuzzyText from "../../components/layout/NotFoundTitle";
import { ArrowLeft } from "@phosphor-icons/react";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="flex justify-center items-center mb-4">
            <FuzzyText baseIntensity={0.2}>404</FuzzyText>
          </div>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Página não encontrada.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Desculpe, não conseguimos encontrar essa página. Você encontrará
            muito para explorar na página inicial.{" "}
          </p>
          <Link
            to="/"
            className=" flex items-center justify-center gap-x-2 font-semibold"
          >
            <ArrowLeft />
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
}
