import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

import HomeNav from './HomeNav';
import BDrop from '../../assets/civil_war.jpg';
import VideoModal from '../extras/VideoModal';
import Footer from "../extras/Footer";

import PlayLists from "../extras/PlayLists";

import '../../styles/movie_detail.css';
import VideoPlayer from "../extras/VideoPlayer";

class MovieDetails extends Component {

    state = {
        isVideoModalOpen: false,
        vidSrc: `https://www.youtube.com/watch?v=Qk3yxQIlRC0&list=RDzlla-AZhYeA&index=26`,
        src2: 'https://youtu.be/RqQGUJK7Na4',
        trailers: [
            {
                trailer_backdrop: 'https://tinyurl.com/y5nkyfy8',
                trailer_title: 'Episode 1',
                trailer_chapter_part: 'Part 1',
                trailer_duration: '14 min'
            },
            {
                trailer_backdrop: '',
                trailer_title: 'Episode 2',
                trailer_chapter_part: 'Part 2',
                trailer_duration: '12 min'
            },
            {
                trailer_backdrop: '',
                trailer_title: 'Episode 3',
                trailer_chapter_part: 'Part 3',
                trailer_duration: '8 min'
            },
            {
                trailer_backdrop: '',
                trailer_title: 'Episode 4',
                trailer_chapter_part: 'Part 4',
                trailer_duration: '4 min'
            }
        ]
    };

    render() {

        return (
            <div>
                <HomeNav/>

                <div className='movie_detail pb-5'>

                    <div className='detail_backdrop'>

                        <div className='player_wrapper'>

                            <div className='vid_player_holder'>
                                <VideoPlayer/>

                                <div className="desc_ex">
                                    <h2>Sample Title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi atque beatae dolorum excepturi fuga harum,
                                        hic laudantium maxime non pariatur, placeat sunt, veritatis vitae?
                                        Aliquam ducimus ipsum magni nobis vel.</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default MovieDetails;