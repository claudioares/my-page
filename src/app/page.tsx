import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/card/card";
import BasicSpeedDial from "@/components/speed/speed";
import { Modal } from "@/components/modal/modal";
import logo from '../../public/logo.svg';
import AccordionExpandDefault from "@/components/accordion/accordion";
import Image from "next/image";
import { Footer } from "@/components/footer/footer";
import imgHead from '../../public/imagensDecorations/image (4).png'
import imgAcordion from '../../public/imagensDecorations/image (9).png'
import { BtnFreelancer } from "@/components/btnFreelancer/btnFreelancer";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <div className="h-lvh lg:h-[40rem] max-w-full text-[#D9D9D9] bg-[url('../../public/bg.jpg')] bg-cover p-16 relative">
        <div className="flex bg-black opacity-95 w-full h-full absolute top-0 left-0 right-2">
          <div className="flex flex-col items-start justify-center w-[50%] h-full p-12 gap-4">
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
           <div>
              <Button className="w-32 h-10 bg-pink-900 flex gap-1 animate-btnAnimation items-center justify-center text-[0.7rem] rounded-[0.8rem] hover:bg-slate-900">
                <ArrowRightIcon className="w-5 h-5 animate-pulse" />Saiba mais
              </Button>
           </div>
          </div>
          <div className="flex items-center justify-center w-[50%] h-full">
            <Image className="w-[25rem]" src={imgHead} alt="imagen de decotação" />
          </div>
        </div>
      </div>

      <div className="h-[30rem] flex flex-col justify-center gap-4 bg-pink-950 text-white" id="projects">
        <div className="flex items-center justify-center">
          <Card />
        </div>
      </div>

      <div className="min-h-[35rem] pl-16 flex justify-center items-center bg-black text-white" id="formations">
        <div className="flex flex-col w-[50%]">
          <div className="flex flex-col gap-4 h-auto bg-slate-950 opacity-70 p-6">
            <h1 className="text-lg">Formação</h1>
            <AccordionExpandDefault />
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-end pr-6">
          <Image className="w-[25rem] pb-8" src={imgAcordion} alt="imagem de decoração" />
        </div>
      </div>

      <div className="min-h-[40rem] flex flex-col justify-center items-center bg-black text-white" id="contact">
        <div className="flex justify-center items-center w-[80%] h-[30rem] rounded-xl bg-slate-950 border">
          <div className="flex flex-col px-6 py-12 justify-between w-[30%] h-full bg-pink-950 rounded-l-xl">
            <div className="flex items-center justify-center">
              <Image className="w-40" src={logo} alt="Logotipo" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Contato</h1>
              <p>
                Se você tem interese em falar comigo, 
                contratar meus serviços, por favor, enviar 
                uma mensagem ao lado.
              </p>
            </div>
          </div>
          <form className="w-[70%] h-auto flex flex-col gap-4 px-6 py-9">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome</label>
              <input className="h-11 rounded-xl pl-4 text-black" type="text" id="name" placeholder="Digite seu nome completo" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Seu email</label>
              <input className="h-11 rounded-xl pl-4 text-black" type="text" id="email" placeholder="Digite seu email para contato" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="msgm">Messagem</label>
              <textarea className="h-40 rounded-xl p-4 text-black" id="msgm" placeholder="Digite sua menssagrem aquí" />
            </div>
            <div className="flex w-full items-center justify-center">
              <button className="bg-green-700 w-36 h-12 rounded-xl">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <BasicSpeedDial />
      <Modal />
    </div>
  );
}
