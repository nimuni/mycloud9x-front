import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function CustomAppbar() {
  const navigate = useNavigate()
  const { role } = useSelector((state) => state.user)

  const VISITOR_ROLE = '';
  const USER_ROLE = 'user';
  const ADMIN_ROLE = 'admin';

  const userMenuArray = [
    {
      name: "드라이브",
      path: "/Drive",
      role: [USER_ROLE, ADMIN_ROLE]
    },
  ]
  const adminMenuArray = [
    {
      name: "관리자페이지",
      path: "/admin",
      role: [ADMIN_ROLE]
    },
    {
      name: "대시보드",
      path: "/admin/Dashboard",
      role: [ADMIN_ROLE]
    },
    {
      name: "스토리지관리",
      path: "/admin/Storage",
      role: [ADMIN_ROLE]
    },
    {
      name: "사용자목록",
      path: "/admin/UserList",
      role: [ADMIN_ROLE]
    },
  ]
  const myMenuArray = [
    {
      name: "마이페이지",
      path: "/User",
      role: [USER_ROLE, ADMIN_ROLE]
    },
    {
      name: "Login",
      path: "/Login",
      role: [VISITOR_ROLE]
    },
    {
      name: "Logout",
      path: "/Logout",
      role: [USER_ROLE, ADMIN_ROLE]
    },
  ]
  const menuFilter = (menuArray) => {
    return menuArray.filter((element) => {
      return element.role.includes(role) ? true : false;
    })
  }
  const userMenuRender = () => {
    return menuFilter(userMenuArray).map((element) => 
      <Link key={element.name} style={{"cursor":"pointer"}} onClick={() => handleMove(element.path)} color="inherit" underline="none" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    );
  };
  const adminMenuRender = () => {
    return menuFilter(adminMenuArray).map((element) => (
      <Link key={element.name} style={{"cursor":"pointer"}} onClick={() => handleMove(element.path)} color="inherit" underline="none" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    ));
  };
  const myMenuRender = () => {
    return menuFilter(myMenuArray).map((element) => (
      <Link key={element.name} style={{"cursor":"pointer"}} onClick={() => handleMove(element.path)} color="inherit" underline="none" sx={{marginX: '8px'}}>
        {element.name}
      </Link>
    ));
  };

  const handleMove = (to) => {
    navigate(to)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{"cursor":"pointer"}} onClick={() => handleMove('/')} color="inherit" underline="none" sx={{marginX: '8px'}}>
                MyCloud9x
              </Link>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {userMenuRender()}
          </Box>
          {(role === 'admin') && <Box sx={{ flexGrow: 0, marginX: '24px'}}>
            {adminMenuRender()}
          </Box>}
          <div>
            {myMenuRender()}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}