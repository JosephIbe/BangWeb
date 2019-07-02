import React, {Component} from 'react';
import '../../styles/watch_list.css';

class Items extends Component {

    render() {

        const { url, title} = this.props.item;
        console.log(this.props.history);

        return (
            <div className='watch-list-card-body' >
                <div className='watch-list-card'>
                    <img src={url} className='img-fluid'/>
                    <p>{title}</p>
                </div>
                {/*<div className="watch-list-card-back">*/}
                    {/*<p>I Know Some Idiots Who Need This Here!!!</p>*/}
                    {/*<button className='watch-list-card-remove-btn'>*/}
                        {/*Remove*/}
                    {/*</button>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Items;