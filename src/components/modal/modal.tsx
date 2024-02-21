'use client'
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";

export function Modal (){
    const { selectIcon, setSelectIcon } = useContext(ContextApi)
    return(
        <>
            {selectIcon === 'Curriculum' && <div className="text-white flex gap-4 items-center justify-center w-full h-screen fixed top-0 opacity-85 bg-black z-50">
                <h1 className="">Meu Curriculum</h1>
                <span onClick={()=>setSelectIcon('')} className="text-xl cursor-pointer">X</span>
                <Image src={''} alt="" />
            </div>}
        </>
    )
}