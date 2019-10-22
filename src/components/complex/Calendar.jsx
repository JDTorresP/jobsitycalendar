import React, { Component } from 'react'
import WeekDays from '../basic/WeekDays.jsx';
import Day from '../basic/Day.jsx';
import '../../styles/calendar.css';
import AddButton from '../basic/AddButton.jsx';

export default class Calendar extends Component {
	constructor(props) {
        super(props);
        this.state = {
           data:[]
        };
        this.addNewEvent=this.addNewEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
      }
	componentDidMount(){
		this.getCurrentMonth();
	}
	getCurrentMonth(){
		let arr=[];
		let date = new Date();
		let numDaysPast = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
		let numDays = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
		var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
		let ctn=0;
		let week=[];
		for(let i=0; i<firstDay; i++){
			let val = numDaysPast-firstDay+i+1;
			let data= {events:[],current:false,val:val};
			week.push(data);
			ctn++;
		}
		for(let i=1; i<numDays+1; i++){
			if(ctn===7){
				arr.push(week);
				week=[];
				ctn=0;
			}
			let data= {events:[],current:true,val:i};
			week.push(data);
			ctn++;
		}
		let cn=1;
		for(let i=arr.length*7; i<35; i++){
			if(ctn===7){
				arr.push(week);
				week=[];
				ctn=0;
			}
			let data= {events:[],current:false,val:cn};
			week.push(data);
			ctn++;
			cn++;
		}
		arr[3][3].events.push({
			name:"Test",
			date:"10-10-2019",
			description:"test reminder",
			city:"Miami",
			color:"#fff"
		})

		this.setState({data:arr});
	}
	deleteEvent(name,dia){
	   let newData = this.state.data.map((el,i)=>{
		   el.map((elm,j)=>{
			let evnt=[];
			   if(elm.val===dia){
				evnt=elm.events.filter((evnt,k)=>{
					return evnt.name!== name
				});
				elm.events=evnt;
			   }
			   return elm;
		   })
		   return el;
	   })
	   this.setState({data:newData})
    }
    addNewEvent(data){
		let day= data.date.split("-");
		let dia =parseInt(day[2], 10);
		let newData = this.state.data.map((el,i)=>{
			el.map((elm,j)=>{
				if(elm.val===dia &&elm.current){
					
				 elm.events.push(data);
				}
				return elm;
			})
			return el;
		})
		this.setState({data:newData});

    }
	getDays(){
		let d = this.state.data.map((el,i)=>{
			return <ul key={i} className="days">
				{el.map((da,j)=>{
				if(j===0||j===6){
					return	<Day key={j} li_class="day weekends_bg" div_class="date weekends_blue"  data={da} deleteEvent={this.deleteEvent}/>
				}else{
					return	<Day key={j} li_class="day" div_class="date" data={da} deleteEvent={this.deleteEvent}/>
				}
			})}
			</ul>
		});
		return d;
	}
	
    render() {
		//console.log(this.state.data);
		let days = <div>Rendering days...</div>
		if(this.state.data.length >0){
			days = this.getDays();
		}
		
		
        return (
            <div>
				<AddButton addEvent={this.addNewEvent}/>
            <div id="calendar-wrap">
    		<div id="calendar">
    			<WeekDays/>
				<div>
				{days}
				</div>
    		</div>
    	</div>
            </div>
        )
    }
}
