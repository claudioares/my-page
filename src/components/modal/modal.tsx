'use client'
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";

export function Modal (){
    const { selectIcon, setSelectIcon } = useContext(ContextApi)
    return(
        <>
            {selectIcon === 'Curriculum' && 
            <div className="text-white flex flex-col gap-4 items-center justify-center w-full h-screen fixed top-0 p-8 opacity-90 bg-black z-50 overflow-scroll">
                <div className="relative flex flex-col w-[40%] h-[135rem] border gap-4 p-8 mt-20 text-black bg-white divide-opacity-100">
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

                    <div>
                        <h1 className="text-2xl font-semibold">Formação:</h1>
                        <div className="flex flex-col gap-4">
                            <h1>
                                <p className="text-base font-semibold">Graduando – Inteligência artificial - Bacharelado Período:</p> 1
                                BEQUIMÃO - CENTRO - MA/UNICID – Cruzeiro do sul virtual
                            </h1>
                            <h1>
                                <p className="text-base font-semibold">Desenvolvimento de Software:</p>
                                    Cubos Academy / Fevereiro de 2022 / Outubro de 2022.
                                <p className="font-semibold">O que foi estudado:</p>
                                <p className="italic">
                                    JavaScript, noções de TypeScript, css, html, React, Axios, React-router-dom,
                                    Node.js, Express.js, inteligência comportamental, noções de negociação,
                                    conhecimentos e prática em clean code, metodologias ágeis, trabalho em
                                    equipe, PostgreSQL, git e github.
                                </p>
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">Tecnologias que já tive contato:</h1>
                        <p>
                            CorelDraw | Gimp | Figma | Linux | Html5 | Css | Sass | Style-components|
                            Tailwind | JavaScript | TypeScript | React JS | Next.JS | Nodejs | PostgreSQL | MongoDB |
                            Python | GIT | Cypress | Figma | Prisma | Express | Fastify
                        </p>
                    </div>
                </div>
                <Image src={''} alt="" />
            </div>}
        </>
    )
}