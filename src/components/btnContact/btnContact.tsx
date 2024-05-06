import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputsForms } from "../formContact/inputsforms"
  

export function BtnContact() {
    return(
        <div className="fixed z-40">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="bg-rose-900 border-none px-10">Fale comigo</Button>
                </DialogTrigger>
                <DialogContent className="flex items-center justify-center flex-col w-full bg-rose-900 text-slate-200">
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