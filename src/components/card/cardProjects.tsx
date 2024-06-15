import Image, { StaticImageData } from 'next/image';
import { Button } from '../buttonDefault/button';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { ContextApi } from '../contextApi/contextApi';
import { PageUnderConstruction } from '../modal.page.under.construction/madal.page.under.contruction';

type CrdProjectProps = {
    id: string,
    img: string | StaticImageData,
    span: string | undefined,
    title: string,
    description: string | undefined,
    href:string
}

export function CardProjects ({id, img, span, title, description, href}:CrdProjectProps) {
    const {
        errorPageConstruction, setErroPageConstruction
      } = useContext(ContextApi);
      const [blank, setBlank] = useState<string>('_blank')

    function handlePageErroConstruction (id:string) {
        id === '05' && setBlank('');
        id === '05' && setErroPageConstruction(true);
    
        setTimeout(()=>{
          setBlank('_blank');
          setErroPageConstruction(false);
        }, 4000)
      };

      
    return(
        <>
            {errorPageConstruction && <PageUnderConstruction />}
            <Link 
                href={href} 
                target={blank}  
                onClick={()=>handlePageErroConstruction(id)}
                className={`
                    hover:scale-105 hover:transition-transform hover:duration-300
                `}
            >
                <div className={`
                    flex flex-col gap-4 w-72 h-[493px] border 
                    border-gray-400 shadow-2xl shadow-slate-600 p-4 
                    bg-black bg-opacity-80 rounded-xl
                `}>
                    <div className='w-full h-[235px] flex items-center justify-center'>
                        <Image src={img} alt='Project image' width={600} height={600} className='w-full h-full'/>
                    </div>
                    <div>
                        <span className='text-gray-400 font-medium'>{span}</span>
                        <h1 className='text-white text-xl font-bold'>{title}</h1>
                    </div>
                    <p className='text-sm font-thin h-56'>
                        {description}
                    </p>

                    <div className='w-full flex items-center justify-center'>
                        <Button title='Saiba mais ...' />
                    </div>
                </div>
            </Link>
        </>
    )
}