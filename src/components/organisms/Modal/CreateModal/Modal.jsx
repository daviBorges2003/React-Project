import React from 'react';
import {
  Modal, Card,
} from '@mui/material';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import TitleTexts from '../../../atoms/Texts/TitleTexts';
import ButtonsPadrao from '../../../moleculas/Buttons/ButtonsPadrao';
import InputText from '../../../moleculas/Inputs/inputText';

function ModalCreate({
  open,
}) {
  return (
    <Modal
      open={open}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Card sx={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '15px',
      }}
      >
        <TitleTexts>Create Degree</TitleTexts>
        <InputText place="Name of Degree..." icon={<DriveFileRenameOutlineIcon />} />
        <ButtonsPadrao>Create</ButtonsPadrao>
      </Card>
    </Modal>
  );
}

export default ModalCreate;
