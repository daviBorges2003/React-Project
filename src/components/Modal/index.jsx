import React from 'react';
import {
  Modal, Card, Typography, Fade, Button, Box,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';

const style = {
  Padding: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalCreate({ open, text, close }) {
  return (
    <Modal
      onClose={close}
      open={open}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Button
            onClick={close}
            variant="text"
            size="small"
          >
            <EditIcon />
          </Button>
          <Card sx={{
            width: '100%',
            height: '100%',
          }}
          >
            <Typography>{text}</Typography>
          </Card>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalCreate;
