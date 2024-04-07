"use client"
import { StaticImageData } from "next/image";
import { ReactNode, createContext, useState } from "react";


export type ContextProps = {
    [x: string]: any
} 

export const ContextApi = createContext<ContextProps>({} as ContextProps);


export default function ContextProvider ({children}: {children: ReactNode}) {
    const [selectIcon, setSelectIcon] = useState<any>('') as any

    interface IhyperlinkPropsType {
        inputClass: string;
    }
    function handleHiperlinkTo (inputClass: IhyperlinkPropsType) {
    const elementSelect = document.getElementById(inputClass.toString());
        elementSelect?.scrollIntoView({ behavior: 'smooth' });
    }

    // infoblog
    interface IBlogAPIProfile {
        id: string,
        data: string,
        title: string,
        summary: string,
        contentInit: string,
        contentBlog: string,
        contentEnd: string,
        visualizations: string,
        comments: string,
        commentsqnt: string,
        liks: string,
        img: string | StaticImageData
    }

    const [contentInfoBlog, setContentInfoBlog] = useState<IBlogAPIProfile>();

    // Message sending success status
    const [modalContactSucess, setModalContactSucess] = useState<Boolean>(false);


    return(
        <ContextApi.Provider value={{
            selectIcon, setSelectIcon, handleHiperlinkTo,
            contentInfoBlog, setContentInfoBlog,
            modalContactSucess, setModalContactSucess
        }}>
            {children}
        </ContextApi.Provider>
    )
}