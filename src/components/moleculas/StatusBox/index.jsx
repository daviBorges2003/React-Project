import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const CustomStatus = styled(Box)(() => ({
  width: ({ w }) => (w || '100%'),
  height: '40px',
}));

function StatusBar({ children, w, status }) {
  return (
    <CustomStatus status={status} width={w}>
      {children}
    </CustomStatus>
  );
}

export default StatusBar;
