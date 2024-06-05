import React from 'react';
import { Grid } from '@mui/material';

function ResponseGrid({ children }) {
  return (
    <Grid
      container
      alignItems="center"
      spacing={{ xs: 4, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {children}
    </Grid>

  );
}

export default ResponseGrid;
