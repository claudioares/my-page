'use client'
import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation";
import { useState } from "react";


export function MobileVersion () {
    const pathname = usePathname();
    const [modalMenu, setModalMenu] = useState<boolean>(false);
    function handleModalMenu () {
        setModalMenu(true)
    }

    return(
        <>
            <header className={`
                w-full h-16 bg-zinc-950 text-white flex items-center justify-between px-16 z-20
                md:hidden
            `}>
                <button
                    className={`
                    text-white bg-pink-700 w-32 h-8 rounded-lg
                    lg:hidden
                    `}
                    onClick={()=>handleModalMenu()}
                >Menu</button>

                {/* modal de menu mobile */}
                {modalMenu && 
                <section className={`
                    fixed flex flex-col-reverse gap-8 items-center justify-center bg-zinc-950 bg-opacity-80 bottom-0 w-full h-screen right-0
                    transition-all duration-1000
                    md:hidden
                `}>

                    <div className="w-full h-auto py-8 px-8">
                        <Image src={logo} alt="logo" className="w-32"/>
                    </div>

                    <ul className="flex flex-col gap-8 items-center justify-center text-green_clean text-xl">
                        {pathname === '/' ? 
                        <li><Link  href='/' className="text-pink-700 underline">Home</Link></li>
                        :
                        <li><Link  href='/' className="hover:text-pink-700 hover:underline">Home</Link></li>
                        }
                        
                        {pathname === '/games' ? 
                        <li><Link href='/games' className="text-pink-700 underline">Jogos</Link></li>
                        :
                        <li><Link href='/games' className="hover:text-pink-700 hover:underline">Jogos</Link></li>
                        }

                        {pathname === '/blog' || pathname === `/blog/${pathname.split('/')[2]}`?
                        <li><Link href='/blog' className="text-pink-700 underline">Blog</Link></li>
                        :
                        <li><Link href='/blog' className="hover:text-pink-700 hover:underline">Blog</Link></li>
                        }
                    </ul>

                    <div className="w-auto flex flex-col gap-8">
                        <Link href="mailto:uncs.claudio.aluno@gmail.com">
                        <Button className="w-28 h-10 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem]">
                            <EnvelopeOpenIcon className="mr-2 h-5 w-5" /> Email
                        </Button>
                        </Link>
                        <Link href="https://github.com/claudioares?tab=repositories" target="_blank">
                        <Button className="w-28 h-10 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem]">
                            <GitHubLogoIcon className="mr-2 h-5 w-5" /> GitHub
                        </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/claudio-soares-dev/" target="_blank">
                        <Button className="w-28 h-10 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem]">
                            <LinkedInLogoIcon className="mr-2 h-5 w-5" /> Linkedin
                        </Button>
                        </Link>
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