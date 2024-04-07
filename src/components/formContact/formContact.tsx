import Image from "next/image";
import logo from '../../../public/logo.svg';
import { InputsForms } from "./inputsforms";

export function FormContact () {
    return(
        <>
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
                    <InputsForms />
                </div>
            </div>
        </>
    )
}