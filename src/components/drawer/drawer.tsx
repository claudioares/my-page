import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "../ui/button"


export function DrawerComponent () {
    return(
        <>
            <Drawer>
                <DrawerTrigger className="bg-rose-950 py-2 rounded-lg hover:bg-zinc-800">Projetos GitHub</DrawerTrigger>
                <DrawerContent className="bg-rose-950">
                    <DrawerHeader>
                        <DrawerTitle className="text-zinc-50 font-light">Isso abrirá uma página do github</DrawerTitle>
                        <DrawerDescription>

                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
  
  
