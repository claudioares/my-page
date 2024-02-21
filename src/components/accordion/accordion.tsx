'use client'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import listTFormations from '../utils/formations';
import Image from 'next/image';


export default function AccordionExpandDefault() {

  return (
    <>
        {listTFormations.map(data => (
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography>{data.entitie}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {data.description}
                </Typography>
                <div className='flex w-auto gap-4 mt-4'>
                    {data.stacks.map(icon => (
                        <Image src={icon} alt='Icone da stack' />
                    ))}
                </div>
                </AccordionDetails>
            </Accordion>
        ))}
    </>
  );
}