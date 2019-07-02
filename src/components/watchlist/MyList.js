import React, {Component} from 'react';

import {Col} from 'reactstrap';
import Items from "./Items";

import '../../styles/watch_list.css';

class MyList extends Component {

    state = {
        watch: [
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            },
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            },
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            },
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            },
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            },
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            },
            {
                title: 'Sex Education',
                url: 'https://tinyurl.com/y69d2j6z'
            }
        ]
    }

    openWatchList = () => {
        this.props.history.push('/my-watch-list');
    };

    render() {

        return (
            <div className='my-list'>
                <Col lg={12} md={12} sm={3}>
                    <h3 className='section-title'>
                        My List
                    </h3>
                    <div onClick={this.openWatchList} className='my-watches'>
                        {
                            this.state.watch.splice(0, 5)
                                .map((item, index) => {
                                    return <Items
                                        key={index}
                                        item={item}
                                    />
                                })
                        }
                    </div>
                </Col>
            </div>
        );
    }
}

export default MyList;