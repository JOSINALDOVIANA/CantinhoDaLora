import * as React from 'react';
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


import { BsFacebook,BsInstagram } from "react-icons/bs";

export default function MenuAppBar() {
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
      <AppBar position="static" sx={{backgroundColor:"#192a56",border:0,boxShadow:0}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
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
                <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} onClick={handleClose2}><BsInstagram></BsInstagram>Instagran</MenuItem>
                <MenuItem sx={{display:"flex",justifyContent:"space-around",width:"150px"}} onClick={handleClose2}><BsFacebook></BsFacebook>Facebook</MenuItem>
              </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"center",fontSize:30 }}>
            Cantinho Da Lora
          </Typography>
          {auth && (
            <div>
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton> */}
               {/* <Avatar
        alt="Remy Sharp"
        src={imagem}
        sx={{ width: 56, height: 56 }}
      /> */}
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
