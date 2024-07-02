import React from 'react';
import { Typography } from '@mui/material';
import ModalPadrao from '../padrao';
import ButtonsPadrao from '../../../moleculas/Buttons/ButtonsPadrao';

function DeleteModal({
  children, open, close, name, click,
}) {
  return (
    <ModalPadrao open={open} close={close}>
      <Typography variant="h6">
        {name}
      </Typography>
      <Typography variant="body1">
        Você realmente deseja excluir?
      </Typography>
      {children}
      <ButtonsPadrao click={click}>
        Excluir
      </ButtonsPadrao>
    </ModalPadrao>
  );
}

export default DeleteModal;
