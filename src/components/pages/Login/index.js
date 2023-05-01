import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '@axios/axios'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../parts/Copyright';
import { setUser } from '@slice/slice/userSlice';

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();   // 라우터용

  const { user } = useSelector(
    (state) => state.user
  )

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      id: data.get('id'),
      password: data.get('password'),
    }
    try {
      setIsLoading(true)
      const loginResult = await axiosInstance.post(`/login`, formData)
      if(loginResult.status == 200){
        const accessToken = loginResult.data.Authorization.split(" ")[1];
        localStorage.setItem("accessToken", accessToken);

        const getUserResult = await axiosInstance.get(`/user/${formData.id}`)
        if(getUserResult.status == 200){
          dispatch(setUser(getUserResult.data))
          navigate('/');
        } else {
          alert("사용자 정보를 얻어올 수 없음")
        }
      } else {
        console.log(`result.status=${loginResult.status}`)
        alert("로그인 실패1. 재로그인 바랍니다.")
      }
    } catch (error) {
      console.log(error)
      alert("로그인 실패2. 재로그인 바랍니다.")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="id"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <a href='#' style={{marginRight:"8px"}}>
                  ID찾기
                </a>
                <a href='#'>
                  PW찾기
                </a>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}