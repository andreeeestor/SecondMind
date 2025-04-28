import NewsCard from "../cards/NewsCard"
import n1 from "../../assets/images/news/pexels-tima-miroshnichenko-5380664-1024x683.jpg"
import n2 from "../../assets/images/news/pexels-sora-shimazaki-5935791-1024x1536.jpg"
import n3 from "../../assets/images/news/pexels-jakub-zerdzicki-19331241-1024x606.jpg"
import Button from "../shared/Button"
import { ArrowUpRight } from "@phosphor-icons/react"

interface NewsProps {
    id?: string
}
export default function News(props : NewsProps){
    return(
        <section
        id={props.id}
        className="space-y-4 py-10"
        >
            <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium leading-12 md:text-4xl">News</h1>
          <Button withIcon={<ArrowUpRight weight="bold" />} text="Ver todos os posts" className="border-[#03a9f4] text-[#03a9f4] bg-white hover:text-white before:bg-[#03a9f4]"/>
          </div>    
          <h4 className="text-gray-600 text-lg ">
          Saiba das novidades no mundo da tecnologia; business intelligence, produtividade, integrações, apis, segurança e mais, além de ficar por dentro dos desafios nessas áreas.
          </h4>
          <div className="flex lg:flex-row flex-col items-center gap-2">
            <NewsCard image={n1} title="Desvendando o Mundo das Fábricas de Software: Transformando Ideias em Soluções Digitais" description="Criado com AIPRM Prompt “Human Written |100% Unique |SEO Optimized Article” Desvendando o Mundo das Fábricas de Software: Transformando Ideias em Soluções Digitais As fábricas de software são organizações especializadas[…]" />
            <NewsCard image={n2} title="Integrações de Sistemas: Simplificando Processos e Maximizando Eficiência" description="No cenário empresarial atual, a integração de sistemas desempenha um papel fundamental na simplificação de processos e na maximização da eficiência operacional. Neste artigo, exploraremos o conceito de integrações de[…]" />
            <NewsCard image={n3} title="Explorando a Revolução IoT: O Papel dos Beacons na Transformação Digital" description="Nos últimos anos, a Internet das Coisas (IoT) emergiu como uma das tecnologias mais disruptivas e inovadoras, impulsionando a transformação digital em vários setores. Neste artigo, vamos explorar especificamente o[…]" />
          </div>
        </section>
    )
}