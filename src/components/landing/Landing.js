import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row} from 'reactstrap';
import Footer from "../extras/Footer";
import AuthNav from "../auth/AuthNav";

import '../../styles/landing.css';

class Landing extends Component {

    state = {
        isOpen: false
    };

    registerUser = () => {
        this.props.history.push('/register')
    }

    render() {

        return (
            <div>
                <AuthNav/>
                <main>
                    <div className='landing'>

                        <Row className='intro-text '>
                            <Col md={12} sm={12} className='text-center header_content'>

                                <h1>Watch Regional Content, Documentaries, Series And Original Content Online</h1>

                                <h4>Discover Mozambican Cinema and Culture From Your Home, On Mobile And Desktop
                                    Devices</h4>

                                <Button className='cta-btn' onClick={this.registerUser}>
                                    Get Started
                                </Button>

                            </Col>

                        </Row>

                    </div>

                    <Footer/>
                </main>
            </div>
        );
    }
}

export default Landing;