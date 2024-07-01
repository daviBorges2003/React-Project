import React from 'react';
import {
  Grid, Card,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfButton from '../../moleculas/Buttons/ConfButton';

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
  boxShadow: theme.shadows[1],
}));

function CardPadrao({ properties, click }) {
  const HandleDelete = async () => {
    const del = await fetch(`${process.env.REACT_URL_APP}/degree/${properties.id}`, {
      method: 'DELETE',
    });

    return del;
  };

  console.log(`${process.env.REACT_APP_URL}/degree/${properties.id}`);

  return (
    <Grid item xs={2} sm={4} md={4}>
      <CustomCard
        onClick={click}
        className="CardEffects"
      >
        <TitleTexts font="35px" color="#fff">
          {properties.name}
        </TitleTexts>
        <ConfButton click={HandleDelete}>
          <DeleteIcon />
        </ConfButton>
      </CustomCard>
    </Grid>
  );
}

export default CardPadrao;
