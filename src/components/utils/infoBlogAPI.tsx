import { StaticImageData } from "next/image";
import blogimg1 from "../../../public/imagensBlog/blogimg1.jpg";
import blogimg2 from "../../../public/imagensBlog/blogimg2.png";

interface IBlogAPIProfile {
    id: string,
    data: string,
    title: string,
    summary: string,
    contentInit: string,
    subtitle: string,
    contentBlog: string,
    contentEnd: string,
    visualizations: string,
    comments: string,
    commentsqnt: string,
    liks: string,
    img: string | StaticImageData
}

const APIblog:IBlogAPIProfile[] = [
    {
        id: '01',
        data: '27 de janeiro, 2024',
        title: 'Aqui vai minha primeira materia do blog',
        summary: `
            Estou apresentando algo da minha primeira materia do blog.
            Criando uma introdução a matéria ou artigo.
        `,
        contentInit: `
            Bem-vindo ao post no seu blog. Use este espaço para 
            conectar-se com seus leitores e com seus clientes 
            potenciais de uma forma atualizada e interessante. 
            Pense nisso como uma conversa na qual você pode compartilhar 
            atualizações sobre o negócio, tendências, notícias e muito mais.
        `,
        subtitle: "Subtitulo do blog",
        contentBlog: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur,
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel.
        `,
        contentEnd: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 4
            Dolor suscipit possimus sed quo laborum blanditiis tenetur,
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel.
        `,
        visualizations: '0',
        comments: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nihil, minus impedit. Accusantium velit aliquid,
            sit beatae repellat error nobis asperiores, dicta, 
            facere sed sapiente? 4
        `,
        commentsqnt: "0",
        liks: '2',
        img: blogimg1

    },
    {
        id: '01',
        data: '27 de janeiro, 2024',
        title: 'Meu segundo blog: Conhecendo algo',
        summary: `
            Aquí estou falando do meu segundo blog. Apresentar uma sintesse do assunto.
        `,
        contentInit: `
            Bem-vindo ao post no seu blog. Use este espaço para 
            conectar-se com seus leitores e com seus clientes 
            potenciais de uma forma atualizada e interessante. 
            Pense nisso como uma conversa na qual você pode compartilhar 
            atualizações sobre o negócio, tendências, notícias e muito mais.
        `,
        subtitle: "Subtitulo do blog",
        contentBlog: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur,
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel.
        `,
        contentEnd: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 4
            Dolor suscipit possimus sed quo laborum blanditiis tenetur,
            excepturi repellendus voluptate obcaecati quas quasi expedita, 
            odit doloribus, incidunt perferendis odio nesciunt vel. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Dolor suscipit possimus sed quo laborum blanditiis tenetur, 
             excepturi repellendus voluptate obcaecati quas quasi expedita, 
             odit doloribus, incidunt perferendis odio nesciunt vel.
        `,
        visualizations: '0',
        comments: '',
        commentsqnt: "0",
        liks: '7',
        img: blogimg2
    }
];

export default APIblog;