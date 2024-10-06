import { createTheme } from '@mui/material/styles';
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');
</style>

export const customColorPalette = {
  darkBlue: '#004990',
  lightBlue: '#3581cb',
  inteseBlue: '#0095FE',
}

export const theme = createTheme({
  palette: {
    mode: 'light', // 'dark' for dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Exo, Arial, sans-serif',
    h5: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1.125rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

