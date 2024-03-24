'use client'
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";
import { Curriculum } from "../curriculum/curricullum";

export function Modal (){
    const { selectIcon, setSelectIcon } = useContext(ContextApi);
    return(
        <>
            {selectIcon === 'Curriculum' && 
            <div className="text-white flex flex-col gap-4 items-center justify-center w-full h-screen fixed top-0  bg-black bg-opacity-90 z-50">
                <Curriculum />
                <Image src={''} alt="" />
            </div>}
        </>
    )
}