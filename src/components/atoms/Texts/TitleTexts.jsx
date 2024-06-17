import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const TitleText = styled(Typography)(({ theme }) => ({
  color: ({ color }) => (color || theme.palette.text),
  fontSize: '30px',
  textWrap: 'wrap',
  textAlign: 'center',
  fontWeight: 'bolder',
}));

function TitleTexts({ children, color }) {
  return (
    <TitleText color={color}>
      {children}
    </TitleText>
  );
}

export default TitleTexts;
