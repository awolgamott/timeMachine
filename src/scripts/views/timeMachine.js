import React from 'react'

var TimeMachine = React.createClass({
	render: function(){
		return (
			<div className='time-machine' >
				<Dashboard />
			</div>
		)
	}
})

var Dashboard = React.createClass({
	forward: function(){
		this.setState({
			direction: 'forward',
			howFast: .9
		})
	},
	stop: function(){
		this.setState({
			direction: 'stopped',
			numSpeed: 1000
		})
	},
	backward: function(){
		this.setState({
			direction: 'backward',
			howFast: .9
		})
	},
	rate: function(){
		var change = 0
		if (this.state.direction === 'forward'){
			change = 1
		}
		else if (this.state.direction === 'backward'){
			change = -1
		}
		this.setState({
			year: this.state.year + change,
			acceleration: this.state.rate * this.state.numSpeed
		})
		setTimeout(this.rate, this.acceleration)
	},
	componentDidMount: function(){
		this.rate()
	},

	getInitialState: function(){
		return {
			year: 2017,
			direction: 'stopped',
			numSpeed: 1000,
			howFast: 1
		}
	},
	render: function() {

		var backwardButtonClasses = "btn btn-lg";
		if (this.state.direction === 'backward'){
			backwardButtonClasses += " active"
		}

		var stopButtonClasses = "btn btn-lg";
		if (this.state.direction === 'stopped'){
			stopButtonClasses += " active"
		}

		var forwardButtonClasses = "btn btn-lg";
		if (this.state.direction === 'forward'){
			forwardButtonClasses += " active"
		}

		return (
			<div className = 'dashboard'>
				<h1>{this.state.year}</h1>
					<div className = 'buttons'>
						<button 
							className = {backwardButtonClasses}
							onClick = {this.backward}
							value = 'backward'>BACKWARD</button>
					
						<button 
							className = {stopButtonClasses}
							onClick = {this.stop}
							value = 'stopped'>STOP</button>
					
						<button 
							className = {forwardButtonClasses}
							onClick = {this.forward}
							value = 'forward'>FORWARD</button>
					</div>	
				</div>
		)
	}
})

export default TimeMachine