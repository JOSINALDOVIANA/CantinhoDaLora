import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ComplexGrid from './card';
import logoHeineken from '../../assets/heineken.svg';
import logostella from '../../assets/stella.svg';
import logoskolsense from '../../assets/skolsense.jpg';
import logoskolgt from '../../assets/skolgt.jpg';
import logoBudwaiser from '../../assets/budweiser.jpg';
import logoskol from '../../assets/skol.svg'
import logoitaipava from '../../assets/itaipava.svg'
import logobrahma from '../../assets/brahma.svg'
import imgitaipava269 from '../../assets/itaipava269.jpg';
import imgAbacaxi from '../../assets/abacaxi.jpg';
import imgItaipava350 from '../../assets/itaipava350.jpg';
import imgItaipavalitro from '../../assets/itaipavalitro.jpg';
import imglongNeks from '../../assets/longneks.png'
import imglongSkol from '../../assets/long_skol.jpg'
import imgtorre from '../../assets/torre.jpg'
import imgPromo from '../../assets/promoção.jpg'
import imgSkolPilse from '../../assets/skolpilse.jpg'
import imgSkolpm from '../../assets/skol_pm.jpg'
import imgSkolpm269 from '../../assets/skol_pm_269.jpg'

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
         <ComplexGrid bg={"#fff"} img={imgPromo} desc="Promoção do dia: Compre duas torres ganhe uma caipirinha" tamanho="" valor="0,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgtorre} desc="Torre" tamanho="3.5 L" valor="50,00" logos={[logoskol,logoitaipava,logobrahma]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgtorre} desc="Torre" tamanho="2.5 L" valor="40,00" logos={[logoskol,logoitaipava,logobrahma]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imglongNeks} desc="Long Neks" tamanho="330 ML" valor="12,00" logos={[logoHeineken,logostella,logoBudwaiser]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imglongSkol} desc="Skol " tamanho="330 ML" valor="15,00" logos={[logoskolgt,logoskolsense]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgitaipava269} desc="Itaipava" tamanho=" 269 ML" valor="5,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgItaipava350} desc="Itaipava" tamanho=" 350 ML" valor="5,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgItaipavalitro} desc="Itaipava" tamanho=" 1 L" valor="15,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgAbacaxi} desc="Abacaxi" tamanho="" valor="12,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgSkolPilse} desc="Skol Pilse" tamanho="1 L" valor="15,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgSkolpm} desc="Skol Puro Malte" tamanho="1 L" valor="15,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgSkolpm} desc="Skol Puro Malte" tamanho="600 ML" valor="10,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgSkolpm269} desc="Skol Puro Malte" tamanho="269 ML" valor="5,00" logos={[]} ></ComplexGrid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
         <ComplexGrid img={imgSkolpm269} desc="Skol Puro Malte" tamanho="350 ML" valor="5,00" logos={[]} ></ComplexGrid>
        </Grid>
        
        
        
        
      </Grid>
    </Box>
  );
}
