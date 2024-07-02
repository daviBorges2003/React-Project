import React from 'react';
import {
  Modal, Card,
} from '@mui/material';

import { styled } from '@mui/material/styles';

const CustomModal = styled(Card)(() => ({
  width: '300px',
  padding: '30px 20px ',
  position: 'absolute',
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  justifyContent: 'center',
}));

function ModalPadrao({
  open, close, children,
}) {
  return (
    <Modal
      open={open}
      onClose={close}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <CustomModal>
        {children}
      </CustomModal>
    </Modal>
  );
}

export default ModalPadrao;
