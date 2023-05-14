import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GiCook } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';
import './NaviBar.css'

const NaviBar = ({ onHomePage }) => {
    const { user, logOut } = useContext(AuthContext);
 

    return (
        <Navbar expand="lg">
            <Container className='d-md-flex '>
                <NavLink to='/' className='text-dark opacity-75 fs-1 '> Chef's  <span className='text-warning table'>table  </span><GiCook className='mb-2' style={{ marginRight: '-10px' }} /> </NavLink>
                <div className='col-md-7 d-md-flex  '>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-white' />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>
                        <Nav className="me-auto d-md-flex justify-content-between  gap-3 w-100">
                            <div className='d-flex flex-column flex-md-row gap-3'>
                                <NavLink to='/' className={({ isActive }) =>
                                    isActive
                                        ? "active mt-2 text-success opacity-50 fw-semibold text-decoration-none "
                                        : "mt-2 text-dark opacity-75 text-decoration-none"
                                } >
                                    Home
                                </NavLink>


                                <NavLink to='/blogs' className={({ isActive }) =>
                                    isActive
                                        ? "active mt-2 text-success opacity-50 fw-semibold text-decoration-none "
                                        : "mt-2 text-dark opacity-75 text-decoration-none"
                                } >
                                    Blogs
                                </NavLink>


                            </div>
                            {!user ?
                                <> <div className='d-flex flex-column flex-md-row gap-3'>

                                    <NavLink to='/login' className={({ isActive }) =>
                                        isActive
                                            ? "active mt-2 text-success opacity-50 fw-semibold text-decoration-none "
                                            : "mt-2 text-dark opacity-75 text-decoration-none"
                                    }>
                                        Login
                                    </NavLink>
                                    <NavLink to='/signup' className={({ isActive }) =>
                                        isActive
                                            ? "active mt-2 text-success opacity-50 fw-semibold text-decoration-none "
                                            : "mt-2 text-dark opacity-75 text-decoration-none"
                                    }>
                                        Sign Up
                                    </NavLink>
                                </div></>
                                :
                                <>
                                    <div className='d-flex flex-column-reverse justify-content-center align-items-center flex-md-row gap-3'>

                                        <div className=' text-decoration-none text-dark opacity-75 btn'>
                                            <img src={user.photoURL} style={{ width: '30px', height: '30px' }} className=' rounded-circle' title={user.displayName} alt='photo unavailable' />
                                        </div>
                                        <NavLink onClick={logOut} className=' text-decoration-none text-dark opacity-75 '>Log  <AiOutlineLogout />ut </NavLink>

                                    </div></>}



                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default NaviBar;