import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import TitleTexts from '../../atoms/Texts/TitleTexts';
import BodyText from '../../atoms/Texts/BodyText';

function StatusBar({
  w, status, title, children,
}) {
  const CustomStatus = styled(Box)(({ theme }) => ({
    width: w || '100%',
    height: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: status === 'error' ? theme.palette.error.light : theme.palette.success.light,
    color: status === 'error' ? theme.palette.error.dark : theme.palette.success.dark,
    border: `2px solid ${status === 'error' ? theme.palette.error.main : theme.palette.success.dark}`,
    borderRadius: '15px',
    boxShadow: theme.shadows[1],
  }));

  return (
    <Box>
      <CustomStatus
        width={w}
      >
        <TitleTexts align="start" font="25px">
          {title}
        </TitleTexts>
        <BodyText>
          {children}
        </BodyText>
      </CustomStatus>
    </Box>
  );
}

export default StatusBar;
