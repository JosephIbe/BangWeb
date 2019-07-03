import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    Container,
    Row
} from 'reactstrap';

import HomeNav from "../home/HomeNav";
import Footer from "../extras/Footer";

import '../../styles/feedback.css';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <HomeNav/>
                <div className="about_us">
                    <div className="holder">
                        <Container>
                            <h3>
                                About&nbsp;<span className='about-span'>US</span>
                            </h3>
                        </Container>
                    </div>

                    <div className="desc">
                        <Container>
                            <h4>Get Hooked With Mozambique's Biggest Entertainment Producer</h4>

                            <p>
                                StrongLive is  video streaming service that offers a wide variety of genres from drama,
                                horror, suspense, thriller to comedy & beyond. Binge watch from our collection of web series, movies,
                                StrongLive Originals and more in your regional language. &nbsp;
                                <span className='free-trial'>
                                    {/*Start a Free Trial and your first video will be on us.*/}
                                    {/*<Link to='/register' className='linkStyle'>*/}
                                        Continue With Us or Start Enjoying Best Africanized Content
                                    {/*</Link>*/}
                                </span> &nbsp;
                                {/*Enjoy unlimited video streaming at a pocket friendly price for 30 days.*/}
                            </p>

                            <Row>
                                <div className="features">

                                    <p className='expect'>What to Expect From Us</p>

                                    <p>
                                        <i class="fas fa-check"></i> &nbsp;
                                        Unlimited Streaming for a month with one time payment
                                    </p>

                                    <p>
                                        <i class="fas fa-check"></i> &nbsp;
                                        Consistent Quality Content
                                    </p>

                                    <p>
                                        <i class="fas fa-check"></i> &nbsp;
                                        Device Availability: With Our Android App, you only need to sign in to access all of our content.
                                    </p>

                                    <p>
                                        <i class="fas fa-check"></i> &nbsp;
                                        Specialists in Film Production, Short Movie Clips, Lighting and Events (Indoor and Outdoor)
                                    </p>

                                    <p>
                                        <i class="fas fa-check"></i> &nbsp;
                                        Dedicated Team Members With Output Standard of High Quality In Entertainment Industry
                                    </p>

                                </div>
                            </Row>

                        </Container>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;