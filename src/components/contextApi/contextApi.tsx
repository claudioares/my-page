"use client"
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

    return(
        <ContextApi.Provider value={{
            selectIcon, setSelectIcon, handleHiperlinkTo
        }}>
            {children}
        </ContextApi.Provider>
    )
}