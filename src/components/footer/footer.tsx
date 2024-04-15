import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';


export function Footer () {
    return(
        <>
            <div className={`
                relative flex w-full h-auto py-20 bg-zinc-950 text-white justify-center items-center
                max-lg:flex-col max-lg:h-full
            `}>
                <div className={`
                    bottom-16 left-0 flex items-center justify-center w-[50%] h-full
                    max-lg:absolute
                `}>
                    <Image className={`
                        w-36
                        lg:w-44
                    `} src={logo} alt='Logotipo' />
                </div>
                <div className=' flex flex-col items-center justify-center w-[50%] h-full'>
                    <div className='flex flex-col items-center justify-center h-auto w-full border-l-2 pl-2' id='div__links__footer'>
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