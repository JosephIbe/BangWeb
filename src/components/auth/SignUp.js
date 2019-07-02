import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

import '../../styles/auth.css';
import Footer from "../extras/Footer";
import CheckOut from "./CheckOut";
import AuthNav from "./AuthNav";

class SignUp extends Component {

    state = {
        isModalOpen: false
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    };

    pushHome = () => {
        this.props.history.push('/browse')
    };

    render() {
        return (

            <div>
                <AuthNav/>
                <div className='auth'>
                    <Container fluid className='bg-image'>
                        <Row className='row'>

                            <Col md={{size: 6, offset: 3}} lg={6}>
                                <div className='login d-flex align-items-center py-5'>
                                    <Container>
                                        <Row noGutters>
                                            <Col md={12} lg={8} sm={12} className='mx-auto'>
                                                <div>
                                                    <h3 className='login-heading mb-4 text-center'>
                                                        Create Your &nbsp;
                                                        <span style={{color: 'red', fontWeight: 'bold'}}>
                                                StrongLiv
                                            </span>
                                                        &nbsp;Account!
                                                    </h3>

                                                    <Form onSubmit={this.pushHome}>

                                                        <FormGroup>
                                                            <Label className='input-label' for='email'>Email
                                                                Address</Label>
                                                            <Input
                                                                type='email'
                                                                id='email'
                                                                className='form-control'
                                                                placeholder='Email Address'
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <Label className='input-label' for='password'>Your
                                                                Password</Label>
                                                            <Input
                                                                type='password'
                                                                id='password'
                                                                className='form-control'
                                                                placeholder='Password'
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <Label className='input-label' for='password2'>Confirm
                                                                Password</Label>
                                                            <Input
                                                                type='password'
                                                                id='password2'
                                                                className='form-control'
                                                                placeholder='Confirm Password'
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <Label className='input-label' for='phone'>Phone
                                                                Number</Label>
                                                            <Input
                                                                type='phone'
                                                                id='phone'
                                                                className='form-control'
                                                                placeholder='Phone Number'
                                                            />
                                                        </FormGroup>

                                                        <Button
                                                            className="
                                                btn
                                                btn-lg
                                                btn-primary
                                                btn-block
                                                btn-auth
                                                text-uppercase
                                                font-weight-bold
                                                mb-2
                                                mt-5"
                                                            type="submit"
                                                        >
                                                            Sign Up
                                                        </Button>

                                                        <div className="text-center mt-4">
                                                            <p className="small-text">
                                                                Have An Account? &nbsp;
                                                                <span>
                                                        <Link to='/login'>Login Now</Link>
                                                    </span>
                                                            </p>
                                                        </div>

                                                    </Form>

                                                </div>

                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default SignUp;