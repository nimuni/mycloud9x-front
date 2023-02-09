import React from 'react';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import ResponsiveAppBar from 'components/layout/appbar';
import { Outlet } from "react-router-dom";

const HeaderFooter = (props) => {
	return (
    <div>
      <Header />
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </div>
	);
};

export default HeaderFooter;