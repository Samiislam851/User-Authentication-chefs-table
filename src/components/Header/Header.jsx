import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import NaviBar from '../NaviBar/NaviBar';

const Header = () => {
    const location = useLocation();
    const onHomePage = (location.pathname === '/' ? true : false);
    return (

            <NaviBar onHomePage={onHomePage}></NaviBar>
            
    );
};

export default Header;