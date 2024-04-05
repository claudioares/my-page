import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';


export function Footer () {
    return(
        <>
            <div className='flex w-full h-44 bg-zinc-950 text-white justify-evenly items-center pl-44'>
                <Image className='w-44' src={logo} alt='Logotipo' />
                <div className=' flex flex-col items-center justify-center w-[50%] h-full'>
                    <div className='flex flex-col items-center justify-center h-auto w-full border-l-2 '>
                        <ul>
                            <li>
                                <Link href="mailto:claudiojasoares.dev@gmail.com" target='_blank'>claudiojasoares.dev@gmail.com</Link>
                            </li>
                            <li>
                                <Link href="mailto:jas.code@yahoo.com" target='_blank'>jas.code@yahoo.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}