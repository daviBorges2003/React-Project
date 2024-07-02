import React, { useState } from 'react';
import {
  Grid, Card,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyIcon from '@mui/icons-material/Key';

import InputText from '../../moleculas/Inputs/inputText';
import ConfButton from '../../moleculas/Buttons/ConfButton';
import DeleteModal from '../Modal/DeleteModal/deleteModal';
import TitleTexts from '../../atoms/Texts/TitleTexts';
import StatusBar from '../../moleculas/StatusBox/StatusBox';

const CustomCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '15px',
  width: '100%',
  height: '300px',
  minHeight: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.card : theme.palette.primary.light,
  boxShadow: theme.shadows[1],
}));

function Degree({
  properties,
}) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);

  const Delete = async (id) => {
    await fetch(`${process.env.REACT_APP_URL}/degree/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => setErr(false))
      .then(() => window.location.reload());
  };

  function HandleDelete(prop) {
    if (password !== prop.password) {
      return setErr(true);
    }

    Delete(prop.id);
  }

  return (
    <Grid item xs={2} sm={4} md={4}>
      <CustomCard
        className="CardEffects"
      >
        <TitleTexts font="35px" color="#fff">
          {properties.name}
        </TitleTexts>
        <ConfButton color="#fff" click={() => setDeleteModal(true)}>
          <DeleteIcon />
        </ConfButton>
      </CustomCard>
      <DeleteModal
        name={properties.name}
        click={() => HandleDelete(properties)}
        open={deleteModal}
        close={() => setDeleteModal(false)}
      >
        <InputText change={(e) => setPassword(e.target.value)} icon={<KeyIcon />} place="insira a senha" />
        {
          err && (
            <StatusBar status="error" />
          )
        }
      </DeleteModal>
    </Grid>
  );
}

export default Degree;
