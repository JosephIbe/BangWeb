import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class EmptyRoute extends Component {

    render() {
        return (
            <div>
                <div className='empty-txt'>
                    <h1>You Are Lost In The Woods. Click The Button Below to Find Your Way Home :)</h1>
                    <Button className='back-btn'>
                        <Link to='/' className='linkStyle'>
                            Back To Home Page
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }
}

export default EmptyRoute;
