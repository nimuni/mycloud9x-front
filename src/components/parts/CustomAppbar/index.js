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
      name: "Home",
      path: "/"
    },
    {
      name: "Login",
      path: "/Login"
    },
    {
      name: "User",
      path: "/User"
    },
  ]
  const adminMenuArray = [
    {
      name: "관리자페이지",
      path: "/admin"
    },
    {
      name: "대시보드",
      path: "/admin/Dashboard"
    },
    {
      name: "스토리지관리",
      path: "/admin/Storage",
    },
    {
      name: "사용자목록",
      path: "/admin/UserList"
    },
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
    return (
      <div>
        {id}
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
          <Box sx={{width: 1/8}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyCloud9x
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 8 }}>
            {userMenuRender()}
          </Box>
          {(role === 'admin') && <Box>
            {adminMenuRender()}
          </Box>}
          {id && <div>
            <TestRender/>
          </div>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}