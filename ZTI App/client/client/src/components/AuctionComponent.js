import React from 'react'
import AuctionService from '../services/AuctionService';
//import {Card} from 'react-bootstrap';

class UserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auctions:[]
        }
    }

    componentDidMount(){
        AuctionService.getAuctions().then( (res) => {
            this.setState({auctions: res.data})
        });
    }
    render(){
        return(<div>
            <h1> All auctions: </h1>
            {this.state.auctions.map( auction => <div> {auction.id} {auction.name} {auction.price} {auction.owner_login} </div> )}
        </div>)
    }
    
}
export default UserComponent