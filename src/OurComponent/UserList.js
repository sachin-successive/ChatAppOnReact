import React, { Component } from 'react';
import {ListGroup,Button} from 'react-bootstrap'  

import PrintList from './PrintList'

class UserList extends Component { 

	constructor(){

		super();
		this.state ={
			state_code:false,
			data :[
				{
					"name":"Akshay Kumar"
				},
				{
					"name":"Somanshu Dhingra"
				},
				{
					"name":"Sheo Shankar"
				},
				{
					"name":"Sahil Chadha"
				}
			]
		}

		this.btn_click = this.btnClickFunc.bind(this);

	}


	btnClickFunc(){
		this.setState({state_code:!this.state.state_code});
	}

	render(){

		var s =   this.state.state_code ? (<Button variant="primary" onClick={this.btn_click}>Go</Button>) : (<Button variant="primary" onClick={this.btn_click}>Go 21</Button>) 
				
	 	var str =
	 		<div>
	 			<ListGroup as="ul">
	 				<ListGroup.Item as="li" active>
			    		User List
			  		</ListGroup.Item>
			  		{this.state.data.map((item) => <PrintList data = {item} />)}
				</ListGroup>
				<div><br/>
					{s}
				</div>
			</div>
				

		return (str); 

	}

}


export default UserList
