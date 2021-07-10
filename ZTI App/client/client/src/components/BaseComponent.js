import React from 'react'
//import { BrowserRouter as Link, Router, Switch, Route, Redirect } from "react-router-dom";
import {withRouter} from 'react-router-dom';

class BaseComponent extends React.Component{
    constructor(props){
        super(props);

    }
    

    render(){
        return(
        <div>
            <h1> Hello! </h1>
            <form action="http://localhost:3000/auctions">
                <input type="submit" value="all auctions" />
            </form>
            <form action="http://localhost:3000/AddAuction">
                <input type="submit" value="AddAuction" />
            </form>
            <form action="http://localhost:3000/BuyProduct">
                <input type="submit" value="Order Product" />
            </form>
            <form action="http://localhost:3000/">
                        <input type="submit" value="logout" />
            </form>
        </div>
        )
    }
}

export default withRouter(BaseComponent)