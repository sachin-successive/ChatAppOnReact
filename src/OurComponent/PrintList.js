import React, { Component } from 'react';  
import {ListGroup} from 'react-bootstrap';

class PrintList extends Component{

	render(){

		var str = <ListGroup.Item as="li" key={this.props.data.name}>{this.props.data.name}</ListGroup.Item>;
		return str
	}



}

export default PrintList