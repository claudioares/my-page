import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function MyHeader() {

  return (
    <>
      <header className="w-full h-16 bg-zinc-950 flex items-center justify-between px-28 text-zinc-200 fixed z-20">
        <Image src={logo} alt="logo" className="w-32"/>

        <ul className="flex h-[100%] justify-between w-96 items-center text-green_clean text-sm">
          <li><Link href={''} className="text-pink-700 underline">Home</Link></li>
          <li><Link href={''} className="hover:text-pink-700 hover:underline">Projetos</Link></li>
          <li><Link href={''} className="hover:text-pink-700 hover:underline">Formação</Link></li>
          <li><Link href={''} className="hover:text-pink-700 hover:underline">Jogos</Link></li>
          <li><Link href={''} className="hover:text-pink-700 hover:underline">Blog</Link></li>
        </ul>

        <div className="w-auto flex gap-4">
          <Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <EnvelopeOpenIcon className="mr-2 h-3 w-3" /> Email
          </Button>
          <Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <GitHubLogoIcon className="mr-2 h-3 w-3" /> GitHub
          </Button>
          <Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <LinkedInLogoIcon className="mr-2 h-3 w-3" /> Linkedin
          </Button>
        </div>
      </header>
    </>
  )
}
