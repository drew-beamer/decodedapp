import { withTheme } from '@emotion/react';
import { createTheme }  from '@mui/material/styles'
import { fontSize, fontWeight } from '@mui/system';



const theme = createTheme({
  palette: {
    primary: {
        main: "#AC1A2F",
        mainGradient: "linear-gradient(to right, #ab2030, #494949)"
    },
    secondary: {
        main: "#494949"
    }
  },
  typography: {
    h1: {
      fontSize: 64,
      fontFamily: 'Roboto Condensed',
      fontWeight: 700,
      fontStyle: "italic"
    },
    h2: {
      fontSize: 48,
      fontFamily: 'Roboto Condensed',
      fontWeight: 700,
      fontStyle: "italic"
    },
    subtitle1: {
      fontSize: 18,
      fontFamily: 'Roboto Condensed',
      fontWeight: 400
    },
    p: {
      fontSize: 18,
      fontFamily: 'Roboto Condensed',
      fontWeight: 400
    }
  }
});


export default theme;