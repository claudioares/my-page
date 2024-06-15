"use client"
import BasicSpeedDial from "@/components/speed/speed";
import { Modal } from "@/components/modal/modal";
import AccordionExpandDefault from "@/components/accordion/accordion";
import Image from "next/image";
import imgAcordion from '../../public/imagensDecorations/image (9).png'
import { BtnContact } from "@/components/btnContact/btnContact";
import { BtnHyperLink } from "@/components/btnHyperLink/btnHyperlink";
import { ModalSucessMessege } from "@/components/modal_sucess_messege/modal_sucess_messege";
import { useContext } from "react";
import { ContextApi } from "@/components/contextApi/contextApi";
import { ModalErrorMessege } from "@/components/modal_error_messege/modal_error_messege";
import { Footer } from "@/components/footer/footer";
import { MyHeader } from "@/components/Header/header";
import { ChevronDown } from "lucide-react";
import { DrawerComponent } from "@/components/drawer/drawer";
import { ButtonHobby } from "@/components/buttonHobbys/button.hobby";
import iconsStacks from "@/components/utils/icons";
import { CardProjects } from "@/components/card/cardProjects";
import { projectsData } from "@/components/utils/projects";

export default function Home() {

  const {
    modalContactSucess, modalContactError
  } = useContext(ContextApi)

  return (
    <div className={`
      flex flex-col scroll-[none]
    `}>
      <MyHeader />
      <div className={`
        w-full text-[#D9D9D9] bg-[url('../../public/bg.png')] bg-fixed bg-center bg-cover relative
        lg:h-screen lg:bg-no-repeat
      `}>
        <div className={`
          flex flex-col px-1 py-28 justify-center items-center bg-black bg-opacity-95 w-full h-full
          sm:px-16
        `}>
          <div className={`
            hidden justify-end w-full h-auto px-8
            lg:flex
          `}>
            <BtnContact position="absolute" />
          </div>

          <div className={`
            flex flex-col items-center justify-center w-full h-full p-0 gap-4
            sm:p-12
          `}>
            <div className="flex flex-col gap-3 text-center">
              <h1 className={`
                text-3xl font-semibold
                lg:text-5xl
              `}>Cláudio J. A. Soares</h1>
              <h3 className={`
                text-xl
                lg:text-3xl
              `}>Desenvolvedor FullStack</h3>
            </div>
           <p className={`
              w-[65%] text-center text-2xl
              lg:text-xl
              sm:text-lg
           `}> 
              Desenvolvedor fullstack com 2 anos de experiência, 
              habilidades em trabalho colaborativo e projetos individuais. 
              Familiarizado com metodologias ágeis, destacando-se por entregas 
              eficientes e projetos bem-sucedidos como freelancer.
           </p>
           <div className="flex gap-4 w-auto px-1 mt-12">
             <BtnHyperLink btnTo="Saiba mais ..." href="/aboutme"/>
           </div>
          </div>

          <ChevronDown className="w-20 h-20 cursor-pointer" id="arrowIconDown"/>
        </div>
      </div>

      <div className="flex flex-col flex-wrap gap-3 items-center justify-center h-auto py-8 bg-black  text-white" id="projects">
          <h1 className="text-2xl font-semibold">Projetos</h1>
          <div className="flex flex-wrap items-center justify-center gap-5 py-10 px-2">
            {projectsData.map((project) => (
                <CardProjects
                id={project.id}
                span={project.span}
                title={project.title}
                description={project.description}
                img={project.url}
                href={project.link}
                key={project.id}
              />
            ))
          }
          </div>
      </div>

      <div className="bg-[url('../../public/bg-sec-03.png')] bg-fixed bg-center bg-cover bg-no-repeat">
        <div className="bg-black bg-opacity-90 p-4">
          <div className={`
            h-full w-full flex justify-center items-center text-white
            bg-zinc-700 bg-opacity-20
            p-4
            max-lg:flex-col-reverse lg:pl-16
          `} id="formations">

            <div className={`
              lg:w-[50%] flex items-center justify-center
            `}>
              <DrawerComponent />
            </div>
            <div className="w-[50%] flex items-center justify-end pr-6">
              <Image className="w-[25rem] pb-8" src={imgAcordion} alt="imagem de decoração" />
            </div>

          </div>
        </div>
      </div>
      <div className={`
        flex flex-col w-full h-auto p-4 bg-rose-950 gap-10
        lg:flex lg:gap-0 lg:p-2 lg:flex-row
      `}>
         <div className={`
            flex flex-col w-full gap-4 h-auto bg-slate-950 bg-opacity-70 p-6
            lg:w-[50%]
          `}>
            <h1 className="text-lg text-slate-50">Formação</h1>
            <AccordionExpandDefault />
          </div>
          <div className={`
            w-full flex justify-center items-center
            lg:w-[50%] lg:px-16
          `}>
              <ul className={`
                flex flex-wrap w-auto justify-center h-auto gap-8
              `}>
                {iconsStacks.map((icon, index) => (
                  <Image className={`
                    w-10 h-10
                    md:w-16 md:h-16
                  `} src={icon} alt="Icone de uma stack de programação" key={index}/>
                ))}
              </ul>
          </div>
      </div>

      <div className={`
        flex items-center justify-center w-full h-auto bg-[url('../../public/bg-sec-formation.jpg')] bg-fixed bg-center bg-cover bg-no-repeat
        lg:h-[30rem]
      `}>
        <div className={`
          w-full h-auto bg-black bg-opacity-75 p-1
          lg:p-4 lg:h-full
        `}>
          <div className={`
            flex flex-col h-full w-full justify-center items-center text-white
            bg-zinc-700 bg-opacity-20
            gap-2 p-4
            lg:pl-16 lg:gap-6
            pg:p-0 
          `}>
            <h1 className={`
              text-lg
              md:text-2xl
            `}>Hobbies</h1>
            <div className="flex flex-wrap justify-center gap-2 w-full">
              <ButtonHobby nameButton="DESIGNER GRÁFICO" />
              <ButtonHobby nameButton="EDIÇÃO DE IMAGENS" />
              <ButtonHobby nameButton="ESTUDAR NOVAS TECNOLOGIAS" />
              <ButtonHobby nameButton="ASSISTIR FILMES/SÉRIES" />
              <ButtonHobby nameButton="OUVIR MÚSICAS" />
              <ButtonHobby nameButton="TOCAR VIOLÃO/COMPOR" />
              <ButtonHobby nameButton="ESCREVER" />
            </div>
          </div>
        </div>
      </div>

      <BasicSpeedDial />
      <Modal />
      {modalContactSucess && <ModalSucessMessege />}
      {modalContactError && <ModalErrorMessege messege="Erro inesperado. Mensagem não foi enviada. Tente mais tarde!" />}
      <Footer />
    </div>
  );
}
