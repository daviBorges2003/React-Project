import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomButtons = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

function ButtonsPadrao({ children, click }) {
  return <CustomButtons onClick={click}>{children}</CustomButtons>;
}

export default ButtonsPadrao;
