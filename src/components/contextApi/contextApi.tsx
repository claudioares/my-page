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
    title: string,
    subtitle: string,
    introduction: string,
    development: string,
    conclusion: string,
    createdAt: string,
    Image:{
        id: string,
        name: string,
        url: string,
        blogId: string,
        createdAt: string
    } 
    }


    const [contentInfoBlog, setContentInfoBlog] = useState<IBlogAPIProfile>();

    // Message sending success status
    const [modalContactSucess, setModalContactSucess] = useState<Boolean>(false);
    const [modalContactError, setModalContactError] = useState<Boolean>(false);


    return(
        <ContextApi.Provider value={{
            selectIcon, setSelectIcon, handleHiperlinkTo,
            contentInfoBlog, setContentInfoBlog,
            modalContactSucess, setModalContactSucess,
            modalContactError, setModalContactError
        }}>
            {children}
        </ContextApi.Provider>
    )
}