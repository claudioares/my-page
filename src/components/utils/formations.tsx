'use client'
import reactIcon from '../../../public/iconsStacks/react.svg';
import jsIcon from '../../../public/iconsStacks/javascript.svg';
import tsIcon from '../../../public/iconsStacks/typescript.svg';
import nodeIcon from '../../../public/iconsStacks/nodejs.svg';
import htmlIcon from '../../../public/iconsStacks/html5.svg';
import cssIcon from '../../../public/iconsStacks/css3.svg';
import mongoIcon from '../../../public/iconsStacks/mongodb.svg';
import postgresqlIcon from '../../../public/iconsStacks/postgresql.svg';
import tailwindIcon from '../../../public/iconsStacks/tailwindcss.svg';
import pythonIcon from '../../../public/iconsStacks/python.svg';



const listTFormations = [
    {
        id: '01',
        entitie: 'Cubos Academy',
        description: `Formação em Desenvolvimento de software de 8 meses, com enfase em
        Desenvolvimento web`,
        stacks: [htmlIcon, cssIcon, jsIcon, reactIcon, nodeIcon, postgresqlIcon]
    },
    {
        id: '02',
        entitie: 'Digital Innovation One',
        description: `Aprendi desdo o básico do html ate typescript. Raciocinio lógico e pensamento computacional`,
        stacks: [htmlIcon, cssIcon, jsIcon, reactIcon, nodeIcon]
    },
    {
        id: '03',
        entitie: 'Rocketseat',
        description: `Programação orientada a objeto, construçoes de apis com princípios do SOLID, tailwind
        e ultilizar bibliotecas Ui`,
        stacks: [htmlIcon, tailwindIcon, tsIcon, reactIcon, nodeIcon, mongoIcon]
    },
    {
        id: '03',
        entitie: 'Cruzeiro do Sul/UNICID',
        description: `Graduação em Inteligencia Artificial, estou no segundo periodo e estou estudando 
        ciencias de analise de dados, arvore de desisão, listas, pilhas e conteúdos relacionados a manipulação
        dados`,
        stacks: [pythonIcon]
    },
];


export default listTFormations;