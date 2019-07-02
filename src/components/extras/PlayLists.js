import React from 'react';
import PropTypes from 'prop-types';

import CivilWarTrailer from '../../assets/civil_war.jpg';

import '../../styles/movie_detail.css';

const PlayLists = props => {

    return (
        <div className="trailer_items">

            <img src={CivilWarTrailer} alt='Trailer Backdrop' className='trailer_backdrop'/>

            <div className="trailer_meta">
                <h3>{props.trailer_title}</h3>

                <h4 className="duration_meta">
                    {props.trailer_chapter_part}
                    &nbsp;|&nbsp;
                    {props.trailer_duration}
                </h4>
            </div>

        </div>
    );

};

PlayLists.propTypes = {
    trailer_backdrop: PropTypes.string.isRequired,
    trailer_title: PropTypes.string.isRequired,
    trailer_chapter_part: PropTypes.string.isRequired,
    trailer_duration: PropTypes.string.isRequired
};

export default PlayLists;