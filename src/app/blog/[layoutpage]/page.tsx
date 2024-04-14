'use client'
import { getLocalStorage } from "@/components/utils/localstorage";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState} from "react"


    // infoblog
    interface IBlogAPIProfile{
        id: string,
        title: string,
        subtitle: string,
        introduction: string,
        development: string,
        conclusion: string,
        createdAt: string,
        Image:[
            {
                id: string,
                name: string,
                url: string,
                blogId: string,
                createdAt: string,
            } 
        ]
    }



export default function LayoutBlog () {

    const [data, setData] = useState<IBlogAPIProfile>({} as IBlogAPIProfile);
    let imgBlog:string | StaticImport = getLocalStorage('image') as string | StaticImport;
    const idBlogStorage = getLocalStorage('id');
    const dateBlogPublic = getLocalStorage('date');


    useEffect(() => {
        fetch(`https://my-page-api-blog.onrender.com/blog/id?id=${idBlogStorage}`)
            .then((res) => res.json())
            .then((response) => {
                setData(response.data);
            });
    });


    return (
        <>
            <div className="w-full h-auto bg-black bg-opacity-85 text-white flex flex-col py-24 px-10 gap-8 items-center">
                <Link
                    href="/blog" 
                    className="cursor-pointer font-light italic hover:text-slate-100 hover:underline text-yellow-300"
                >Todos os posts</Link>
                <div className="w-[80%] h-auto flex flex-col gap-8 items-center">
                    <span>{dateBlogPublic}</span>
                    <h1 className="text-3xl">{data.title}</h1>
                    <p className="text-2xl">{data.subtitle}</p>
                    <Image className="w-[40rem]" width={640} height={100} src={imgBlog} alt="Imagem referente ao cnteúdo do blog" />
                    <p className="text-xl">{data.introduction}</p>

                    <h2 className="text-2xl">{data.subtitle}</h2>
                    <p className="text-xl leading-relaxed w-[80%]">{data.development}</p>
                    <h2 className="text-2xl">Considerações finais</h2>
                    <p className="text-xl">{data.conclusion}</p>
                </div>
            </div>
        </>
    )
}