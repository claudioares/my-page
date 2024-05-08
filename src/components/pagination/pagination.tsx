import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import { useContext, useState } from "react";
import { ContextApi } from "../contextApi/contextApi";


  export function PaginationMode() {
    const {
        data, pageSize, 
        currentPage, setCurrentPage,
        startIndex, endIndex
} = useContext(ContextApi);
    

    function paginationPrevious () {
        if (currentPage > 1) {
            setCurrentPage((prevPage: number) => prevPage - 1);
          }
    }


    function paginationNext () {
        const totalPages = Math.ceil(data.length / pageSize);
        if (currentPage < totalPages) {
          setCurrentPage((prevPage: number) => prevPage + 1);
        }
    }


    return (
      <Pagination className="flex justify-start h-10 px-4 bg-zinc-900 bg-opacity-45 text-slate-50">
        <PaginationContent>
           
          <PaginationItem>
            {startIndex !== 0 ?
                <PaginationPrevious className="cursor-pointer" onClick={()=>paginationPrevious()} />
                :
                <PaginationPrevious className="cursor-none text-red-600 hover:bg-[all:unset] hover:text-red-600"/>
            }
          </PaginationItem>
          
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          
          <PaginationItem>
            {endIndex < data.length ? 
                <PaginationNext className="cursor-pointer" onClick={()=>paginationNext()} />
                :
                <PaginationNext className="cursor-none text-red-600 hover:bg-[all:unset] hover:text-red-600"/>
            }
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  