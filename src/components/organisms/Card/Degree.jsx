import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Grid, Card,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

import InputText from '../../moleculas/Inputs/inputText';
import ConfButton from '../../moleculas/Buttons/ConfButton';
import DeleteModal from '../Modal/DeleteModal/deleteModal';
import TitleTexts from '../../atoms/Texts/TitleTexts';

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
  boxShadow: theme.shadows[2],
}));

function Degree({
  properties,
}) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const Delete = async (id) => {
    await fetch(`${process.env.REACT_APP_URL}/degree/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => setErr(false))
      .then(() => navigate('/'));
  };

  const HandleNavigate = (id) => {
    navigate(`/degree/${id}`);
  };

  function HandleDelete(prop) {
    if (password !== prop.password) {
      return setErr('error');
    }

    Delete(prop.id);
  }

  useEffect(() => {

  }, [location]);

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
        open={deleteModal}
        click={() => HandleDelete(properties)}
        close={() => { setDeleteModal(false); setErr(''); }}
      >
        <InputText
          err={err}
          type="password"
          change={(e) => setPassword(e.target.value)}
          place="Senha:"
        />
      </DeleteModal>
      <DeleteModal
        name={properties.name}
        open={valid}
        click={() => HandleNavigate(properties.id)}
        close={() => { setValid(false); setErr(''); }}
        btn="Entrar"
      >
        <InputText
          err={err}
          type="password"
          change={(e) => setPassword(e.target.value)}
          place="Senha:"
        />
      </DeleteModal>

    </Grid>
  );
}

export default Degree;
