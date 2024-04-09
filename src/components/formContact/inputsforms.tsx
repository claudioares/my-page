"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useContext, useState } from "react";
import { ContextApi } from "../contextApi/contextApi";


// handle zod
const inputFormSchema = z.object({
  input_name: z.string(),
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
  const [nameErro, setNameErro] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailErro, setEmailErro] = useState<boolean>(false);
  const [messege, setMessege] = useState<string>("");
  const [messegeErro, setMessegeErro] = useState<boolean>(false);
  const {setModalContactSucess, setModalContactError} = useContext(ContextApi);
  
  
  async function handleInputsForm (data:InputFormTypesSchema) {

    if(name === "") {setNameErro(true); setTimeout(()=>{setNameErro(false)}, 2000); return};
    if(email === "") {setEmailErro(true); setTimeout(()=>{setEmailErro(false)}, 2000); return};
    if(messege === "") {setMessegeErro(true); setTimeout(()=>{setMessegeErro(false)}, 2000); return};

    const API_MESSEGE_URL:string = "https://my-page-api-contacts.onrender.com/messegeclient" as string;

    try {
      const response = await fetch(API_MESSEGE_URL, {
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
      }
    } catch (error) {
      console.log("Error during transaction. ", error)
      setModalContactError(true);
      setTimeout(()=>{
        setModalContactError(false);
      }, 3000);
      setName("");
      setEmail("");
      setMessege("");
      return
    }
  };


  return(
    <>
       <form onSubmit={handleSubmit(handleInputsForm)} className="w-[70%] h-auto flex flex-col gap-4 px-6 py-9">
            <div className="flex flex-col gap-2">
              <div className="flex gap-44">
                <label htmlFor="name">Seu nome</label>
                {nameErro && <p className="text-red-500">Por favor, digite um nome para contato.</p>}
              </div>
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
              <div className="flex gap-44">
                <label htmlFor="name">Seu Email</label>
                {emailErro && <p className="text-red-500">Por favor, digite um email válido.</p>}
              </div>
              <input 
                className="h-11 rounded-xl pl-4 text-black" 
                type="email" 
                id="email"
                value={email}
                placeholder="Digite seu email para contato"
                {...register('input_email')}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-40">
                <label htmlFor="name">Mensagem</label>
                {messegeErro && <p className="text-red-500">Por favor, digite o motivo do contato.</p>}
              </div>
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
              <button className={`
                bg-green-700 w-36 h-12 rounded-xl
                hover:bg-green-600
              `}>Enviar</button>
            </div>
        </form>
    </>
  )
}

