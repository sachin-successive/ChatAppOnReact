import React, { Component } from 'react';  
import logo from '../logo.svg';

class AppIntro extends Component{

	render(){

		var app_intro =
			<div className="App">
		      	<header className="App-header">
		        <img src={logo} className="App-logo" alt="logo" />
		        <p>React Chat APP</p>
		        </header>
	    	</div>

			
		return app_intro;
	}
}

export default AppIntro