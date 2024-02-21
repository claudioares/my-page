'use client'
import { ReactNode, createContext, useState } from "react";


export type ContextProps = {
    [x: string]: any
} 

export const ContextApi = createContext<ContextProps>({} as ContextProps);



export default function ContextProvider ({children}: {children: ReactNode}) {
    const [selectIcon, setSelectIcon] = useState<any>('') as any

    return(
        <ContextApi.Provider value={{
            selectIcon, setSelectIcon
        }}>
            {children}
        </ContextApi.Provider>
    )
}