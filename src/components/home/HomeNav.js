import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {
    Collapse, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,
    UncontrolledDropdown
} from 'reactstrap';

import ProfileAvatar from '../../assets/anime3.png';

import '../../styles/nav.css';

class HomeNav extends Component {

    state = {
        isOpen: false,
        dropdownOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {

        const avatarStyle = {
            borderRadius: '30px',
            height: '30px',
            width: '30px'
        };

        const dStyle = {
            backgroundColor: '#343a40'
        };

        return (

            <div>
                <Navbar color="dark" dark expand="md" className='nav'>
                    <NavbarBrand href="/browse" className='nav_link_brand'>
                        STRONGLIVE ENT
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle}/>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <ul className='navbar'>
                                <li className='nav-item nav_link'>
                                    <NavLink
                                        href="#"
                                        className='nav_link'
                                    >
                                        Drama
                                    </NavLink>
                                </li>

                                <li className='nav-item nav_link'>
                                    <NavLink
                                        href="#"
                                        className='nav_link'
                                    >
                                        Documentaries
                                    </NavLink>
                                </li>

                                <li className='nav-item nav_link'>
                                    <NavLink
                                        href="#"
                                        className='nav_link'
                                    >
                                        Recent Additions
                                    </NavLink>
                                </li>
                            </ul>

                        </Nav>

                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>
                                    <NavItem className='d-flex nav_link'>
                                        Account
                                    </NavItem>
                                </DropdownToggle>
                                <DropdownMenu right style={dStyle}>
                                    <ul>
                                        <li className='nav-item'>
                                            <NavLink to='/profile' className='text-center nav_link'>
                                                {/*<img src={ProfileAvatar} alt="profile_avatar" style={avatarStyle}/>*/}My Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='#' className='text-center nav_link'>
                                                Help Center
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/' className='text-center nav_link'>
                                                Sign Out
                                            </NavLink>
                                        </li>
                                    </ul>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>

        );

    }
}

export default HomeNav;
