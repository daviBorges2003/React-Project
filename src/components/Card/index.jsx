import React, { useState } from 'react';
import {
  Card, Grid, Typography, useMediaQuery,
} from '@mui/material';

import ConfigButton from '../Buttons/ConfigButton';
import ConfigModals from '../Modal/ConfigModals';

function CardPadrao({
  colors, text,
}) {
  const [hover, onHover] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const matches = useMediaQuery('(min-width:1500px)');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

        {matches ? (
          <>
            {hover && (
            <ConfigButton click={handleClick} posTop="15px" posLeft="15px" color={colors} />
            )}
            <ConfigModals open={open} close={handleClose} anchor={anchorEl} />
            <Typography fontSize="calc(25px + 0.3vw)" align="center" color={colors} variant="h4">
              {text}
            </Typography>
          </>
        ) : (
          <>
            <ConfigButton click={handleClick} posTop="15px" posLeft="15px" color={colors} />
            <ConfigModals open={open} close={handleClose} anchor={anchorEl} />
            <Typography fontSize="calc(25px + 0.3vw)" align="center" color={colors} variant="h4">
              {text}
            </Typography>
          </>
        )}

      </Card>
    </Grid>
  );
}

export default CardPadrao;
