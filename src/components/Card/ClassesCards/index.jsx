import React from 'react';
import {
  Grid, Typography,
} from '@mui/material';

import CardPadrao from '../index';

function ClassesCard({
  id, colors, Name, img,
}) {
  return (
    <Grid key={id} item xs={2} sm={4} md={4}>
      <CardPadrao colors={colors}>
        <img src={img} alt={Name} />
        <Typography
          sx={{
            color: `${colors}`,
          }}
          variant="h6"
        >
          {Name}
        </Typography>
      </CardPadrao>
    </Grid>
  );
}

export default ClassesCard;
