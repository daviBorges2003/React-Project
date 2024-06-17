import {
  Box, Card,
} from '@mui/material';

import { styled } from '@mui/material/styles';

import SettingsIcon from '@mui/icons-material/Settings';
import ConfButton from '../../moleculas/Buttons/ConfButton';
import SwitchTheme from '../../atoms/Switch';

export const CardHeader = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.card,
  padding: '5px',
  width: '60px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
}));

function Header({ Handle }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: '15px',
      justifyContent: 'center',
      padding: '50px',
    }}
    >
      <ConfButton>
        <SettingsIcon sx={{ fontSize: '30px' }} />
      </ConfButton>
      <CardHeader>
        <SwitchTheme HandleChange={Handle} />
      </CardHeader>
    </Box>
  );
}

export default Header;
