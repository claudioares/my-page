'use client'

import { MouseEvent } from "react"

export function BtnFreelancer () {
    const handleHiperlinkToFormContacts = () =>{
        const elementSelect = document.getElementById('contact');
        elementSelect?.scrollIntoView({ behavior: 'smooth' });
    }
    return(
        <>
            <h1 
                className="bg-green-900 
                rounded-md 
                text-[0.8rem] 
                w-52 
                h-6 
                flex 
                items-center 
                justify-center 
                animate-bounce
                cursor-pointer"
                onClick={()=>handleHiperlinkToFormContacts()}
            >Contato para freelancer</h1>
        </>
    )
}