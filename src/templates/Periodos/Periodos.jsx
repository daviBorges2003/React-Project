/* eslint-disable radix */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box,
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CardHeader } from '../../components/organisms/Header/index';
import ConfButton from '../../components/moleculas/Buttons/ConfButton';
import CardClasses from '../../components/organisms/Card/CardClasses';
import ResponseGrid from '../../components/atoms/ResponseGrid';

function Periodos() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [classe, setClasse] = useState(null);

  const Api = async () => {
    const response = await fetch(`http://localhost:3000/Degree/${id}`);
    const ResJson = await response.json();

    return setClasse(ResJson.classes);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <Box>
      <CardHeader sx={{
        position: 'absolute',
        top: '50px',
        left: '15px',
        width: '50px',
        borderRadius: '50px',
      }}
      >
        <ConfButton click={() => navigate('/')}><ArrowBackIosIcon /></ConfButton>
      </CardHeader>

      <ResponseGrid>
        {
          classe?.map((props) => (
            <CardClasses properties={props} />
          ))
        }
      </ResponseGrid>
    </Box>
  );
}

export default Periodos;
