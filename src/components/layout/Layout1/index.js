import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from '@layout/Header'
import Footer from '@layout/Footer'

import { Backdrop } from "@mui/material";
import { CircularProgress } from '@mui/material';

function Layout() {
  const isLoading = useSelector(state => state.backdrop.isLoading);
  const backdropStr = useSelector(state => state.backdrop.backdropStr);

  return (
    <>
      <Header />
      <Backdrop
        sx={{ color: '#888', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <div
          className='flex-column-vh-center custom-card'
          style={{
            'width': '200px',
          }}
        >
          <CircularProgress color="inherit" />
          <div style={{
            'display': 'flex',
            'margin': '8px',
          }}>
            <span>{backdropStr}</span>  
          </div>
        </div>
      </Backdrop>
      <main style={{minHeight:"80vh"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout