'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import pj01 from '../../../src/assets/img_apps/pro1.png';
import pj02 from '../../../src/assets/img_apps/pro2.png';
import pj03 from '../../../src/assets/img_apps/pro3.png';
import pj04 from '../../../src/assets/img_apps/pro4.png';
import pj05 from '../../../src/assets/img_apps/pro5.png';
import pj06 from '../../../src/assets/img_apps/pro6.png';

import ImageNext from "next/image";
import { useContext, useState } from 'react';
import { PageUnderConstruction } from '../modal.page.under.construction/madal.page.under.contruction';
import { ContextApi } from '../contextApi/contextApi';



const images = [
  {
    id: '01',
    url: pj01,
    title: 'Projeto 01',
    width: '33.3%',
    link:"https://personal-portifolio-page.netlify.app/"
  },
  {
    id: '02',
    url: pj02,
    title: 'Projeto 02',
    width: '33.3%',
    link:"https://dricasalgados.netlify.app/"
  },
  {
    id: '03',
    url: pj03,
    title: 'Projeto 03',
    width: '33.3%',
    link:"https://claudioares.github.io/text_decod/"
  },
  {
    id: '04',
    url: pj04,
    title: 'Projeto 04',
    width: '33.3%',
    link:"https://devcodeconversor.netlify.app/"
  },
  {
    id: '05',
    url: pj05,
    title: 'Projeto 05',
    width: '33.3%',
    link:'#05'
  },
  {
    id: '06',
    url: pj06,
    title: 'Projeto 06',
    width: '33.3%',
    link:"https://palcoonline.netlify.app/"
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));


const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export function Card() {

  const {
    errorPageConstruction, setErroPageConstruction
  } = useContext(ContextApi);
  const [blank, setBlank] = useState<string>('_blank')

  function handlePageErroConstruction (id:string) {
    
    
    id === '05' && setBlank('');
    id === '05' && setErroPageConstruction(true);

    setTimeout(()=>{
      setBlank('_blank');
      setErroPageConstruction(false);
    }, 4000)
  }
  
  return (
    <section className='flex items-center justify-center w-full h-auto p-2' id='05'>
      {errorPageConstruction && <PageUnderConstruction />}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  flexWrap: 'wrap', minWidth: 300, width: '100%' }} id="projects">
        <div className={`
          flex flex-wrap items-center justify-center w-full gap-2 
          md:gap-0
        `}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.id}
              style={{
                width: image.width,
              }}
            >
              <ImageNext fill={true} src={image.url} alt='Imagem do projeto' />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <div onClick={()=>handlePageErroConstruction(image.id)}>
                <a href={image.link} target={blank}>
                  <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </a>
              </div>
            </ImageButton>
          ))}
        </div>
      </Box>
    </section>
  );
}