import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

import { changeUserPassword, changeUserNickname } from '@slice/userSlice';

// https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  /* palette: { // 자주사용하는 컬러를 palette로 설정한다.
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    typography: { // 폰트설정
        fontFamily: ["Noto Sans KR", "sans-serif", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"].join(",")
    }
  }, */
});



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