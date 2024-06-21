import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const TitleText = styled(Typography)(({ theme }) => ({
  color: ({ color }) => (color || theme.palette.text),
  fontSize: ({ font }) => (font || '35px'),
  textWrap: 'wrap',
  fontWeight: 'bolder',
}));

function TitleTexts({
  children, color, font, align,
}) {
  return (
    <TitleText sx={{ textAlign: align || 'center' }} fontSize={font} color={color}>
      {children}
    </TitleText>
  );
}

export default TitleTexts;
