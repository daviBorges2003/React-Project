import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/organisms/Header';
import BgimgDark from '../img/BgimgDark.png';
import BgimgLight from '../img/BgimgLight.png';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2055E6',
      light: '#2093E6',
      dark: '#112C77',
      card: '#302F2F',
      contrastText: '#fff',
    },
  },
  text: {
    primary: '#FFF',
  },
  background: {
    default: '#222222',
    image: BgimgDark,
  },
  shadows: {
    1: '0px 10px 15px -3px rgba(0,0,0,0.2)',
  },
});

const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2055E6',
      light: '#2093E6',
      dark: '#112C77',
      contrastText: '#fff',

    },
  },
  background: {
    default: '#ebebeb',
    image: BgimgLight,
  },
  text: {
    primary: '#222222',
  },
  shadows: {
    1: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  },
});

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${theme.palette.mode === 'dark' ? BgimgDark : BgimgLight})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vh',
}));

export default function ThemeContext({ children }) {
  const [temas, setTemas] = useState(true);

  const HandleTheme = () => setTemas(!temas);

  return (
    <ThemeProvider
      theme={temas === true ? light : darkTheme}
    >
      <CustomBox>
        <CssBaseline />
        <Header Handle={HandleTheme} />
        <Container maxWidth="md">{children}</Container>
      </CustomBox>
    </ThemeProvider>
  );
}
