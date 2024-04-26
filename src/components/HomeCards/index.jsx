import React, { useState } from 'react';
import {
  Card, Typography, Grid,
  Button,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import ModalCreate from '../Modal';

function HomeCards({ id, colors, Name }) {
  const [modal, setModal] = useState(false);

  console.log(modal);

  return (
    <Grid key={id} item xs={2} sm={4} md={4}>
      <Card
        className="CardEffects"
        sx={{
          position: 'relative',
          border: `2px solid ${colors}`,
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
          color={colors}
          variant="h5"
        >
          {Name}
        </Typography>
        <Button
          onClick={() => setModal(true)}
          variant="text"
          size="small"
          sx={{
            borderRadius: '15px',
            padding: '5px',
            border: 'none',
            color: colors,
            position: 'absolute',
            top: '16px',
            left: '12px',
          }}
        >
          <EditIcon />
        </Button>
        { modal && (
        <ModalCreate
          type="Atualização"
          open={modal}
          but={() => setModal(false)}
          text={Name}
        />
        )}
      </Card>
    </Grid>
  );
}

export default HomeCards;
