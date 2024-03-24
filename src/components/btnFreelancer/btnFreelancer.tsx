'use client'
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";

export function BtnFreelancer () {
 
    const {handleHiperlinkTo} = useContext(ContextApi);
    return(
        <>
            <button 
                className="bg-green-900 
                rounded-md 
                text-[0.8rem] 
                w-52 
                h-7 
                flex 
                items-center 
                justify-center 
                animate-bounce
                cursor-pointer"
                onClick={()=>handleHiperlinkTo('contact')}
            >Contato para freelancer</button>
        </>
    )
}