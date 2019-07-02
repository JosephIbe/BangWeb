import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';

import HomeNav from './HomeNav';
import Footer from "../extras/Footer";

import PopularMoviesSub from "../popular/PopularMovies";
import DramaSub from "../drama/Drama";
import DocumentariesSub from "../documentaries/Documentaries";

import '../../styles/home_content.css'

class Home extends Component {

    state = {
        isFavorite: false,
        items: [
            {
                url: 'https://tinyurl.com/yyjnex4c',
                title: 'Nikki Reed'
            },
            {
                url: 'https://tinyurl.com/y5qlcdsx',
                title: 'Erin Richards'
            },
            {
                url: 'https://tinyurl.com/yy3ox7cq',
                title: 'Sasha Alexander'
            },
            {
                url: 'https://tinyurl.com/yyazflnh',
                title: 'Paige Turco'
            }
        ]
    };

    render() {
        return (
            <Fragment>

                <HomeNav/>

                {/* Hero Video */}
                <div className='hero-video'>
                    <div className="meta-desc">
                        <div className="actions-row">
                            <Button className='action-btn'>
                                <i class="fas fa-play"></i> &nbsp;
                                Play
                            </Button>

                            <Button className='action-btn'>
                                <i class="fas fa-plus"></i> &nbsp;
                                My List
                            </Button>
                        </div>
                        <h3>Avengers: EndGame</h3>
                        <h6>Robert Downey Jr, Chris Evans, Chris Hemsworth</h6>
                        <div className='justify-content-sm-center genre-tags'>
                            <p className='badge badge-secondary tag-action'>Action</p>
                            <p className='badge badge-secondary tag-sci-fi'>Sci-Fi</p>
                            <p className='badge badge-secondary tag-strategy'>Strategy</p>
                        </div>
                    </div>
                </div>

                <section className='home-content'>

                    {/*<ToolTip className='mt-5'/>*/}

                    {/*<MyList {...this.props}/>*/}

                    {/*<CarouselSample/>*/}

                    <PopularMoviesSub {...this.props}/>

                    {/*<NowTrendingSub {...this.props}/>*/}

                    <DramaSub {...this.props}/>

                    <DocumentariesSub {...this.props}/>

                    {/*<SlideCarousel/>*/}

                </section>

                {/*<br/>*/}

                <Footer/>

            </Fragment>

        );

    }
}

export default Home;
