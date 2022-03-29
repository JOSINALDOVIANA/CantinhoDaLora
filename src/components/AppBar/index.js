import  React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { BsFacebook,BsInstagram,BsWhatsapp } from "react-icons/bs";
import { ColorModeContext } from '../../routs';
import { Avatar, useTheme } from '@mui/material';
import ButtonThemeComponent from './buttontheme';
import imagem from "../../assets/cl2.jpeg"
export default function MenuAppBar() {
  const {toggleColorMode}=useContext(ColorModeContext);
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
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="Tema"
            />
          }
          label={auth ? 'Ligh' : 'Dark'}
        />
      </FormGroup> */}
      <AppBar position="fixed" sx={{backgroundColor: theme.palette.mode=="light"?theme.CL.colorPadrao:"#1A2027"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            
            aria-label="menu"
            sx={{ mr: 2,color:theme.CL.text }}
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
                <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} ><ButtonThemeComponent></ButtonThemeComponent>Thema</MenuItem>
                
              </Menu>

          <Typography  variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"center",fontSize:30,color:theme.CL.text }}>
            Cantinho Da Lora
          </Typography>
          <Avatar
        alt="Remy Sharp"
        src={imagem}
       
      />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
