"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useContext, useState } from "react";
import { ContextApi } from "../contextApi/contextApi";


// handle zod
const inputFormSchema = z.object({
  input_name: z.string().min(4),
  input_email: z.string(),
  input_messege: z.string()
});

type InputFormTypesSchema = z.infer<typeof inputFormSchema>

// -----------------------------

export function InputsForms () {

  const { register, handleSubmit } = useForm<InputFormTypesSchema>({
    resolver: zodResolver(inputFormSchema)
  });


  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messege, setMessege] = useState<string>("");
  const {setModalContactSucess} = useContext(ContextApi);
  async function handleInputsForm (data:InputFormTypesSchema) {

    const response = await fetch('http://localhost:3333/messegeclient', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    });

    if(response.status === 201) {
      setModalContactSucess(true);
      setTimeout(()=>{
        setModalContactSucess(false);
      }, 2000)
      setName("");
      setEmail("");
      setMessege("");
    } else {
      console.log("erro ao enviar email")
    }
  };


  return(
    <>
       <form onSubmit={handleSubmit(handleInputsForm)} className="w-[70%] h-auto flex flex-col gap-4 px-6 py-9">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome</label>
              <input 
                  className="h-11 rounded-xl pl-4 text-black" 
                  type="text" 
                  id="name" 
                  value={name}
                  placeholder="Digite seu nome completo"
                  {...register('input_name')}
                  onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Seu email</label>
              <input 
                className="h-11 rounded-xl pl-4 text-black" 
                type="text" 
                id="email"
                value={email}
                placeholder="Digite seu email para contato"
                {...register('input_email')}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="msgm">Mesagem</label>
              <textarea 
                className="h-40 rounded-xl p-4 text-black" 
                id="msgm" 
                value={messege}
                placeholder="Digite sua menssagrem aquí"
                {...register('input_messege')}
                onChange={(e)=>setMessege(e.target.value)}
              />
            </div>
            <div className="flex w-full items-center justify-center">
              <button className="bg-green-700 w-36 h-12 rounded-xl">Enviar</button>
            </div>
        </form>
    </>
  )
}

