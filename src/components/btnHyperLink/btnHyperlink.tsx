'use client'
import Button from "@mui/material/Button/Button";
import { ArrowRightIcon } from "lucide-react";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";

type BtnParamsType = {
  btnTo: string,
  href: string
}

export function BtnHyperLink ({btnTo, href}:BtnParamsType) {
  const { handleHiperlinkTo } = useContext(ContextApi);

  return(
      <>
          <Button className={`
              w-auto h-10 bg-green-900 flex gap-1 animate-btnAnimation 
              items-center justify-center text-[0.7rem] rounded-[0.8rem] hover:bg-slate-900
            `}
              onClick={()=>handleHiperlinkTo(`${btnTo}`)}
              href={`${href}`}
            >
              <ArrowRightIcon className="w-5 h-5 animate-pulse" />
              {btnTo}
            </Button>
      </>
  )
}