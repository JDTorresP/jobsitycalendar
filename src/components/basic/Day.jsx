import React, { Component } from 'react';
import Event from './Event';
import Form from './Form';
import '../../styles/day.css';

import Modal from 'react-responsive-modal';

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events:[],
            open: true
        };
        this.addNewEvent=this.addNewEvent.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
      }

    onOpenModal = () => {
      this.setState({ open: true });
    };

    onCloseModal  () {
      this.setState({ open: false });
    };

    addNewEvent(){
        let e ={
            description:"JobSity Challenge",
            time:"1:00pm to 3:00pm"
        }
        let ar=this.state.events;
        ar.push(e);
        this.setState({open:false});
        this.setState({events:ar})
    }
    render() {
        let { open,events } = this.state;
        console.log("OPEN",open);
        let evnt = events.map((e,i)=>{
            return <Event key={i} description ={e.description} time={e.time}/>   
        },this);
        return (
            <div onClick={this.onOpenModal}>
                <li className={this.props.li_class}>
                <div className={this.props.div_class}>{this.props.value}</div> 
                <div className="events">
                    {evnt}
                </div>	
    	        </li>
                <Modal open={this.state.open} onClose={this.onCloseModal} center closeOnEsc={true}focusTrapped={false} showCloseIcon={false}>
                    <Form/>
                </Modal>
            </div>
            
        )
    }
}

