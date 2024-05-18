import { useFetch } from "@/app/services/useFetch";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { LoadingComponent } from "../loading/loading";
import { useContext } from "react";
import { ContextApi } from "../contextApi/contextApi";


type Repository = {
  name: string;
  html_url: string;
  updated_at: string;
  language: string;
  description: string;
  homepage: string;
  id: number
}


  export function TableRepositories() {
    const { data, paginatedData } = useContext(ContextApi);

    function handleLinkRepositorie (url:string){
      window.open(url, '_blank');
    }


    return (
      <div className="w-full h-auto px-4">
        <Table className="w-full h-full mt-8">
          <TableHeader>
            <TableRow className="bg-rose-900">
              <TableHead className="w-[100px] text-slate-50 py-4 font-semibold">Projeto</TableHead>
              <TableHead className="text-slate-50 py-4 font-semibold">Linguagem</TableHead>
              <TableHead className="text-slate-50 py-4 font-semibold">Ultima atualização</TableHead>
              <TableHead className="text-slate-50 text-right py-4 font-semibold">Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
            {data !== null ? paginatedData.map((repository:Repository) => (
                <TableRow 
                  key={repository.id} 
                  className="text-slate-50 cursor-pointer hover:text-black text-base w-full"
                  onClick={()=>handleLinkRepositorie(repository.html_url)}
                >
                
                  <TableCell className="py-3">{repository.name}</TableCell>
                  <TableCell>{repository.language}</TableCell>
                  <TableCell>{new Date(repository.updated_at).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell className="text-right">{String(repository.description) === "null" ? "N/A" : String(repository.description).split(' ').slice(0, 8).join(' ').concat('...')}</TableCell>
                
                </TableRow>
            ))
            :
              <LoadingComponent />
            }

          </TableBody>
        </Table>
      </div>
    )
  }
  