import Image from "next/image";
import logo from '../../../public/logo.svg';
import { InputsForms } from "./inputsforms";

export function FormContact () {
    return(
        <>
            <div className={`
                flex flex-col justify-center items-center h-auto w-full my-4 bg-black text-white
                lg:min-h-[40rem] lg:my-0
            `} id="contact">
                <div className={`
                    flex justify-center items-center w-full h-[30rem]  
                    lg:w-[80%] md:rounded-xl lg:bg-slate-950 lg:border
                `}>
                    <div className={`
                        hidden flex-col px-6 py-12 justify-between w-[30%] h-full bg-pink-950 rounded-l-xl
                        lg:flex
                    `}>
                        <div className="flex items-center justify-center">
                            <Image className="w-40" src={logo} alt="Logotipo" />
                        </div>
                        <div>
                            <h1 className={`
                                text-lg font-medium w-full text-center
                                lg:text-base lg:font-light
                            `}>
                                Deixe seu contato e sua mensagem e entrarei em contato o mais rápido possível
                            </h1>
                        </div>
                    </div>
                    <InputsForms />
                </div>
            </div>
        </>
    )
}