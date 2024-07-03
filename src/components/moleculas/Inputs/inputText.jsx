import React from 'react';

import {
  Box, FormControl, InputAdornment, IconButton, FilledInput, InputLabel,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function InputText({
  place, change, type, err,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box>
      <FormControl
        error={err}
        variant="filled"
        size="small"
        sx={{
          width: '100%',
        }}
      >
        <InputLabel htmlFor="filled-adornment-amount">{place}</InputLabel>
        {
        type === 'password' ? (
          <FilledInput
            id="filled-adornment-amount"
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
            id="filled-adornment-amount"
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
