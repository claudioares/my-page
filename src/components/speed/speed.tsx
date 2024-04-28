'use client'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';

import { useContext } from 'react';
import { ContextApi } from '../contextApi/contextApi';

const actions = [
  { icon: <FileCopyIcon />, name: 'Curriculum' },
  { icon: <SaveIcon />, name: 'Salvar no dispositivo' },
];

export default function BasicSpeedDial() {

  const { setSelectIcon } = useContext(ContextApi);

  return (
    <div className='fixed right-1 bottom-1 z-[3000]'>

      <Box sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={()=>setSelectIcon(action.name)}
            />
          ))}
        </SpeedDial>
      </Box>

    </div>

  );
}