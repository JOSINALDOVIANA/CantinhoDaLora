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
import { DadosContexto } from '../provider/dados';
const Img = styled('img')({

  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
function InicialTela() {
  const {page,setPage}=useContext(DadosContexto);
  const theme = useTheme();
  console.log(page)
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAppBar></MenuAppBar>
      <Container
        sx={{paddingTop:theme.spacing(5),backgroundColor:"#fff" }}
      >
        <Paper
          sx={{
            flexGrow: 1,
            height: "50%",
            borderRadius: 0,
            position: "relative",
           
            color:  "#000",
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(2),

          }}
          elevation={0}
        >
          <Img className='img' alt="torre"
            sx={{
              marginTop: theme.spacing(2),
              width: theme.spacing(30),
              height: theme.spacing(20)
            }}
            src={Torre}></Img>

          <Typography variant='p' component="h1"
            sx={{
              fontFamily: "Oswald",
              textAlign: "justify",

              fontWeight: "100"

            }} >
            Promoção do dia, Na Compra de duas torres de R$50,00 ganhe uma caipirinha.
          </Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg" sx={{
        backgroundColor: "#fff",
        color: "#000",
        paddingBottom: 5,
        paddingTop: theme.spacing(1),

      }}>
        <GridContainer></GridContainer>
      </Container>
    </React.Fragment>
  );
}

export default InicialTela;