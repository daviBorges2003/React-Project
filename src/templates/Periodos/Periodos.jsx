import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import ClassesCard from '../../components/ClassesCards';

function Periodos() {
  const { id } = useParams();

  const [classes, setClasses] = useState(null);

  const Api = async () => {
    const response = await fetch('http://localhost:3000/Degree');
    const ResJson = await response.json();

    return setClasses(ResJson[id].classes);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <Grid container spacing={2}>
      {
        classes?.map((props) => (
          <ClassesCard key={props.id} Name={props.Nome_Classe} />
        ))
      }
    </Grid>
  );
}

export default Periodos;
