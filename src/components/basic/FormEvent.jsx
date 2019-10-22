import React, { Component } from 'react';
import '../../styles/form.css';
import { GithubPicker } from 'react-color';
import axios from 'axios';
export default class FormEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Bogota",
            date: "",
            remind:"",
            name:"",
            wicon:"",
            wdesc:"",
            time:"",
            col:"#009aaf",
            

            errorName:'',
            errorRemind:'',
            errorCity:'',
            errorDate:'',
            errorGeneral:'',
        };
        this.handleCity = this.handleCity.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemind = this.handleRemind.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleColor = this.handleColor.bind(this);
      }
      

      bindApiData(e){
        let key=process.env.REACT_APP_WT;
        let day = new Date(e.target.value);
        let firstday = new Date();
        firstday.setDate(day.getDate()+1);
        let tomorrow = new Date();
        tomorrow.setDate(firstday.getDate()+1);
        let URL = "https://api.openweathermap.org/data/2.5/forecast?q="+this.state.city+",us&APPID="+key;
        axios.get(URL, {
            params: {
                forecast: {
                    time:{
                        from:firstday,
                        to:tomorrow
                    }
                }
            }
          })
        .then(response => {
            this.setState({data:response.data});
            var icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
            var wdesc = response.data.list[3].weather[0].description;
            this.setState({wicon:icon,wdesc:wdesc});
        })
        .catch((error) => {
            console.log('error ' + error + error.message);
        });
    }
      validateAll(){
        let co=false;
        if(this.state.name===""){
            this.setState({errorName:'*** Please set a name for the record ***'});
            co = true;
        }else{
            this.setState({errorName:""});
        }
        if(this.state.city===""){
            this.setState({errorCity:'*** Incomplete field ***'});
            co = true;
        }else{
            this.setState({errorCity:""});
        }
        if (this.state.date===""|| this.state.time===""){
            this.setState({errorDate:'*** Please select a valid date and time ***'});
            co = true;
        }else{
            this.setState({errorDate:''});
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
    handleTime(e){
        this.setState({
            time:e.target.value
        })
    };
    handleName(e){
        this.setState({
            name:e.target.value
        })
    };
    handleRemind(e){
        this.setState({
            remind:e.target.value
        })
    };
    handleColor(color, event){   
        this.setState({
            background: color.hex,
            col:color.hex
        })
    }
   
    handleSubmit(e){
        // {
		// 	name:"test",
		// 	date:"hoy",
		// 	description:"aver",
		// 	city:"acuya"
		// }
        e.preventDefault();
        if (!this.validateAll()){
            var data = {
                name:this.state.name,
                city:this.state.city,
                date:this.state.date,
                description:this.state.remind,
                time:this.state.time,
                color:this.state.col
            }; 
             this.props.addEvent(data);  
             this.props.closeModal();
        }
    }

    render() {
        return (
            <form className="contenedor_form">
            <h1 className="titulo_form">Add Reminder</h1>
                <fieldset className="contenedor_fieldset">
                    <legend className="legend"><span className="number">1</span> City / Date</legend>
                    <label className="label" htmlFor="name">Recordatory Name:</label>
                    <input className="input_form" type="text" id="name" name="rec_name" maxLength="20" required onChange={this.handleName}/>
                    <label className="label" htmlFor="city">City:</label>
                    <input className="input_form" type="text" id="city" name="user_city" maxLength="20" required onChange={this.handleCity}/>
                    <div className="error">{this.state.errorCity}</div>
                    <label className="label" htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date" required onChange={this.handleDate} onInput={(e)=>this.bindApiData(e)}></input>
                    <input type="time" name="time" id="time" required onChange={this.handleTime}></input>
                    {typeof this.state.wicon !=="undefined" &&this.state.wicon !==""?
                        <div>
                             <label className="label" htmlFor="date">Weather Forecast:</label>
                            <img className="icon" alt="weather" src={this.state.wicon}/>
                            <h4>{this.state.wdesc}</h4>
                        </div>:<div></div>}
                    
                    <div className="error">{this.state.errorDate}</div>
                </fieldset>
                <fieldset className="contenedor_fieldset">
                    <legend className="legend"><span className="number">2</span>Description of your reminder</legend>
                    <textarea id="mac" name="mac_details" maxLength="30" onChange={this.handleRemind} ></textarea>
                    <div className="error">{this.state.errorRemind}</div>
                    <label className="label" htmlFor="colorPicker">Choose a Color:</label>
                    <GithubPicker onChangeComplete={this.handleColor }/>
                </fieldset>
                <div className="error">{this.state.errorGeneral}</div>
                <button className="boton_submit" onClick={this.handleSubmit}>Add reminder</button>
            </form>
        )
    }
}
