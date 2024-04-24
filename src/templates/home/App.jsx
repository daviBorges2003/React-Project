import React, { useState } from 'react';
import {
  Card, Typography, Grid, Box,
  Button,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import ModalCreate from '../../components/Modal';
import './styles.css';

import { Degree } from '../../utils/db';

function Home() {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  const HandleOpenModal = () => setModal(true);
  const HandleCloseModal = () => setModal(false);
  console.log(hover, modal);

  return (
    <Box sx={{
      flexGrow: 1,
      width: '100%',
      height: '100%',
    }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            Degree.map((props) => (
              <Grid key={props.id} item xs={2} sm={4} md={4}>
                <Card
                  className="CardEffects"
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  sx={{
                    position: 'relative',
                    border: `2px solid ${props.colors}`,
                    width: '250px',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'center',
                    }}
                    color={props.colors}
                    variant="h5"
                  >
                    {props.Degree_Name}
                  </Typography>
                  <Button
                    onClick={HandleOpenModal}
                    variant="text"
                    size="small"
                    sx={{
                      borderRadius: '15px',
                      padding: '5px',
                      border: 'none',
                      color: props.colors,
                      position: 'absolute',
                      top: '16px',
                      left: '12px',
                    }}
                  >
                    <EditIcon />
                    <ModalCreate close={HandleCloseModal} open={modal} text={props.Degree_Name} />
                  </Button>
                </Card>
              </Grid>
            ))
          }
      </Grid>
    </Box>
  );
}

export default Home;
