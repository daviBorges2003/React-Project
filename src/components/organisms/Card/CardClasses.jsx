import React from 'react';
import {
  Grid, Card,
} from '@mui/material';

import { styled } from '@mui/material/styles';
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
  backgroundColor: theme.palette.primary.card,
  boxShadow: theme.shadows[1],
}));

function CardClasses({ properties, click }) {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <CustomCard
        onClick={click}
        className="CardEffects"
      >
        <TitleTexts>
          {properties.Nome_Classe}
        </TitleTexts>
      </CustomCard>
    </Grid>
  );
}

export default CardClasses;
