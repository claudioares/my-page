'use client'
import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react";



export function MyHeader() {

  const [pathname, setPathname] = useState('home');
  

  return (
    <>
      <header className="w-full h-16 bg-zinc-950 flex items-center justify-between px-28 text-zinc-200 fixed z-20">
        <Image src={logo} alt="logo" className="w-32"/>

        <ul className="flex h-[100%] justify-between w-96 items-center text-green_clean text-sm">
          {pathname === 'home' ? 
            <li><Link onClick={()=>setPathname('home')} href='/' className="text-pink-700 underline">Home</Link></li>
            :
            <li><Link onClick={()=>setPathname('home')} href='/' className="hover:text-pink-700 hover:underline">Home</Link></li>
          }
          
          {pathname === 'games' ? 
            <li><Link onClick={()=>setPathname('games')} href='/games' className="text-pink-700 underline">Jogos</Link></li>
            :
            <li><Link onClick={()=>setPathname('games')} href='/games' className="hover:text-pink-700 hover:underline">Jogos</Link></li>
          }

          {pathname === 'blog' ? 
            <li><Link onClick={()=>setPathname('blog')} href='/blog' className="text-pink-700 underline">Blog</Link></li>
            :
            <li><Link onClick={()=>setPathname('blog')} href='/blog' className="hover:text-pink-700 hover:underline">Blog</Link></li>
          }

        </ul>

        <div className="w-auto flex gap-4">
          <Link href="mailto:claudiojasoares.dev@gmail.com"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <EnvelopeOpenIcon className="mr-2 h-3 w-3" /> Email
          </Button></Link>
          <Link href="https://github.com/claudioares?tab=repositories" target="_blank"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <GitHubLogoIcon className="mr-2 h-3 w-3" /> GitHub
          </Button></Link>
          <Link href="https://www.linkedin.com/in/claudio-soares-dev/" target="_blank"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <LinkedInLogoIcon className="mr-2 h-3 w-3" /> Linkedin
          </Button></Link>
        </div>
      </header>
    </>
  )
}
