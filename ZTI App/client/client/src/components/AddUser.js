import React from 'react';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class AddUser extends React.Component{

    constructor(props){
        super(props);
        this.state={login:'', email:'', pass:''}
        //this.UserChange = this.UserChange.bind(this);
        //this.submitUser = this.submitUser.bind(this);
    }
    submitUser= (event) => {
        //alert(this.state.login);
        event.preventDefault();
        const usr = {
            login: this.state.login,
            email: this.state.email,
            pass: this.state.pass
        }
        //console.log(JSON.stringify(usr))
        axios.post("http://localhost:8085/api/addUser", usr).then(res => { 
            this.setState(this.initialState);
            alert(res.data);
        });
        
    }
    initialState = {
       login:'', email:'', pass:''
    }
    UserChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
             <Card>
                 <Card.Header>AddUser</Card.Header>
                 <Card.Body>
                     <Form onSubmit={this.submitUser} id="AddUserId">

                         <Form.Control required autoComplete="off"
                          type = "text" placeholder="login" name="login" value={this.state.login}
                          onChange={this.UserChange}
                         ></Form.Control>
                         <Form.Control required autoComplete="off" type = "text"  placeholder="email" name="email" value={this.state.email}  onChange={this.UserChange}></Form.Control>
                         <Form.Control required autoComplete="off" type = "password"  placeholder="password" name="pass" value={this.state.pass}  onChange={this.UserChange}></Form.Control>
                         <Button variant="success" type="submit">Submit</Button>
                     </Form>
                     <form action="http://localhost:3000/">
                        <input type="submit" value="home" />
                    </form>
                 </Card.Body>
             </Card>
        );
    }


}
export default AddUser