import { MyHeader } from "@/components/Header/header";
import { CardGame } from "@/components/card/cardGames";

export default function Games () {
    return(
        <>
            <div className="w-full h-auto pb-16 pt-24 text-white bg-black">    
                <MyHeader />
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