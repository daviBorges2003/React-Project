import React from 'react';
import {
  Menu, MenuItem, ListItemIcon, ListItemText,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ConfigModals({
  open, close, anchor, edit, del,
}) {
  return (
    <Menu
      sx={{ position: 'fixed' }}
      anchorEl={anchor}
      open={open}
      onClose={close}
    >
      <MenuItem onClick={edit}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText>
          Edit
        </ListItemText>
      </MenuItem>

      <MenuItem onClick={del}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText>
          Delete
        </ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default ConfigModals;
