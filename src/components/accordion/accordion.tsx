'use client'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import listTFormations from '../utils/formations';
import Image from 'next/image';


export default function AccordionExpandDefault() {

    let key = 0;

    return (
        <>
            {listTFormations.map(data => (
                <Accordion key={data.id}>
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
                            {data.stacks.list.map(icon => (
                                <Image className='w-10 h-10' key={key += 1} src={icon} alt='Icone da stack' />
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}