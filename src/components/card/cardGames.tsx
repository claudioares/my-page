'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import game01 from '../../../public/gamesImagens/game01.jpg';
import game02 from '../../../public/gamesImagens/game02.jpg';
import game03 from '../../../public/gamesImagens/game03.jpg';
import game04 from '../../../public/gamesImagens/game04.jpg';
import game05 from '../../../public/gamesImagens/game05.jpg';


import ImageNext from "next/image";


const images = [
  {
    id: '01',
    url: game01,
    title: 'Game 01',
    width: '33.3%',
  },
  {
    id: '02',
    url: game02,
    title: 'Game 02',
    width: '33.3%',
  },
  {
    id: '03',
    url: game03,
    title: 'Game 03',
    width: '33.3%',
  },
  {
    id: '04',
    url: game04,
    title: 'Game 04',
    width: '33.3%',
  },
  {
    id: '05',
    url: game04,
    title: 'Game 05',
    width: '33.3%',
  }
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

export function CardGame() {
  return (
    <Box sx={{ display: 'flex', alignItems:'center', justifyContent: 'center', flexWrap: 'wrap', minWidth: 300, width: '100%', gap:5 }}>
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
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}