import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Col
} from 'reactstrap';

import MovieCard from '../extras/MovieCard';

class Documentaries extends Component {

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
            }
        ]
    };

    render() {
        return (
            <div className='popular-movies'>
                <Col lg={12} md={12} sm={3}>

                    <div className="section-header-holder">

                        <div className='section-header'>
                            <h3> Documentaries </h3>
                        </div>

                        <div className='section-header-more'>
                            <h6> View More </h6>
                        </div>

                    </div>

                    <div className='movies-row'>
                        {
                            this.state.items.splice(0,7).map((movie, position) => {
                                return <MovieCard key={position} title={movie.title} url={movie.url}/>
                            })
                        }
                    </div>
                </Col>
            </div>
        );
    }
}

export default Documentaries;