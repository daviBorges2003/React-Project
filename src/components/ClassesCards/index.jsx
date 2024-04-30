import React from 'react';
import {
  Card, Grid, Typography,
} from '@mui/material';

function ClassesCard({
  id, colors, Name,
}) {
  return (
    <Grid key={id} item xs={2} sm={4} md={4}>
      <Card
        className="CardEffects"
        sx={{
          position: 'relative',
          border: `2px solid ${colors}`,
          minWidth: '150px',
          minHeight: '200px',
          width: '100%',
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: `${colors}`,
          }}
          variant="h6"
        >
          {Name}
        </Typography>
      </Card>

    </Grid>
  );
}

export default ClassesCard;
