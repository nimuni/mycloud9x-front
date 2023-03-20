import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
	return (
    <div>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to='/'>Main</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/Register'>Register</Link>
      <Link to='/Drive'>Drive</Link>
      <Link to='/Profile'>Profile</Link>
      <Link to='/Admin'>Admin</Link>
      <Link to='/Password'>Password</Link>
    </div>
	);
};

export default MainPage;