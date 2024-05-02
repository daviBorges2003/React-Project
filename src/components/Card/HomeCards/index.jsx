import React, { useState } from 'react';
import {
  Card, Typography, Grid,
  Button,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import TextLabel from '../../TextField/index';

import ModalCreate from '../../Modal';
import ModalCreateDegree from '../../Modal/ModalCreateDegree';

function HomeCards({
  id, colors, Name,
}) {
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);

  const [color, setColor] = useState('#fff');

  const HandleChangeColor = (cl) => setColor(cl.hex);

  return (
    <Grid key={id} item xs={2} sm={4} md={4}>
      <Card
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className="CardEffects"
        sx={{
          position: 'relative',
          border: `2px solid ${colors}`,
          minWidth: '150px',
          minHeight: '200px',
          width: '100%',
          height: '25vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!hover && (
          <Typography
            sx={{
              textAlign: 'center',
            }}
            color={colors}
            variant="h5"
          >
            {Name}
          </Typography>
        )}

        {hover && (
          <TextLabel id={id} />
        )}
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
          open={modal}
          text={Name}
        >
          <ModalCreateDegree
            but={() => setModal(false)}
            text={Name}
            change={HandleChangeColor}
            color={color}
            type="Atualização"
          />
        </ModalCreate>
        )}
      </Card>
    </Grid>
  );
}

export default HomeCards;
