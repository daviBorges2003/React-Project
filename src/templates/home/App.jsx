import React, { useEffect, useState } from 'react';
import {
  Box,
  useMediaQuery,
} from '@mui/material';

import './styles.css';

import ResponseGrid from '../../components/ResponseGrid';
import CardPadrao from '../../components/Card';

function Home() {
  const [degrees, setDegrees] = useState(null);

  const Media = useMediaQuery('(min-width:600px)');

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
              <CardPadrao
                size={Media}
                key={props.id}
                id={props.id}
                colors={props.colors}
                text={props.Degree_Name}
              />
            ))
          }
      </ResponseGrid>
    </Box>
  );
}

export default Home;
