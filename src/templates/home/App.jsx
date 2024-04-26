/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Grid, Box,
} from '@mui/material';

import './styles.css';

import HomeCards from '../../components/HomeCards';
import { Degree } from '../../utils/db';

function Home() {
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
              <HomeCards
                Name={props.Degree_Name}
                colors={props.colors}
                key={props.id}
              />
            ))
          }
      </Grid>
    </Box>
  );
}

export default Home;
