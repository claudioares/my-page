'use client'
import { ContextApi } from "@/components/contextApi/contextApi";
import Image from "next/image";
import Link from "next/link";
import {useContext} from "react"
export default function LayoutBlog () {

    const { contentInfoBlog } = useContext(ContextApi);

    return (
        <>
            <div className="w-full h-auto bg-black text-white flex flex-col py-24 px-10 gap-8">
                <Link href="/blog" className="cursor-pointer hover:text-slate-100 hover:underline">Todos os posts</Link>
                <div className="w-[70%] h-auto flex flex-col gap-8">
                    <span>{contentInfoBlog.data}</span>
                    <h1>{contentInfoBlog.title}</h1>
                    <p>{contentInfoBlog.summary}</p>
                    <Image className="w-[40rem]" src={contentInfoBlog.img} alt="Imagem referente ao cnteúdo do blog" />
                    <p>{contentInfoBlog.contentInit}</p>

                    <h2>{contentInfoBlog.subtitle}</h2>
                    <p>{contentInfoBlog.contentBlog}</p>
                    <h2>Considerações finais</h2>
                    <p>{contentInfoBlog.contentEnd}</p>
                </div>
            </div>
        </>
    )
}