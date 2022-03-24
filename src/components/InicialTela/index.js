import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuAppBar from '../AppBar/index';
import GridContainer from '../Grid/index'

function InicialTela() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{backgroundColor:"#FFFF00"}}>
        <Box sx={{  height: '100%',width:"100%" }}>
          <MenuAppBar></MenuAppBar>
          <GridContainer></GridContainer>
          </Box>
      </Container>
    </React.Fragment>
  );
}

export default InicialTela;