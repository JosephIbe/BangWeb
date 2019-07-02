import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

class Nav extends Component {
    render() {
        return (
            <header>
                <div className='container-fluid p-0'>
                    <Navbar dark expand='md' className='header_nav'>
                        <NavbarBrand href='/' className='header_nav_link'>
                            StrongLive
                        </NavbarBrand>

                        <Nav className='ml-auto' navbar>

                            <NavItem>
                                <NavLink href='/login' className='header_nav_link'>
                                    Sign In
                                </NavLink>
                            </NavItem>

                        </Nav>

                    </Navbar>
                </div>
            </header>
        );
    }
}

export default Nav;
