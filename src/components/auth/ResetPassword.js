import React, {Component} from 'react';

import {Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

import {validateAll} from 'indicative';
import AuthNav from "./AuthNav";
import Footer from "../extras/Footer";

class ResetPassword extends Component {

    state = {
        email: '',
        alertErrorMsg: `Invalid Email Or No Such User With Email Exists`,
        alertSuccessMsg: `An Email Has Been Sent to Your Registered Account with New Password.
        Please Login to Your Account and Change Password Immediately. Thank you.`,
        isAlertVisible: false
    };

    handleEmailChange = e => {
        this.setState({
          email: e.target.value
        })
    };

    timeOutAlert = () => {
        window.setTimeout( () => {
            this.setState(({
                isAlertVisible: false
            }), this.timeOutAlert)
        }, 5000);
        // this.clearForm();
    };

    showAlert = e => {
        e.preventDefault();
        this.setState(prevState => ({
            isAlertVisible: !prevState.isAlertVisible
        }), this.timeOutAlert);
    };

    clearForm = () => {
        this.setState({
            email: ''
        })
    };

    render() {

        let { email } = this.state;

        return (
            <div>
                <AuthNav/>

                <Container fluid style={{backgroundColor: '#2a2a2a'}}>

                    <Row className='justify-content-center reset-form-holder align-items-center'>

                        <Col sm={4} md={6} lg={6}>

                            <Alert
                                color={email === '' ? 'danger' : 'success'}
                                isOpen={this.state.isAlertVisible}
                            >
                                {
                                    email === '' ?
                                        this.state.alertErrorMsg :
                                        this.state.alertSuccessMsg
                                }
                            </Alert>

                            <Form className='form-container' onSubmit={this.showAlert}>

                                <h4 className='text-center'>Reset Your Password</h4>

                                <FormGroup>
                                    <Label className='input-label' for='email'>Email</Label>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='abc@example.com'
                                        id='email'
                                        className='form-input'
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />
                                    <p>Be sure to enter the correct email address</p>
                                </FormGroup>

                                <Button
                                    type='submit'
                                    className='btn-reset mt-3'
                                >
                                    Reset Password
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>

                <Footer/>

            </div>
        );

    }

}

export default ResetPassword;
