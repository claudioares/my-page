import Image from "next/image";
import { Heart } from 'lucide-react';
import imgBlog1 from '../../../public/pro1.webp'

export default function Blog () {
    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-auto pt-24 pb-16 gap-4 text-white bg-black">
                {Array.from({length: 10}).map((_,index)=>(
                    <div key={index} className="flex w-[75%] h-80 border bg-black opacity-85 hover:bg-none hover:opacity-100">
                        <div className="w-[40%] h-full">
                            <Image className="w-full h-full" src={imgBlog1} alt="imagem do blog" />
                        </div>
                        <div className="bg-white text-black hover:text-cyan-700 flex flex-col w-[60%] h-full p-14 gap-4">
                            <span>4 de dez de 2024</span>
                            <h1 className="text-xl cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white hover:underline">Titulo do Blog</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nemo exercitationem incidunt laboriosam facere, recusandae qui ullam magnam sed 
                                consequuntur ipsam. Facilis earum eligendi dolor? Voluptate a facilis quasi accusamus nobis.
                            </p>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <span>0 vizualizações </span>
                                    <span>0 comentários</span>
                                </div>
                                <Heart color="red" className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}