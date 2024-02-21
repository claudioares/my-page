import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/card/card";
import BasicSpeedDial from "@/components/speed/speed";
import { Modal } from "@/components/modal/modal";
import AccordionExpandDefault from "@/components/accordion/accordion";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-screen max-w-full text-[#D9D9D9] bg-[url('../../public/bg.jpg')] bg-cover p-16 relative">
        <div className="bg-black opacity-95 w-full h-full absolute top-0 left-0 right-2">
          <div className="flex flex-col items-start justify-center w-[50%] h-full p-12 gap-4">
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
                <ArrowRightIcon className=" w-5 h-5" />Saiba mais
              </Button>
           </div>
          </div>
        </div>
      </div>

      <div className="h-[30rem] flex flex-col justify-center gap-4 bg-pink-950 text-white">
        <div className="flex items-center justify-center">
          <Card />
        </div>
      </div>

      
      <div className="min-h-[25rem] flex flex-col justify-center bg-black text-white">
        <div className="flex flex-col gap-2 w-[50%] h-auto bg-slate-950 opacity-70 p-6">
          <h1 className="text-lg">Formação</h1>
          <AccordionExpandDefault />
        </div>
      </div>
      <BasicSpeedDial />
      <Modal />
    </div>
  );
}
