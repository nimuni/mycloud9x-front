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

  const VISITOR_ROLE = '';
  const USER_ROLE = 'user';
  const ADMIN_ROLE = 'admin';

  const userMenuArray = [
    {
      name: "Home",
      path: "/",
      condition: VISITOR_ROLE
    },
    {
      name: "Login",
      path: "/Login",
      condition: VISITOR_ROLE
    },
    {
      name: "User",
      path: "/User",
      condition: USER_ROLE
    },
  ]
  const adminMenuArray = [
    {
      name: "관리자페이지",
      path: "/admin",
      condition: ADMIN_ROLE
    },
    {
      name: "대시보드",
      path: "/admin/Dashboard",
      condition: ADMIN_ROLE
    },
    {
      name: "스토리지관리",
      path: "/admin/Storage",
      condition: ADMIN_ROLE
    },
    {
      name: "사용자목록",
      path: "/admin/UserList",
      condition: ADMIN_ROLE
    },
  ]
  const userMenuRender = () => {
    /* const filteredMenuArray = userMenuArray.filter((element) => {
      switch (role) {
        case value:
          
          break;
      
        default:
          break;
      }
    }) */
    return userMenuArray.map((element) => 
      <Link key={element.name} style={{"cursor":"pointer"}} onClick={() => handleMove(element.path)} color="inherit" underline="none" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    );
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyCloud9x
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {userMenuRender()}
          </Box>
          {(role === 'admin') && <Box sx={{ flexGrow: 0 }}>
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