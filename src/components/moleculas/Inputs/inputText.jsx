import React from 'react';
import { styled } from '@mui/material/styles';
import { Input, InputAdornment } from '@mui/material';

const CustomInput = styled(Input)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#ebebeb',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '10px 10px 0px 0px',
}));

function InputText({ place, icon }) {
  return (
    <CustomInput
      placeholder={place}
      startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
    />
  );
}

export default InputText;
