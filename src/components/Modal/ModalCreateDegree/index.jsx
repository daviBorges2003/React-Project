import React from 'react';
import {
  Card, Typography, Button, Stack, TextField, Box,
} from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CirclePicker } from 'react-color';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function ModalCreateDegree({
  but, text, type, color, change,
}) {
  return (
    <Card sx={{
      display: 'flex', gap: '20px', flexDirection: 'column', padding: '30px', width: '500px',
    }}
    >
      <Button sx={{ top: '16px' }} onClick={but}><ExitToAppIcon /></Button>
      <Typography sx={{ textDecoration: 'underline' }} variant="h4">{type}</Typography>
      <Typography variant="h6">{text}</Typography>
      <Stack spacing={3} sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Typography variant="h6">Informações do Curso:</Typography>
          <TextField variant="standard" label="Nome:" />
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h6">Informações do Curso:</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
            <CirclePicker onChange={change} />
            <Box sx={{
              width: '100px',
              height: '100px',
              bgcolor: color,
              color: '#fff',
              textAlign: 'center',
              borderRadius: '15px',
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            >
              <Typography sx={{ color: color === '#fff' ? '#000' : '#fff' }} variant="subtitle1">{color}</Typography>
            </Box>
          </Box>
        </Stack>
        <Button variant="contained" sx={{ top: '16px' }} onClick={but}>Update</Button>
      </Stack>
    </Card>
  );
}

export default ModalCreateDegree;
