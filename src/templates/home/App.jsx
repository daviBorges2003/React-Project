/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Grid, Box,
} from '@mui/material';

import './styles.css';

import ResponseGrid from '../../components/ResponseGrid';
import HomeCards from '../../components/Card/HomeCards/index';

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
      <ResponseGrid>
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
      </ResponseGrid>
    </Box>
  );
}

export default Home;
