import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputsForms } from "../formContact/inputsforms"


type ButtonPropsPosition = {
    position: string
}
  

export function BtnContact({position}:ButtonPropsPosition) {
    return(
        <div className={`
            ${position} z-40
        `}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className={`
                        bg-rose-950 hover:bg-zinc-800 hover:text-slate-200 border-none px-8
                        lg:px-14
                    `}>Fale comigo</Button>
                </DialogTrigger>
                <DialogContent className="flex items-center justify-center flex-col w-full bg-rose-950 text-slate-50">
                    <DialogHeader className="flex flex-col mt-8 gap-1">
                        <DialogTitle>Deixe sua mensagem</DialogTitle>
                        <DialogDescription className="text-slate-200">
                            Você receberá uma confirmação de contato em seu email.
                            Verifique sua caixa de entrada ou sua caixa de span, marque
                            como email confiável
                        </DialogDescription>
                    </DialogHeader>
                    <InputsForms />
                </DialogContent>
            </Dialog>
        </div>
    )
}