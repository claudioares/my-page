"use client"
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/card/card";
import BasicSpeedDial from "@/components/speed/speed";
import { Modal } from "@/components/modal/modal";
import AccordionExpandDefault from "@/components/accordion/accordion";
import Image from "next/image";
import imgHead from '../../public/imagensDecorations/image (4).png'
import imgAcordion from '../../public/imagensDecorations/image (9).png'
import { BtnFreelancer } from "@/components/btnFreelancer/btnFreelancer";
import { FormContact } from "@/components/formContact/formContact";
import { BtnHyperLink } from "@/components/btnHyperLink/btnHyperlink";
import { ModalSucessMessege } from "@/components/modal_sucess_messege/modal_sucess_messege";
import { useContext } from "react";
import { ContextApi } from "@/components/contextApi/contextApi";
import { ModalErrorMessege } from "@/components/modal_error_messege/modal_error_messege";
import { Footer } from "@/components/footer/footer";
import { MyHeader } from "@/components/Header/header";

export default function Home() {

  const {
    modalContactSucess, modalContactError
  } = useContext(ContextApi)

  return (
    <div className={`
      flex flex-col bg-black
      md:gap-4
    `}>
      <MyHeader />
      <div className={`
        h-lvh max-w-full text-[#D9D9D9] bg-[url('../../public/bg.png')] bg-fixed bg-center bg-cover p-16 relative
        lg:h-[40rem] lg:bg-contain
      `}>
        <div className="flex bg-black opacity-95 w-full h-full absolute top-0 left-0 right-2">
          <div className={`
            flex flex-col items-start justify-center w-full h-full p-12 gap-4
            md:w-[50%]
          `}>
            <BtnFreelancer />
            <div>
              <h1 className="text-4xl font-semibold">Cláudio J. A. Soares</h1>
              <h3 className="text-xl">Desenvolvedor FullStack</h3>
            </div>
           <p> 
              Desenvolvedor fullstack com 2 anos de experiência, 
              habilidades em trabalho colaborativo e projetos individuais. 
              Familiarizado com metodologias ágeis, destacando-se por entregas 
              eficientes e projetos bem-sucedidos como freelancer.
           </p>
           <Separator className="my-2 border-slate-300" />
           <div className="flex gap-4 w-auto px-1">
             <BtnHyperLink btnTo="projects" href="" />
             <BtnHyperLink btnTo="Saiba mais ..." href="/aboutme"/>
           </div>
          </div>

          <div className={`
            hidden items-center justify-center w-[50%] h-full
            md:flex
          `}>
            <Image className="w-[25rem] duration-1000" src={imgHead} alt="imagen de decotação" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-auto py-2 bg-pink-950 text-white" id="projects">
          <Card />
      </div>

      <div className="bg-[url('../../public/bg-sec-formation.jpg')] bg-fixed bg-center bg-cover bg-no-repeat">
        <div className="bg-black bg-opacity-90">
          <div className={`
            h-auto flex justify-center items-center text-white
            max-lg:flex-col-reverse lg:pl-16
          `} id="formations">
            <div className={`
              flex flex-col w-full
              lg:w-[50%]
            `}>
              <div className={`
                flex flex-col w-full gap-4 h-auto bg-slate-950 bg-opacity-70 p-6
                
              `}>
                <h1 className="text-lg">Formação</h1>
                <AccordionExpandDefault />
              </div>
            </div>
            <div className="w-[50%] flex items-center justify-end pr-6">
              <Image className="w-[25rem] pb-8" src={imgAcordion} alt="imagem de decoração" />
            </div>
          </div>
          <FormContact />
        </div>
      </div>
      <BasicSpeedDial />
      <Modal />
      {modalContactSucess && <ModalSucessMessege />}
      {modalContactError && <ModalErrorMessege />}

      <Footer />
    </div>
  );
}
