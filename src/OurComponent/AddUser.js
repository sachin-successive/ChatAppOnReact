import React, { Component,useState } from 'react'  
import {Button,Modal,Form} from 'react-bootstrap';

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

		return(<ModalForm/>)
	}
}


function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        	
        	<Form>
			  <Form.Group controlId="formBasicEmail">
			    <Form.Label>Name</Form.Label>
			    <Form.Control type="text" placeholder="Enter Name" />
			  </Form.Group>

			  <Form.Group controlId="formBasicPassword">
			    <Form.Label>Mobile No</Form.Label>
			    <Form.Control type="text" placeholder="Enter Mobile" />
			  </Form.Group>
			  
			  <Button variant="primary" type="Save">
			    Submit
			  </Button>
			</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser  	