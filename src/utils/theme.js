import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Libre Franklin, sans-serif',
    body1: {
      fontSize: '20px'
    },
    body2: {
      fontSize: '18px'
    },
    h1: {
      fontFamily: 'Abhaya Libre',
    },
    h2: {
      fontFamily: 'Abhaya Libre',
      fontSize: '52px'
    },
    h3: {
      fontFamily: 'Abhaya Libre',
      fontSize: '32px'
    }
  },
  MuiTypography: {
    fontFamily: 'Libre Franklin, sans-serif'
  },
  MuiInputBase: {
    fontSize: '20px'
  }
});

export default theme;