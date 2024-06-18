import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';

import './styles.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ResponseGrid from '../../components/atoms/ResponseGrid';
import CardPadrao from '../../components/organisms/Card/CardPadrao';
import ButtonsPadrao from '../../components/moleculas/Buttons/ButtonsPadrao';
import ModalCreate from '../../components/organisms/Modal/CreateModal/Modal';

function Home() {
  const [degrees, setDegrees] = useState([]);
  const [modal, setModal] = useState(false);

  const Api = async () => {
    const response = await fetch('http://localhost:3000/Degree');
    const ResJson = await response.json();

    setDegrees(ResJson);
    return ResJson;
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <Box
      onMouseLeave={() => setModal(false)}
      sx={{
        flexGrow: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <ModalCreate open={modal} />
      <ButtonsPadrao click={() => setModal(true)}>
        Create
        <AddCircleIcon />
      </ButtonsPadrao>
      <ResponseGrid>
        {
            degrees?.map((props) => (
              <CardPadrao
                key={props.id}
                properties={props}
              />
            ))
          }
      </ResponseGrid>

    </Box>
  );
}

export default Home;
