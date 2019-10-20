import React, { Component } from 'react'
import WeekDays from '../basic/WeekDays.jsx';
import Event from '../basic/Event.jsx';
import Day from '../basic/Day.jsx';
import '../../styles/calendar.css';

export default class Calendar extends Component {
	componentDidMount(){
		console.log(this.getYear());
		this.getFirstLastDayOfMonth();
	}
	getYear(){
		var date = new Date();
		var data = {};
		console.log("full year",date.getFullYear());
		for (var i = 0; i < 10; i++) {
			data[date.getFullYear() + i] = {};
			for (var j = 0; j < 12; j++) {
			data[date.getFullYear() + i][j + 1] = {};
			}
		}
		return data;
	}
	getFirstLastDayOfMonth(){
		var date = new Date();
		var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
		var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
		console.log("primer dia y ultimo:",firstDay,lastDay)
	}
	
    render() {
        return (
            <div>
            <div id="calendar-wrap">
    		<div id="calendar">
    			<WeekDays/>
    			<ul class="days">
                    <Day li_class="day weekends_bg" div_class="date weekends_bg" value={30}/>
    				<li class="day">
    					<div class="date weekends_bg">31</div>  					
    				</li>
    				<li class="day">
    					<div class="date">1</div>  
    				</li>
    				<li class="day ">
    					<div class="date">2</div>  
						<Event description ="JobSity Challenge" time={"1:00pm to 3:00pm"}/>     					
    				</li>
    				<li class="day ">
    					<div class="date">3</div>    					
    				</li>
    				<li class="day">
    					<div class="date">4</div>    					
    				</li>
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">5</div>   					
    				</li>
    			</ul>

    			<ul class="days">
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">6</div> 					
    				</li>
    				<li class="day">
    					<div class="date">7</div>    					
    				</li>
    				<li class="day">
    					<div class="date">8</div>    					
    				</li>
    				<li class="day">
    					<div class="date">9</div>    					
    				</li>
    				<li class="day">
    					<div class="date ">10</div>    					
    				</li>
    				<li class="day">
    					<div class="date">11</div>    					
    				</li>
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">12</div>    					
    				</li>
    			</ul>

    			<ul class="days">
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">13</div>    					
    				</li>
    				<li class="day">
    					<div class="date">14</div>    					
    				</li>
    				<li class="day">
    					<div class="date">15</div>    					
    				</li>
    				<li class="day">
    					<div class="date">16</div>    					
    				</li>
    				<li class="day">
    					<div class="date">17</div>    					
    				</li>
    				<li class="day">
    					<div class="date">18</div>    					
    				</li>
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">19</div>    					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">20</div>    					
    				</li>
    				<li class="day">
    					<div class="date">21</div>    					
    				</li>
    				<li class="day">
    					<div class="date">22</div>    					
    				</li>
    				<li class="day">
    					<div class="date">23</div>    					
    				</li>
    				<li class="day">
    					<div class="date">24</div>    					
    				</li>
    				<li class="day">
    					<div class="date">25</div>  					
    				</li>
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">26</div>    					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day weekends_bg">
    					<div class="date weekends_blue">27</div>    					
    				</li>
    				<li class="day">
    					<div class="date">28</div> 					
    				</li>
    				<li class="day">
    					<div class="date">29</div>    					
    				</li>
    				<li class="day">
    					<div class="date">30</div>    					
    				</li>
    				<li class="day">
    					<div class="date">31</div>    					
    				</li>
    				<li class="day">
    					<div class="date weekends_bg">1</div>    					
    				</li>
    				<li class="day weekends_bg">
    					<div class="date weekends_bg">2</div>    					
    				</li>
    			</ul>

    		</div>
    	</div>
            </div>
        )
    }
}
