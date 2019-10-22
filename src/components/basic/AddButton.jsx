import React,{ Component } from 'react';
import FormEvent from './FormEvent.jsx';
import Modal from 'react-responsive-modal';
import '../../styles/addbutton.css';

export default class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened:false
        };
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
      }
      onOpenModal (){
        this.setState({ opened: true });
      };
  
      onCloseModal(){
        this.setState({ opened: false });
      };
    render() {
        return (
            <div>
                 <button id="add" onClick={this.onOpenModal}>+ Add reminder</button>
                <Modal open={this.state.opened} onClose={this.onCloseModal} center >
                    <FormEvent addEvent={this.props.addEvent} closeModal={this.onCloseModal}/>
                </Modal>
            </div>
        )
    }
}

