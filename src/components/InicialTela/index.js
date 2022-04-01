import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuAppBar from '../AppBar/index';
import GridContainer from '../Grid/index'
import Torre from "../../assets/Torres.png"
import { ColorModeContext } from '../../routs';
import { Paper, styled, Typography, useTheme } from '@mui/material';
import { color } from '@mui/system';
const Img = styled('img')({

  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
function InicialTela() {

  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAppBar></MenuAppBar>
      <Paper
        sx={{
          flexGrow:1,          
          height: "50%",
          borderRadius: 0,
          position: "relative",
          backgroundColor: theme.palette.mode == "light" ? "#85cc9c" : "#33605a",
          color: theme.palette.mode == "light" ? "#ffffff" : "#ffffff",
          display: "flex",
          alignItems: "center",
          fontFamily: "Roboto",
          paddingTop:theme.spacing(10)
        }}
        elevation={0}
      >
        <Img className='img' alt="torre"
          sx={{
            marginTop: theme.spacing(5),
            width: theme.spacing(30),
            height: theme.spacing(20)
          }}
          src={Torre}></Img>

        <Typography variant='p' component="h1"
          sx={{
            border: 0,
            marginTop:theme.spacing(1),
            marginTop: theme.spacing(1),
            paddingRight: 2,
            fontFamily:"Oswald",
           
          }} >
          Promoção do dia, Na Compra de duas torres de R$50,00 ganhe uma caipirinha.
        </Typography>
      </Paper>
      <Container maxWidth="lg" sx={{
        backgroundColor: theme.palette.mode == "light" ? "#85cc9c" : "#33605a",
        color: theme.palette.mode == "light" ? "#4180ab" : "#8ab3cf",
        paddingBottom: 5,
        paddingTop: theme.spacing(10),
        
      }}>
        <GridContainer></GridContainer>
      </Container>
    </React.Fragment>
  );
}

export default InicialTela;