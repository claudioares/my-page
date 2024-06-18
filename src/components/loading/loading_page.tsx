import Image from 'next/image';
import gifLoading from "@/assets/gif/gif-loading.gif";
import logo from  'public/logo.svg';
import { ReactNode, useEffect, useState } from 'react';


type ChildrenComponents = {
    children: ReactNode
}

export function LoadingPage ({children}:ChildrenComponents) {
    
  const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
        setLoading(false);
        }, 500)
    }, [])

   return(
    <>
        {loading && 
            <div className={`
                flex flex-col-reverse gap-1 px-4
                w-full h-screen bg-black items-center justify-center
            `}>
                <Image src={logo} alt='logo da empresa' className={`
                    animate-pulse duration-700 w-40
                `}/>
                <Image src={gifLoading} alt='gif animado' className='w-20 h-20'/>
            </div>
        }

        { !loading && (children) }
    </>
   )
}