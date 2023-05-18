import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { changeUserPassword, changeUserNickname } from '@slice/userSlice';
import { showLoading, hideLoading } from "@slice/backdropSlice";

import TabPanel from "@components/parts/TabPanel";
import { Container, Tab, Tabs, Box, Typography, TextField, Button } from '@mui/material';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const { id } = useSelector(state => state.user);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      dispatch(showLoading("비밀번호 변경하는 중"))
      const data = new FormData(event.currentTarget);
      dispatch(changeUserPassword({userId:id, password: data.get('password')}))
    } catch (error) {
      alert(error)
    } finally {
      dispatch(hideLoading())
    }
  }
  const handleChangeNickname = async (event) => {
    event.preventDefault();
    try {
      dispatch(showLoading("닉네임 변경하는 중"))
      const data = new FormData(event.currentTarget);
      console.log({id, nickname: data.get('nickname')})
      dispatch(changeUserNickname({userId:id, nickname: data.get('nickname')}))
    } catch (error) {
      alert(error)
    } finally {
      dispatch(hideLoading())
    }
  }

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <input id="input"></input>
      <button onClick={handleTest}>test</button> */}
      <Container maxWidth="lg">
        <Box sx={{ p: 4 }}>
          <Typography variant="h4">
            내 정보 변경
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="닉네임 변경" {...a11yProps(0)} />
              <Tab label="프로필사진 변경" {...a11yProps(1)} />
              <Tab label="비밀번호 변경" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            닉네임 변경
            <Box component="form" onSubmit={handleChangeNickname} >
              <TextField
                margin="normal"
                required
                fullWidth
                name="nickname"
                label="nickname"
                type="nickname"
                id="nickname"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                변경
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            프로필사진 변경
          </TabPanel>
          <TabPanel value={value} index={2}>
            비밀번호 변경
            <Box component="form" onSubmit={handleChangePassword} >
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                변경
              </Button>
            </Box>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}