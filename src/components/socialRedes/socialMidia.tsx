import Link from "next/link";
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"


export function SocialMidia () {
    return(
        <>
        <div className="w-auto flex gap-4">
          <Link href="mailto:uncs.claudio.aluno@gmail.com"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <EnvelopeOpenIcon className="mr-2 h-3 w-3" /> Email
          </Button></Link>
          <Link href="https://github.com/claudioares?tab=repositories" target="_blank"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <GitHubLogoIcon className="mr-2 h-3 w-3" /> GitHub
          </Button></Link>
          <Link href="https://www.linkedin.com/in/claudio-soares-dev/" target="_blank"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <LinkedInLogoIcon className="mr-2 h-3 w-3" /> Linkedin
          </Button></Link>
          {/* <Link href="https://wa.me/5598985704059" target="_blank"><Button className="w-24 h-6 bg-pink-900 flex items-center justify-center text-[0.5rem] rounded-[1rem] hover:bg-slate-900">
            <LinkedInLogoIcon className="mr-2 h-3 w-3" /> Whatsapp
          </Button></Link> */}
        </div>
        </>
    )
}