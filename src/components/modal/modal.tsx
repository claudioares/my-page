'use client'
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";
import { Curriculum } from "../curriculum/curricullum";
import { Button } from "@/components/ui/button";

function handleOnkeyDownCloseModal (Icon: any, func: (arg0: string) => void) {
    document.onkeydown = (e)=>{
        e.preventDefault();
        if(e.key === 'Escape' && Icon){
            func('');
        }
    }
}

export function Modal (){
    const { selectIcon, setSelectIcon } = useContext(ContextApi);

    handleOnkeyDownCloseModal(selectIcon, setSelectIcon);

    return(
        <>
            {selectIcon === 'Curriculum' && 
            <div onClick={()=>setSelectIcon('')} className="text-white flex flex-col gap-4 items-center justify-center w-full h-screen fixed top-0  bg-black bg-opacity-90 z-50">
                <Curriculum />
            </div>}
            {selectIcon === 'Salvar no dispositivo' && 
            <div onClick={()=>setSelectIcon('')} className="text-white flex flex-col gap-4 items-center justify-center w-full h-screen fixed top-0  bg-black bg-opacity-90 z-50">
                <h1>Copiar para seu dispositivo?</h1>
                <Button className="hover:bg-lime-700"><a href={`
                    https://drive.usercontent.google.com/download?id=1IahTtb8xTKFKXSvbV475yEu2haXpCHhq&export=download&authuser=0&confirm=t&uuid=10518668-e868-4b71-a41e-56385e1b7316&at=APZUnTWzlVu_vbMb9s6djomNOh6N:1711343081267
                `}>Copiar</a></Button>
                <Button className="bg-red-700" onClick={()=>setSelectIcon('')}>Cancelar</Button>
            </div>}
        </>
    )
}
