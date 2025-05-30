import Waves from "../animations/Waves";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="bg-[#03172C] rounded-3xl shadow-2xl h-96 relative">
      <Waves
        lineColor="#228EEA"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="flex flex-col gap-y-6 justify-center items-center h-full z-50 text-white">
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl italic">
          second mind.
        </h1>
        <p className="text-center text-gray-300">
          Automatizando Processos <br />
          Transformando desafios em códigos <br />
          Sua solução no desenvolvimento de softwares <br />
          Potencializando seu sucesso digital <br />
          Inovação sob medida
        </p>
        <div className="flex md:flex-row flex-col items-center gap-6">
          <Button
            text="Precificador de Projetos"
            className="border-[#03a9f4] bg-[#03a9f4] text-white hover:text-white before:bg-[#03a9f4] md:w-auto w-full"
          />
          <Button
            text="Saiba Mais"
            className="hover:text-black before:bg-white md:w-auto w-full text-white"
          />
        </div>
      </div>
    </section>
  );
}
