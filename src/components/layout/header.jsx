import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/default.css'
import HeaderNavbar from 'components/headerNavbar';

function Header(props) {
    return (
      <header>
        <HeaderNavbar />
      </header>
    );
}

export default Header;