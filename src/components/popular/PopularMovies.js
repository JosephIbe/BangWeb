import React, {Component} from 'react';

import {
    Col
} from 'reactstrap';

import '../../styles/home_content.css';
import MovieCard from "../extras/MovieCard";

class PopularMoviesSub extends Component {

    state = {
        items: [
            {
                url: 'https://tinyurl.com/y5nkyfy8',
                title: 'Dark Phoenix',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/y5v8udku',
                title: 'Aladdin',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/yybu4u5o',
                title: 'Glass',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/yxtrztke',
                title: 'Fighting With My Family',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/y5c3vacx',
                title: 'Alita: Battle Angel',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/y5nkyfy8',
                title: 'Dark Phoenix',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/y5v8udku',
                title: 'Aladdin',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/yybu4u5o',
                title: 'Glass',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            },
            {
                url: 'https://tinyurl.com/yxtrztke',
                title: 'Fighting With My Family',
                tips: {
                    title_tip: 'Lipsum Dolor',
                    rating: '4',
                    director: 'Lizha James, Bang Entretenimento'
                },
            }
        ]
    };

    openMovieDetail = () => {
        this.props.history.push('/movie_detail')
    };

    showPopularGrid = () => {
        this.props.history.push('/popular/all')
    };

    render() {

        console.log(this.props);

        return (
            <div className='popular-movies'>
                <Col lg={12} md={12} sm={3}>

                    <div className="section-header-holder">

                        <div className='section-header'>
                            <h3> Popular </h3>
                        </div>

                        <div className='section-header-more'>
                            <h6 onClick={this.showPopularGrid}>
                                View More
                            </h6>
                        </div>

                    </div>

                    <div className='movies-row'
                        // onClick={this.openMovieDetail}
                    >
                        {
                            this.state.items.splice(0, 7).map((movie, position) => {

                                console.log(movie.tips);

                                return <MovieCard
                                    key={position}
                                    title={movie.title}
                                    url={movie.url}
                                    tip={movie.tips}
                                />
                            })
                        }
                    </div>
                </Col>
            </div>
        );
    }
}

export default PopularMoviesSub;