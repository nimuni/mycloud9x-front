import React from 'react';
import { Outlet } from 'react-router-dom';

const Profile = (props) => {
	return (
    <div>
      <h3>안녕하세요. Profile부모페이지 입니다.</h3>
      <Outlet />
    </div>
	);
};

export default Profile;