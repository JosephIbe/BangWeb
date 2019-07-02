import React, {Component} from 'react';

import {
    Col,
    Button
} from 'reactstrap';

import '../../styles/home_content.css'

class NowTrending extends Component {

    render() {

        return (

            <Col className='now-trending'>

                <div className='hero-video-secondary-img'/>

                <div className='trending-desc'>
                    <h3 className='section-title'>Now Trending on StrongLiv</h3>
                    <p className='trending-title-primary'>
                        Mowgli: Legend Of The Jungle
                    </p>

                    <div className="actions-row">
                        <Button className='action-btn'>
                            <i class="fas fa-play"></i> &nbsp;
                            Play
                        </Button>

                        <Button className='action-btn pr-3'>
                            <i class="fas fa-plus"></i> &nbsp;
                            My List
                        </Button>
                    </div>

                    <p>A human child raised by wolves
                        must face off against a menacing tiger
                        named Shere Khan, as well as his own origins.</p>

                    <p className='badge badge-secondary tag-action'>Action</p>
                    <p className='badge badge-secondary tag-sci-fi'>Sci-Fi</p>
                    <p className='badge badge-secondary tag-strategy'>Strategy</p>

                </div>

            </Col>

        );
    }
}

export default NowTrending;