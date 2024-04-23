import {
  Box, Card, Typography, Avatar, Button,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import SwitchTheme from '../Switch';
import imgUser from '../../img/Backgronds.png';

function Header({ Handle }) {
  return (
    <Box sx={{
      padding: '50px',
      width: '100%',
    }}
    >
      <Box
        sx={{
          margin: ' auto',
          display: 'flex',
          width: 350,
          gap: '10px',
          flexDirection: 'row',
        }}
      >
        <Card>
          <SwitchTheme HandleChange={Handle} />
        </Card>
        <Card sx={{ gap: '20px' }}>
          <Avatar alt="img1" src={imgUser} />
          <Typography variant="h6">
            UserName
          </Typography>
        </Card>
        <Card>
          <Button size="small" variant="text">
            <SettingsIcon sx={{ fontSize: 30 }} />
          </Button>
        </Card>
      </Box>
    </Box>
  );
}

export default Header;
