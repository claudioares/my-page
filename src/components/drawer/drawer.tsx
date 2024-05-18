import {
    Drawer,
    DrawerContent,
    DrawerClose,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { TableRepositories } from "../tableRepositories/tableRepositories";
import { PaginationMode } from "../pagination/pagination";





export function DrawerComponent () {

    
    return(
        <>
            <Drawer>
                <div className="flex flex-col justify-center items-center w-full h-auto gap-2">
                    <DrawerTrigger className="bg-rose-950 w-full py-2 px-24 rounded-lg hover:bg-zinc-800">Projetos GitHub</DrawerTrigger>
                    <p className="text-lg text-center">Projetos para análise de código ou contribuições</p>
                </div>

                <DrawerContent className="bg-rose-950 flex justify-center items-center">
                    <TableRepositories />
                    <PaginationMode />
                </DrawerContent>
            </Drawer>
        </>
    )
}
  
  
