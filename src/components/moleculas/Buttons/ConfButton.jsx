import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.card,
  borderRadius: '50px',
  color: theme.palette.text.primary,
}));

function ConfButton({ children, click }) {
  return (
    <IconButtonCustom onClick={click}>
      {children}
    </IconButtonCustom>
  );
}

export default ConfButton;
