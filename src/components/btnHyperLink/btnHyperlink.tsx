'use client'
import { ArrowRightIcon } from "lucide-react";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";
import { Button } from "@/components/ui/button"


type BtnParamsType = {
  btnTo: string,
  href: string
}

export function BtnHyperLink ({btnTo, href}:BtnParamsType) {
  const { handleHiperlinkTo } = useContext(ContextApi);

  return(
      <>
          <Button 
            className={`
              bg-[all:unset]
              flex w-auto h-auto  px-8 py-2 gap-1 animate-btnAnimation
              items-center justify-center text-[0.8rem] text-rose-900 rounded-[0.8rem] hover:bg-[all:unset] hover:text-slate-200
              
              lg:px-10  lg:text-[1.2rem]
            `}
              onClick={()=>handleHiperlinkTo(`${btnTo}`)}
            >
              <ArrowRightIcon className="w-7 h-7 animate-pulse" />
              {btnTo}
            </Button>
      </>
  )
}