"use client"
import { Card } from "@/components/card/card";
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
        h-lvh max-w-full text-[#D9D9D9] bg-[url('../../public/bg.png')] bg-fixed bg-center bg-cover relative
        lg:h-screen lg:bg-no-repeat
      `}>
        <div className="flex flex-col px-16 py-28 justify-center items-center bg-black bg-opacity-95 w-full h-full">
          <div className="flex justify-end w-full h-auto px-8">
            <BtnContact />
          </div>

          <div className={`
            flex flex-col items-center justify-center w-full h-full p-12 gap-4
          `}>
            <div className="flex flex-col gap-3 text-center">
              <h1 className={`
                text-3xl font-semibold
                lg:text-5xl
              `}>Cláudio J. A. Soares</h1>
              <h3 className={`
                text-xl
              `}>Desenvolvedor FullStack</h3>
            </div>
           <p className={`
              w-[65%] text-center text-lg
              lg:text-xl
           `}> 
              Desenvolvedor fullstack com 2 anos de experiência, 
              habilidades em trabalho colaborativo e projetos individuais. 
              Familiarizado com metodologias ágeis, destacando-se por entregas 
              eficientes e projetos bem-sucedidos como freelancer.
           </p>
           <div className="flex gap-4 w-auto px-1 mt-12">
             <BtnHyperLink btnTo="projects" href="" />
             <BtnHyperLink btnTo="Saiba mais ..." href="/aboutme"/>
           </div>
          </div>

          <ChevronDown className="w-20 h-20 cursor-pointer" id="arrowIconDown"/>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-auto bg-pink-950 text-white" id="projects">
          <Card />
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
              flex flex-col w-full
              text-center gap-4
              lg:w-[50%]
            `}>
              <DrawerComponent />
              <p className="text-lg">Projetos para análise de código ou contribuição</p>
            </div>
            <div className="w-[50%] flex items-center justify-end pr-6">
              <Image className="w-[25rem] pb-8" src={imgAcordion} alt="imagem de decoração" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto p-2 bg-rose-950">
         <div className={`
            flex flex-col w-[50%] gap-4 h-auto bg-slate-950 bg-opacity-70 p-6
          `}>
            <h1 className="text-lg text-slate-50">Formação</h1>
            <AccordionExpandDefault />
          </div>
          <div className="">
            algum conteudo
          </div>
      </div>

      <div className="w-full h-96 bg-[url('../../public/bg-sec-formation.jpg')] bg-fixed bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full bg-black bg-opacity-75 p-4">
        <div className={`
            flex h-full w-full justify-center items-center text-white
            bg-zinc-700 bg-opacity-20
            p-4 gap-2
            max-lg:flex-col-reverse lg:pl-16
          `}>
            <div className="flex justify-end gap-2 w-full px-56">
              <ButtonHobby nameButton="DESIGN" />
              <ButtonHobby nameButton="TECNOLOGIAS" />
              <ButtonHobby nameButton="FILMES" />
              <ButtonHobby nameButton="MÚSICAS" />
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
