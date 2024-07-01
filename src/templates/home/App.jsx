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
    const response = await fetch(`${process.env.REACT_APP_URL}/degree`, {
      method: 'GET',
    });

    const ResJson = await response.json();

    setDegrees(ResJson.data);
    return ResJson.data;
  };

  useEffect(() => {
    Api();
  }, [!modal]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <ModalCreate close={() => setModal(false)} open={modal} />
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
