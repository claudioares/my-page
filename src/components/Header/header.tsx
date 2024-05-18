'use client'
import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { MobileVersion } from "./mobile";



export function MyHeader() {

  const pathname = usePathname();

  return (
    <>
      <header id="header" className={
        `
          hidden w-full h-20 bg-zinc-950 bg-opacity-40 items-center justify-between px-28 text-zinc-200 fixed z-20 top-0
          lg:flex
        `
      }>
        <Image src={logo} alt="logo" className="w-44"/>

        <ul className="flex h-[100%] justify-around w-96 items-center text-green_clean text-lg">
          {pathname === '/' ? 
            <li><Link  href='/' className="text-rose-500">Home</Link></li>
            :
            <li><Link  href='/' className="hover:text-zinc-400 hover:underline">Home</Link></li>
          }
          
          {pathname === '/games' ? 
            <li><Link href='/games' className="text-rose-500">Jogos</Link></li>
            :
            <li><Link href='/games' className="hover:text-zinc-400 hover:underline">Jogos</Link></li>
          }

          {/* {pathname === '/blog' || pathname === `/blog/${pathname.split('/')[2]}`?
            <li><Link href='/blog' className="text-pink-700 underline">Blog</Link></li>
            :
            <li><Link href='/blog' className="hover:text-pink-700 hover:underline">Blog</Link></li>
          } */}

        </ul>

      </header>

      <MobileVersion />
    </>
  )
}
