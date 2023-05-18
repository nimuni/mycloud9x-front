import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axiosInstance from '@axios/axios'
import { showLoading, hideLoading } from "@slice/backdropSlice";


const checkIdDuplicate = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/duplicateIdCheck/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return true
  }
}

const checkEmailDuplicate = async (email) => {
  try {
    const response = await axiosInstance.get(`/user/duplicateEmailCheck/${email}`)
    return response.data
  } catch (error) {
    console.error(error)
    return true
  }
}

const signup = async (id, password, email) => {
  // 회원가입 API 요청
  try {
    const response = await axiosInstance.post('/user', { provider:'ownAPI', id, password, email })
    if(response.status === 201){
      return true
    } else {
      return false;
    }
  } catch (error) {
    console.error(error)
    throw new Error('회원가입 중 오류가 발생하였습니다.')
  }
}

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();   // 라우터용

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");

  const [idConflict, setIdConflict] = useState(false);
  const [emailConflict, setEmailConflict] = useState(false);
  const [error, setError] = useState(false);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };


  const handleIdBlur = async (event) => {
    try {
      const id = event.target.value;
      if (id === "") {
        return;
      }
      dispatch(showLoading("ID체크중"))
      const isIdDuplicate = await checkIdDuplicate(id)
      setIdConflict(isIdDuplicate)
      dispatch(hideLoading())
    } catch (error) {
      setError(error.message)
    }
  }

  const handleEmailBlur = async (event) => {
    try {
      const email = event.target.value;
      if (email === "") {
        return;
      }
      dispatch(showLoading("Email체크중"))
      const isEmailDuplicate = await checkEmailDuplicate(email)
      setEmailConflict(isEmailDuplicate)
      dispatch(hideLoading())
      console.log(emailConflict)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    dispatch(showLoading("회원가입중"))
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.')
      dispatch(hideLoading())
      return;
    }

    
    setError(null)

    // id, email 중복 여부 검증
    if (idConflict) {
      setError('이미 사용중인 아이디입니다.')
      dispatch(hideLoading())
      return
    }
    if (emailConflict) {
      setError('이미 사용중인 이메일입니다.')
      dispatch(hideLoading())
      return
    }

    try {
      // 회원가입 API 요청
      const signupResult = await signup(id, password, email)
      dispatch(hideLoading())
      if(signupResult){
        navigate("/Login")
      } 
    } catch (e) {
      setError('회원가입 중 오류가 발생하였습니다.')
    } finally {
      dispatch(hideLoading())
    }
  }

  return (
    <>
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onBlur={handleIdBlur}
                  onChange={handleIdChange}
                  error={idConflict}
                  helperText={idConflict?"아이디가 중복됩니다":""}
                  value={id}
                  autoComplete="id"
                  name="id"
                  required
                  fullWidth
                  id="id"
                  label="id"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handlePasswordChange}
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handlePasswordConfirmChange}
                  value={passwordConfirm}
                  error={password !== passwordConfirm}
                  helperText={password !== passwordConfirm?"비밀번호가 일치하지 않습니다.":""}
                  name="passwordConfirm"
                  label="PasswordConfirm"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onBlur={handleEmailBlur}
                  onChange={handleEmailChange}
                  error={emailConflict}
                  helperText={emailConflict?"이메일이 중복됩니다":""}
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="email 인증을 위해 메일 받기를 원합니다."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  계정이 이미 있나요? 로그인하세요
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}