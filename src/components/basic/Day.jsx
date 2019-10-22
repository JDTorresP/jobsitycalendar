import React from 'react';
import Event from './Event';
import '../../styles/day.css';
export default function Day (props) {
        let events = props.data.events;
        let evnt =<div></div>;
        if(events.length>0){
            evnt = events.map((e,i)=>{
                return <Event key={i} elm={e} day={props.data.val} deleteEvent={props.deleteEvent}/>   
            },this);
        }
        let cl =props.div_class;
        if(!props.data.current){
            cl ="date weekends_bg";
        }
        return (<div>
            <div>
                <li className={props.li_class}>
                <div className={cl}>{props.data.val}</div> 
                <div className="events">
                    {evnt}
                </div>	
    	        </li>
            </div>
        </div>     
        )
    
}

