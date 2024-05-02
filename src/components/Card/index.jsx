import React from 'react';
import { Card } from '@mui/material';

function CardPadrao({ children, colors, click }) {
  return (
    <Card
      onClick={click}
      className="CardEffects"
      sx={{
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
      {children}
    </Card>
  );
}

export default CardPadrao;
