import React, {Component} from 'react';
import {Button} from 'reactstrap';
// import PropTypes from 'prop-types';

import '../../styles/v_player.css';
import Moti from '../../assets/motigbana_olamide.mp4';

class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.player_container = React.createRef();
        this.viewer = React.createRef();
        // this.video_player = React.createRef();
        this.player_controls = React.createRef();
        this.player_progress = React.createRef();
    }

    togglePlay = () => {
        console.log('Toggle Called');
        if (this.viewer.paused){
            this.viewer.play();
        } else {
            // this.viewer.pause;
        }
    };

    render() {

        return (
            <div>

                <div className='player_container' ref={this.player_container}>

                    <video
                        src={Moti}
                        className='video_player viewer'
                        ref={this.viewer}
                    >
                    </video>

                    <div className="player_controls" ref={this.player_controls}>
                        <div className="player_progress" ref={this.player_progress}>
                            <div className="player_progress_filled">
                            </div>
                        </div>

                        <Button
                            className="player_btn toggle"
                            title='Toggle Button'
                            onClick={()=> this.togglePlay()}
                        >
                            Play
                        </Button>

                        <button data-skip="-10" title='Toggle Button'>RW(-10s)</button>
                        <button data-skip="10" title='Toggle Button'>FW(+10s)</button>

                        <input
                            type="range"
                            name="volume"
                            className='player_slider'
                            min='0'
                            max='1'
                            step='.05'
                        />

                    </div>

                </div>
            </div>
        );
    }
}

export default VideoPlayer;
