import React, { useState } from 'react';
import {
  Card, Grid, Typography,
} from '@mui/material';

import ConfigButton from '../Buttons/ConfigButton';

function CardPadrao({
  colors, text,
}) {
  const [hover, onHover] = useState(false);

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card
        onMouseLeave={() => onHover(false)}
        onMouseOver={() => onHover(true)}
        className="CardEffects"
        sx={{
          position: 'relative',
          border: `2px solid ${colors}`,
          height: '20vh',
          width: '100%',
          minWidth: '150px ',
          minHeight: '200px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {hover && (<ConfigButton posTop="15px" posLeft="15px" color={colors} />)}
        <Typography fontSize="calc(25px + 0.3vw)" align="center" color={colors} variant="h4">
          {text}
        </Typography>

      </Card>
    </Grid>
  );
}

export default CardPadrao;
