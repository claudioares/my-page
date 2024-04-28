interface IListInfoProjectsType {
    id: string,
    name: string,
    team: string,
    description: string,
    obs: string,
    conclusion: {
        conclusion: string,
        experience: string
    }
}

const listInfoProjects : IListInfoProjectsType[] = [

    {
        id: '01',
        name: 'Aplicação de cobranças',
        team: `
        5 desenvolvolvedores, 
        2 front-end 3 back-end; 
        Utilizamos metodologia 
        Scrum passando por 3 sprintes.
        `,
        description: `
        Aplicativo de cobranças de cinco telas com funcionalidades de login, 
        cadastro, editar, excluir, pesquisar clientes.
        Usamos react/javascript para desenvolvimento frontend, 
        axios para consumo da api projetada pela equipe de backend e 
        react-router-dom para manipulação de rotas. Foi estilizada 
        com folhas de estilo css e MUI – Material Ui.        
        `,
        obs: `
        Problemas que enfrentei foi nas features de paginações
        e navbar lateral. Solucionei optando por criar os componentes 
        sem frameworks onde criei todos os componentes do zero.
        `,
        conclusion: {
            conclusion: `
            O projeto foi entregue, com sucesso, com as especificações pedidas e no prazo.
            `,
            experience: `
            Principal conhecimento adquirido: Desenvolvimento Web como frint-end.
            `
        }
    },
    {
        id: '02',
        name: 'Aplicação de manipulação de clientes',
        team: `
        Projeto pessoal que desenvolvi para estudo de caso de algumas tecnologias
        .
        `,
        description: `
        Aplicação fullstack para manipulação de clientes de uma empresa fictícia 
        com cinco telas: Login, cadastro, editar, excluir, pesquisar clientes. 
        Tabelas com informações sobre clientes, autentificações, filtros de pesquisas
        e paginações.

        O backend desenvolvido com typescript, nodejs, express, prisma, mongodb, jwt,
        utilizando padrões de S.O.L.I.D.'
        Para o front-end usei React/Vite, axios, react-router-dom, folhas de estilo css.
        `,
        obs: `
        Problemas que enfrentei foi para utilização do prisma, já que era meu primeiro 
        projeto solo. Com pesquisas, leitura da documentação, conteúdos na internet como
        blogs e videos consegui solucionar todos os problemas e ter uma base realmente solida
        da tecnólogia.
        `,
        conclusion: {
            conclusion: `
            Consegui terminar o projeto dentro do prazo que eu tinha determinado.
            Usei padrões de entrega usando scrum para garantir eficiancia em minhas
            metas de termino de cada fetuare.
            `,
            experience: `
            Principal conhecimento adquirido: Desenvolvimento Web fullstack.
            `
        }
    },
    {
        id: '03',
        name: 'Palco on line',
        team: `
        Projeto pessoal que desenvolvo voltado para área musical
        .
        `,
        description: `
        Aplicação desenvolvida em astro e será migrado pra next 14.
        A aplicação visa ajudar na divulgação e monetização dos artistas que participarem
        da plataforma. A ideia é manter videos gravados ao vivo ou em estudio e apresentações
        ao vivo onde o publico passam coleborar com os artistas.
        `,
        obs: `
            Conheça o projeto em andamento na minha plataforma
            de portifolio, na seção de Projetos
        `,
        conclusion: {
            conclusion: `
            O projeto em fase de desenvolvimento.
            O deploy foi feito apenas para apresentação do conceito da ideia.
            `,
            experience: `
            Principal conhecimento adquirido: Desenvolvimento Web fullstack.
            `
        }
    },
];

export default listInfoProjects;