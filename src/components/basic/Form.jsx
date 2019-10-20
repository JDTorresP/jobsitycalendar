import React, { Component } from 'react';
import '../../styles/form.css';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            date: '',
            remind:'',

            errorRemind:'',
            errorCity:'',
            errorDate:'',
            errorGeneral:'',
        };
        this.handleCity = this.handleCity.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemind = this.handleRemind.bind(this);
      }

      validateAll(){
        let co=false;
        if(this.state.city===""){
            this.setState({errorCity:'*** Incomplete field ***'});
            co = true;
        }else{
            this.setState({errorCity:''});
        }
        if (this.state.date===""){
            this.setState({errorDate:'*** Please select a valid date ***'});
            co = true;
        }else{
            this.setState({errorDate:''});
            co = true;
        }
        if(this.state.remind===""){
            this.setState({errorRemind:'*** Please write down a description ***'});
            co = true;
        }else{
            this.setState({errorRemind:''});
        }
        if(co){
            this.setState({errorGeneral:'**** Please fill all the fields ****'});
        }else{
            this.setState({errorGeneral:''});
        }
        return co;
    }


    handleCity(e){
        this.setState({
            city:e.target.value
        })
    };
    handleDate(e){
        this.setState({
            date:e.target.value
        })
    };
    handleRemind(e){
        this.setState({
            remind:e.target.value
        })
    };
   
    handleSubmit(e){
        e.preventDefault();
        if (!this.validateAll()){
            var data = {
                
            }; 
            
        }
    }

    render() {
        return (
            <form className="contenedor_form">
            <h1 className="titulo_form">Add Reminder</h1>
                <fieldset className="contenedor_fieldset">
                    <legend className="legend"><span className="number">1</span> City / Date</legend>
                    <label className="label" htmlFor="city">City:</label>
                    <input className="input_form" type="text" id="city" name="user_city" maxLength="20" required onChange={this.handleCity}/>
                    <div className="error">{this.state.errorCity}</div>
                    <label className="label" htmlFor="date">Date:</label>
                    <input type="date" name="dateofbirth" id="dateofbirth" required onChange={this.handleDate}></input>
                    <div className="error">{this.state.errorDate}</div>
                </fieldset>
                <fieldset className="contenedor_fieldset">
                    <legend className="legend"><span className="number">2</span>Description of your reminder</legend>
                    <textarea id="mac" name="mac_details" maxLength="30" onChange={this.handleRemind} ></textarea>
                    <div className="error">{this.state.errorRemind}</div>
                </fieldset>
                <div className="error">{this.state.errorGeneral}</div>
                <button className="boton_submit" onClick={this.handleSubmit}>Add reminder</button>
            </form>
        )
    }
}
