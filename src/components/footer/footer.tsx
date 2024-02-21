import Image from 'next/image';
import logo from '../../../public/logo.svg';

export function Footer () {
    return(
        <>
            <div className='flex w-full h-56 bg-zinc-950 text-white justify-evenly items-center pl-44'>
                <Image className='w-44' src={logo} alt='Logotipo' />
                <div className=' flex flex-col items-center justify-center w-[50%] h-full'>
                    <div className='flex flex-col items-center justify-center h-auto w-full border-l-2 '>
                        <ul>
                            <li>
                                <a href="">claudiojasoares.dev@gmail.com</a>
                            </li>
                            <li>
                                <a href="">jas.code@yahoo.com</a>
                            </li>
                            <li>
                                <a href="">jascode.facebook.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}