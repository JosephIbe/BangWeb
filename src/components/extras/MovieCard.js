import React, {Component} from 'react';

import '../../styles/movie_card.css';

class MovieCard extends Component {

    render() {

        const { url, title} = this.props;

        return (
            <div className='movie-card-body'>
                <div className='movie-card'>
                    <img src={url} className='img-fluid'/>
                    <p>{title}</p>
                </div>
                {/*<button className='play-movie-btn' />*/}
            </div>
        );
    }
}

export default MovieCard;
