'use client'
import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BtnContact } from "../btnContact/btnContact";


export function MobileVersion () {
    const pathname = usePathname();
    const [modalMenu, setModalMenu] = useState<boolean>(false);
    function handleModalMenu () {
        setModalMenu(true)
    }

    return(
        <>
            <header className={`
                w-full h-16 bg-zinc-950 text-white flex items-center justify-between px-16 fixed z-50 top-0
                lg:hidden
            `}>
                <button
                    className={`
                    text-white bg-rose-950 w-32 h-8 rounded-lg
                    lg:hidden
                    `}
                    onClick={()=>handleModalMenu()}
                >Menu</button>

                <div className={`
                    hidden
                    sm:w-auto sm:h-auto sm:block
                `}>
                    <BtnContact position="relative" />
                </div>

                {/* modal de menu mobile */}
                {modalMenu && 
                <section className={`
                    fixed flex flex-col-reverse px-8 gap-8 items-center justify-center bg-zinc-950 bg-opacity-95 bottom-0 w-full h-screen right-0 z-20
                    transition-all duration-1000
                    lg:hidden
                `}>

                    <div className="w-full h-auto flex items-center justify-between">
                        <Image src={logo} alt="logo" className="w-32"/>
                        <div className="block sm:hidden">
                            <BtnContact position="relative" />
                        </div>
                    </div>


                    <ul className="flex flex-col gap-8 items-center justify-center text-green_clean text-xl">
                        {pathname === '/' ? 
                        <li><Link  href='/' className="text-rose-950 underline">Home</Link></li>
                        :
                        <li><Link  href='/' className="hover:text-rose-900 hover:underline">Home</Link></li>
                        }
                        
                        {pathname === '/games' ? 
                        <li><Link href='/games' className="text-rose-950 underline">Jogos</Link></li>
                        :
                        <li><Link href='/games' className="hover:text-rose-900 hover:underline">Jogos</Link></li>
                        }

                        {/* {pathname === '/blog' || pathname === `/blog/${pathname.split('/')[2]}`?
                        <li><Link href='/blog' className="text-pink-700 underline">Blog</Link></li>
                        :
                        <li><Link href='/blog' className="hover:text-pink-700 hover:underline">Blog</Link></li>
                        } */}
                    </ul>

                    <div className="w-auto flex flex-col gap-8">
                        <Link href="mailto:uncs.claudio.aluno@gmail.com">
                            <Button className="w-28 h-10 bg-rose-950 flex items-center justify-center text-[0.5rem] rounded-[1rem]">
                                <EnvelopeOpenIcon className="mr-2 h-5 w-5" /> Email
                            </Button>
                        </Link>
                        <Link href="https://github.com/claudioares?tab=repositories" target="_blank">
                            <Button className="w-28 h-10 bg-rose-950 flex items-center justify-center text-[0.5rem] rounded-[1rem]">
                                <GitHubLogoIcon className="mr-2 h-5 w-5" /> GitHub
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/claudio-soares-dev/" target="_blank">
                            <Button className="w-28 h-10 bg-rose-950 flex items-center justify-center text-[0.5rem] rounded-[1rem]">
                                <LinkedInLogoIcon className="mr-2 h-5 w-5" /> Linkedin
                            </Button>
                        </Link>
                        {/* <Link href="https://wa.me/5598985704059" target="_blank">
                            <Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
                                <LinkedInLogoIcon className="mr-2 h-3 w-3" /> Whatsapp
                             </Button>
                        </Link> */}
                    </div>
                    <Button
                        onClick={()=>setModalMenu(false)}
                        className="w-28 h-auto bg-green-600"
                    >Fechar</Button>
                </section>}
            </header>
        </>
    )
}