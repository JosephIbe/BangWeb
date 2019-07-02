import React, {Component} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';

import Landing from './landing/Landing';
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ResetPassword from "./auth/ResetPassword";

import About from './contact/About';
import Contact from "./contact/Contact";

import Home from './home/Home';
import AllPopular from "./popular/AllPopular";
import AllDrama from "./drama/AllDrama";
import AllDocumentaries from "./documentaries/AllDocumentaries";
import Profile from './home/Profile';

import MovieDetails from "./home/MovieDetails";
// import WatchList from "./watchlist/WatchList";
// import EmptyRoute from './extras/EmptyRoute';

import {Provider} from 'react-redux';
import store from '../store';
import EmptyRoute from "./extras/EmptyRoute";

class App extends Component {

    render() {
        return (
            <div className='app_holder'>
                <Provider store={store}>
                    <Router>
                        <Switch>
                            {/* Render the login component alone if we're on /login */}
                            <Route exact path="/login" component={SignIn} />
                            <Route exact path="/register" component={SignUp}/>
                            <Route exact path="/reset-password" component={ResetPassword}/>

                            {/* Main Routes */}
                            <Route exact path="/browse" component={Home} />

                            <Route exact path='/popular/all' component={AllPopular}/>
                            <Route exact path='/documentaries/all' component={AllDocumentaries}/>
                            <Route exact path='/drama/all' component={AllDrama}/>

                            <Route exact path='/movie_detail' component={MovieDetails}/>
                            {/*<Route exact path='/my-watch-list' component={WatchList}/>*/}
                            <Route exact path="/profile" component={Profile} />

                            {/* Queries Routes */}
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />

                            {/* Otherwise, render the Landing component */}
                            <Route path="/" component={Landing} />
                            <Route render={ () => <EmptyRoute/>} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
