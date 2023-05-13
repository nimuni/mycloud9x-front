import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { changeUserPassword, changeUserNickname } from '@slice/userSlice';

const theme = createTheme();



export default function Login() {
  const dispatch = useDispatch();

  const { id, nickname } = useSelector(state => state.user);

  const handleTest = () => {
    console.log("call handleTest")
    let inputDom = document.getElementById("input");
    let userId = id
    let nickname = inputDom.value
    console.log(userId)
    console.log(nickname)
    dispatch(changeUserNickname({userId, nickname}))
  }

  return (
    <ThemeProvider theme={theme}>
      <input id="input"></input>
      <button onClick={handleTest}>test</button>
    </ThemeProvider>
  );
}