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
    const { data } = useFetch<Repository[]>('https://api.github.com/users/claudioares/repos');

    function handleLinkRepositorie (url:string){
      window.open(url, '_blank');
    }
      
    return (
      <Table className="w-full h-full">
        <TableCaption>Lista de repositórios</TableCaption>
        <TableHeader>
          <TableRow className="bg-rose-900">
            <TableHead className="w-[100px] text-slate-50 py-4 font-semibold">Projeto</TableHead>
            <TableHead className="text-slate-50 py-4 font-semibold">Linguagem</TableHead>
            <TableHead className="text-slate-50 py-4 font-semibold">Ultimo Update</TableHead>
            <TableHead className="text-slate-50 text-right py-4 font-semibold">Descrição</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {data !== null ? data.map((repository) => (
              <TableRow 
                key={repository.id} 
                className="text-slate-50 cursor-pointer hover:text-black text-base w-full"
                onClick={()=>handleLinkRepositorie(repository.html_url)}
              >
              
                <TableCell className="py-3">{repository.name}</TableCell>
                <TableCell>{repository.language}</TableCell>
                <TableCell>{repository.updated_at}</TableCell>
                <TableCell className="text-right">{String(repository.description) === "null" ? "N/A" : String(repository.description).split(' ').slice(0, 8).join(' ').concat('...')}</TableCell>
               
              </TableRow>
          ))
          :
            <LoadingComponent />
          }

        </TableBody>
      </Table>
    )
  }
  