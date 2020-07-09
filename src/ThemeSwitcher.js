import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'  

import AddUser from './OurComponent/AddUser'  

import AppIntro from './OurComponent/AppIntro' 
import UserMsg from './OurComponent/UserMsg' 
import UserList from './OurComponent/UserList' 

class ThemeSwitcher extends Component{


	render(){

		
		var str = 
			<Container fluid>
				<Row>
					<Col md ={3}><AppIntro/></Col>
					<Col md={3}><UserList/> <br/><AddUser/></Col>
					<Col md><UserMsg/></Col>
				</Row>
			</Container>

		return str  
	}
}




export default ThemeSwitcher 