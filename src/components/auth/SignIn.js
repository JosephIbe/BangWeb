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
import AuthNav from "./AuthNav";

class SignIn extends Component {

    pushHome = () => {
        this.props.history.push('/browse')
    };

    render() {
        return (

            <div>
                <AuthNav />

                <div className='auth'>
                    <Container fluid className='bg-image'>
                        <Row noGutters>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <div className='login d-flex align-items-center py-5'>
                                    <Container>
                                        <Row>
                                            <Col md={9} lg={8} sm={12} className='mx-auto'>
                                                <h3 className='login-heading mb-4'>
                                                    Welcome Back!
                                                </h3>

                                                <Form onSubmit={this.pushHome}>
                                                    <FormGroup>
                                                        <Label className='input-label' for='email'>Email Address</Label>
                                                        <Input
                                                            type='email'
                                                            id='email'
                                                            className='form-control'
                                                            placeholder='Email Address'
                                                        />
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label className='input-label' for='password'>Your Password</Label>
                                                        <Input
                                                            type='password'
                                                            id='password'
                                                            className='form-control'
                                                            placeholder='Password'
                                                        />
                                                    </FormGroup>

                                                    <Button
                                                        className=
                                                            " btn btn-lg btn-primary btn-block
                                                            btn-auth text-uppercase
                                                            font-weight-bold mb-2"
                                                        type="submit"
                                                    >
                                                        Sign in
                                                    </Button>

                                                    <div className="text-center">
                                                        <Link className="small"
                                                           to="/reset-password">
                                                            Forgot password?
                                                        </Link>
                                                    </div>

                                                </Form>

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

export default SignIn;