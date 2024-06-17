import React from 'react';
import {
  Modal,
} from '@mui/material';

function ModalCreate({
  open, children,
}) {
  return (
    <Modal
      open={open}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      {children}
    </Modal>
  );
}

export default ModalCreate;
