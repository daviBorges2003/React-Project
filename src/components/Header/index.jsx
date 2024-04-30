import {
  Box, Card,
} from '@mui/material';
import React from 'react';
import SwitchTheme from '../Switch';

function Header({ Handle }) {
  return (
    <Box sx={{
      padding: '50px',
      width: '100%',
    }}
    >
      <Card sx={{
        width: '65px', margin: '0 auto', display: 'flex',
      }}
      >
        <SwitchTheme HandleChange={Handle} />
      </Card>
    </Box>
  );
}

export default Header;
