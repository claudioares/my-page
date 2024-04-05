'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import pj01 from '../../../public/pro1.webp';
import pj02 from '../../../public/pro2.jpg';
import pj03 from '../../../public/pro3.png';
import pj04 from '../../../public/pro4.webp';
import pj05 from '../../../public/pro5.png';
import pj06 from '../../../public/pro6.png';

import ImageNext from "next/image";


const images = [
  {
    id: '01',
    url: pj01,
    title: 'Projeto 01',
    width: '33.3%',
    link:""
  },
  {
    id: '02',
    url: pj02,
    title: 'Projeto 02',
    width: '33.3%',
    link:""
  },
  {
    id: '03',
    url: pj03,
    title: 'Projeto 03',
    width: '33.3%',
    link:""
  },
  {
    id: '04',
    url: pj04,
    title: 'Projeto 04',
    width: '33.3%',
    link:""
  },
  {
    id: '05',
    url: pj05,
    title: 'Projeto 05',
    width: '33.3%',
    link:""
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

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
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
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  flexWrap: 'wrap', minWidth: 300, width: '100%' }} id="projects">
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
          <Image>
            <a href={image.link} target='_blank'>
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
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}