import React from 'react';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import { Outlet } from "react-router-dom";

const HeaderFooter = (props) => {
	return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
	);
};

export default HeaderFooter;