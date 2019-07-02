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

        return (

            <header>
                <Container fluid className='p-0'>
                    <Navbar dark expand='md' className='nav'>
                        <NavbarBrand href='/browse' className='nav_link nav_link_brand'>
                            STRONGLIVE ENTERTAINMENT
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} className='mr-2'/>

                        <Collapse navbar isOpen={this.state.isOpen}>

                            <Nav className='ml-auto' navbar>

                                <NavItem>
                                    <NavLink href='/drama/all' className='nav_link'>
                                        Drama
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href='/documentaries/all' className='nav_link'>
                                        Documentaries
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <div className='nav_link'>
                                        Profile
                                    </div>
                                </NavItem>

                            </Nav>
                        </Collapse>

                    </Navbar>
                </Container>
            </header>

        );
    }
}

export default HomeNav;
