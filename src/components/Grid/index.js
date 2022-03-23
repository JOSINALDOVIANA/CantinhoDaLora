import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ComplexGrid from './card_torres';
import imgHeineken from '../../assets/heineken.svg';
import imgAbacaxi from '../../assets/abacaxi.jpg';
import imgItaipava from '../../assets/itaipava.svg';
import Card_Long from './card_long';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridContainer() {
  return (
    <Box sx={{ flexGrow: 1,marginTop:5,marginBottom:2 }}>
      <Grid container  alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid tamanho="3.5" valor="50,00" ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid tamanho="2.5" valor="45,00"></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <Card_Long img={imgHeineken} desc="Heineken" tamanho={["330 ML"]} valor="12,00"></Card_Long>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <Card_Long img={imgAbacaxi} desc="Abacaxi" tamanho={["Abacaxi Temperado;"," Abacaxi Normal;"]} valor="12,00 ~ 10,00"></Card_Long>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <Card_Long img={imgItaipava} desc="Itaipava" tamanho={["350 ML;"," 269 ML;", " Garrafa 1 L"]} valor="5,00 ~ 4,00 ~ 15,00"></Card_Long>
        </Grid>
        
        
        
      </Grid>
    </Box>
  );
}
