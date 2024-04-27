export function html_email (name:string) {
    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
    
        <header class="header_emaiil">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOGpwj2yqACAcR4o_CiZQINrfL5QznnrpxuHFasWnyxD1z2R2IV242IRr1APuF6QaW2bQHpTr7N74jQIzBSr9MPinxA7RVJhOr-xHICvkLMjfferuTejvj5ByiqxFI_Llo6EY55ux_wBSUNlrVNtfg=w222-h44-s-no-gm?authuser=2" alt="logo da empresa">
        </header>
        <h1>Obrigado pelo seu contato</h1>
        <p>
            Olá, ${name}, aquí é o Cláudio. Este é um email, gerado automaticamente, em resposta
            ao seu contato em minha página Cláudio Soares FullStack.
        </p>
        <p>
            Estou analizando sua menssagem e entrarei em contato, em até 
            48 horas, no email que você deixou para contato no formulário do site.
        </p>
        <p>
            Espero que possamos fazer uma boa parceria. &#128077;
        </p>
    
        <img class="img_ilustrator" src="https://lh3.googleusercontent.com/pw/AP1GczMeG_w4HiEcjW8T2cLmXYxmjNeNN-YdvFLe1IEHekHpilwuP23EJrKkzoS4ROOz4kqQoNK5DItMqZ-DISujxkDcuDOWausA6sYqP7wENp4j6GA8CiS6mUE_4kdfdTqIWHQtkG-pTLfbaj7UupcQfZ4=w456-h607-s-no-gm?authuser=2" alt="imagem ilustrativa">
    
        <div class="footer">
            <p>
                Atenciosamente:
            </p>
            <p>
                Cláudio J. A. Soares
            </p>
        </div>
        
    
    
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                text-align: center;
            }
            body{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 2rem;
    
                padding: 1rem;
            }
            .header_emaiil{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgb(21, 20, 31);
                width: 100%;
                height: 10rem;
            }
            h1{
                font-size:2rem;
            }
            .img_ilustrator{
                width: 18rem;
            }
            .footer{
                display: flex;
                gap:0.3rem;
            }
            .footer :first-child{
                font-weight: bold;
            }
            .footer :last-child{
                font-style: oblique;
            }
        </style>
    </body>
    </html>`
}

