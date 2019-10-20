import React, { Component } from 'react';
import '../../styles/event.css';
export default class Event extends Component {
    render() {
        return ( 
        <div className="event">
            <div className="event-desc">
                {this.props.description}
            </div>
            <div className="event-time">
                {this.props.time}
            </div>
        </div>   
        )
    }
}
