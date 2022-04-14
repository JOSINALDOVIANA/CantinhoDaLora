import  React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import imagem from "../../assets/cl.jpeg"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { BsFacebook,BsInstagram,BsWhatsapp } from "react-icons/bs";
import { ColorModeContext } from '../../routs';
import {  Avatar, useTheme } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { textAlign } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import cant from "../../assets/CANTINHO DA LORA2.png"
export default function MenuAppBar() {
  const colorMode = React.useContext(ColorModeContext);
  
  const theme=useTheme();
  const [auth, setAuth] = React.useState(true);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {      
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event) => {      
    setAnchorE2(event.currentTarget);
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  return (
    <Box sx={{ flexGrow: 1, }}>
    
      <AppBar position="static"  sx={{
         backgroundColor: "#74BDCB",
         color:"#FFFFFF",
         boxShadow:0,
         textAlign:"center",
         padding: 1,
         
         }}>
        <Toolbar sx={{display:"flex" ,
         justifyContent:"space-between"}}>
        {/* <Typography  variant="h4" component="p" sx={{ 
            flexGrow: 1,
            textAlign:"initial",  
            fontFamily:"Osvald",
            }}>
            Cantinho Da Lora
          </Typography> */}
          {/* <Avatar
        alt="Remy Sharp"
        src={imagem}
       
      /> */}
        
        
          <img
            src={`${cant}`}            
            alt="logo"
            loading="lazy"
            style={{width:"15%"}}
          />
       
    
          <IconButton
            size="large"
            edge="start"
            color='inherit'
            aria-label="menu"
            sx={{ mr: 2}}
            onClick={handleMenu2}
          >
            <MenuIcon/>
          </IconButton>

          <Menu
                id="menu-appbar"
                anchorEl={anchorE2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorE2)}
                onClose={handleClose2}
               
              >
                <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} onClick={()=>{window.open("http://www.instagran.com/cantinho_dalora");handleClose2()}}><BsInstagram></BsInstagram>Instagran</MenuItem>
                <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} onClick={()=>{window.open("https://www.facebook.com/cantinhodalora");handleClose2()}}><BsFacebook></BsFacebook>Facebook</MenuItem>
                <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} onClick={()=>{window.open("https://api.whatsapp.com/send?phone=+5596981325410&text=Oi");handleClose2()}}><BsWhatsapp></BsWhatsapp>Whatsap</MenuItem>
                {/* <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} onClick={colorMode.toggleColorMode} >{theme.palette.mode === 'dark' ? <Brightness7Icon size={10} sx={{marginLeft:0}} /> : <Brightness4Icon size={10} sx={{marginLeft:0}}/>}Tema</MenuItem> */}
                
              </Menu>

         
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
