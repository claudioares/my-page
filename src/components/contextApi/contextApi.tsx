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


    // Message sending success status
    const [modalContactSucess, setModalContactSucess] = useState<Boolean>(false);
    const [modalContactError, setModalContactError] = useState<Boolean>(false);


    return(
        <ContextApi.Provider value={{
            selectIcon, setSelectIcon, handleHiperlinkTo,
            modalContactSucess, setModalContactSucess,
            modalContactError, setModalContactError
        }}>
            {children}
        </ContextApi.Provider>
    )
}