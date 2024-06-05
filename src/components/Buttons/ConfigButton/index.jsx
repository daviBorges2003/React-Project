import React from 'react';

import {
  IconButton, Tooltip,
} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';

function ConfigButton({ color, posTop, posLeft }) {
  return (
    <Tooltip title="Configs">
      <IconButton
        sx={{
          position: 'absolute',
          top: posTop,
          left: posLeft,
          color,
        }}
        variant="text"
      >
        <SettingsIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ConfigButton;
