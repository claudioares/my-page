'use client'

export function BtnFreelancer () {
    const handleHiperlinkToFormContacts = () =>{
        const elementSelect = document.getElementById('contact');
        elementSelect?.scrollIntoView({ behavior: 'smooth' });
    }
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
                onClick={()=>handleHiperlinkToFormContacts()}
            >Contato para freelancer</button>
        </>
    )
}