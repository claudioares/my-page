'use client'
import Button from "@mui/material/Button/Button";
import { ArrowRightIcon } from "lucide-react";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";

export function BtnHyperLink () {
  const { handleHiperlinkTo } = useContext(ContextApi);

    return(
        <>
            <Button className={`
                w-32 h-10 bg-green-900 flex gap-1 animate-btnAnimation 
                items-center justify-center text-[0.7rem] rounded-[0.8rem] hover:bg-slate-900
              `}
                onClick={()=>handleHiperlinkTo('projects')}
              >
                <ArrowRightIcon className="w-5 h-5 animate-pulse" />
                Projetos
              </Button>
        </>
    )
}