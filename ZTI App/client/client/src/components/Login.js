import React from 'react';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={login:'', pass:''}
    }
    initialState = {
        login:'', pass:''
     }

    LoginChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitLogin= (event) => {
        event.preventDefault();
        const usr = {
            login: this.state.login,
            pass: this.state.pass
        }
        //console.log(JSON.stringify(usr))
        axios.post("http://localhost:8085/api/login", usr).then(res => { 
            this.setState(this.initialState);
            let response = res.data; 
            if( response == 0){
                alert("Bad login or password");
                document.getElementById('loginDiv').innerHTML = '<form action="http://localhost:3000/"> <input type="submit" value="home" /> </form>'
            }
            else if(response == 2){
                alert("User logged!");
                document.getElementById('loginDiv').innerHTML = '<form action="http://localhost:3000/base"> <input type="submit" value="navigate to shop" /> </form>'
            }
            else{
                alert("Admin logged!");
                document.getElementById('loginDiv').innerHTML = '<form action="http://localhost:3000/adminBase"> <input type="submit" value="navigate to admin base" /> </form>';

            }

        });   
     
    }

    render(){
        return(
        <div id = "loginDiv">
        <Card>
            <Card.Header>Login form</Card.Header>
            <Card.Body>
            <Form onSubmit={this.submitLogin} id="LoginId">
            <Form.Control required autoComplete="off"
                          type = "text" placeholder="login" name="login" value={this.state.login}
                          onChange={this.LoginChange}
                         ></Form.Control>
            <Form.Control required autoComplete="off" type = "password"  placeholder="password" name="pass" value={this.state.pass}  onChange={this.LoginChange}></Form.Control>
            <Button variant="success" type="submit">Submit</Button>
            </Form>
            </Card.Body>
        </Card>
        </div>)
    }

}

export default Login