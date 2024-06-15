import pj01 from '../../../src/assets/img_apps/pro1.png';
import pj02 from '../../../src/assets/img_apps/pro2.png';
import pj03 from '../../../src/assets/img_apps/pro3.png';
import pj04 from '../../../src/assets/img_apps/pro4.png';
import pj05 from '../../../src/assets/img_apps/pro5.png';
import pj06 from '../../../src/assets/img_apps/pro6.png';


  export const projectsData = [
    {
      id: '01',
      url: pj01,
      title: 'Peronal trainer portifólio',
      span: 'Desenvolvimento Web',
      description: `
        Simulação de um portifólio de uma personal trainer. Projeto para estudo de caso
        desenvolvido com Html, css, javascript.
      `,
      link:"https://personal-portifolio-page.netlify.app/"
    },
    {
      id: '02',
      url: pj02,
      title: 'Alura challenge',
      span: 'Desenvolvimento Web',
      description: `
        Projeto desenvolvido durante o projeto One ministrado pela Alura.
        Desenvolvido com Html, css, javascript
      `,
      link:"https://challenge-alura-geek-theta.vercel.app/"
    },
    {
      id: '03',
      url: pj03,
      title: 'Codificador de texto',
      span: 'Desenvolvimento Web',
      description: `
        Projeto desenvolvido durante o projeto One ministrado pela Alura.
        Voce pode digitar uma imformação e ela sera codificada, podendo retornar
        na aplicação de decodificar a menssagem. Desenvolvido com Html, css, javascript
      `,
      link:"https://claudioares.github.io/text_decod/"
    },
    {
      id: '04',
      url: pj04,
      title: 'Coverter_para_PDF',
      description: `
        Essa aplicação criei quando precisei converter algumas imagens para pdf
        mas todas as ferramentas que encontrei me cobravam cadastro.
        A princípio converte imagens para pdf mas furamente adicionarei novas conversões.
        Desenvolvido com Html, css, JavaScript.
      `,
      link:"https://devcodeconversor.netlify.app/"
    },
    {
      id: '05',
      url: pj05,
      title: 'Instituição de ensino',
      description: `
        Projeto ainda em construçao.
      `,
      link:''
    },
    {
      id: '06',
      url: pj06,
      title: 'Palco on line',
      description: `
        Projeto ainda não finalizado. Ele será uma plataforma de música,
        onde os usuários poderão se conectar com seus artistas, ver videos,
        oferecer uma quantia pelo videos e assistir videos ao vivo quando cadastrados.
        O projeto esta sendo desenvolvido em: Astro, Tailwind, React
      `,
      link:"https://palcoonline.netlify.app/"
    },
  ];