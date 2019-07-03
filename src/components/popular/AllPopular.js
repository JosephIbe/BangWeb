import React, {Component} from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import HomeNav from '../home/HomeNav';
import MovieCard from "../extras/MovieCard";
import Footer from "../extras/Footer";

// import '../../styles/staggered_grid.css'

class AllPopular extends Component {

    state = {
        items: [
            {
                url: 'https://tinyurl.com/y5nkyfy8',
                title: 'Dark Phoenix'
            },
            {
                url: 'https://tinyurl.com/y5v8udku',
                title: 'Aladdin'
            },
            {
                url: 'https://tinyurl.com/yybu4u5o',
                title: 'Glass'
            },
            {
                url: 'https://tinyurl.com/yxtrztke',
                title: 'Fighting With My Family'
            },
            {
                url: 'https://tinyurl.com/y5c3vacx',
                title: 'Alita: Battle Angel'
            },
            {
                url: 'https://tinyurl.com/y5nkyfy8',
                title: 'Dark Phoenix'
            },
            {
                url: 'https://tinyurl.com/y5v8udku',
                title: 'Aladdin'
            },
            {
                url: 'https://tinyurl.com/yybu4u5o',
                title: 'Glass'
            },
            {
                url: 'https://tinyurl.com/yxtrztke',
                title: 'Fighting With My Family'
            },
            {
                url: 'https://tinyurl.com/y5nkyfy8',
                title: 'Dark Phoenix'
            },
            {
                url: 'https://tinyurl.com/y5v8udku',
                title: 'Aladdin'
            },
            {
                url: 'https://tinyurl.com/yybu4u5o',
                title: 'Glass'
            },
            {
                url: 'https://tinyurl.com/yxtrztke',
                title: 'Fighting With My Family'
            },
            {
                url: 'https://tinyurl.com/y5c3vacx',
                title: 'Alita: Battle Angel'
            },
            {
                url: 'https://tinyurl.com/y5nkyfy8',
                title: 'Dark Phoenix'
            },
            {
                url: 'https://tinyurl.com/y5v8udku',
                title: 'Aladdin'
            },
            {
                url: 'https://tinyurl.com/yybu4u5o',
                title: 'Glass'
            },
            {
                url: 'https://tinyurl.com/yxtrztke',
                title: 'Fighting With My Family'
            }
        ]
    };

    render() {
        return (
            <div>
                {/*<HomeNav/>*/}
                <Container fluid>
                    <Row>
                        <Col lg={5} sm={2} md={4}>
                            <div className=''>
                                {
                                    this.state.items.splice(0,5).map((movie, index) => {
                                        return <MovieCard {...movie} key={index}/>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

AllPopular.propTypes = {};

export default AllPopular;
