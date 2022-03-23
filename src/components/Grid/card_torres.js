import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import torre from '../../assets/torre.jpg'
import skol from '../../assets/skol.svg'
import itaipava from '../../assets/itaipava.svg'
import brahma from '../../assets/brahma.svg'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid({tamanho,valor}) {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
               
                
                position: "relative",
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >

            <div style={{ display: "flex" }}>


                <div>
                    
                        <Img alt="torre" src={torre} sx={{ borderRadius:3,width:128,height:128 }} />
                    
                </div>
                <Divider orientation="vertical" flexItem />
                
                <div style={{display:"flex",justifyContent:"space-around"}}>

                    <div style={{ display: "flex", flexDirection: "column",marginLeft:9 }}>
                        <Typography sx={{fontWeight:"bold"}} gutterBottom variant="subtitle1" component="div">
                            Torre de {tamanho} L
                        </Typography>
                       <div>
                        <Typography sx={{fontWeight:"bold",fontSize:10,fontFamily:"sans-serif",marginBottom:2}}  variant="body2" gutterBottom>
                            Opções Disponiveis:
                            </Typography>
                            <div style={{ display: "flex", maxWidth: 150, justifyContent: "space-around" }}>

                                <Img alt='Skol' src={skol} sx={{ height: 40, width: 40 }}></Img>
                                <Img alt='itaipava' src={itaipava} sx={{ height: 40, width: 40 }}></Img>
                                <Img alt='brahma' src={brahma} sx={{ height: 40, width: 40 }}></Img>
                            </div>
                       </div>
                        
                    </div>



                    <Typography sx={{ position: "absolute", bottom:2, right: 5,color:"red",fontWeight:"bold" }} variant="subtitle1" component="div">
                        {"R$ "+valor}
                    </Typography>
                </div>




            </div>


        </Paper>
    );
}
