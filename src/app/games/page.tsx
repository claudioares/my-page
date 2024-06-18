'use client'
import { MyHeader } from "@/components/Header/header";
import { CardGame } from "@/components/card/cardGames";
import { LoadingPage } from "@/components/loading/loading_page";

export default function Games () {
    return(
        <>
            <LoadingPage>
                <MyHeader />
                <div className={`
                    w-full min-h-screen pb-16 pt-24 px-4 text-white bg-black
                    lg:pt-24 md:px-0
                `}>    
                    <h1 className="text-center mb-10">
                        Alguns projetinhos de jogos que desenvolvi ao longo desses 
                        anos de apredizado. <br></br>
                        Achei legal colocar aqui. &#128522; &#128522; 
                    </h1>
                    <CardGame />
                    <br />
                    <h1 className="text-center mb-10">
                        Obs: Os jogos estão, ainda, apenas em formato
                        Decktop. <br></br>
                        Em breve novos jogos e para vários dispositivos. &#128522; &#128522; 
                    </h1>
                </div>
            </LoadingPage>
        </>
    )
}