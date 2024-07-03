import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';

import './styles.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircularProgress from '@mui/material/CircularProgress';

import ResponseGrid from '../../components/atoms/ResponseGrid';
import Degree from '../../components/organisms/Card/Degree';
import ButtonsPadrao from '../../components/moleculas/Buttons/ButtonsPadrao';
import ModalCreate from '../../components/organisms/Modal/CreateModal/createModal';

function Home() {
  const [degrees, setDegrees] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const SearchApi = async () => {
    await fetch(`${process.env.REACT_APP_URL}/degree`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setDegrees(data.data));
  };

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
      SearchApi();
    }, 2000);
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
              <Degree
                key={props.id}
                properties={props}
              />
            ))
          }
      </ResponseGrid>
      {
        loading && (
          <CircularProgress sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
          }}
          />
        )
      }
    </Box>
  );
}

export default Home;
