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
      {/* <Box sx={{ flexGrow: 1, backgroundColor: theme.CL.colorPadrao, height: theme.spacing(40),display:"flex",justifyContent:"space-evenly",alignItems:"center" }} elevation={5} >
        <Img className='img' alt="torre" sx={{ marginTop: theme.spacing(10),width:theme.spacing(50),height:theme.spacing(40) }} src={Torre}></Img>
        <Typography
          sx={{
            color: theme.CL.text, border: 0,
            backgroundColor: theme.CL.colorPadrao,
            // width: theme.spacing(50),
            fontFamily: 'monospace',
            fontWeight:"bold",
            fontSize:15,
            marginTop:theme.spacing(8),
            color:theme.CL.text,
            paddingRight:2

            

          }} >Promoção do dia Na Compra de duas torres de R$50,00 ganhe uma caipirinha. </Typography>
      </Box> */}
      <Paper
        sx={{
          width: "100%",
          height: "50%",          
          position: "relative",
          backgroundColor: theme.CL.colorPadrao,
          display:"flex",
          alignItems:"center"
        }}
        elevation={0}
      >
<Img className='img' alt="torre" sx={{ 
  marginTop: theme.spacing(5),
  width:theme.spacing(30),height:theme.spacing(20) }} src={Torre}></Img>
        <Typography
          sx={{
            color: theme.CL.text,
             border: 0,            
            // width: theme.spacing(50),
            fontFamily: 'Pacifico',
            // fontWeight:"bold",
            fontSize:30,
            marginTop:theme.spacing(1),
            color:theme.CL.text,
            paddingRight:2,


            

          }} >Promoção do dia Na Compra de duas torres de R$50,00 ganhe uma caipirinha. </Typography>
      </Paper>
      <Container maxWidth="lg" sx={{ backgroundColor: theme.CL.colorPadrao, paddingBottom: 5, paddingTop: 1 }}>
        <GridContainer></GridContainer>
      </Container>
    </React.Fragment>
  );
}

export default InicialTela;