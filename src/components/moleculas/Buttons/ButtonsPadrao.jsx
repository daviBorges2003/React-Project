import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomButtons = styled(Button)(({ theme }) => ({
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '15px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

function ButtonsPadrao({ children }) {
  return <CustomButtons>{children}</CustomButtons>;
}

export default ButtonsPadrao;
