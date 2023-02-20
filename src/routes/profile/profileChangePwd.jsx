import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileChangePwd = (props) => {
	return (
    <div>
      <h3>안녕하세요. profileChangePwd페이지 입니다.</h3>
      <Outlet />
    </div>
	);
};

export default ProfileChangePwd;