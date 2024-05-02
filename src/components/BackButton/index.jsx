import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BackButton({ children, nav }) {
  const navigate = useNavigate();

  return (
    <Button
      sx={{
        borderRadius: '50px',
        position: 'absolute',
        top: '55px',
        left: '55px',
      }}
      variant="contained"
      onClick={() => navigate(nav)}
    >
      {children}
    </Button>
  );
}

export default BackButton;
