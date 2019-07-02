import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    Row,
    Col,
    Button
} from 'reactstrap';

import '../../styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col md={6} lg={6} sm={12} className='pt-5'>
                        <h1 className='footer_logo'>STRONGLIVE ENTERTAINMENT</h1>

                        <div className="store-btns-container">
                            <Button className='store-btn'>
                                Google Play
                            </Button>

                            <Button className='store-btn app-store'>
                                AppStore
                            </Button>

                        </div>

                    </Col>

                    <Col md={6} lg={6} sm={12} className='pt-5'>
                        <Row>
                            <Col md={6} sm={6} lg={6}>
                                <div className="contact">
                                    <h3 className='footer_heading'>About</h3>

                                    <h5>
                                        <Link to='/about' className='linkStyle'>
                                            About Us
                                        </Link>
                                    </h5>
                                    <h5>
                                        <Link to='/contact' className='linkStyle'>
                                            Contact Us
                                        </Link>
                                    </h5>
                                </div>
                            </Col>

                            <Col md={6} sm={6} lg={6}>
                                <div className="doubts">
                                    <h3 className='footer_heading'>Legal</h3>

                                    <h5>Terms &amp; Conditions</h5>
                                    <h5>Privacy Policy</h5>
                                    <h5>Refund Policy</h5>
                                </div>
                            </Col>

                        </Row>
                    </Col>

                    <Col className='copyright'>
                        <hr/>

                        <p>Copyright &copy; 2017 - 2019 All Rights Reserved to <span>StrongLive</span></p>
                    </Col>

                </Row>
            </footer>
        );
    }
}

export default Footer;
