import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Plyr from 'react-plyr';

import '../../styles/modals.css';

class VideoModal extends Component {

    closeModal = e => {
        this.props.toggle && this.props.toggle(e)
    };

    render() {

        if (this.props.show) {
            return (
                <div className='modal-content'>
                    <div className='custom-modal-header'>
                        <button onClick={(e) => {
                            this.closeModal(e)
                        }}>
                            &#8592;
                        </button>
                        <h3>Captain America: Civil War</h3>
                    </div>

                    <div className="custom-modal-body">
                        {/*<Plyr*/}
                            {/*autoplay*/}
                            {/*type='youtube'*/}
                            {/*videoId='RqQGUJK7Na4'*/}
                        {/*/>*/}
                        <video width={window.innerWidth} height={window.innerHeight}>
                            <source src="https://youtu.be/RqQGUJK7Na4" type="video/mp4"/>
                        </video>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
}

VideoModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default VideoModal;