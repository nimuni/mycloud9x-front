import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function CustomAppbar() {
  const navigate = useNavigate()
  const { id, role } = useSelector((state) => state.user)

  const userMenuArray = [
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
  const adminMenuArray = [
    {
      name: "HOME",
      path: "/"
    }
  ]
  const userMenuRender = () => {
    return userMenuArray.map((element) => (
      <Link key={element.name} style={{"cursor":"pointer"}} onClick={() => handleMove(element.path)} color="inherit" underline="none" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    ));
  };
  const adminMenuRender = () => {
    return adminMenuArray.map((element) => (
      <Link key={element.name} style={{"cursor":"pointer"}} onClick={() => handleMove(element.path)} color="inherit" underline="none" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    ));
  };
  const TestRender = () => {
    console.log(id)
    console.log(role)
    return (
      <div>
        {id}
        {role}
      </div>
    )
  }

  const handleMove = (to) => {
    navigate(to)
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Box sx={{ flexGrow: 8 }}>
            {userMenuRender()}
            {adminMenuRender()}
          </Box>
          {/* <div>
            {adminMenuRender()}
          </div> */}
          <div>
            1
            <TestRender/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}