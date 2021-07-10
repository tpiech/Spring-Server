import React from 'react';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class AddAuction extends React.Component{

    constructor(props){
        super(props);
        this.state={name:'', owner_login:'', price:0 , pass:''}
        //this.UserChange = this.UserChange.bind(this);
        //this.submitUser = this.submitUser.bind(this);
    }
    submitAuction= (event) => {
        //alert(this.state.login);
        event.preventDefault();
        const usr = {
            name: this.state.name,
            price: this.state.price,
            owner_login: this.state.owner_login,
            pass: this.state.pass
        }
        //console.log(JSON.stringify(usr))
        axios.post("http://localhost:8085/api/addAuction", usr).then(res => { 
            this.setState(this.initialState);
            alert(res.data);
        });
        
    }
    initialState = {
       name:'', owner_login:'', price:0 , pass:''
    }
    AuctionChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
             <Card>
                 <Card.Header>AddAuction</Card.Header>
                 <Card.Body>
                     <Form onSubmit={this.submitAuction} id="AddAuctionId">
                        <Form.Control required autoComplete="off" type = "text" placeholder="name" name="name" value={this.state.name} onChange={this.AuctionChange}></Form.Control>
                        <Form.Control required autoComplete="off" type = "number" placeholder="price" maxlength="4" name="price" value={this.state.price} onChange={this.AuctionChange}></Form.Control>
                         <Form.Control required autoComplete="off" type = "text" placeholder="login for authentication" name="owner_login" value={this.state.owner_login} onChange={this.AuctionChange}></Form.Control>
                         <Form.Control required autoComplete="off" type = "password"  placeholder="password for authentication" name="pass" value={this.state.pass}  onChange={this.AuctionChange}></Form.Control>
                         <Button variant="success" type="submit">Submit</Button>
                     </Form>
                 </Card.Body>
             </Card>
        );
    }


}
export default AddAuction