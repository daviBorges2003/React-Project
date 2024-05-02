import React from 'react';
import {
  Card, Button,
} from '@mui/material';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function ModalCreateClasses({
  but,
}) {
  return (
    <Card sx={{
      display: 'flex', gap: '20px', flexDirection: 'column', padding: '30px', width: '500px',
    }}
    >
      <Button sx={{ top: '16px' }} onClick={but}><ExitToAppIcon /></Button>
    </Card>
  );
}

export default ModalCreateClasses;
