import Image from "next/image";
import imgMe from "../../../public/me/ft06.png"
import { BtnHyperLink } from "@/components/btnHyperLink/btnHyperlink";

export default function Aboutme () {
    return(
        <>
            <div className="flex flex-col gap-10 h-screen pb-10 bg-gray-950 overflow-auto">
                <header className={`
                    relative flex flex-col gap-6 w-full h-80 bg-sky-900 text-white px-8 py-4
                    md:px-56 md:py-10
                `}>
                    <h1 className={`
                        text-3xl
                        md:text-5xl
                    `}>Sobre mim...</h1>
                    <div>___________</div>
                    <p className="font-extralight text-base italic">&lsquo; Com exceção de mudar o outro, tudo é possível! &lsquo;</p>
                </header>
                <div className={`
                    flex h-auto items-center justify-center px-8 gap-4
                    max-lg:flex-col
                    md:px-56 md:gap-10
                `}>

                    <Image src={imgMe} alt="Imagem cláudio soares" 
                        className={`
                            w-80 h-96 shadow-white shadow-md
                            md:w-50 md:h-66
                        `}
                    />
                    <div className="text-white">
                        <h1 className="font-medium text-lg">E aí meu nome é Cláudio, tudo bem?</h1>
                        <br />
                        <p>
                            Dizem que, às vezes, às maiores limitações são
                            impostas por nós mesmo. E isso nos prende, 
                            nos atrasa e ate nos faz parar pelo caminho. 
                            E cabe a cada um tentar superar essas limitações, 
                            todos os dias.
                        </p>
                        <br />
                        <p>
                            E aprendi e aprendo programação através de cursos online, 
                            quase todos grátis; felizmente existem muito conteúdo, 
                            alguns meio desencontrados, mas, a gente pode organizar.
                            final esse é um dos trabalhos de um desenvolvedor: 
                            Organizar, refatorar, abstrair as coisas; e no fim do dia,
                            solucionar problemas.
                        </p>
                    </div>

                </div>
                <div className={`
                    flex h-auto items-center justify-center px-8 gap-4
                    max-lg:flex-col
                    md:px-56 md:gap-10
                `}>
                  
                    <div className="text-white">
                        <p>
                            Comecei na programação em 2021 com um programa de ensino, 
                            ministrado por um professor da UFMA, com a linguagem Python.
                            Assim foram meus primeiros passos, os princípios básicos: 
                            Lógia de programação, tipos de variáves, arrays, algoritimos, 
                            reconhecimento de padrões, pensamento computacional... 
                            Todas essas coisas que todo novo programador aprende nos começos.
                        </p>
                        <br />
                        <p>
                            Depois de um tempo me descobrir no javascript. 
                            Foi a primeira linguagem em que eu desenvolvi 
                            algo de fato, e de lá pra cá, cada vez que termino um projeto, 
                            aprendo uma tecnologia nova, consigo botar em prática uma idéia, 
                            é uma realização incrivel; e isso é uma das coisa que me insentivam a 
                            continuar estudando, me desenvolvendo.
                        </p>
                    </div>

                </div>

                <div className={`
                    flex h-auto items-center justify-center px-8 gap-4 
                    max-lg:flex-col
                    md:px-56 md:gap-10
                `}>
                
                    <div className="text-white">
                        <p>
                            Já trabalhei como designer, criei logos, editei fotos, criei bunners, 
                            flys de festas, apresentações para comerciais, 
                            já fiz manutenção de computadores, 
                            já fui secretário de escritório de advocacia e, claro, músico. 
                            E esse último, realmente é uma das minhas paixões. 
                            A maior parte de minha vida eu me vi envolvido com a 
                            música de certa forma, mas, essa é papo pra uma outra conversa.
                        </p>
                        <br />
                        <p>
                            Voltando a programação... Tentei fazer uma graduação em Engenharia 
                            de software e fiz ainda dois semestres com a linguagem C, mas não
                            conseguir dar proseguimento. Mas, realmente aprendi muita coisas 
                            legais durante o tempo que cursei. Principalmente arquitetura e a 
                            base de como as coisas funcionam por trás de tudo; em um mundo além 
                            do layourt, digamos: A estrutura lógica por baixo dos panos. 
                            Depois fiz um intensivo em desenvolvimento web e continuo aprendendo 
                            4com os materiais que encontro em minhas pesquisas, documentações, 
                            videos e claro, "mão na massa", tentativa e erro.
                        </p>
                    </div>

                    {/* <Image src={imgMe} alt="Imagem cláudio soares" 
                        className="w-80 h-96 shadow-white shadow-md"
                    /> */}
                </div>

                <div className={`
                    flex h-auto items-center justify-center px-8 gap-4 
                    max-lg:flex-col
                    md:px-56 md:gap-10
                `}>
                  
                    <div className="text-white">
                        <p>
                            Ultimamente eu estou graduando em Inteligência Artíficial 
                            pela UNICID e estou prestando vestibular para 
                            Desenvolvimento de Sistemas pela UEMA.
                        </p>
     
                        <p>
                            A programação é a minha paixão mais antiga e a mais recente. 
                            Mais antiga porque eu sempre quis aprender programação e a 
                            mais recente porque faz um pouco mais de dois anos que comecei 
                            a estudar e me descobrir uma pessoa desenvolvedora, um programador, 
                            um solucionador de problemas atraves da tecnologia.
                        </p>
                        <br />
                        <p>
                            Enfim... Qual é a feature de hoje?
                        </p>
                        <br />
                        <p>
                            Mesmo correndo o risco de ser meio clichê:  
                        </p>
                        <p>
                            Aprender e aprender fazer melhor hoje o que eu fiz ontem.
                        </p>
                        <br />
                        <br />
                        <p>
                            Um Abraço!
                        </p>
                        <p>
                            Cláudio J. A. Soares
                        </p>
                    </div>

                </div>
                <BtnHyperLink btnTo="Home" href="/" />
            </div>
        </>
    )
}