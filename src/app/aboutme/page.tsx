import Image from "next/image";
import imgMe from "../../../public/me/ft06.png"
import { BtnHyperLink } from "@/components/btnHyperLink/btnHyperlink";

export default function Aboutme () {
    return(
        <>
            <div className="flex flex-col gap-10 h-screen pb-10 bg-gray-950 overflow-auto">
                <header className="relative flex flex-col gap-6 w-full h-80 bg-sky-900 text-white px-56 py-10">
                    <h1 className="text-5xl">Sobre mim...</h1>
                    <div>___________</div>
                    <p className="font-extralight text-base italic">&lsquo; Com exceção de mudar o outro, tudo é possível! &lsquo;</p>
                </header>
                <div className="flex h-auto items-center justify-center px-56 gap-10">
                    <Image src={imgMe} alt="Imagem cláudio soares" 
                        className="w-80 h-96 shadow-white shadow-md"
                    />
                    <div className="p-4">
                        <p className="text-white">
                        Olá, meu nome é Cláudio Soares, sou do Maranhão, de uma cidadezinha do interior onde o acesso a tecnologia ainda é escaço mas felizmente a própria tecnólogia, que estudo, me permitiu aprender e me desenvolver.
Dizem que, às vezes, às limitações são impostas por você mesmo e cabe a cada um tentar superar essas limitações, todos os dias.
Aprendi e aprendo programação através de cursos online, quase todos grátis; felizmente existem muito conteúdo, alguns meio desencontrados, mas, a gente pode organizar. Afinal esse é um dos trabalhos de um desenvolvedor, organizar e reorganizar as coisas; e no fim do dia é isso: Solucionar problemas.
Comece na programação em 2021 com um programa de ensino, ministrado por um professor da UFMA, aos sabados com a linguagem Python.
Alí foram meus primeiros passos, princípios básicos: Lógia de programação, tipos de variáves, arrays, algoritimos, reconhecimento de padrões, pensamento computacional... etc.
Depois levei um tempo até descobrir uma linguagem e escolhi o javascript. Eu quis saber como fazer as interfaces que eu tanto adimirava, bom, essa parte vem de uma outra coisa que amo, que é o designer grafico.
Já trabalhei como designer, criei logos, editei fotos, criei bunners, flys de festas, apresentações para comerciais. Não consegui permanecer na área de designer por falta de estrutura, tive de ir buscar outras formas de renda e isso tomava muito meu tempo.
Voltando a programação... Tentei fazer um graduação em Engenharia de software e fiz ainda dois semestres com a linguagem C. Realmente aprendi muita coisa legal, principalmente a base de como as coisas funcionavem por debaixo dos panos, além do layourt, digamos que a estrutura lógica por baixo dos panos.
                        </p>
                    </div>
                </div>
                <BtnHyperLink btnTo="Home" href="/" />
            </div>
        </>
    )
}