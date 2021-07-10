import React from 'react';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';


class AddOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={id:''}
        //this.UserChange = this.UserChange.bind(this);
        //this.submitUser = this.submitUser.bind(this);
    }

    ProductChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    initialState = {
        id:''
     }
    submitProduct= (event) => {
        //alert(this.state.login);
        event.preventDefault();
        const usr = {
            id: this.state.id,
        }
        //console.log(JSON.stringify(usr))
        axios.post("http://localhost:8085/api/buyProduct", usr).then(res => { 
            this.setState(this.initialState);
            alert(res.data);
        });
    }


    render() {

        return (
             <Card>
                 <Card.Header>AddOrder</Card.Header>
                 <Card.Body>
                     <Form onSubmit={this.submitProduct} id="AddUserId">
                         <Form.Control required autoComplete="off"
                          type = "text" placeholder="id of item" name="id" value={this.state.id}
                          onChange={this.ProductChange}
                         ></Form.Control>
                         <Button variant="success" type="submit">Buy</Button>
                     </Form>
                     <form action="http://localhost:3000/base">
                        <input type="submit" value="home" />
                    </form>
                 </Card.Body>
             </Card>
        );
    }







}

export default AddOrder