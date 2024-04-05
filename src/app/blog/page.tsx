'use client'
import Image from "next/image";
import { Heart } from 'lucide-react';
import Link from "next/link";
import APIblog from "../../components/utils/infoBlogAPI";
import { useContext, useEffect, useState } from "react";
import { ContextApi } from "@/components/contextApi/contextApi";
import { usePathname } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IDataType {
    conclusion: string,
    createdAt: string,
    development: string,
    id: string,
    imgLink: string, 
    introduction: string, 
    subtitle: string, 
    summary: string,
    title: string 
};


export default function Blog () {

    const pathname = usePathname();

    const { setContentInfoBlog } = useContext(ContextApi);
    const [data, setData] = useState<IDataType[]>();
    let imgLink: string | StaticImport;

    useEffect(()=>{
        fetch('http://localhost:3333/apidatablog')
            .then((res)=>res.json())
            .then((data)=>{
                setData(data);
                imgLink = data.imgLink
            })
    }, []);

    if (!data) return <p>No profile data</p>


    return(
        <>
            <div className="relative flex flex-col items-center justify-center w-full h-auto pt-24 pb-16 gap-4 text-white bg-black">
                {data.map((inf,index)=>(
                    <div key={index} className="flex w-[75%] h-80 border bg-black opacity-85 hover:bg-none hover:opacity-100">
                        <div className="w-[40%] h-full">
                            <Image className="w-full h-full" src={imgLink} alt="imagem do blog" />
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