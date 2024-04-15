import Image from "next/image";
import logo from '../../../public/logo.svg';
import { InputsForms } from "./inputsforms";

export function FormContact () {
    return(
        <>
            <div className={`
                flex flex-col justify-center items-center h-auto w-full my-4 bg-black text-white
                md:min-h-[40rem] md:my-0
            `} id="contact">
                <p className={`
                    w-full h-auto flex items-center justify-center p-4 text-xl font-semibold
                    md:hidden
                `}>
                    Contate-me
                </p>
                <div className={`
                    flex justify-center items-center w-full h-[30rem]  
                    md:w-[80%] md:rounded-xl md:bg-slate-950 md:border
                `}>
                    <div className={`
                        hidden flex-col px-6 py-12 justify-between w-[30%] h-full bg-pink-950 rounded-l-xl
                        md:flex
                    `}>
                        <div className="flex items-center justify-center">
                            <Image className="w-40" src={logo} alt="Logotipo" />
                        </div>
                        <div>
                        <h1 className={`
                            text-lg font-medium w-full text-center
                            lg:text-3xl lg:font-semibold
                        `}>Contate-me</h1>
                        </div>
                    </div>
                    <InputsForms />
                </div>
            </div>
        </>
    )
}