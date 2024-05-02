/* eslint-disable radix */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box, Grid, Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import ModalCreateClasses from '../../components/Modal/ModalCreateClasses';
import ModalCreate from '../../components/Modal';
import ResponseGrid from '../../components/ResponseGrid';
import BackButton from '../../components/BackButton';
import ClassesCard from '../../components/Card/ClassesCards';
import CardPadrao from '../../components/Card';

function Periodos() {
  const { id } = useParams();

  const [classe, setClasse] = useState(null);
  const [color, setColors] = useState(null);
  const [modal, setModal] = useState(false);

  const Api = async () => {
    const response = await fetch('http://localhost:3000/Degree');
    const ResJson = await response.json();

    setColors(ResJson[id].colors);
    return setClasse(ResJson[id].classes);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <Box>
      <BackButton
        children={<ArrowBackIcon />}
        nav="/"
      />
      <ResponseGrid>
        <Grid key={id} item xs={2} sm={4} md={4}>
          <CardPadrao click={() => setModal(true)} colors="#D1D1D1">
            <AddCircleOutlineIcon sx={{ width: '100px', height: '100px' }} />
            <Typography variant="h6"> Insert new Class</Typography>
          </CardPadrao>

          {!!modal && (
            <ModalCreate key={id} open={modal}>
              <ModalCreateClasses but={() => setModal(false)} />
            </ModalCreate>
          )}
        </Grid>
        {
            classe?.map((arr) => (
              <ClassesCard
                colors={color}
                Name={arr.Nome_Classe}
              />
            ))
          }
      </ResponseGrid>
    </Box>
  );
}

export default Periodos;
