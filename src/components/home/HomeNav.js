import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    NavItem,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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

    dropdownToggle = e => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
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
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/browse" className='nav_link nav_link_brand'>
                        STRONGLIVE ENT
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle}/>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className='nav_link'>
                                <NavLink href="#">Drama</NavLink>
                            </NavItem>

                            <NavItem className='nav_link'>
                                <NavLink href="#">Documentaries</NavLink>
                            </NavItem>

                            <NavItem className='nav_link'>
                                <NavLink href="#">Recent Additions</NavLink>
                            </NavItem>

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
                                        <li>
                                            <NavLink href='/profile'>
                                                <img src={ProfileAvatar} alt="profile_avatar" style={avatarStyle}/>
                                                &nbsp;My Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink href='/register'>Help Center</NavLink>
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
