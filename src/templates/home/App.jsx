/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Grid, Box,
} from '@mui/material';

import './styles.css';

import HomeCards from '../../components/HomeCards';

function Home() {
  const [degrees, setDegrees] = useState(null);

  const Api = async () => {
    const response = await fetch('http://localhost:3000/Degree');
    const ResJson = await response.json();

    setDegrees(ResJson);
    return ResJson;
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <Box sx={{
      flexGrow: 1,
      width: '100%',
      height: '100%',
    }}
    >
      <Grid sx={{ margin: '10px' }} container alignItems="center" spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            degrees?.map((props) => (
              <HomeCards
                id={props.id}
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
