import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { useNavigate } from "react-router-dom";
import { login, logout } from '../../redux/slice/userSlice'

export default function CustomAppbar() {
  const navigate = useNavigate()
  const menuArray = [
    {
      name: "HOME",
      path: "/"
    },
    {
      name: "Login",
      path: "/Login"
    },
    {
      name: "Register",
      path: "/Register"
    },
    {
      name: "Test",
      path: "/Test"
    },
  ]
  const menuRender = () => {
    return menuArray.map((element) => (
      <Link key={element.name} onClick={() => handleMove(element.path)} color="inherit" underline="hover" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    ));
  };

  const handleMove = (to) => {
    navigate(to)
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Box sx={{ flexGrow: 8 }}>
            {menuRender()}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}