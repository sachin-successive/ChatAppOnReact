import React, { Component } from 'react';  
import {Card,Alert} from 'react-bootstrap';

class UserMsg extends Component {  

	render(){

			
		
			var user_inbox =
				<Card>
				  <Card.Header>Sheo Shankar | Chat Box</Card.Header>
				  <Card.Body>
				    <Card.Title></Card.Title>
				    <Card.Text>
						<Alert variant="success">
		    				Hey!
		  				</Alert>
		  				<Alert variant="primary">
		    				Hi, How are you ?
		  				</Alert>
		  				<Alert variant="success">
		    				i am good, What are you doing ?
		  				</Alert>
		  				<Alert variant="primary">
		    				Office staff and what about you ?
		  				</Alert>
					</Card.Text>
				 </Card.Body>
				</Card>


		return (user_inbox )
	}
}


export default UserMsg