'use client'
import { getLocalStorage, removeLocalStorage } from "@/components/utils/localstorage";
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
    let imgBlog:string | undefined = getLocalStorage('image') as string | undefined;
    const idBlogStorage = getLocalStorage('id');
    const dateBlogPublic = getLocalStorage('date');


    useEffect(() => {
        fetch(`https://my-page-api-blog.onrender.com/blog/id?id=${idBlogStorage}`)
            .then((res) => res.json())
            .then((response) => {
                setData(response.data);
            });
    }, []);


    return (
        <>
            <div className="w-full h-auto bg-black bg-opacity-85 text-white flex flex-col py-24 px-10 gap-8 items-center">
                <Link
                    href="/blog" 
                    className="cursor-pointer font-light italic hover:text-slate-100 hover:underline"
                    onClick={()=>removeLocalStorage()}
                >Todos os posts</Link>
                <div className="w-full h-auto flex flex-col gap-8 items-center">
                    <span>{dateBlogPublic}</span>
                    <h1 className="text-3xl">{data.title}</h1>
                    <p>{data.subtitle}</p>
                    <img className="w-[40rem]" src={imgBlog} alt="Imagem referente ao cnteúdo do blog" />
                    <p>{data.introduction}</p>

                    <h2 className="text-2xl">{data.subtitle}</h2>
                    <p>{data.development}</p>
                    <h2 className="text-2xl">Considerações finais</h2>
                    <p>{data.conclusion}</p>
                </div>
            </div>
        </>
    )
}