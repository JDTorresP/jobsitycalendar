import React from 'react';
import '../../styles/event.css';
export default function Event(props){
    var style = {
        background: props.elm.color,
      };
  
        return ( 
        <div className="event" style={style}>
            <div className="wrap_eventData">
                <div className="evn_btns"><i className='far fa-edit edit_btn'></i>
                    <i className='fas fa-trash-alt dlt_btn' onClick={()=>{props.deleteEvent(props.elm.name,props.day)}} ></i>
                </div>
                <div className="evn_titles">
                    <div className="event-name">
                        {props.elm.name}
                    </div>
                    <div className="event-time">
                        {props.elm.date}
                    </div>
                    <div className="event-time">
                        {props.elm.time}
                    </div>
                </div> 
                <div className="event-desc">
                    {props.elm.description}
                </div>
            </div>
        </div>   
        )
}
