import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Card_Long({img,desc,tamanho,valor}) {
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
                    
                        <Img alt="torre" src={img} sx={{paddingRight:2, borderRadius:3,width:128,height:128 }} />
                    
                </div>
                <Divider orientation="vertical" flexItem />

                <div style={{display:"flex",justifyContent:"space-around"}}>

                    <div style={{ display: "flex", flexDirection: "column",marginLeft:9 }}>
                        <Typography sx={{fontWeight:"bold"}} gutterBottom variant="subtitle1" component="div">
                            {desc} 
                        </Typography>
                       <div>
                        <Typography sx={{fontWeight:"bold",fontSize:10,fontFamily:"sans-serif",marginBottom:2}}  variant="body2" gutterBottom>
                            Opções Disponiveis:
                            </Typography>
                            <div style={{ display: "flex",fontSize:9,marginLeft:9, maxWidth: 100, justifyContent: "space-around" }}>

                                
                                    {tamanho.map(t=>(t))}                     
                                
                                   
                                
                               
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
