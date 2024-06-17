/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Switch,
  FormGroup,
  FormControlLabel,
  styled,
} from '@mui/material';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '500ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.light,
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#FADF43',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 25 / 2,
    backgroundColor: theme.palette.primary.light,

    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function SwitchTheme({ HandleChange }) {
  return (
    <FormGroup sx={{ margin: '0 auto' }}>
      <FormControlLabel
        sx={{ margin: 'auto' }}
        // eslint-disable-next-line react/jsx-no-bind
        control={<IOSSwitch onChange={HandleChange} defaultChecked />}
      />
    </FormGroup>
  );
}

export default SwitchTheme;
