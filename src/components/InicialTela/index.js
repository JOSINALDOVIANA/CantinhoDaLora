import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuAppBar from '../AppBar/index';
import GridContainer from '../Grid/index'

import { ColorModeContext } from '../../routs';
import { useTheme } from '@mui/material';

function InicialTela() {

  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAppBar></MenuAppBar>
      <Container maxWidth="lg" sx={{ backgroundColor: theme.CL.colorPadrao,paddingBottom:5,paddingTop:10 }}>
          <GridContainer></GridContainer>       
      </Container>
    </React.Fragment>
  );
}

export default InicialTela;