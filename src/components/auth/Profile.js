import React, {Component} from 'react';
import HomeNav from "../home/HomeNav";

class Profile extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <HomeNav/>
                <h1>PROFILE</h1>
            </div>
        );
    }
}

export default Profile;
