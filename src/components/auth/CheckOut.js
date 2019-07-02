import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CheckOut extends Component {

    close = e => {
        this.props.toggle && this.props.toggle(e)
    };

    render() {
        if (this.props.show){
            return (
                <div className='modal-content'>
                    <div className='custom-modal-header'>
                        <button onClick={(e) => {
                            this.close(e)
                        }}>
                            &#8592;
                        </button>
                    </div>

                    <div className="custom-modal-body">
                        <h3 className='text-white'>Modal Payment</h3>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
}

CheckOut.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default CheckOut;