import  { FastifyInstance } from "fastify"
import nodemailer from "nodemailer";
import { html_email } from "../htmlTemplateEmail/email_html_tenplate";


interface IMenssengeEmailType {
    name: string,
    email: string
}

export async function SendEmail (app: FastifyInstance) {

    app.post("/sendmail", async (request, reply)=>{

        try {
            const {name, email}:IMenssengeEmailType = request.body as IMenssengeEmailType;

            const transport = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port:  587,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                }
            });

            const sendRuning = await transport.sendMail({
                from: process.env.MAIL_FROM,
                to:email,
                subject: `Email resposta de Claudio Soares`,
                html:html_email(name)
            });

            console.log(sendRuning)
            return "Email successfully sent!"
     
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    })
}