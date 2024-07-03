import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TextLabel({ id }) {
  const navigate = useNavigate();
  const [errorPass, SetErrorPass] = useState(true);

  const pass = '1234';
  // eslint-disable-next-line consistent-return
  const CheckPassword = (e) => {
    const { value } = e.target;

    if (value !== pass) return SetErrorPass(true);

    SetErrorPass(false);
  };

  return (
    <Box
      padding="15px"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="10px"
    >
      <TextField
        id="filled-basic"
        sx={{ width: '100%' }}
        onChange={CheckPassword}
        size="small"
        label="Password:"
        type="password"
        variant="outlined"
        color={errorPass ? 'error' : 'primary'}
      />
      {
        !errorPass && (
        <Button onClick={() => navigate(`/periodos/${id}`)} sx={{ width: '100%' }} size="small" variant="contained">
          Entrar
        </Button>
        )
      }
    </Box>
  );
}

export default TextLabel;
