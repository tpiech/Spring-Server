import React from 'react';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';


class RemoveUserAndAuctions extends React.Component{
    constructor(props){
        super(props);
        this.state={id:''}
        //this.UserChange = this.UserChange.bind(this);
        //this.submitUser = this.submitUser.bind(this);
    }

    idChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    initialState = {
        id:''
     }
    submitId= (event) => {
        //alert(this.state.login);
        event.preventDefault();
        const usr = {
            id: this.state.id,
        }
        //console.log(JSON.stringify(usr))
        axios.post("http://localhost:8085/api/userRemove", usr).then(res => { 
            this.setState(this.initialState);
            alert(res.data);
        });
    }


    render() {
        return (
             <Card>
                 <Card.Header>Remove User</Card.Header>
                 <Card.Body>
                     <Form onSubmit={this.submitId} id="AddUserId">
                         <Form.Control required autoComplete="off"
                          type = "text" placeholder="id of user to remove" name="id" value={this.state.id}
                          onChange={this.idChange}
                         ></Form.Control>
                         <Button variant="success" type="submit">Remove</Button>
                     </Form>
                     <form action="http://localhost:3000/adminBase">
                        <input type="submit" value="home" />
                    </form>
                 </Card.Body>
             </Card>
        );
    }







}

export default RemoveUserAndAuctions