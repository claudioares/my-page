'use client'
import { Heart } from 'lucide-react';
import Link from "next/link";
import { ContextApi } from "@/components/contextApi/contextApi";

import { Key, useContext, useEffect, useState } from "react";



export default function Blog() {


    const { setContentInfoBlog } = useContext(ContextApi);
    const [data, setDsata] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3333/blog')
            .then((res) => res.json())
            .then((response) => {
                setDsata(response.data);
            });
    }, []);


    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-full h-auto pt-24 pb-16 gap-4 text-white bg-black">
                {data.map((inf:any)=>(
                    <div key={inf.id} className="flex w-[75%] h-80 border bg-black opacity-85 hover:bg-none hover:opacity-100">
                        <div className="w-[40%] h-full">
                            <img className="w-full h-full" src={inf.Image[0].url} alt="imagem do blog" />
                        </div>
                        <div className="bg-white text-black hover:text-cyan-700 flex flex-col justify-evenly w-[60%] h-full p-14 gap-4">
                            <span>{inf.createdAt}</span>
                            <Link 
                                href={`blog/${inf.title}`}
                                className={`
                                    text-xl cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4
                                    hover:text-slate-100 hover:underline`
                                }
                                onClick={()=>setContentInfoBlog(inf)}
                                >{inf.title}</Link>
                            <p className="w-full max-h-20 truncate">{inf.subtitle}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <span>0 vizualizações</span>
                                    <span>0 comentários</span>
                                </div>
                                <div className="flex gap-1">
                                    0
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