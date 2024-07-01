import React, { useEffect, useState } from 'react';
import {
  Modal, Card,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import TitleTexts from '../../../atoms/Texts/TitleTexts';
import ButtonsPadrao from '../../../moleculas/Buttons/ButtonsPadrao';
import InputText from '../../../moleculas/Inputs/inputText';
import ConfButton from '../../../moleculas/Buttons/ConfButton';
import StatusBar from '../../../moleculas/StatusBox/StatusBox';

function ModalCreate({
  open, close,
}) {
  const [nome, setNome] = useState('');
  const [Password, setPassword] = useState('');
  const [status, setStatus] = useState(false);

  const values = {
    name: nome,
    password: Password,
  };

  const CreateDegree = async () => {
    if (status === '' || Password === '') return setStatus('error');

    const response = await fetch(`${process.env.REACT_APP_URL}/degree`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) return setStatus('error');

    const ResJson = await response.json();

    setStatus('success');
    return ResJson;
  };

  useEffect(() => {
    setStatus(false);
    setPassword('');
    setNome('');
  }, [open]);

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
      <Card sx={{
        width: '300px',
        padding: '30px 20px ',
        position: 'absolute',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
        <ConfButton click={close}><CloseIcon /></ConfButton>
        <TitleTexts font="20px">Create Degree</TitleTexts>
        <InputText change={(e) => setNome(e.target.value)} type="text" place="Degree:" icon={<AccountCircleIcon />} />
        <InputText change={(e) => setPassword(e.target.value)} type="password" place="Password:" icon={<DriveFileRenameOutlineIcon />} />
        <ButtonsPadrao click={() => CreateDegree()}>Create</ButtonsPadrao>
        {status === 'success' && (
          <StatusBar status={status} title="Success!">
            A sua Turma foi Inserida
          </StatusBar>
        )}
        {status === 'error' && (
          <StatusBar status={status} title="Error!">
            {
              Password === '' || nome === '' ? (
                <>
                  Insira o nome da turma e a senha !
                </>
              ) : (
                <>
                  Error: A classe não foi criada!
                </>
              )
            }
          </StatusBar>
        )}
      </Card>
    </Modal>
  );
}

export default ModalCreate;
