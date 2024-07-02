import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';

import './styles.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import ResponseGrid from '../../components/atoms/ResponseGrid';
import CardPadrao from '../../components/organisms/Card/CardDelete';
import ButtonsPadrao from '../../components/moleculas/Buttons/ButtonsPadrao';
import ModalCreate from '../../components/organisms/Modal/CreateModal/createModal';

function Home() {
  const [degrees, setDegrees] = useState([]);
  const [modal, setModal] = useState(false);

  const SearchApi = async () => {
    await fetch(`${process.env.REACT_APP_URL}/degree`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setDegrees(data.data));
  };

  useEffect(() => {
    SearchApi();
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
