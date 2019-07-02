import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row} from 'reactstrap';
import Footer from "../extras/Footer";
import AuthNav from "../auth/AuthNav";

class Landing extends Component {

    state = {
        isOpen: false
    };

    render() {

        return (
            <div>
                <AuthNav/>
                <main>
                    <div className='landing'>

                        <Row className='intro-text pt-lg-5'>
                            <Col md={12} sm={12} className='text-center header_content'>

                                {/*<img alt='Logo' width='100px' height='100px'/>*/}

                                <h1>Watch Regional Content, Documentaries, Series And Original Content Online</h1>

                                <h4>Discover Mozambican Cinema and Culture From Your Home, On Mobile And Desktop Devices</h4>

                                <Button className='cta-btn'>
                                    <Link to='/register' className='linkStyle'>
                                        Get Started Now
                                    </Link>
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