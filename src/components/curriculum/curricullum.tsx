'use client'
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";
import { SectionFormation } from "./sections/Formations";
import { SectionProjects } from "./sections/projects";
import { SectionTecnology } from "./sections/tecs";
import listInfoProjects from "../utils/projects";


export function Curriculum () {
    const { setSelectIcon } = useContext(ContextApi);


    return(
        <>
            <div className="relative flex flex-col w-[70%] min-h-[100%] border gap-4 p-8 mt-20 pb-20 text-black bg-white overflow-y-scroll">
                <div className="flex gap-4 absolute">
                    <span onClick={()=>setSelectIcon('')} className="text-xl cursor-pointer">X</span>
                </div>
                <div className="w-full h-auto flex flex-col items-center">
                    <h1 className="text-3xl">Cláudio J. A Soares</h1>
                    <p className="text-lg">Desenvolvedor FullStack</p>
                    <h3>claudiojasoares.dev@gmailcom</h3>
                </div>

                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold">Objetivos:</h1>
                    <h3 className="text-justify">Trabalhar como programador backend, frontend ou fullstack de forma remota.</h3>
                </div>

                <SectionFormation />

                <h1 className="text-2xl font-semibold">Projetos:</h1>
                {listInfoProjects.map((info)=>(
                    <SectionProjects
                        key={info.id}
                        id={info.id}
                        name={info.name}
                        team={info.team}
                        description={info.description}
                        obs={info.obs}
                        conclusion={info.conclusion.conclusion}
                        experience={info.conclusion.experience}
                    />
                ))}

                <SectionTecnology />
            </div>
        </>
    )
}