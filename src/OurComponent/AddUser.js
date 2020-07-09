import React, { Component } from 'react'  

class AddUser extends Component{

	constructor(){
		super()
		this.state ={
			name:'',
			mobile:''
		}

		this.FormChange = this.FormChange.bind(this)
		this.FormSubmit = this.FormSubmit.bind(this)	
	}


	FormChange(event){
		const target = event.target;
		this.setState({
			[target.name]:target.value
		})
		
		
	}


	FormSubmit(event){
		const target = event.target;
		alert('Form Submited : '+this.state.name+' '+this.state.mobile)
		event.preventDefault()  
	}


	render(){

		var form = 
				<form onSubmit={this.FormSubmit}>
					<label>Name </label><br/>
					<input type="text" name="name" id="name" placeholder="Enter your name" onChange={this.FormChange}/><br/>
					<label>Mobile </label><br/>
					<input type="text" name="mobile" id="mobile" placeholder="Enter your mobile no." onChange={this.FormChange}/><br/><br/>
					<input type="submit" value="Add"/>
				</form>

		return(form)
	}
}

export default AddUser  