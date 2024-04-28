'use client'
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";
import { Curriculum } from "../curriculum/curricullum";
import { Button } from "@/components/ui/button";


export function Modal (){
    const { selectIcon, setSelectIcon } = useContext(ContextApi);

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
                    https://drive.usercontent.google.com/download?id=1_xB2RFWD1uzaDhZnnbkJdTmyCPtV23BB&export=download&authuser=0&confirm=t&uuid=cb0e6e41-aefb-40b4-9794-64ef7f4f8e71&at=APZUnTUYK61yxK6h2Ss9vDXofYr0:1714313035558
                `}>Copiar</a></Button>
                <Button className="bg-red-700" onClick={()=>setSelectIcon('')}>Cancelar</Button>
            </div>}
        </>
    )
}
