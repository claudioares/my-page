import Image from "next/image";
import imgMe from "../../../public/me/ft06.png"
import { BtnHyperLink } from "@/components/btnHyperLink/btnHyperlink";

export default function Aboutme () {
    return(
        <>
            <div className="flex flex-col gap-10 h-screen pb-10 bg-gray-950 overflow-auto">
                <header className="relative flex flex-col gap-6 w-full h-80 bg-sky-900 text-white px-56 py-10">
                    <h1 className="text-5xl">Sobre mim...</h1>
                    <div>___________</div>
                    <p className="font-extralight text-base italic">"Com exceção de mudar o outro, tudo é possível!"</p>
                </header>
                <div className="flex h-auto items-center justify-center px-56 gap-10">
                    <Image src={imgMe} alt="Imagem cláudio soares" 
                        className="w-80 h-96 shadow-white shadow-md"
                    />
                    <div className="p-4">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Aperiam dolorem officia quaerat eum, quis deserunt blanditiis!
                            Quae et amet quasi repellendus! Saepe quaerat odio odit iste 
                            in ab commodi repellat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Aperiam dolorem officia quaerat eum, quis deserunt blanditiis!
                            Quae et amet quasi repellendus! Saepe quaerat odio odit iste 
                            in ab commodi repellat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Aperiam dolorem officia quaerat eum, quis deserunt blanditiis!
                            Quae et amet quasi repellendus! Saepe quaerat odio odit iste 
                            in ab commodi repellat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Aperiam dolorem officia quaerat eum, quis deserunt blanditiis!
                            Quae et amet quasi repellendus! Saepe quaerat odio odit iste 
                            in ab commodi repellat.
                        </p>
                    </div>
                </div>
                <BtnHyperLink btnTo="Home" href="/" />
            </div>
        </>
    )
}