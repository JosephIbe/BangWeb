import React, {Component} from 'react';

import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
} from 'reactstrap';

import HomeNav from "../home/HomeNav";

import '../../styles/feedback.css';
import Footer from "../extras/Footer";

class Contact extends Component {

    state = {
        isSubmitEnabled: false,
        fullName: '',
        email: '',
        issueType: '',
        queryMessage: ''
    };

    handleInputChange = (e) => {

    };

    sendFeedBack = e => {
        e.preventDefault()
    };

    render() {

        return (
            <React.Fragment>
                <HomeNav/>
                <div className='contact_us'>
                    <div className="form_body">
                        <h3>
                            Contact&nbsp;
                            <span>us</span>
                        </h3>
                        <p>Reach out to us for any queries, suggestions or feedback</p>

                        <Form>
                            <FormGroup>
                                <Input
                                    type='text'
                                    name='fullName'
                                    value={this.state.fullName}
                                    placeholder='Full Name'
                                    onChange={this.handleInputChange}
                                    className='feedback-input'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type='text'
                                    name='email'
                                    value={this.state.email}
                                    placeholder='Email Address'
                                    onChange={this.handleInputChange}
                                    className='feedback-input'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label className='text-white'>Select One Issue At a Time</Label>
                                <Input
                                    type='select'
                                    name='issueType'
                                    value={this.state.issueType}
                                    onChange={this.handleInputChange}
                                >
                                    <option>Issue One</option>
                                    <option>Issue Two</option>
                                    <option>Issue Three</option>
                                </Input>

                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type='textarea'
                                    value={this.state.queryMessage}
                                    placeholder='Tell us about your issue'
                                    onChange={this.handleInputChange}
                                    className='feedback-input'
                                />
                            </FormGroup>

                            <Button
                                className='feedback-btn'
                                disabled
                                type='submit'
                            >
                                Submit
                            </Button>

                        </Form>

                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Contact;