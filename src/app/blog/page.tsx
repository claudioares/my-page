'use client'
import Image from "next/image";
import { Heart } from 'lucide-react';
import Link from "next/link";
import APIblog from "@/components/utils/infoBlogAPI";
import { useContext } from "react";
import { ContextApi } from "@/components/contextApi/contextApi";


export default function Blog () {

    const { setContentInfoBlog } = useContext(ContextApi)

    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-auto pt-24 pb-16 gap-4 text-white bg-black">
                {APIblog.map((inf,index)=>(
                    <div key={index} className="flex w-[75%] h-80 border bg-black opacity-85 hover:bg-none hover:opacity-100">
                        <div className="w-[40%] h-full">
                            <Image className="w-full h-full" src={inf.img} alt="imagem do blog" />
                        </div>
                        <div className="bg-white text-black hover:text-cyan-700 flex flex-col justify-evenly w-[60%] h-full p-14 gap-4">
                            <span>{inf.data}</span>
                            <Link 
                                href={`blog/qualquercoisa`} 
                                className={`
                                    text-xl cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4
                                    hover:text-slate-100 hover:underline`
                                }
                                onClick={()=>setContentInfoBlog(inf)}
                                >{inf.title}</Link>
                            <p className="w-full max-h-20 truncate">{inf.contentInit}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <span>{inf.visualizations} vizualizações</span>
                                    <span>{inf.commentsqnt} comentários</span>
                                </div>
                                <div className="flex gap-1">
                                    {inf.liks}
                                    <Heart color="red" className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}