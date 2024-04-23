import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.2)',
          borderRadius: 15,
        },
      },
    },
  },
  shadows: {
    1: '0px 10px 15px -3px rgba(0,0,0,0.2)',
  },
});

const light = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ebebeb',
    },
    text: {
      primary: '#737171',
    },
    shadows: {
      1: '0px 10px 15px -3px rgba(0,0,0,0.2)',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.2)',
          borderRadius: 15,
        },
      },
    },
  },
});

export default function ThemeContext({ children }) {
  const [temas, setTemas] = useState(true);

  const HandleTheme = () => setTemas(!temas);

  return (
    <ThemeProvider
      theme={temas === true ? light : darkTheme}
    >
      <CssBaseline />
      <Header Handle={HandleTheme} />
      {children}
    </ThemeProvider>
  );
}
