import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box, FormControl, InputAdornment, IconButton, FilledInput, InputLabel,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const IconLabel = styled(Box)(({ theme }) => ({
  minWidth: '50px',
  height: '48px',
  borderRadius: '5px',
  marginRight: '5px',
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
}));

function InputText({
  place, change, icon, type,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyItems: 'center',
      marginBottom: '10px',
    }}
    >
      <IconLabel color="#fff">{icon}</IconLabel>
      <FormControl
        variant="filled"
        size="small"
      >
        <InputLabel>{place}</InputLabel>
        {
        type === 'password' ? (
          <FilledInput
            type={showPassword ? 'text' : 'password'}
            onChange={change}
            endAdornment={(
              <InputAdornment
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                edge="end"
              >
                <IconButton>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              )}
          />
        ) : (
          <FilledInput
            type={type}
            onChange={change}
          />
        )
          }

      </FormControl>
    </Box>
  );
}

export default InputText;
