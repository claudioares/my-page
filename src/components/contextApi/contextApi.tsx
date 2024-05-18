"use client"
import { useFetch } from "@/app/services/useFetch";
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

    // modal erro under contruction
    const [errorPageConstruction, setErroPageConstruction]  = useState<boolean>(false);

    // Para paginação
    type Repository = {
        name: string;
        html_url: string;
        updated_at: string;
        language: string;
        description: string;
        homepage: string;
        id: number
    }
    const { data } = useFetch<Repository[]>('https://api.github.com/users/claudioares/repos');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 6;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedData = data?.slice(startIndex, endIndex) as Repository[];

    return(
        <ContextApi.Provider value={{
            selectIcon, setSelectIcon, handleHiperlinkTo,
            modalContactSucess, setModalContactSucess,
            modalContactError, setModalContactError,
            errorPageConstruction, setErroPageConstruction,
            currentPage, setCurrentPage, pageSize, startIndex,
            endIndex, data, paginatedData
        }}>
            {children}
        </ContextApi.Provider>
    )
}