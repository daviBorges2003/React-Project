import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const BodyTextCustom = styled(Typography)(({ theme }) => ({
  color: ({ color }) => (color || theme.palette.text),
  fontSize: ({ font }) => (font || '20px'),
  textWrap: 'wrap',
  fontWeight: 'bolder',
}));

function BodyText({ children, color, font }) {
  return (
    <BodyTextCustom fontSize={font} color={color}>
      {children}
    </BodyTextCustom>
  );
}

export default BodyText;
