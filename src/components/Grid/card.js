import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid({img,desc,tamanho,valor,logos,bg}) {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                                
                position: "relative",
                backgroundColor: (theme) =>
                    bg?bg:theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >

            <Box sx={{ display: "flex",alignItems:"center",justifyContent:"space-around" }}>


                <Box>
                    
                        <Img alt={desc} src={img} sx={{ borderRadius:3,width:115,height:115 }} />
                    
                </Box>
                
                
                <Box sx={{display:"flex",justifyContent:"space-around"}}>

                    <Box sx={{ display: "flex", flexDirection: "column",marginLeft:2 }}>
                        <Typography sx={{fontWeight:"bold",textAlign:"center",maxWidth:300}} gutterBottom variant="subtitle1" component="div">
                            {desc} {tamanho} 
                        </Typography>
                       {logos.length>0 && (<Box>
                        <Typography sx={{fontWeight:"bold",fontSize:10,fontFamily:"sans-serif",marginBottom:2}}  variant="body2" gutterBottom>
                            Opções Disponiveis:
                            </Typography>
                            <Box sx={{ display: "flex", maxWidth: 100,maxHeight:10, justifyContent: "space-around",marginBottom:5,marginLeft:1,alignItems:"center" }}>

                            {logos.map(logo=>( <Img alt='imagem' src={logo} sx={{ height: "30%", width: "30%" }}></Img>))}
                            </Box>
                       </Box>)}
                        
                    </Box>



                    {bg?null:<Typography sx={{ position: "absolute", bottom:2, right: 5,color:"red",fontWeight:"bold" }} variant="subtitle1" component="div">
                        {"R$ "+valor}
                    </Typography>}
                </Box>




            </Box>


        </Paper>
    );
}
