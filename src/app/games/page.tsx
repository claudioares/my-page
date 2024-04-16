import { MyHeader } from "@/components/Header/header";
import { CardGame } from "@/components/card/cardGames";

export default function Games () {
    return(
        <>
            <MyHeader />
            <div className={`
                w-full h-screen pb-16 pt-24 px-4 text-white bg-black
                lg:pt-24 md:px-0
            `}>    
                <h1 className="text-center mb-10">
                    Alguns projetinhos de jogos que desenvolvi ao longo desses 
                    anos de apredizado. <br></br>
                    Achei legal colocar aqui. &#128522; &#128522; 
                </h1>
                <CardGame />
            </div>
        </>
    )
}