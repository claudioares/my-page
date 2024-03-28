'use client'
import { ContextApi } from "@/components/contextApi/contextApi";
import Image from "next/image";
import Link from "next/link";
import {useContext} from "react"
export default function LayoutBlog () {

    const { contentInfoBlog } = useContext(ContextApi);

    return (
        <>
            <div className="w-full h-auto bg-black bg-opacity-85 text-white flex flex-col py-24 px-10 gap-8 items-center">
                <Link href="/blog" className="cursor-pointer font-light italic hover:text-slate-100 hover:underline">Todos os posts</Link>
                <div className="w-full h-auto flex flex-col gap-8 items-center">
                    <span>{contentInfoBlog.data}</span>
                    <h1 className="text-3xl">{contentInfoBlog.title}</h1>
                    <p>{contentInfoBlog.summary}</p>
                    <Image className="w-[40rem]" src={contentInfoBlog.img} alt="Imagem referente ao cnteúdo do blog" />
                    <p>{contentInfoBlog.contentInit}</p>

                    <h2 className="text-2xl">{contentInfoBlog.subtitle}</h2>
                    <p>{contentInfoBlog.contentBlog}</p>
                    <h2 className="text-2xl">Considerações finais</h2>
                    <p>{contentInfoBlog.contentEnd}</p>
                </div>

                <div className="flex flex-col gap-4 w-full h-auto mt-28">
                    <form action="" className="flex flex-col gap-4 w-[65%]">
                        <h1>Qual seu nome?</h1>
                        <input type="text" className="w-[70%] h-8 text-black px-4" />

                        <p>Deixe seu comentário</p>
                        <textarea className="w-[70%] h-36 resize-none text-black text-start p-4"></textarea>
                    </form>
                    <div className="flex flex-col gap-4 w-[45%]">
                        <h1>Comentários:</h1>
                        <div>
                            <h2 className="text-base font-semibold">nome do usuario</h2>
                            <p>{contentInfoBlog.comments}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}