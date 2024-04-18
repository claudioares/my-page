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
                    flex h-auto items-center justify-center px-12 gap-4 text-center
                    max-lg:flex-col
                    lg:px-56 lg:gap-10 lg:text-left
                    max-md:text-left
                `}>

                    <Image src={imgMe} alt="Imagem cláudio soares" 
                        className={`
                            w-80 h-96 shadow-white shadow-md
                            lg:w-50 lg:h-66
                        `}
                    />
                    <div className="text-white">
                        <p>
                            Dizem que, às vezes, às maiores limitações são impostas por nós mesmo. 
                            E isso nos prende, nos atrasa e até nos faz parar pelo caminho.  
                            Cabe a cada um tentar superar essas limitações, todos os dias. É meio clichê, né? &#128517;
                        </p>
                        <br />
                        <p>
                            Bom, eu aprendi e aprendo programação por cursos online, 
                            quase todos grátis. E isso é algo incrível; a tecnologia nos permite
                            nos desenvolver, mesmo que o meio fisico, digamos assim, não nos permita. E esse é um insentivo, também, 
                            pelo menos pra mim, para que eu estude tecnologia. Eu quero ajudar a desenvolver, implementar essas
                            tecnologias e isso pode ajudar outras pessoas como eu.
                        </p>
                        <p>
                            Agora, voltando a como eu aprendo. Felizmente existem muito conteúdo na internet, 
                            alguns meio desencontrados, mas, a gente pode organizar. 
                            Afinal, no fim do dia, esse é um trabalhos de desenvolvedor: 
                            organizar, refatorar, abstrair... Solucionar problemas.
                        </p>
                    </div>

                </div>
                <div className={`
                    flex h-auto items-center justify-center px-12 gap-4 text-center
                    max-lg:flex-col
                    lg:px-56 lg:gap-10 lg:text-left
                    max-md:text-left
                `}>
                  
                    <div className="text-white">
                        <h1 className="text-xl w-full text-center">Decolagem &#128640;</h1>
                        <br />
                        <p>
                            Comecei na programação no final de 2021 com um programa de ensino, 
                            ministrado por um professor da UFMA, com a linguagem Python. 
                            Assim foram meus primeiros passos, os princípios básicos: 
                            lógica de programação, tipos de variáveis, arrays, algorítimos, 
                            padrões, pensamento computacional... Todas essas coisas que todo 
                            novo programador aprende nos começos.
                        </p>
                        <br />
                        <p>
                            Depois de um tempo me descobrir no JavaScript. 
                            Foi a primeira linguagem em que desenvolvi algo de fato, 
                            e de lá para cá, cada vez que termino um projeto, 
                            aprendo uma tecnologia nova, consigo botar em prática uma ideia, 
                            é uma realização incrível.
                        </p>
                        <br />
                        <p>
                            E, bem após de várias crises de: "Eu não vou consegui!! &#128532;", aprendi a parar um pouco, olhar o caminho que percorrir, 
                            e encontrar nesses caminhos vontade para ir em frente, estudar mais, ir mais alto.
                        </p>
                    </div>

                </div>

                <div className={`
                    flex h-auto items-center justify-center px-12 gap-4 text-center
                    max-lg:flex-col
                    lg:px-56 lg:gap-10 lg:text-left
                    max-md:text-left
                `}>
                
                    <div className="text-white">
                        <h1 className="text-xl w-full text-center">Coisas que fiz &#128188;</h1>
                        <br />
                        <p>
                            Já trabalhei como designer, criei logos, editei fotos, criei bunners, 
                            flys de festas, apresentações para comerciais, 
                            já fiz manutenção de computadores, 
                            já fui secretário de escritório de advocacia e, claro, músico. 
                            E esse último, realmente é uma das minhas paixões. 
                            Ela sempre esteve em minha vida, certa forma, mas, essa é papo pra uma outra conversa.
                        </p>
                        <br />
                        <h1 className="text-xl w-full text-center">Hobby &#128077;</h1>
                        <br />
                        <p>
                            Das várias coisas que amo fazer, escrever é uma das minhas favoritas. Digamos que não sou um cara muito articulado com a oratória mas escrevendo eu me sinto 
                            mais confortável. Poder me expressar na escrita, varias vezes foi o escapatorio pra uma loucura 
                            qualquer e os dias, as vezes, são cheios de loucuras qualquer. <br />
                            Também adoro música, já trabalhei como professor de música, como músico de barzinho, em bandas e 
                            aliando ao gosto pela escrita, também me arrisquei como compositor. <br />
                            <br />
                            No esporte, já pratiquei jiu-jitsu, gosto de volei, futebol, pitinação, corrida e malhar. <br />
                            <br />
                            Na música, gosto de mpb, rock classico, samba, música baiana, pop... enfim, gosto de toda música bem criada, 
                            com preocupação em transmitir algo positivo.
                        </p>
                        <br />
                    </div>

                </div>

                <div className={`
                    flex h-auto items-center justify-center px-12 gap-4 text-center
                    max-lg:flex-col
                    lg:px-56 lg:gap-10 lg:text-left
                    max-md:text-left
                `}>
                  
                    <div className="text-white">
                        <h1 className="text-xl w-full text-center">Conclusões &#128187;</h1>

                        <br />
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
                            Mesmo correndo o risco de ser meio clichê &#10098;outra vez&#10099;:  
                        </p>
                        <p>
                            Aprender e aprender fazer melhor hoje o que eu já fizia ontem.
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