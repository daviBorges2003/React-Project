import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '5px',
  left: '5px',
  width: '50px',
  height: '50px',
  backgroundColor: 'none',
  borderRadius: '50px',
  color: ({ color }) => color || theme.palette.primary.contrastText,
}));

function ConfButton({ children, click, color }) {
  return (
    <IconButtonCustom sx={{ color }} onClick={click}>
      {children}
    </IconButtonCustom>
  );
}

export default ConfButton;
