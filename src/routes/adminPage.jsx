import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminPage = (props) => {
	return (
    <div>
      <h3>안녕하세요. Admin페이지 입니다.</h3>
      <Outlet />
    </div>
	);
};

export default AdminPage;