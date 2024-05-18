import Image from 'next/image';
import gifLoading from "../../assets/gif/loading.gif";

export function LoadingComponent () {
   return(
    <>
        <div className='flex flex-col-reverse items-center justify-center w-full h-auto gap-1 px-4 py-8'>
            <p className='text-white animate-pulse duration-700 text-center'>Aguardadando resposta do servidor...</p>
            <Image src={gifLoading} alt='gif animado' className='w-20 h-20'/>
        </div>
    </>
   )
}