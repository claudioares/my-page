"use client"
import { MyHeader } from "@/components/Header/header";
import { Container } from "@/components/container/container";
import { LoadingPage } from "@/components/loading/loading_page";
import Image from "next/image";
import gifLoading from "@/assets/gif/loading.gif";

export default function Blog () {
    return(
        <LoadingPage>
            <MyHeader />
            <Container>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <Image src={gifLoading} alt='gif animado' className='w-16 h-16'/>
                    <h1 className="font-normal text-2xl">Estamos trabalhando nesta página!</h1>
                </div>
            </Container>
        </LoadingPage>
    )
}