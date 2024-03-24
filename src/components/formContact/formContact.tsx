import Image from "next/image";
import logo from '../../../public/logo.svg';

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
        </>
    )
}