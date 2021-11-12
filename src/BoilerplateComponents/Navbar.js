import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../LogosImages/logo.png"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme.js"

export default function Navbar() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
          <AppBar style={{background: theme.palette.primary.mainGradient}} position="static">
            <Toolbar>
            <img src={logo} style={{height: "30px", padding:"5px 0px"}}/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Button color="inherit" onClick={() => {
                  window.location = "/decodedapp/"
              }}>Home</Button>
              <Button color="inherit" onClick={() => {
                  window.location = "/decodedapp/#/rankings"
              }}>Rankings</Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
  );
}