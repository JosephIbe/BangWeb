import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';

import '../../styles/nav.css';

class AuthNav extends Component {

    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {

        return (
            <header>
                <Container fluid className='p-0'>
                    <Navbar dark expand='md' className='nav'>
                        <NavbarBrand href='/' className='nav_link nav_link_brand'>
                            STRONGLIVE ENTERTAINMENT
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} className='mr-2'/>

                        <Collapse navbar isOpen={this.state.isOpen}>

                            <Nav className='ml-auto' navbar>

                                <div className='auth_page_switch'>
                                    <NavLink
                                        to='/login'
                                        className='auth_switch_item_login'
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to='/register'
                                        className='auth_switch_item_register'
                                    >
                                        Register
                                    </NavLink>
                                </div>

                            </Nav>
                        </Collapse>

                    </Navbar>
                </Container>
            </header>
        );
    }

}

export default AuthNav;